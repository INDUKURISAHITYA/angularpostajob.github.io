import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { NoDataFoundComponent } from './no-data-found/no-data-found.component';

const routes: Routes = [{path:'',component:FormComponent},
{path:'Form',component:FormComponent},
{path:'list',component:ListComponent },
{path:'**',component:NoDataFoundComponent}];

export const routingcomponent =[FormComponent,ListComponent,NoDataFoundComponent]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
