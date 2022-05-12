import {useIsFocused} from '@react-navigation/core';
import React from 'react';
import {StatusBar as RNStatusBar, StatusBarProps} from 'react-native';

export default function StatusBar(props: StatusBarProps) {
  const isFocused = useIsFocused();
  return isFocused ? <RNStatusBar animated={true} {...props} /> : null;
}
