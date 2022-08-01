import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProListComponent } from './components/pro-list/pro-list.component';
import { CatListComponent } from './components/cat-list/cat-list.component';
import { CatFormComponent } from './components/cat-form/cat-form.component';
import { ProFormComponent } from './components/pro-form/pro-form.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { Routes,RouterModule } from '@angular/router';

const route : Routes = [
  {path: '',component:WelcomeComponent},
  {path: 'products',component:ProListComponent},
  {path: 'categories',component:CatListComponent},
  {path: 'productform',component:ProFormComponent},
  {path: 'categoryform',component:CatFormComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ProListComponent,
    CatListComponent,
    CatFormComponent,
    ProFormComponent,
    WelcomeComponent,
    ProFormComponent,
    CatFormComponent,
    ProFormComponent,
    CatFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



