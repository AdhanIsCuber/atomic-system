import { Property as CSS } from 'csstype';
import { system, Config, ResponsiveValue, ThemeType, } from '@styled-system/core'

export interface TypographyProps<Theme extends ThemeType = ThemeType> {
  textOver?: ResponsiveValue<CSS.TextOverflow, Theme>;
  textDecor?: ResponsiveValue<CSS.TextDecoration, Theme>;
  wordSpace?: ResponsiveValue<CSS.WordSpacing, Theme>;
  wordWrap?: ResponsiveValue<CSS.WordWrap, Theme>;
  wordBreak?: ResponsiveValue<CSS.WordBreak, Theme>;
  whiteSpace?: ResponsiveValue<CSS.WhiteSpace, Theme>;
  lineClamp?: ResponsiveValue<CSS.LineClamp, Theme>;
  lineBreak?: ResponsiveValue<CSS.LineBreak, Theme>;
  fontFam?: ResponsiveValue<CSS.FontFamily, Theme>;
  fontSize?: ResponsiveValue<CSS.FontSize, Theme>;
  letterSpace?: ResponsiveValue<CSS.LetterSpacing, Theme>;
  lineHeight?: ResponsiveValue<CSS.LineHeight, Theme>;
  fontWeight?: ResponsiveValue<CSS.FontWeight, Theme>;
  textAlign?: ResponsiveValue<CSS.TextAlign, Theme>;
  fontStyle?: ResponsiveValue<CSS.FontStyle, Theme>;
}

const config: Config<TypographyProps> = {
  c: { property: 'color' },
  bg: { property: 'backgroundColor' },
  opacity: true,
  textOver: { property: 'textOverflow' },
  textDecor: { property: 'textDecoration' },
  wordSpace: { property: 'wordSpacing' },
  wordWrap: { property: 'wordWrap' },
  wordBreak: { property: 'wordBreak' },
  whiteSpace: { property: 'whiteSpace' },
  lineClamp: { property: 'lineClamp' },
  lineBreak: { property: 'lineBreak' },
  fontFam: { property: 'fontFamily' },
  fontSize: { property: 'fontSize' },
  letterSpace: { property: 'letterSpacing' },
  lineHeight: { property: 'lineHeight' },
  fontWeight: { property: 'fontWeight' },
  textAlign: { property: 'textAlign' },
  fontStyle: { property: 'fontStyle' },
};

export const typoGraphy = system<TypographyProps>(config);
