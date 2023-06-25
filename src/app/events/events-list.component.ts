import { Component } from '@angular/core';

@Component({
  selector: 'events-list',
  template: `<div>
    <h1>I am events list</h1>
    <hr />
    <event-thumbnail
      (eventClick)="handleEventClicked($event)"
      [eventInput]="event"
    ></event-thumbnail>
  </div>`,
})
export class EventsListComponent {
  event = {
    id: 1,
    name: 'Angular Connect',
    date: '26/09/2036',
    time: '10.00 am',
    price: 599.99,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: '1000 AB',
      city: 'Amsterdam',
      country: 'NL',
    },
  };

  handleEventClicked(data) {
    console.log('received', data);
  }
}
