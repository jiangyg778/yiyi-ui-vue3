/*
 * @Author: DESKTOP-DO9B8F8\admin 297138663@qq.com
 * @Date: 2024-02-20 21:53:02
 * @LastEditors: DESKTOP-DO9B8F8\admin 297138663@qq.com
 * @LastEditTime: 2024-02-20 22:20:29
 * @FilePath: \yiyi-ui-vue3\src\components\Button\types.ts
 * @Description:
 */

import type { PropType } from 'vue'

export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info'
export type ButtonSize = 'large' | 'medium' | 'small' | 'mini'
export type NativeType = 'button' | 'submit' | 'reset'

export interface ButtonProps {
  type?: ButtonType
  size?: ButtonSize
  plain?: boolean
  round?: boolean
  circle?: boolean
  disabled?: boolean
  nativeType?: NativeType
  autofocus?: boolean
}
export const buttonProps = {
  type: {
    type: String as PropType<ButtonProps>
  },
  size: {
    type: String as PropType<ButtonSize>
  },
  plain: {
    type: Boolean as PropType<boolean>
  },
  round: {
    type: Boolean as PropType<boolean>
  },
  circle: {
    type: Boolean as PropType<boolean>
  },
  disabled: {
    type: Boolean as PropType<boolean>
  }
}

export interface ButtonInstance {
  ref: HTMLButtonElement
}
