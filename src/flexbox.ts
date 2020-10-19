import { Property as CSS } from 'csstype'
import { system, Config, ResponsiveValue, ThemeType } from '@styled-system/core'

export interface FlexboxProps<Theme extends ThemeType = ThemeType> {
  
    fDir?: ResponsiveValue<CSS.Flexdirection, Theme>
    f?: ResponsiveValue<CSS.Flex, Theme>
    fGrow?: ResponsiveValue<CSS.Flexgrow, Theme>
    fShrink?: ResponsiveValue<CSS.Flexshrink, Theme>
    fJustify?: ResponsiveValue<CSS.Justifycontent, Theme>
    fJSelf?: ResponsiveValue<CSS.Justifyself, Theme>
    fAlign?: ResponsiveValue<CSS.Alignitems, Theme>
    fASelf?: ResponsiveValue<CSS.Alignself, Theme>
    fWrap?: ResponsiveValue<CSS.Flexwrap, Theme>
    order?: ResponsiveValue<CSS.Order, Theme>

}

const config: Config<FlexboxProps> = {

    fDir: { property: 'flexDirection' },
    f: { property: 'flex' },
    fGrow: { property: 'flexGrow' },
    fShrink: { property: 'flexShrink' },
    fJustify: { property: 'justifyContent' },
    fJSelf: { property: 'justifySelf' },
    fAlign: { property: 'alignItems' },
    fASelf: { property: 'alignSelf' },
    fWrap: { property: 'flexWrap' },
    order: { property: 'order' },   

}

export const flexbox = system<FlexboxProps>(config)
