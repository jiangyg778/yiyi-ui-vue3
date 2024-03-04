/*
 * @Author: DESKTOP-DO9B8F8\admin 297138663@qq.com
 * @Date: 2024-03-01 22:41:21
 * @LastEditors: DESKTOP-DO9B8F8\admin 297138663@qq.com
 * @LastEditTime: 2024-03-04 22:51:35
 * @FilePath: \yiyi-ui-vue3\src\components\Message\types.ts
 * @Description:
 */
import type { ComponentInternalInstance, VNode } from 'vue';

export interface MessageProps {
  message?: string | VNode;
  duration?: number;
  showClose?: boolean;
  type?: 'success' | 'warning' | 'info' | 'error';
  onDestory: () => void;
  offset?: number;
  id: string;
}

export type CreateMessageProps = Omit<MessageProps, 'onDestory' | 'id'>;

export interface MessageContext {
  id: string;
  vnode: VNode;
  props: MessageProps;
  vm: ComponentInternalInstance;
}
