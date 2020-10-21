import { Property as CSS } from 'csstype'
import { system, Config, ResponsiveValue, ThemeType } from '@styled-system/core'

export interface ListProps<Theme extends ThemeType = ThemeType> {
  list?: ResponsiveValue<CSS.ListStyle, Theme>
  listPosi?: ResponsiveValue<CSS.ListStylePosition, Theme>
  listImage?: ResponsiveValue<CSS.ListStyleImage, Theme>
  listType?: ResponsiveValue<CSS.ListStyleType, Theme>
}

const config: Config<ListProps> = {
  list: { property: 'listStyle' },
  listPosi: { property: 'listStylePosition' },
  listImage: { property: 'listStyleImage' },
  listType: { property: 'listStyleType' },
}

export const list = system<ListProps>(config)
