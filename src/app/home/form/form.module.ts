import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { FormRoutingModule } from './form-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/_core/material/material.module';


@NgModule({
  declarations: [FormComponent, SignUpComponent, SignInComponent],
  imports: [
    CommonModule, FormRoutingModule, FormsModule,MaterialModule
  ]
})
export class FormModule { }
