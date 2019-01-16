import { Component, Type } from '@angular/core';
import { AdComponent } from './ad-component';

export class AdItem implements AdComponent {
    constructor(public component: Type<any>, public data: any) {}
}
