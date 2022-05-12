import React from 'react';
import {View} from 'react-native';
import {Typography} from '../Typography';
import {styles} from './Style';

interface SuccessBoxProps {
  message: string | null;
}

const SuccessBox = (props: SuccessBoxProps) => {
  const {message} = props;
  return (
    <View style={styles.successBox}>
      <Typography variant="label" style={styles.successText}>
        {message}
      </Typography>
    </View>
  );
};

export default SuccessBox;
