/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */

import { JetElement, JetSettableProperties, JetElementCustomEvent, JetSetPropertyType } from 'ojs/index';
import { GlobalAttributes } from 'ojs/oj-jsx-interfaces';
import { ElementVComponent } from 'ojs/ojvcomponent-element';
declare class Props {
    background?: 'neutral' | 'orange' | 'green' | 'teal' | 'blue' | 'slate' | 'mauve' | 'pink' | 'purple' | 'lilac' | 'gray' | 'red' | 'forest';
    initials?: string | null;
    size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    src?: string | null;
}
export declare class Avatar extends ElementVComponent<Props> {
    protected render(): any;
    protected _vprops?: VProps;
}
// Custom Element interfaces
export interface AvatarElement extends JetElement<AvatarElementSettableProperties>, AvatarElementSettableProperties {
  addEventListener<T extends keyof AvatarElementEventMap>(type: T, listener: (this: HTMLElement, ev: AvatarElementEventMap[T]) => any, options?: (boolean|AddEventListenerOptions)): void;
  addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: (boolean|AddEventListenerOptions)): void;
  getProperty<T extends keyof AvatarElementSettableProperties>(property: T): AvatarElement[T];
  getProperty(property: string): any;
  setProperty<T extends keyof AvatarElementSettableProperties>(property: T, value: AvatarElementSettableProperties[T]): void;
  setProperty<T extends string>(property: T, value: JetSetPropertyType<T, AvatarElementSettableProperties>): void;
  setProperties(properties: AvatarElementSettablePropertiesLenient): void;
}
export namespace AvatarElement {
  // tslint:disable-next-line interface-over-type-literal
  type backgroundChanged = JetElementCustomEvent<AvatarElement["background"]>;
  // tslint:disable-next-line interface-over-type-literal
  type initialsChanged = JetElementCustomEvent<AvatarElement["initials"]>;
  // tslint:disable-next-line interface-over-type-literal
  type sizeChanged = JetElementCustomEvent<AvatarElement["size"]>;
  // tslint:disable-next-line interface-over-type-literal
  type srcChanged = JetElementCustomEvent<AvatarElement["src"]>;
}
export interface AvatarElementEventMap extends HTMLElementEventMap {
  'backgroundChanged': JetElementCustomEvent<AvatarElement["background"]>;
  'initialsChanged': JetElementCustomEvent<AvatarElement["initials"]>;
  'sizeChanged': JetElementCustomEvent<AvatarElement["size"]>;
  'srcChanged': JetElementCustomEvent<AvatarElement["src"]>;
}
export interface AvatarElementSettableProperties extends JetSettableProperties {
  /**
  * Specifies the background of the avatar.
  */
  background?: Props['background'];
  /**
  * Specifies the initials of the avatar.
  */
  initials?: Props['initials'];
  /**
  * Specifies the size of the avatar.
  */
  size?: Props['size'];
  /**
  * Specifies the source for the image of the avatar.
  */
  src?: Props['src'];
}
export interface AvatarElementSettablePropertiesLenient extends Partial<AvatarElementSettableProperties> {
  [key: string]: any;
}
export type ojAvatar = AvatarElement;
export namespace ojAvatar {
  // tslint:disable-next-line interface-over-type-literal
  type backgroundChanged = JetElementCustomEvent<ojAvatar["background"]>;
  // tslint:disable-next-line interface-over-type-literal
  type initialsChanged = JetElementCustomEvent<ojAvatar["initials"]>;
  // tslint:disable-next-line interface-over-type-literal
  type sizeChanged = JetElementCustomEvent<ojAvatar["size"]>;
  // tslint:disable-next-line interface-over-type-literal
  type srcChanged = JetElementCustomEvent<ojAvatar["src"]>;
}
export type ojAvatarEventMap = AvatarElementEventMap;
export type ojAvatarSettableProperties = AvatarElementSettableProperties;
export type ojAvatarSettablePropertiesLenient = AvatarElementSettablePropertiesLenient;
export interface AvatarProperties extends Partial<AvatarElementSettableProperties>, GlobalAttributes {
}
export interface VProps extends Props, GlobalAttributes {
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "oj-avatar": AvatarProperties;
    }
  }
}