import { Component, OnInit, OnDestroy, DoCheck } from '@angular/core';
import { ImageService } from './image.service/image.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <div id="wrapper">
      <app-promo-component [src]="promoSrc"></app-promo-component>
      <app-thumb-component [imgIndex]="imgIndex" (promoIndex)=handler($event)></app-thumb-component>
    </div>
  `,
  styleUrls: ['./app.component.css']
})

class AppComponent implements OnInit, OnDestroy, DoCheck {
  public imgIndex: number;
  private listener: Subscription;
  public promoSrc = '../../assets/img01.jpg';
  private wasClicked = false;
  private timer: number;
  public getSrc = (i: number): string => `../../assets/img0${i + 1}.jpg`;

  constructor(private service: ImageService) { }

  public handler($event: number): void {
    this.wasClicked = true;
    this.listener.unsubscribe();
    this.promoSrc = this.getSrc($event);

    clearTimeout(this.timer);
    this.timer = window.setTimeout((): void => {
      this.wasClicked = false;
      this.subscribe();
    }, 6000);
  }

  subscribe(): void {
    this.listener = this.service.dataSource.subscribe(
      (data: number) => {
        this.imgIndex = data;
      }
    );
  }

  ngOnInit(): void {
    this.subscribe();
  }

  ngDoCheck(): void {
    if (!this.wasClicked) {
      this.promoSrc = this.getSrc(this.imgIndex);
    }
  }

  ngOnDestroy(): void {
    this.listener.unsubscribe();
  }
}

export { AppComponent };
