import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { QuoteTextComponent } from './components/quote-text/quote-text.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
        {path:'about', component: AboutComponent},
        {path:'contact', component: ContactComponent},
        {path:'home', component: HomeComponent},
        {path:'quote-text', component: QuoteTextComponent},
        {path:'users', component: UserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
