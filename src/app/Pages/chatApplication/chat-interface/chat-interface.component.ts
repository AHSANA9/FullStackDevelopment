import { Component, OnInit } from '@angular/core';
import { ApplicationUserService } from 'src/app/AppServices/application-user.service';
import { ApplicationUser } from 'src/Models/application-user';

@Component({
  selector: 'app-chat-interface',
  templateUrl: './chat-interface.component.html',
  styleUrls: ['./chat-interface.component.css']
})
export class ChatInterfaceComponent implements OnInit {
onSelect(_t9: ApplicationUser) {
throw new Error('Method not implemented.');
}

  public Users!:ApplicationUser[]
  constructor(private UserApi:ApplicationUserService) { }

  ngOnInit(): void {
this.UserApi.GetUserAll().subscribe((resp:any)=>{
  //this.Users=JSON.stringify(resp);
  this.Users=resp;
})
  }

}
