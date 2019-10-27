import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div id="wrapper">
      <app-promo-component [src]="promoSrc"></app-promo-component>
      <app-thumb-component (promoIndex)=handler($event)></app-thumb-component>
    </div>
  `,
  styleUrls: ['./app.component.css']
})

class AppComponent {
  public promoSrc = 'assets/img01.jpg';

  public handler($event: number): void {
    this.promoSrc = `assets/img0${ $event + 1 }.jpg`;
  }
}

export { AppComponent };
