import { Property as CSS } from 'csstype'
import { system, Config, ResponsiveValue, ThemeType } from '@styled-system/core'

export interface GridProps<Theme extends ThemeType = ThemeType> {
  gap?: ResponsiveValue<CSS.Gap, Theme>
  gArea?: ResponsiveValue<CSS.GridArea, Theme>
  gAutoCol?: ResponsiveValue<CSS.GridAutoColumns, Theme>
  gAutoRow?: ResponsiveValue<CSS.GridAutoRows, Theme>
  gAutoFlow?: ResponsiveValue<CSS.GridAutoFlow, Theme>
  gColStart?: ResponsiveValue<CSS.GridColumnStart, Theme>
  gColEnd?: ResponsiveValue<CSS.GridColumnEnd, Theme>
  gCol?: ResponsiveValue<CSS.GridColumn, Theme>
  gRowStart?: ResponsiveValue<CSS.GridRowStart, Theme>
  gRowEnd?: ResponsiveValue<CSS.GridRowEnd, Theme>
}

const config: Config<GridProps> = {
  gap: { property: 'gap' },
  gArea: { property: 'gridArea' },
  gAutoCol: { property: 'gridAutoColumns' },
  gAutoRow: { property: 'gridAutoRows' },
  gAutoFlow: { property: 'gridAutoFlow' },
  gColStart: { property: 'gridColumnStart' },
  gColEnd: { property: 'gridColumnEnd' },
  gCol: { property: 'gridColumn' },
  gRowStart: { property: 'gridRowStart' },
  gRowEnd: { property: 'gridRowEnd' },
}

export const grid = system<GridProps>(config)
