/*
 * @Author: jiangyaguang
 * @Date: 2024-02-26 13:39:19
 * @LastEditors: jiangyaguang
 * @LastEditTime: 2024-02-27 13:48:11
 * @FilePath: /yiyi-ui-vue3/src/components/Tooltip/types.ts
 * @Description:
 */
import type { Placement, Options } from '@popperjs/core';

export interface TooltipProps {
  content?: string;
  trigger?: 'hover' | 'click';
  placement?: Placement;
  manual?: boolean;
  popperOptions?: Partial<Options>;
}

export interface TooltipEmits {
  (e: 'visible-change', value: boolean): void;
}

export interface TooltipInstance {
  show: () => void;
  hide: () => void;
}
