<!--
 * @Author: DESKTOP-DO9B8F8\admin 297138663@qq.com
 * @Date: 2024-02-27 22:26:49
 * @LastEditors: jiangyaguang 
 * @LastEditTime: 2024-02-28 13:17:56
 * @FilePath: /yiyi-ui-vue3/src/components/Dropdown/Dropdown.vue
 * @Description: 
-->
<template>
  <div class="yy-dropdown">
    <Tooltip
      :trigger="trigger"
      :placement="placement"
      :openDelay="openDelay"
      :closeDelay="closeDelay"
      :popper-options="popperOptions"
      @visible-change="visibleChange"
      ref="tooltipRef"
    >
      <slot />
      <template #content>
        <ul class="yy-dropdown__menu">
          <template v-for="item in menuOptions" :key="item.key">
            <li v-if="item.divided" role="separator" class="divided-placeholder" />
            <li
              class="yy-dropdown__item"
              @click="itemClick(item)"
              :class="{ 'is-disabled': item.disabled, 'is-divided': item.divided }"
              :id="`dropdown-item-${item.key}`"
            >
              <RenderVnode :vNode="item.label" />
            </li>
          </template>
        </ul>
      </template>
    </Tooltip>
  </div>
</template>
<script setup lang="ts">
import { type Ref, ref } from 'vue';
import type { DropdownProps, DropdownInstance, DropdownEmits, MenuOption } from './types';
import Tooltip from '../Tooltip/Tooltip.vue';
import type { TooltipInstance } from '../Tooltip/types';
import RenderVnode from '../Common/RenderVnode';

defineOptions({
  name: 'YyDropdown'
});

const props = withDefaults(defineProps<DropdownProps>(), {
  hideAfterClick: true
});
const emits = defineEmits<DropdownEmits>();
const tooltipRef = ref() as Ref<TooltipInstance>;

const visibleChange = (val: boolean) => {
  emits('visible-change', val);
};

const itemClick = (item: MenuOption) => {
  if (item.disabled) return;
  emits('select', item);
  if (props.hideAfterClick) {
    tooltipRef.value?.hide();
  }
};

defineExpose<DropdownInstance>({
  show: () => tooltipRef.value?.show(),
  hide: () => tooltipRef.value?.hide()
});
</script>
