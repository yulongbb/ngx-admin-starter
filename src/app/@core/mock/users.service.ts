import { of as observableOf, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Contacts, RecentUsers, User, UserData } from '../data/users';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';

@Injectable()
export class UserService extends UserData {

  private httpOptions = {};

  constructor(
    private http: HttpClient,
    private authService: NbAuthService
  ) {
    super();
    this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {
        if (token.isValid()) {
          this.httpOptions = {
            headers: new HttpHeaders({
              'Authorization': 'Bearer '+token.getValue(),
            })
          };
        }
      });
  }




  private time: Date = new Date;

  private users = {
    nick: { name: 'Nick Jones', picture: 'assets/images/nick.png' },
    eva: { name: 'Eva Moor', picture: 'assets/images/eva.png' },
    jack: { name: 'Jack Williams', picture: 'assets/images/jack.png' },
    lee: { name: 'Lee Wong', picture: 'assets/images/lee.png' },
    alan: { name: 'Alan Thompson', picture: 'assets/images/alan.png' },
    kate: { name: 'Kate Martinez', picture: 'assets/images/kate.png' },
  };
  private types = {
    mobile: 'mobile',
    home: 'home',
    work: 'work',
  };
  private contacts: Contacts[] = [
    { user: this.users.nick, type: this.types.mobile },
    { user: this.users.eva, type: this.types.home },
    { user: this.users.jack, type: this.types.mobile },
    { user: this.users.lee, type: this.types.mobile },
    { user: this.users.alan, type: this.types.home },
    { user: this.users.kate, type: this.types.work },
  ];
  private recentUsers: RecentUsers[] = [
    { user: this.users.alan, type: this.types.home, time: this.time.setHours(21, 12) },
    { user: this.users.eva, type: this.types.home, time: this.time.setHours(17, 45) },
    { user: this.users.nick, type: this.types.mobile, time: this.time.setHours(5, 29) },
    { user: this.users.lee, type: this.types.mobile, time: this.time.setHours(11, 24) },
    { user: this.users.jack, type: this.types.mobile, time: this.time.setHours(10, 45) },
    { user: this.users.kate, type: this.types.work, time: this.time.setHours(9, 42) },
    { user: this.users.kate, type: this.types.work, time: this.time.setHours(9, 31) },
    { user: this.users.jack, type: this.types.mobile, time: this.time.setHours(8, 0) },
  ];

  getCurrentUser(): Observable<User> {
    console.log(this.httpOptions)
    return this.http.get<User>('http://localhost:8080/app-api/v1/users/current', this.httpOptions);
  }

  getUsers(): Observable<any> {
    return observableOf(this.users);
  }

  getContacts(): Observable<Contacts[]> {
    return observableOf(this.contacts);
  }

  getRecentUsers(): Observable<RecentUsers[]> {
    return observableOf(this.recentUsers);
  }
}
