import { Property as CSS } from 'csstype'
import { system, Config, ResponsiveValue, ThemeType } from '@styled-system/core'

export interface LayoutProps<Theme extends ThemeType = ThemeType> {

    w?: ResponsiveValue<CSS.Width, Theme>
    minW?: ResponsiveValue<CSS.MinWidth, Theme>
    maxW?: ResponsiveValue<CSS.MaxWidth, Theme>
    h?: ResponsiveValue<CSS.Height, Theme>
    minH?: ResponsiveValue<CSS.MinHeight, Theme>
    maxH?: ResponsiveValue<CSS.MaxHeight, Theme>
    s?: ResponsiveValue<CSS.Width | CSS.Height, Theme>
    d?: ResponsiveValue<CSS.Display, Theme>
    vAlign?: ResponsiveValue<CSS.VerticalAlign, Theme>
    overflow?: ResponsiveValue<CSS.Overflow, Theme>
}

const config: Config<LayoutProps> = {

    w: { property: 'width' },
    minW: { property: 'minWidth' },
    maxW: { property: 'maxWidth' },
    h: { property: 'height' },
    minH: { property: 'minHeight' },
    maxH: { property: 'maxHeight' },
    s: { properties: ['width', 'height'] },
    d: { property: 'display' },
    vAlign: { property: 'verticalAlign' },
    overflow: { property: 'overflow' },
}

export const layout = system<LayoutProps>(config)
