import { Component, OnInit } from '@angular/core';
import { ApplicationUserService } from 'src/app/AppServices/application-user.service';
import { ApplicationUser } from 'src/Models/application-user';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public User: ApplicationUser;



  constructor(private _Apiservice: ApplicationUserService) {
    this.User = new ApplicationUser();
  }

  ngOnInit(): void {
  }

  onCreate() {
    debugger
    console.log(this.User);
    this._Apiservice.postUser(this.User).subscribe((resp: any) => {
      
    });
  }
}
