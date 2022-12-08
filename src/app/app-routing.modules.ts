import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from "./errorpage/errorpage.component";
import { HomeComponent } from "./home/home.component";
import { CreateAccountComponent } from "./createAccount/createAccount.component";
import { GetstartedComponent } from "./getstarted/getstarted.component";
import { QuizhomeComponent } from "./quizhome/quizhome.component";
import { QuizdisplayComponent } from "./quizdisplay/quizdisplay.component";
import { ReviewComponent } from './review/review.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { ContactUsComponent } from './contactUs/contactUs.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { AboutComponent } from './about/about.component';



const routes: Routes = [

  { path:'',component:HomeComponent},
  { path:'create',component:CreateAccountComponent},
  { path:'about',component:AboutComponent},
  { path:'forget',component:ForgetpassComponent},
  { path:'getstart',component:GetstartedComponent},
  { path:'quizhome',component:QuizhomeComponent},
  { path:'contactus',component:ContactUsComponent},
  { path:'privacy',component:PrivacyComponent},
  { path:'quizdisplay',component:QuizdisplayComponent},
  { path:'review',component:ReviewComponent},
  { path:'**',component:ErrorComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
