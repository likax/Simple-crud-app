import { UserService } from 'src/app/services/user.service';
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
  Input
} from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  // id: any;
  // cardHolder: string;
  // type: string;
  // cardNumber: number;
  // expiration: string;
  // isNew: boolean = true;

  @Input() public user: User = new User();
  @Output() public formOutput: EventEmitter<User> = new EventEmitter<User>();
  // TODO again ar gchirdeba
  // @ViewChild('newUser', { static: true }) inputName: ElementRef;
  // @ViewChild('form', { static: true }) myForm: NgForm;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit(valid) {
    if (valid) {
      // this.userService.addUser(newUser);
      this.formOutput.emit(this.user);

      // tu axali useria
    // if (this.isNew) {
      // aq generates vuketeb id-is
      // const newUser = {
      //   id: this.generateId(),
      //   type: this.type,
      //   cardHolder: this.cardHolder,
      //   cardNumber: this.cardNumber,
      //   expiration: this.expiration
      // };
      // TODO aq damatebis mere shegizlia daxuro ubralod forma
      // this.clearState();
    }
  }


  // TODO ar chrideba clear state, initial state tu gaqvs da ngif-it tvirtav sul initial state-it itvirteba
  // clearState() {
  // this.id = '';
  // this.type = '';
  // this.cardHolder = '';
  // this.cardNumber = null;
  // this.expiration = '';
  // }


  // TODO two-way bindingit gaqvs shegedzlo cardHolder gagesuftavebina da meti sachiro ar iqneboda
  // onClear() {
  //   this.inputName.nativeElement.value = '';
  // }

  // TODO dude cmon
  // generateId() {
  //   return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
  //     var r = (Math.random() * 16) | 0,
  //       v = c == 'x' ? r : (r & 0x3) | 0x8;
  //     return v.toString(16);
  //   });
  // }
}
