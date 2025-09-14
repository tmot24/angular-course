export interface Var {
  value: number;
  modificator: Modifier;
}

export enum Operation {
  plus = '+',
  minus = '-',
  multiply = '*',
  divide = '/',
}

export enum Modifier {
  none = 'none',
  sin = 'sin',
  cos = 'cos',
  pow = 'pow',
}
