import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  template: `<div class="well hoverwell thumbnail">
    <h2>{{ eventInput.name }}</h2>
    <div>{{ eventInput.date }}</div>
    <div>{{ eventInput.time }}</div>
    <div>Price: \${{ eventInput.price }}</div>
    <div>
      <span>Location: {{ eventInput.location.address }}</span>
      <span>&nbsp;</span>
      <span
        >{{ eventInput.location.city }}, {{ eventInput.location.country }}</span
      >
    </div>
    <button class="btn btn-primary" (click)="handleClickMe()">Click Me!</button>
  </div>`,
})
export class EventThumbnailComponent {
  @Input() eventInput: any;
  @Output() eventClick = new EventEmitter();

  handleClickMe() {
    this.eventClick.emit(this.eventInput.name);
    console.log('button is clicked');
  }
}
