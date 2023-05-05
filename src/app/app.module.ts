import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './header/header.component';
import { SubskartComponent } from './pages/subskart/subskart.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { VenderComponent } from './pages/vendor/vender/vender.component';
import { ItemComponent } from './pages/adminm/item/item.component';
import { AdminComponent } from './pages/adminm/admin/admin.component';
import { FooterComponent } from './footer/footer.component';
//import { AuthInterceptor } from './services/auth.interceptor';
import { CategoryComponent } from './pages/adminm/category/category.component';
import { AddcategoryComponent } from './pages/adminm/addcategory/addcategory.component';
import { UpdatecategoryComponent } from './pages/updatecategory/updatecategory.component';
import { AdditemComponent } from './pages/adminm/additem/additem.component';
import { ItemselectionComponent } from './pages/vendor/itemselection/itemselection.component';
import { ItemssummeryComponent } from './pages/vendor/itemssummery/itemssummery.component';
import { TransactionsComponent } from './pages/vendor/transactions/transactions.component';
import { SummeryreportComponent } from './pages/vendor/summeryreport/summeryreport.component';
import { DetailedreportComponent } from './pages/vendor/detailedreport/detailedreport.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    SubskartComponent,
    VenderComponent,
    ItemComponent,
    AdminComponent,
    FooterComponent,
    CategoryComponent,
    AddcategoryComponent,
    UpdatecategoryComponent,
    AdditemComponent,
    ItemselectionComponent,
    ItemssummeryComponent,
    TransactionsComponent,
    SummeryreportComponent,
    DetailedreportComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  // providers: [{
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: AuthInterceptor,
  //   multi: true
  // }],
  bootstrap: [AppComponent]
})
export class AppModule { }