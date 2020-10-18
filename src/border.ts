import { Property as CSS } from 'csstype'
import { system, Config, ResponsiveValue, ThemeType } from '@styled-system/core'

export interface BorderProps<Theme extends ThemeType = ThemeType> {

  cursor?: ResponsiveValue<CSS.cursor, Theme>
  pointEvents?: ResponsiveValue<CSS.pointEvents, Theme>

}

const config: Config<BorderProps> = {
    cursor: { property: 'cursor' },
    pointEvents: { property: 'pointEvents' },
}

export const border = system<BorderProps>(config)
