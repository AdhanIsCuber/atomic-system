import { Property as CSS } from 'csstype'
import { system, Config, ResponsiveValue, ThemeType } from '@styled-system/core'

export interface ShadowProps<Theme extends ThemeType = ThemeType> {

  shadow?: ResponsiveValue<CSS.boxShadow, Theme>
  tShadow?: ResponsiveValue<CSS.textShadow, Theme>

}

const config: Config<ShadowProps> = {
  shadow: { property: 'boxShadow' },
  tShadow: { property: 'texShadow' },
}

export const background = system<ShadowProps>(config)
