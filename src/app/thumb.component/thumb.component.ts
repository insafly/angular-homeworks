import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-thumb-component',
    template: `
        <ul class="thumbs">
            <li *ngFor="let thumb of thumbs; let i = index" [class]="i === current ? 'active' : ''">
                <img (click)="clickHandler(i)" [src]="thumb" alt="thumb description" />
            </li>
        </ul>
    `,
    styleUrls: ['./thumb.component.css']
})

export class ThumbComponent {
    @Output()
    public promoIndex: EventEmitter<number> = new EventEmitter();

    private current = 0;

    private thumbs: string[] = [
        'assets/thumb01.jpg',
        'assets/thumb02.jpg',
        'assets/thumb03.jpg',
        'assets/thumb04.jpg'
    ];

    public clickHandler(index): void {
        this.current = index;
        this.promoIndex.emit(index);
    }
}
