import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscountComponent } from './discount/discount.component';
import { LoginComponent } from './login/login.component';
import { NoDiscountComponent } from './no-discount/no-discount.component';
import { NoteComponent } from './note/note.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostsComponent } from './posts/posts.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [

  {path: 'users', component:UsersComponent},
  {path: 'posts', component:PostsComponent},
  {path: 'registerpage', component:RegisterComponent},
  {path: 'loginpage', component:LoginComponent},
  {path: 'Notespage', component:NoteComponent},
   {path:'product',component:ProductComponent,
    children:
    [
      {path:'withDiscount',component:DiscountComponent},
      {path:'withOutDiscount',component:NoDiscountComponent}
    ]
  },
   {path: '**' , component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
