/*
 * @Author: jiangyaguang
 * @Date: 2024-02-28 13:07:05
 * @LastEditors: jiangyaguang
 * @LastEditTime: 2024-02-28 13:16:46
 * @FilePath: /yiyi-ui-vue3/src/components/Dropdown/types.ts
 * @Description:
 */
import type { VNode } from 'vue';
import type { TooltipProps } from '../Tooltip/types';

export interface DropdownProps extends TooltipProps {
  menuOptions: MenuOption[];
  hideAfterClick?: boolean;
}

export interface MenuOption {
  label: string | VNode;
  key: string | number;
  disabled?: boolean;
  divided?: boolean;
}

export interface DropdownEmits {
  (e: 'visible-change', value: boolean): void;
  (e: 'select', value: MenuOption): void;
}

export interface DropdownInstance {
  show: () => void;
  hide: () => void;
}
