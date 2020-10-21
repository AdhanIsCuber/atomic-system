import { Property as CSS } from 'csstype'
import { system, Config, ResponsiveValue, ThemeType } from '@styled-system/core'

export interface PositionProps<Theme extends ThemeType = ThemeType> {

    float?: ResponsiveValue<CSS.Float, Theme>
    posi?: ResponsiveValue<CSS.Position, Theme>
    z?: ResponsiveValue<CSS.ZIndex, Theme>
    top?: ResponsiveValue<CSS.Top, Theme>
    right?: ResponsiveValue<CSS.Right, Theme>
    bottom?: ResponsiveValue<CSS.Bottom, Theme>
    left?: ResponsiveValue<CSS.Left, Theme>
    vAlign?: ResponsiveValue<CSS.VerticalAlign, Theme>
    overflow?: ResponsiveValue<CSS.Overflow, Theme>

}

const config: Config<PositionProps> = {
    float: true,
    posi: { property: 'position' },
    z: { property: 'zIndex' },
    top: true,
    right: true,
    bottom: true,
    left: true,
    vAlign: { property: 'verticalAlign' },
    overflow: true,
}

export const position = system<PositionProps>(config)
