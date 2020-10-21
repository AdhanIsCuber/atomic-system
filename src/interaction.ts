import { Property as CSS } from 'csstype'
import { system, Config, ResponsiveValue, ThemeType } from '@styled-system/core'

export interface InteractionProps<Theme extends ThemeType = ThemeType> {
  cursor?: ResponsiveValue<CSS.Cursor, Theme>
  pointEvents?: ResponsiveValue<CSS.PointerEvents, Theme>

}

const config: Config<InteractionProps> = {
  cursor: { property: 'cursor' },
  pointEvents: { property: 'pointerEvent' },
}

export const interaction = system<InteractionProps>(config)

