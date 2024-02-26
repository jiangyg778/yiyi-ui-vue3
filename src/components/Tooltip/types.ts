/*
 * @Author: jiangyaguang
 * @Date: 2024-02-26 13:39:19
 * @LastEditors: jiangyaguang
 * @LastEditTime: 2024-02-26 13:43:00
 * @FilePath: /yiyi-ui-vue3/src/components/Tooltip/types.ts
 * @Description:
 */
import type { Placement } from '@popperjs/core';

export interface TooltipProps {
  content?: string;
  trigger?: 'hover' | 'click';
  placement?: Placement;
}

export interface TooltipEmits {
  (e: 'visible-change', value: boolean): void;
}
