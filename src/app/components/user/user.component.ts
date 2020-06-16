import { UserService } from 'src/app/services/user.service';
import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  // id: any;
  // cardHolder: string;
  // type: string;
  // cardNumber: number;
  // expiration: string;
  // isNew: boolean = true;

  public popupActive: boolean = false;
  public userToEdit: User = new User();

  @Input() public user: User = new User();
  @Input() public viewMode: boolean = true;

  // TODO eseni ar gchirdeba saertod
  // @ViewChild('newUser', { static: true }) inputName: ElementRef;
  // @ViewChild('form', { static: true }) myForm: NgForm;


  constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    // TODO amitom ar mushaobda refreshi
    // this.userService.selectedUser.subscribe(user => {
    //   if (user.id !== null) {
    //     this.isNew = false;
    //     this.id = user.id;
    //     this.type = user.type;
    //     this.cardHolder = user.cardHolder;
    //     this.cardNumber = user.cardNumber;
    //     this.expiration = user.expiration;
    //   }
    // });
    // TODO viewMode meubneba rodis var shida gverdze
    if (this.viewMode) {
      // TODO user/:id am routis mugami esaa
      this.activatedRoute.params.subscribe(
        (params) => {
          console.log(params);
          this.getUser(+params.id); // + intad castavs
        }
      );
    }
  }

  private getUser(id): void {
    this.userService.getUserById(id).subscribe(
      (response) => {
        this.user = response;
      }
    );
  }

  onSubmit(updatedUser) {
    // const updatedUser = {
    //   id: this.id,
    //   type: this.type,
    //   cardHolder: this.cardHolder,
    //   cardNumber: this.cardNumber,
    //   expiration: this.expiration
    //
    // };
    // this.userService.updateUser(updatedUser);

    // this.clearState();

  }

  onSelect(user: User) {
    this.userToEdit = {...user}; // TODO gadavcet objectis copy
    this.popupActive = true;
    // this.disable = true;
    // this.userService.setUser(user);
    // this.userService.disable(this.disable);
    // this.isForm = false;
    // this.userService.showFo(this.isForm);
  }

  onDelete(user: User) {
    if (confirm('are u sure?')) {
      this.userService.deleteUser(user);
      this.router.navigate(['users']);
    }
  }

  public popupResponse(user: User): void {
    if (user) {
      this.userService.updateUser(user);
      this.user = user;
      this.userToEdit = new User();
    }
    this.popupActive = false;
  }


  clearState() {
    // this.isNew = true;
    // this.id = '';
    // this.type = '';
    // this.cardHolder = '';
    // this.cardNumber = null;
    // this.expiration = '';
  }

  // onClear() {
  //   this.inputName.nativeElement.value = '';
  // }


  // generateId() {
  //   return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
  //     var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
  //     return v.toString(16);
  //   });
  // }


}



