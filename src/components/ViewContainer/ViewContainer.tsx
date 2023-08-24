import React from 'react';
import {View, ViewStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface ViewContainerProps {
  children: string | JSX.Element | JSX.Element[];
  styles?: ViewStyle;
  withTabs?: boolean;
  isPadingTop?: boolean;
  isPadingBottom?: boolean;
  isPadingLeft?: boolean;
  isPadingRight?: boolean;
}

export const ViewContainer = (props: ViewContainerProps) => {
  const {
    children,
    styles,
    withTabs = true,
    isPadingTop = true,
    isPadingBottom,
    isPadingLeft,
    isPadingRight,
  } = props;

  const {top, bottom, left, right} = useSafeAreaInsets();

  const bottomPad = withTabs ? 0 : bottom;

  const pads = {
    paddingTop: isPadingTop ? top : 0,
    paddingBottom: isPadingBottom ? bottom : 0,
    paddingLeft: isPadingLeft ? left : 0,
    paddingRight: isPadingRight ? right : 0,
  };

  return <View style={[styles, pads, {flex: 1}]}>{children}</View>;
};
