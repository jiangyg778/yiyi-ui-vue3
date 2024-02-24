/*
 * @Author: DESKTOP-DO9B8F8\admin 297138663@qq.com
 * @Date: 2024-02-24 21:15:03
 * @LastEditors: DESKTOP-DO9B8F8\admin 297138663@qq.com
 * @LastEditTime: 2024-02-24 21:28:12
 * @FilePath: \yiyi-ui-vue3\src\components\Icon\types.ts
 * @Description:
 */
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface IconProps {
  border?: boolean;
  fixedWidth?: boolean;
  flip?: 'horizontal' | 'vertical' | 'both';
  icon: object | Array<string> | string | IconDefinition;
  mask?: object | Array<string> | string;
  maskId?: object | Array<string> | string;
  listItem?: boolean;
  pull?: 'right' | 'left';
  pulse?: boolean;
  rotation?: 90 | 180 | 270 | '90' | '180' | '270';
  swapOpacity?: boolean;
  size?:
    | '2xs'
    | 'xs'
    | 'sm'
    | 'lg'
    | 'xl'
    | '2xl'
    | '1x'
    | '2x'
    | '3x'
    | '4x'
    | '5x'
    | '6x'
    | '7x'
    | '8x'
    | '9x'
    | '10x';
  spin?: boolean;
  transform?: object | string;
  symbol?: boolean | string;
  title?: string;
  titleId?: string;
  inverse?: boolean;
  bounce?: boolean;
  shake?: boolean;
  beat?: boolean;
  fade?: boolean;
  beatFade?: boolean;
  spinPulse?: boolean;
  spinReverse?: boolean;
}
