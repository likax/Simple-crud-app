import { Directive, ElementRef,HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appUpper]'
})
export class UpperDirective {

   @Output() ngModelChange: EventEmitter<any> = new EventEmitter();
   value: any;
 
   @HostListener('input', ['$event']) 
   onInputChange($event) {
     this.value = $event.target.value.toUpperCase();
     this.ngModelChange.emit(this.value);
   }

}
