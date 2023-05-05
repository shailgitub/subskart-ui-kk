import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SubskartComponent } from './pages/subskart/subskart.component';
import { VenderComponent } from './pages/vendor/vender/vender.component';
import { ItemComponent } from './pages/adminm/item/item.component';
import { AdminComponent } from './pages/adminm/admin/admin.component';
import { CategoryComponent } from './pages/adminm/category/category.component';
import { AddcategoryComponent } from './pages/adminm/addcategory/addcategory.component';
import { UpdatecategoryComponent } from './pages/updatecategory/updatecategory.component';
import { AdditemComponent } from './pages/adminm/additem/additem.component';
import { ItemselectionComponent } from './pages/vendor/itemselection/itemselection.component';
import { DetailedreportComponent } from './pages/vendor/detailedreport/detailedreport.component';
import { ItemssummeryComponent } from './pages/vendor/itemssummery/itemssummery.component';
import { TransactionsComponent } from './pages/vendor/transactions/transactions.component';
import { SummeryreportComponent } from './pages/vendor/summeryreport/summeryreport.component';



const routes: Routes = [
  //{ path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'subskart', component: SubskartComponent },
  { path: 'vender', component: VenderComponent },
  { path: 'item', component: ItemComponent },
  { path: 'admin', component: AdminComponent },
  //{ path: '**', component: LoginComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'addcategory', component: AddcategoryComponent },
  { path: 'updatecategory', component: UpdatecategoryComponent },
  // { path: 'categorylist', component: CategorylistComponent },
  { path: 'additem', component: AdditemComponent },
  { path: 'itemselection', component: ItemselectionComponent },
  { path: 'itemssummery', component: ItemssummeryComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'summeryreport', component: SummeryreportComponent },
  { path: 'detailedreport', component: DetailedreportComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
