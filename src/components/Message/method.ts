/*
 * @Author: DESKTOP-DO9B8F8\admin 297138663@qq.com
 * @Date: 2024-03-01 23:04:29
 * @LastEditors: DESKTOP-DO9B8F8\admin 297138663@qq.com
 * @LastEditTime: 2024-03-04 22:54:30
 * @FilePath: \yiyi-ui-vue3\src\components\Message\method.ts
 * @Description:
 */
import type { CreateMessageProps, MessageContext } from './types';
import { render, h } from 'vue';
import MessageConstructor from './index.vue';

let seed = 1;
const instances: MessageContext[] = [];

export const createMessage = (props: CreateMessageProps) => {
  const id = `message_${seed++}`;
  const container = document.createElement('div');

  const destory = () => {
    const index = instances.findIndex((instance) => instance.id === id);
    if (index === -1) return;
    instances.splice(index, 1);
    render(null, container);
  };

  const newProps = {
    ...props,
    onDestory: destory,
    id
  };

  const vnode = h(MessageConstructor, newProps);
  console.log(vnode);
  render(vnode, container);
  document.body.appendChild(container.firstElementChild!); // ! 断言 container.firstElementChild 不为空
  const vm = vnode.component!;

  const instance = {
    id,
    vnode,
    props: newProps,
    vm
  };
  instances.push(instance);
  return instance;
};

export const getLatestMessage = () => {
  return instances.at(-1);
};

export const getLastBottomOffset = (id: string) => {
  const idx = instances.findIndex((instance) => instance.id === id);
  if (idx <= 0) return 0;
  return instances[idx - 1].vm.exposed!.bottomOffset.value;
};
