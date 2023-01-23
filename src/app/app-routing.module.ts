import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AdminComponent } from './AuthCom/admin/admin.component';
import { AuthComponent } from './AuthCom/auth/auth.component';
import { ChildComponent } from './child/child.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductComponent } from './Components/product/product.component';
import { ProductsComponent } from './Components/products/products.component';
import { ParentComponent } from './parent/parent.component';
import { LoginComponent } from './AuthCom/login/login.component';
import { FormcComponent } from './Form/formc/formc.component';

const routes: Routes = [
  // {path : 'parent' , component: ParentComponent},
  // {path : 'child' , component: ChildComponent},
  // {path : '' ,component:HeaderComponent},

  // {path:'', redirectTo:'home' , pathMatch:'full'},
  // {path : 'about' , component: AboutComponent},
  // {path : 'home' , component: HomeComponent},
  // {path : 'products' , component: ProductsComponent},
  // {path : 'contact' , component: ContactComponent},
  // {path : 'product/apple' , component: ProductsComponent},
  // {path : 'product/orange' , component: ProductsComponent},
  // {path : 'product/mango' , component: ProductsComponent},
  // {path: '**' , redirectTo:'home'}


  // {path : '' , pathMatch: 'full' , redirectTo:'login'},
  // {path:'', component:LoginComponent},
  // {path : 'auth' , component: AuthComponent},
  // {path: 'admin' , component : AdminComponent , canActivate:[AuthGuard]}

  // {path : 'formc' , component: ParentComponent}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
