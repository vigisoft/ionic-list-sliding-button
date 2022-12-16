import { Component, Input } from '@angular/core';

export type ListSlidingButtonColors = 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'danger' | 'dark' | 'medium' | 'light';

@Component({
  selector: 'list-sliding-button',
  templateUrl: './list-sliding-button.html',
  styleUrls: ['./list-sliding-button.scss'],
})
export class ListSlidingButton {

  @Input('optionColor') optionColor: ListSlidingButtonColors = "primary";
  @Input('icon') icon: string = "";

  constructor() { }
}
