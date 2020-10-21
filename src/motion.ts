import { Property as CSS } from 'csstype'
import { system, Config, ResponsiveValue, ThemeType } from '@styled-system/core'

export interface MotionProps<Theme extends ThemeType = ThemeType> {
    transform?: ResponsiveValue<CSS.Transform, Theme>
    transformOrigin?: ResponsiveValue<CSS.TransformOrigin, Theme>
    transition?: ResponsiveValue<CSS.Transition, Theme>
    tProperty?: ResponsiveValue<CSS.TransitionProperty, Theme>
    tDuration?: ResponsiveValue<CSS.TransitionDuration, Theme>
    tTimingFunction?: ResponsiveValue<CSS.TransitionTimingFunction, Theme>
    tDelay?: ResponsiveValue<CSS.TransitionDelay, Theme>
    animation?: ResponsiveValue<CSS.Animation, Theme>
}

const config: Config<MotionProps> = {
    transform: true,
    transformOrigin: { property: 'transformOrigin' },
    transition: { property: 'transition' },
    tProperty: { property: 'transitionProperty' },
    tDuration: { property: 'transitionDuration' },
    tTimingFunction: { property: 'transitionTimingFunction' },
    tDelay: { property: 'transitionDelay' },
    animation:  true,
}

export const motion = system<MotionProps>(config)
