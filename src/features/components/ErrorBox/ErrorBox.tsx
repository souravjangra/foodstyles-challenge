import React from 'react';
import {View} from 'react-native';
import {Typography} from '../Typography';
import {styles} from './Style';

interface ErrorBoxProps {
  error: string | null;
}

const ErrorBox = (props: ErrorBoxProps) => {
  const {error} = props;
  return (
    <View style={styles.errorBox}>
      <Typography variant="label" style={styles.errorText}>
        {error}
      </Typography>
    </View>
  );
};

export default ErrorBox;
