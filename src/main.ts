/*
 * @Author: DESKTOP-DO9B8F8\admin 297138663@qq.com
 * @Date: 2024-02-20 21:46:42
 * @LastEditors: DESKTOP-DO9B8F8\admin 297138663@qq.com
 * @LastEditTime: 2024-02-24 22:30:58
 * @FilePath: \yiyi-ui-vue3\src\main.ts
 * @Description:
 */
import { createApp } from 'vue';
import App from './App.vue';
import './styles/index.css';
// 图标库
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

createApp(App).mount('#app');
