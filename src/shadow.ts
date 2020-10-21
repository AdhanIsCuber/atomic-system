import { Property as CSS } from 'csstype'
import { system, Config, ResponsiveValue, ThemeType } from '@styled-system/core'

export interface ShadowProps<Theme extends ThemeType = ThemeType> {

  shadow?: ResponsiveValue<CSS.BoxShadow, Theme>
  tShadow?: ResponsiveValue<CSS.TextShadow, Theme>

}

const config: Config<ShadowProps> = {
  shadow: { property: 'boxShadow' },
  tShadow: { property: 'texShadow' },
}

export const shadow = system<ShadowProps>(config)
