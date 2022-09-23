import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { ApplicationUser } from 'src/Models/application-user';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class ApplicationUserService {
  private API_NAME = '/ApplicationUser'; //controller Name in backend
  private BASE_API_URL = 'https://localhost:44350/api';
  
  constructor(private _ApplicationUserService: HttpClient) { }
  

  getBaseApiUrl(methodName: string) {
    return environment.BASE_API_URL + this.API_NAME + '/' + methodName;
  }

  postUser(User:ApplicationUser):Observable<ApplicationUser> {
    debugger
    return this._ApplicationUserService.post<ApplicationUser>(this.getBaseApiUrl('Add'),User);
  }
  GetUserAll():Observable<ApplicationUser>{
    return this._ApplicationUserService.get<ApplicationUser>(this.getBaseApiUrl('GetAll'))
  }
}
