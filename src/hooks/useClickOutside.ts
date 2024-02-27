/*
 * @Author: jiangyaguang
 * @Date: 2024-02-27 13:20:16
 * @LastEditors: jiangyaguang
 * @LastEditTime: 2024-02-27 13:27:40
 * @FilePath: /yiyi-ui-vue3/src/hooks/useClickOutside.ts
 * @Description:
 */
import { onMounted, onUnmounted, type Ref } from 'vue';
const useClickOutside = (
  elementRef: Ref<undefined | HTMLElement>,
  callback: (e: MouseEvent) => void
) => {
  onMounted(() => {
    document.addEventListener('click', handler);
  });

  onUnmounted(() => {
    document.removeEventListener('click', handler);
  });

  const handler = (e: MouseEvent) => {
    if (elementRef.value && e.target) {
      if (!elementRef.value.contains(e.target as HTMLElement)) {
        callback(e);
      }
    }
  };
};
export default useClickOutside;
