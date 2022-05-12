import {Layout} from '@core/styles';
import React from 'react';
import {ScrollViewProps} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

export default function BaseScrollView(props: ScrollViewProps) {
  const layout = Layout();
  const {children} = props;
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}
      showsVerticalScrollIndicator={false}
      {...props}>
      {children}
    </ScrollView>
  );
}
