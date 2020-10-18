import { Property as CSS } from 'csstype';
import {
  system,
  Config,
  ResponsiveValue,
  ThemeType,
} from '@styled-system/core';

export interface FlexboxProps<Theme extends ThemeType = ThemeType> {
  fDir?: ResponsiveValue<CSS.FlexDirection, Theme>;
  f?: ResponsiveValue<CSS.Flex, Theme>;
  fGrow?: ResponsiveValue<CSS.FlexGrow, Theme>;
  fShrink?: ResponsiveValue<CSS.FlexShrink, Theme>;
  fJustify?: ResponsiveValue<CSS.JustifyContent, Theme>;
  fJSelf?: ResponsiveValue<CSS.JustifySelf, Theme>;
  fAlign?: ResponsiveValue<CSS.AlignItems, Theme>;
  fASelf?: ResponsiveValue<CSS.AlignSelf, Theme>;
  fWrap?: ResponsiveValue<CSS.FlexWrap, Theme>;
  order?: ResponsiveValue<CSS.Order, Theme>;
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
};

export const interaction = system<FlexboxProps>(config);
