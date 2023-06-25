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
  </div>`,
})
export class EventThumbnailComponent {
  @Input() eventInput: any;

  logFoo() {
    console.log('foo');
  }
}
