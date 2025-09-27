import { Component, signal, WritableSignal } from '@angular/core';
import { Modifier, Operation, Var } from './calculator-types';

@Component({
  selector: 'app-calculator',
  imports: [],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css'
})
export class Calculator {
  protected operationValues = Object.values(Operation);
  protected modifierValues = Object.values(Modifier);

  protected first = signal<Var>({
    value: 0,
    modificator: Modifier.sin
  });
  protected second = signal<Var>({
    value: 0,
    modificator: Modifier.none
  });
  protected operation = signal<Operation>(Operation.plus);
  protected result = signal(0);

  protected changeModificator({ event, target }: { event: Event; target: WritableSignal<Var> }) {
    const select = event.target as HTMLSelectElement;
    const modificator = select.value as Modifier;

    target.update(prev => ({
      ...prev,
      modificator
    }));
  }

  protected changeValue({ event, target }: { event: Event; target: WritableSignal<Var> }) {
    const input = event.target as HTMLInputElement;
    const value = Number(input.value);

    target.update(prev => ({
      ...prev,
      value
    }));
  }

  protected changeOperation({ event, target }: { event: Event; target: WritableSignal<Operation> }) {
    const input = event.target as HTMLInputElement;
    const value = (input.value) as Operation;

    target.set(value);
  }

  protected calcModifier(value: Var): number {
    switch (value.modificator) {
      case Modifier.none:
        return value.value;
      case Modifier.sin:
        return Math.sin(value.value);
      case Modifier.cos:
        return Math.cos(value.value);
      case Modifier.pow:
        return Math.pow(value.value, 2);
      default:
        return value.modificator satisfies never;
    }
  }

  protected calc() {
    const first = this.first();
    const second = this.second();
    const operation = this.operation();
    switch (operation) {
      case Operation.plus:
        this.result.set(this.calcModifier(first) + this.calcModifier(second));
        break;
      case Operation.minus:
        this.result.set(this.calcModifier(first) - this.calcModifier(second));
        break;
      case Operation.multiply:
        this.result.set(this.calcModifier(first) * this.calcModifier(second));
        break;
      case Operation.divide:
        this.result.set(this.calcModifier(first) / this.calcModifier(second));
        break;
      default:
        return operation satisfies never;
    }
  }
}
