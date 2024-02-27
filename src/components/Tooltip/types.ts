/*
 * @Author: jiangyaguang
 * @Date: 2024-02-26 13:39:19
 * @LastEditors: DESKTOP-DO9B8F8\admin 297138663@qq.com
 * @LastEditTime: 2024-02-27 21:46:30
 * @FilePath: \yiyi-ui-vue3\src\components\Tooltip\types.ts
 * @Description:
 */
import type { Placement, Options } from '@popperjs/core';

export interface TooltipProps {
  content?: string;
  trigger?: 'hover' | 'click';
  placement?: Placement;
  manual?: boolean;
  popperOptions?: Partial<Options>;
  transition?: string;
  openDelay?: number;
  closeDelay?: number;
}

export interface TooltipEmits {
  (e: 'visible-change', value: boolean): void;
}

export interface TooltipInstance {
  show: () => void;
  hide: () => void;
}
