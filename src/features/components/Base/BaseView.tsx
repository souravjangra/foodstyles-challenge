import {StatusBar} from '@features/components/StatusBar';
import React from 'react';
import {StatusBarStyle, StyleProp, View, ViewStyle} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export type Edge = 'top' | 'right' | 'bottom' | 'left';

interface BaseViewProps {
  edges?: Edge[];
  barStyle?: null | StatusBarStyle | undefined;
  style?: StyleProp<ViewStyle> | undefined;
  children?: React.ReactElement;
}

const BaseView = (props: BaseViewProps) => {
  const {edges, barStyle, children, style} = props;

  const renderStatusBar = () => (
    <StatusBar
      barStyle={barStyle}
      translucent={true}
      backgroundColor={'transparent'}
    />
  );

  return edges?.length === 0 ? (
    <View style={style}>
      {renderStatusBar()}
      {children}
    </View>
  ) : (
    <SafeAreaView edges={edges} style={style}>
      {renderStatusBar()}
      {children}
    </SafeAreaView>
  );
};

export default BaseView;
