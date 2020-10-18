import { Property as CSS } from 'csstype'
import { system, Config, ResponsiveValue, ThemeType } from '@styled-system/core'

export interface ColorProps<Theme extends ThemeType = ThemeType> {
  c?: ResponsiveValue<CSS.Color, Theme>
  bg?: ResponsiveValue<CSS.BackgroundColor, Theme>
  opacity?: ResponsiveValue<CSS.Opacity, Theme>
}

const config: Config<ColorProps> = {
  c: { property: 'color'},
  bg: { property: 'backgroundColor'},
  opacity: true
}

export const color = system<ColorProps>(config)
