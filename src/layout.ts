import { Property as CSS } from 'csstype'
import { system, Config, ResponsiveValue, ThemeType } from '@styled-system/core'

export interface LayoutProps<Theme extends ThemeType = ThemeType> {

    w?: ResponsiveValue<CSS.Width, Theme>
    minW?: ResponsiveValue<CSS.Minwidth, Theme>
    maxW?: ResponsiveValue<CSS.Maxwidth, Theme>
    h?: ResponsiveValue<CSS.Height, Theme>
    minH?: ResponsiveValue<CSS.Minheight, Theme>
    maxH?: ResponsiveValue<CSS.Maxheight, Theme>
    s?: ResponsiveValue<CSS.Width, Height, Theme>
    d?: ResponsiveValue<CSS.Display, Theme>
    vAlign?: ResponsiveValue<CSS.Verticalalign, Theme>
    overflow?: ResponsiveValue<CSS.Overflow, Theme>  

}

const config: Config<LayoutProps> = {

    w: { property: 'width' },
    minW: { property: 'minWidth' },
    maxW: { property: 'maxWidth' },
    h: { property: 'height' },
    minH: { property: 'minHeight' },
    maxH: { property: 'maxHeight' },
    s: { property: 'width', 'height'},
    d: { property: 'display' },
    vAlign: { property: 'verticalAlign' },
    overflow: { property: 'overflow' },    

}

export const layout = system<LayoutProps>(config)
