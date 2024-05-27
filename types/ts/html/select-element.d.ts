/**
 *
 */
export class HTMLSelectElement extends HTMLElement {
    get options(): NodeList;
    set disabled(value: any);
    get disabled(): any;
    set name(value: any);
    get name(): any;
    get value(): any;
}
import { HTMLElement } from './element.js';
import { NodeList } from '../interface/node-list.js';
