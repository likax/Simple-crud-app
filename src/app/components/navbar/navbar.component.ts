import { UserService } from 'src/app/services/user.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  // disable: boolean;
  // isForm: boolean = false;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    // this.userService.disablebtn.subscribe(bool => {
    //   this.disable = bool;
    // });
    // this.userService.showForm.subscribe(bool => {
    //   this.isForm = bool;
    // });

  }

  // showForm() {
  //   this.isForm = !this.isForm;
  // }
  //
  //
  goBack() {
    // this.router.navigate(['/users']);
    // this.disable = false;
    // this.userService.disable(this.disable);
  }
}
