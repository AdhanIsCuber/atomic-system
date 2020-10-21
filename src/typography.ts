import { Property as CSS } from 'csstype'
import { system, Config, ResponsiveValue, ThemeType } from '@styled-system/core'

export interface TypographyProps<Theme extends ThemeType = ThemeType> {
  textOver?: ResponsiveValue<CSS.TextOverflow, Theme>
  textDecor?: ResponsiveValue<CSS.TextDecoration, Theme>
  wordSpace?: ResponsiveValue<CSS.WordSpacing, Theme>
  wordWrap?: ResponsiveValue<CSS.WordWrap, Theme>
  wordBreak?: ResponsiveValue<CSS.WordBreak, Theme>
  whiteSpace?: ResponsiveValue<CSS.WhiteSpace, Theme>
  lineClamp?: ResponsiveValue<CSS.LineClamp, Theme>
  lineBreak?: ResponsiveValue<CSS.LineBreak, Theme>
  fontFam?: ResponsiveValue<CSS.FontFamily, Theme>
  fontSize?: ResponsiveValue<CSS.FontSize, Theme>
  tAlign?: ResponsiveValue<CSS.TextAlign, Theme>
  lineH?: ResponsiveValue<CSS.LineHeight, Theme>
}

const config: Config<TypographyProps> = {
  textOver: { property: 'textOverflow' },
  textDecor: { property: 'textDecoration' },
  wordSpace: true,
  wordWrap: true,
  wordBreak: true,
  whiteSpace: true,
  lineClamp: true,
  lineBreak: true,
  fontFam: { property: 'fontFamily' },
  fontSize: true,
  tAlign: { property: 'textAlign' },
  lineH: { property: 'lineHeight' },
}

export const typography = system<TypographyProps>(config)
