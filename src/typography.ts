import { Property as CSS } from 'csstype'
import { system, Config, ResponsiveValue, ThemeType } from '@styled-system/core'

export interface TypographyProps<Theme extends ThemeType = ThemeType> {

    textOver?: ResponsiveValue<CSS.Textoverflow, Theme>
    textDecor?: ResponsiveValue<CSS.Textdecoration, Theme>
    wordSpace?: ResponsiveValue<CSS.Wordspace, Theme>
    wordWrap?: ResponsiveValue<CSS.Wordwrap, Theme>
    wordBreak?: ResponsiveValue<CSS.Wordbreak, Theme>
    whiteSpace?: ResponsiveValue<CSS.Whitespace, Theme>
    lineClamp?: ResponsiveValue<CSS.Lineclamp, Theme>
    lineBreak?: ResponsiveValue<CSS.Linebreak, Theme>
    fontFam?: ResponsiveValue<CSS.Fontfamily, Theme>
    fontSize?: ResponsiveValue<CSS.Fontsize, Theme>  

}

const config: Config<TypographyProps> = {
    
    textOver: { property: 'textOverflow' },
    textDecor: { property: 'textDecoration' },
    wordSpace: { property: 'wordSpace' },
    wordWrap: { property: 'wordWrap' },
    wordBreak: { property: 'wordBreak' },
    whiteSpace: { property: 'whiteSpace' },
    lineClamp: { property: 'lineClamp' },
    lineBreak: { property: 'lineBreak' },
    fontFam: { property: 'fontFamily' },
    fontSize: { property: 'fontSize' },
    

}

export const typography = system<TypographyProps>(config)
