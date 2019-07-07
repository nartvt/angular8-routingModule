import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { CandeactiveGuard } from 'src/app/_core/guards/candeactive.guard';

const routes: Routes = [
    {
        path: "",
        component: FormComponent,
        children: [
            {
                path: "sign-up",
                component: SignUpComponent,
                canDeactivate: [CandeactiveGuard]
            }, {
                path: "sign-in",
                component: SignInComponent
               
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FormRoutingModule { }
