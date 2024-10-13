import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http:HttpClient) { }
  url="https://localhost:44315/api/Account/"

  register(formData:any){

    return this .http.post(this.url+'register',formData)
  }

  login(formData:any){
    return this.http.post(this.url+'Login',formData)
  }

}
