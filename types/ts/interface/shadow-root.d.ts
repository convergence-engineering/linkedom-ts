/**
 *
 */
export class ShadowRoot extends NonElementParentNode {
    constructor(host: any);
    host: any;
    set innerHTML(html: string);
    get innerHTML(): string;
}
import { NonElementParentNode } from '../mixin/non-element-parent-node.js';
