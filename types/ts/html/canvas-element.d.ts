/**
 *
 */
export class HTMLCanvasElement extends HTMLElement {
    set width(value: any);
    get width(): any;
    set height(value: any);
    get height(): any;
    getContext(type: any): any;
    toDataURL(...args: any[]): any;
    [IMAGE]: any;
}
import { HTMLElement } from './element.js';
import { IMAGE } from '../shared/symbols.js';
