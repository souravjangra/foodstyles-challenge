import React from 'react';
import {View} from 'react-native';

interface SpacerProps {
  value: number | undefined;
  direction: 'horizontal' | 'vertical';
}

const Spacer = (props: SpacerProps) => {
  const {direction, value} = props;
  return direction === 'horizontal' ? (
    <View width={value} />
  ) : (
    <View height={value} />
  );
};

Spacer.defaultProps = {
  direction: 'vertical',
};

export default Spacer;
