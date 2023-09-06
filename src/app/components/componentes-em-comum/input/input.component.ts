import {Component, forwardRef, OnInit} from "@angular/core";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
    selector: "app-input",
    templateUrl: "./input.component.html",
    styleUrls: ["./input.component.css"],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => InputComponent),
        multi: true
    }]

})
export class InputComponent implements ControlValueAccessor {
  value: number = 0;
  onChange: (_: any) => void = (_: any) => {};
  onTouched: () => void = () => {};
  constructor() {}
  updateChanges() {
    this.onChange(this.value);
  }


/**
  * Writes a new item to the element.
  * @param value the value
  */
writeValue(value: number): void {
    this.value = value;
    this.updateChanges();
}

/**
  * Registers a callback function that should be called when the control's value changes in the UI.
  * @param fn
  */
registerOnChange(fn: any): void {
    this.onChange = fn;
}

/**
  * Registers a callback function that should be called when the control receives a blur event.
  * @param fn
  */
registerOnTouched(fn: any): void {
  this.onTouched = fn;
}

}

// import { Component, Input } from '@angular/core';

// @Component({
//   selector: 'app-input',
//   templateUrl: './input.component.html',
//   styleUrls: ['./input.component.css']
// })
// export class InputComponent {
//   @Input() placeholder: string = '';
//   @Input() inputId: string = 'email'; 
//   @Input() inputName: string = 'password';


//   constructor() { }
// }
