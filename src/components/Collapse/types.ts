/*
 * @Author: jiangyaguang
 * @Date: 2024-02-22 13:31:06
 * @LastEditors: DESKTOP-DO9B8F8\admin 297138663@qq.com
 * @LastEditTime: 2024-02-22 22:36:26
 * @FilePath: \yiyi-ui-vue3\src\components\Collapse\types.ts
 * @Description:
 */

import type { InjectionKey, Ref } from 'vue';

export type NameType = string | number;

export interface CollapseProps {
  modelValue: NameType[];
  accordion?: boolean;
}

export interface CollapseItemProps {
  name: string | number;
  title?: string;
  disabled?: boolean;
}
export interface CollapseContext {
  activeNames: Ref<NameType[]>;
  handleItemClick: (name: NameType) => void;
}

export interface CollapseEmits {
  (e: 'update:modelValue', values: NameType[]): void;
  (e: 'change', values: NameType[]): void;
}

export const collapseContextKey: InjectionKey<CollapseContext> = Symbol('collapseContextKey');
