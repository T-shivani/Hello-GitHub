import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './Components/home/home.component';
import { ProductsComponent } from './Components/products/products.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { HeaderComponent } from './Components/header/header.component';
import { ProductComponent } from './Components/product/product.component';
import { AuthComponent } from './AuthCom/auth/auth.component';
import { AdminComponent } from './AuthCom/admin/admin.component';
import { LoginComponent } from './AuthCom/login/login.component';
import { FormcComponent } from './Form/formc/formc.component';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    HomeComponent,
    ProductsComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    ProductComponent,
    AuthComponent,
    AdminComponent,
    LoginComponent,
    FormcComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
