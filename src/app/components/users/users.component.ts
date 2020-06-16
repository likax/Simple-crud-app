import { UserService } from './../../services/user.service';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  // disable: boolean;
  // TODO initial valuebi miuwere xolme, errorebs aarideb tavs :d
  public users: User[] = [];
  // isForm: boolean;
  public formActive: boolean = false;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(users =>
      this.users = users,
    );
    // this.userService.disablebtn.subscribe(bool => {
    //   this.disable = bool;
    // });
    // this.userService.showForm.subscribe(state => {
    //   this.isForm = state;
    // });

  }

  public addUser(user: User): void {
    if (user) {
      this.userService.addUser(user);
    }
    this.formActive = false;
  }


}
