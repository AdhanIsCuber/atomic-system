import { Property as CSS } from 'csstype'
import { system, Config, ResponsiveValue, ThemeType } from '@styled-system/core'

export interface BorderProps<Theme extends ThemeType = ThemeType> {
  b?: ResponsiveValue<CSS.Border, Theme>
  bC?: ResponsiveValue<CSS.BorderColor, Theme>
  bS?: ResponsiveValue<CSS.BorderStyle, Theme>
  bW?: ResponsiveValue<CSS.BorderWidth, Theme>
  bTop?: ResponsiveValue<CSS.BorderTop, Theme>
  bTopC?: ResponsiveValue<CSS.BorderTopColor, Theme>
  bTopS?: ResponsiveValue<CSS.BorderTopStyle, Theme>
  bTopW?: ResponsiveValue<CSS.BorderTopWidth, Theme>
  bTopRightRad?: ResponsiveValue<CSS.BorderTopRightRadius, Theme>
  bTopLeftRad?: ResponsiveValue<CSS.BorderTopLeftRadius, Theme>
  bRight?: ResponsiveValue<CSS.BorderRight, Theme>
  bRightS?: ResponsiveValue<CSS.BorderRightStyle, Theme>
  bRightW?: ResponsiveValue<CSS.BorderRightWidth, Theme>
  bBot?: ResponsiveValue<CSS.BorderBottom, Theme>
  bBotC?: ResponsiveValue<CSS.BorderBottomColor, Theme>
  bBotS?: ResponsiveValue<CSS.BorderBottomStyle, Theme>
  bBotW?: ResponsiveValue<CSS.BorderBottomWidth, Theme>
  bBotLeftRad?: ResponsiveValue<CSS.BorderBottomLeftRadius, Theme>
  bBotRightRad?: ResponsiveValue<CSS.BorderBottomRightRadius, Theme>
  bLeft?: ResponsiveValue<CSS.BorderLeft, Theme>
  bLeftC?: ResponsiveValue<CSS.BorderLeftColor, Theme>
  bLeftS?: ResponsiveValue<CSS.BorderLeftStyle, Theme>
  bLeftW?: ResponsiveValue<CSS.BorderLeftWidth, Theme>
  radius?: ResponsiveValue<CSS.BorderRadius, Theme>
}

const config: Config<BorderProps> = {
  b: { property: 'border' },
  bC: { property: 'borderColor' },
  bS: { property: 'borderStyle' },
  bW: { property: 'borderWidth' },
  bTop: { property: 'borderTop' },
  bTopC: { property: 'borderTopColor' },
  bTopS: { property: 'borderTopStyle' },
  bTopW: { property: 'borderTopWidth' },
  bTopRightRad: { property: 'borderTopRightRadius' },
  bTopLeftRad: { property: 'borderTopLeftRadius' },
  bRight: { property: 'borderRight' },
  bRightS: { property: 'borderRightStyle' },
  bRightW: { property: 'borderRightWidth' },
  bBot: { property: 'borderBottom' },
  bBotC: { property: 'borderBottomColor' },
  bBotS: { property: 'borderBottomStyle' },
  bBotW: { property: 'borderBottomWidth' },
  bBotLeftRad: { property: 'borderBottomLeftRadius' },
  bBotRightRad: { property: 'borderBottomRightRadius' },
  bLeft: { property: 'borderLeft' },
  bLeftC: { property: 'borderLeftColor' },
  bLeftS: { property: 'borderLeftStyle' },
  bLeftW: { property: 'borderLeftWidth' },
  radius: { property: 'borderRadius' },
}

export const border = system<BorderProps>(config)
