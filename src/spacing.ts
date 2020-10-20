import {Property as CSS} from 'csstype'
import {system, Config, ResponsiveValue, ThemeType} from '@styled-system/core'

export interface SpacingProps<Theme extends ThemeType = ThemeType>{
    m?: ResponsiveValue<CSS.Margin, Theme>
    mt?: ResponsiveValue<CSS.MarginTop, Theme>
    mr?: ResponsiveValue<CSS.MarginRight, Theme>
    mb?: ResponsiveValue<CSS.MarginBottom, Theme>
    ml?: ResponsiveValue<CSS.MarginLeft, Theme>
    mx?: ResponsiveValue<CSS.MarginRight, MarginLeft, Theme>
    my?: ResponsiveValue<CSS.MarginTop, MarginBottom, Theme>
    p?: ResponsiveValue<CSS.Padding, Theme>
    pt?: ResponsiveValue<CSS.PaddingTop, Theme>
    pr?: ResponsiveValue<CSS.PaddingRight, Theme>
    pb?: ResponsiveValue<CSS.PaddingBottom, Theme>
    pl?: ResponsiveValue<CSS.PaddingLeft, Theme>
    px?: ResponsiveValue<CSS.PaddingRight,PaddingLeft, Theme>
    py?: ResponsiveValue<CSS.PaddingTop,paddingBottom Theme>
}

const config: Config<SpacingProps> = {
    m: { property: 'margin' },
    mt: {propery:'marginTop'},
    mr: { property: 'marginRight' },
    mb: {propery:'marginBottom'},
    ml: { property: 'marginLeft' },
    mx: {propery: 'marginRight','marginLeft'},
    my: { property: 'marginTop','marginBottom'},
    p: { property: 'padding' },
    pt: {propery:'paddingTop'},
    pr: {propery:'paddingRight'},
    pb: { property: 'paddingBottom'},
    pl: {propery:'paddingLeft'},
    px: {property:'paddingRight, paddingLeft'},
    py: { property: 'paddingTop, paddingBottom' },    
  }
  export const Spacing = system<SpacingProps>(config)