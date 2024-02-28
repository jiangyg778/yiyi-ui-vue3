/*
 * @Author: jiangyaguang
 * @Date: 2024-02-28 13:08:27
 * @LastEditors: jiangyaguang
 * @LastEditTime: 2024-02-28 13:11:34
 * @FilePath: /yiyi-ui-vue3/src/components/Common/RenderVnode.ts
 * @Description:
 */
import { defineComponent } from 'vue';

const RenderVnode = defineComponent({
  name: 'RenderVnode',
  props: {
    vNode: {
      type: [String, Object],
      required: true
    }
  },
  setup(props) {
    return () => props.vNode;
  }
});
export default RenderVnode;
