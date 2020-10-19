import { Property as CSS } from 'csstype'
import { system, Config, ResponsiveValue, ThemeType } from '@styled-system/core'

export interface GridProps<Theme extends ThemeType = ThemeType> {

    gap?: ResponsiveValue<CSS.Gap, Theme>
    gArea?: ResponsiveValue<CSS.Gridarea, Theme>
    gAutoCol?: ResponsiveValue<CSS.Gridautocolumns, Theme>
    gAutoRow?: ResponsiveValue<CSS.Gridautorows, Theme>
    gAutoFlow?: ResponsiveValue<CSS.Gridautoflow, Theme>
    gColStart?: ResponsiveValue<CSS.Gridcolumnstart, Theme>
    gColEnd?: ResponsiveValue<CSS.Gridcolumnend, Theme>
    gCol?: ResponsiveValue<CSS.Gridcolumn, Theme>
    gRowStart?: ResponsiveValue<CSS.Gridrowstart, Theme>
    gRowEnd?: ResponsiveValue<CSS.Gridrowend, Theme>  

}

const config: Config<GridProps> = {

    gap: { property: 'gap' },
    gArea: { property: 'gridArea' },
    gAutoCol: { property: 'gridAutoColumns' },
    gAutoRow: { property: 'gridAutoRows' },
    gAutoFlow: { property: 'gridAutoFlow' },
    gColStart: { property: 'gridColumnStart' },
    gColEnd: { property: 'gridColumnEnd' },
    gCol: { property: 'gridColumn' },
    gRowStart: { property: 'gridRowStart' },
    gRowEnd: { property: 'gridRowEnd' },

}

export const grid = system<GridProps>(config)
