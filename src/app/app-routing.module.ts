import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewComponent } from './new/new.component';
import { MyStandaloneComponentComponent } from './my-standalone-component/my-standalone-component.component';

const routes: Routes = [
  // { path: 'report', loadChildren: './reports/routing/reports.module#ReportsModule', canActivate: [NoAuthGuard] },
  { path: 'newcomp', component: NewComponent },
  { path: 'standalone', component: MyStandaloneComponentComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
