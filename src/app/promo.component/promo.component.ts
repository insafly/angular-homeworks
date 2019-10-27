import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-promo-component',
    template: `
        <div class="promo">
            <img [src]="src" alt="image description" />
        </div>
    `,
    styleUrls: ['./promo.component.css']
})

export class PromoComponent {
    @Input()
    public src: string;
}
