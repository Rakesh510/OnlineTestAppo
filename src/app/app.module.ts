import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.modules';
import { AppComponent } from './app.component';
import { ErrorComponent } from './errorpage/errorpage.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CreateAccountComponent } from './createAccount/createAccount.component';
import { GetstartedComponent } from './getstarted/getstarted.component';
import { QuizhomeComponent } from './quizhome/quizhome.component';
import { QuizdisplayComponent } from './quizdisplay/quizdisplay.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuizcontentsService } from './services/quizcontents.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ReviewComponent } from './review/review.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { ContactUsComponent } from './contactUs/contactUs.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    CreateAccountComponent,
    GetstartedComponent,
    QuizhomeComponent,
    QuizdisplayComponent,
    ReviewComponent,
    PrivacyComponent,
    ForgetpassComponent,
    ContactUsComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [QuizcontentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
