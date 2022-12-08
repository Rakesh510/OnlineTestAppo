import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { QuizcontentsService } from '../services/quizcontents.service';
@Component({
  selector: 'app-createAccount',
  templateUrl: './createAccount.component.html',
  styleUrls: ['./createAccount.component.css']
})
export class CreateAccountComponent {

  constructor(private _service:QuizcontentsService,private router:Router){}

  onsubmit(form:NgForm)
  {
    this._service.UserPass.push(form.value);
    alert("Account Created Successfully!");
    this.router.navigate(['/']);
  }

}
