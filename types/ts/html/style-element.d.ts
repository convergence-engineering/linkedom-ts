/**
 *
 */
export class HTMLStyleElement extends TextElement {
    get sheet(): any;
    set innerText(value: string);
    get innerText(): string;
    [SHEET]: any;
}
import { TextElement } from './text-element.js';
import { SHEET } from '../shared/symbols.js';
