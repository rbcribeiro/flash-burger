import { Component, Input, EventEmitter, Output, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.css']
})
export class InputSelectComponent implements AfterViewInit {
  @Input() options: { label: string; value: any }[] = [];
  @Input() selectedValue: any;
  @Input() placeholder: string = '';
  @Output() selectedValueChange = new EventEmitter<string>();

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const selectWidth = this.el.nativeElement.offsetWidth;

    const options = this.el.nativeElement.querySelectorAll('option');

    options.forEach((option: HTMLElement) => {
      option.style.width = selectWidth + 'px';
    });
  }

  onValueChange() {
    this.selectedValueChange.emit(this.selectedValue);
  }
}
