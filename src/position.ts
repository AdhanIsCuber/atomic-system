import { Property as CSS } from 'csstype'
import { system, Config, ResponsiveValue, ThemeType } from '@styled-system/core'

export interface PositionProps<Theme extends ThemeType = ThemeType> {

    float?: ResponsiveValue<CSS.Float, Theme>
    posi?: ResponsiveValue<CSS.Position, Theme>
    z?: ResponsiveValue<CSS.Zindex, Theme>
    top?: ResponsiveValue<CSS.Top, Theme>
    right?: ResponsiveValue<CSS.Right, Theme>
    bottom?: ResponsiveValue<CSS.Bottom, Theme>
    left?: ResponsiveValue<CSS.Left, Theme>
    animation?: ResponsiveValue<CSS.Animation, Theme>
    vAlign?: ResponsiveValue<CSS.Verticalalign, Theme>
    overflow?: ResponsiveValue<CSS.Overflow, Theme> 

}

const config: Config<PositionProps> = {
    
    float: { property: 'float' },
    posi: { property: 'position' },
    z: { property: 'zIndex' },
    top: { property: 'top' },
    right: { property: 'right' },
    bottom: { property: 'bottom' },
    left: { property: 'left' },
    animation: { property: 'animation' },
    vAlign: { property: 'verticalAlign' },
    overflow: { property: 'overflow' },    

}

export const position = system<PositionProps>(config)
