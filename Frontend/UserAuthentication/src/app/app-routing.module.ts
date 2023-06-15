import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular//forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsertableComponent } from './usertable/usertable.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'usertable', component: UsertableComponent },
  { path: 'login', component: LoginComponent },
  { path: 'update', component: RegisterComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
