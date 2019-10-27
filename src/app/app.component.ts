import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div id="wrapper">
      <app-promo [src]="promoSrc"></app-promo>
      <app-thumb (promoIndex)="handler($event)"></app-thumb>
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
