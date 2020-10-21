import { Property as CSS } from 'csstype'
import { system, Config, ResponsiveValue, ThemeType } from '@styled-system/core'

export interface MotionProps<Theme extends ThemeType = ThemeType> {

    transform?: ResponsiveValue<CSS.Transform, Theme>
    transformOrigin?: ResponsiveValue<CSS.Transformorigin, Theme>
    transition?: ResponsiveValue<CSS.Transition, Theme>
    tProperty?: ResponsiveValue<CSS.Transitionproperty, Theme>
    tDuration?: ResponsiveValue<CSS.Transitionduration, Theme>
    tTimingFunction?: ResponsiveValue<CSS.Transitiontimingfunction, Theme>
    tDelay?: ResponsiveValue<CSS.Transitiondelay, Theme>
    animation?: ResponsiveValue<CSS.Animation, Theme>
    vAlign?: ResponsiveValue<CSS.Verticalalign, Theme>
    overflow?: ResponsiveValue<CSS.Overflow, Theme>  

}

const config: Config<MotionProps> = {
    
    transform: { property: 'transform' },
    transformOrigin: { property: 'transformOrigin' },
    transition: { property: 'transition' },
    tProperty: { property: 'transitionProperty' },
    tDuration: { property: 'transitionDuration' },
    tTimingFunction: { property: 'transitionTimingFunction' },
    tDelay: { property: 'transitionDelay' },
    animation: { property: 'animation' },
    vAlign: { property: 'verticalAlign' },
    overflow: { property: 'overflow' },
    

}

export const motion = system<MotionProps>(config)
