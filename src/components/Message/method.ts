/*
 * @Author: DESKTOP-DO9B8F8\admin 297138663@qq.com
 * @Date: 2024-03-01 23:04:29
 * @LastEditors: DESKTOP-DO9B8F8\admin 297138663@qq.com
 * @LastEditTime: 2024-03-01 23:13:42
 * @FilePath: \yiyi-ui-vue3\src\components\Message\method.ts
 * @Description:
 */
import type { MessageProps } from './types';
import { render, h } from 'vue';
import MessageConstructor from './index.vue';

export const createMessage = (props: MessageProps) => {
  const container = document.createElement('div');
  const vnode = h(MessageConstructor, props);
  render(vnode, container);
  document.body.appendChild(container.firstElementChild!); // ! 断言 container.firstElementChild 不为空
};
