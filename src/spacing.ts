import {Property as CSS} from 'csstype'
import {system, Config, ResponsiveValue, ThemeType} from '@styled-system/core'

export interface SpacingProps<Theme extends ThemeType = ThemeType>{
    m?: ResponsiveValue<CSS.Background, Theme>
    mt?: ResponsiveValue<CSS.Background, Theme>
    mr?: ResponsiveValue<CSS.Background, Theme>
    mb?: ResponsiveValue<CSS.Background, Theme>
    ml?: ResponsiveValue<CSS.Background, Theme>
    mx?: ResponsiveValue<CSS.Background, Theme>
    my?: ResponsiveValue<CSS.Background, Theme>
    p?: ResponsiveValue<CSS.Background, Theme>
    pt?: ResponsiveValue<CSS.Background, Theme>
    pr?: ResponsiveValue<CSS.Background, Theme>
    pb?: ResponsiveValue<CSS.Background, Theme>
    pl?: ResponsiveValue<CSS.Background, Theme>
    px?: ResponsiveValue<CSS.Background, Theme>
    py?: ResponsiveValue<CSS.Background, Theme>
}

const config: Config<SpacingProps> = {
    m: { property: 'margin' },
    mt: {propery:'marginTop'},
    mr: { property: 'marginRight' },
    mb: {propery:'marginBottom'},
    ml: { property: 'marginLeft' },
    mx: {propery:'marginRight','marginLeft'},
    my: { property: 'marginTop','marginBottom'},
    p: { property: 'padding' },
    pt: {propery:'paddingTop'},
    pr: {propery:'paddingRight'},
    pb: { property: 'paddingBottom' },
    pl: {propery:'paddingLeft'},
    px: {property:'paddingRight, paddingLeft'},
    py: { property: 'paddingTop, paddingBottom' },    
  }
  export const background = system<SpacingProps>(config)