import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  // TODO cardnumberebi jobia stringi iyos, ricxvi dzalian didi gamodis
  public users: User[] = [
    {
      id: 1,
      type: 'VISA',
      cardHolder: 'Nella Sheldon',
      cardNumber: '4532251151966288',
      expiration: '02/21'
    },
    {
      id: 2,
      type: 'MASTERCARD',
      cardHolder: 'Joey Kane',
      cardNumber: '5374105700698669',
      expiration: '10/23'
    },
    {
      id: 3,
      type: 'MASTERCARD',
      cardHolder: 'Christian Portillo',
      cardNumber: '4532382897216744',
      expiration: '03/22'
    },
    {
      id: 4,
      type: 'VISA',
      cardHolder: 'Tasmin Atkins',
      cardNumber: '4510645983016543',
      expiration: '04/20'
    },
    {
      id: 5,
      type: 'MASTERCARD',
      cardHolder: 'Izaac Olsen',
      cardNumber: '4532251151966288',
      expiration: '12/24'
    },
    {
      id: 6,
      type: 'VISA',
      cardHolder: 'Sonnie Mcdonnell',
      cardNumber: '132206631125154',
      expiration: '12/24'
    }
  ];

  // TODO arc esenia sachiro buttonis da formis state shegidzlia componentshi gqondes
  // private isDisable = new BehaviorSubject<boolean>(false);
  // disablebtn = this.isDisable.asObservable();
  // private showAddForm = new BehaviorSubject<boolean>(false);
  // showForm = this.showAddForm.asObservable();

  // TODO selected users martivad amoigeb routidan, ar gchirdeba subjecti
  // private userSource = new BehaviorSubject<User>(
  //   {
  //     id: null,
  //     type: null,
  //     cardHolder: null,
  //     cardNumber: null,
  //     expiration: null
  //   }
  // );
  // selectedUser = this.userSource.asObservable();


  constructor() {
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  // disable(bool: boolean) {
  //   this.isDisable.next(bool);
  // }

  // showFo(isForm: boolean) {
  //   this.showAddForm.next(isForm);
  // }


  // setUser(user: User) {
  //   this.userSource.next(user);
  // }

  addUser(user: User) {
    user.id = this.users.length;
    this.users.unshift(user);
  }


  updateUser(user: User) {
    this.users.forEach((IndividualUser, index) => {
      if (user.id === IndividualUser.id) {
        // this.users.splice(index, 1); //vshli
        // TODO splice-s kide erti argumentad objecti ro gadasce, im indexze chasvams am objects :d
        this.users.splice(index, 1, user);
        return;
      }
      // vamateb axals, updates vuketeb
    });
    // this.users.unshift(user);

  }

  deleteUser(user: User) {
    this.users.forEach((cur, index) => {
      if (user.id === cur.id) {
        this.users.splice(index, 1);
        // TODO im arrays cvli rasac gadauyvebi da an unda daareturno an ubralod index daimaxsovro da mere washalo
        return;
      }
    });
  }


  getUserById(id) {
    return of(this.users.find(user => user.id === id));
  }
}
