import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-builder-form',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './builder-form.html',
  styleUrl: './builder-form.css'
})
export class BuilderForm {
  private fb = inject(FormBuilder);

  protected fbForm = this.fb.group({
    name: [ '', Validators.required ],
    skills: this.fb.array<{
      skill: string
      experience: string
    }>([]),
    place: this.fb.group({
      city: [ '', Validators.required ],
      time: [ '', Validators.required ]
    })
  });

  protected get skills() {
    return this.fbForm.get('skills') as FormArray<FormGroup>;
  }

  protected newSkill(): FormGroup {
    return this.fb.group({
      skill: ['', Validators.required ],
      experience: ['']
    });
  }

  protected addSkill() {
    this.skills.push(this.newSkill());
  }

  protected removeSkill(index: number) {
    this.skills.removeAt(index);
  }

  protected submitHandler() {
    console.log('this.fbForm.value', this.fbForm.value);
  }
}
