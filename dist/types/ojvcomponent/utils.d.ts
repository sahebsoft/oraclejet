/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */

import { VComponent } from './VComponent';
export declare function flattenChildren(children: VComponent.Children | VComponent.VNode | VComponent.VNode[] | null): Readonly<VComponent.VNode[]>;