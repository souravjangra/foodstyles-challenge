import {pv} from '@application/utils/constants';
import {Colors} from '@core/styles';
import React from 'react';
import {TextInput, TextInputProps, View} from 'react-native';
import {Spacer} from '../Spacer';
import {Typography} from '../Typography';
import {styles} from './Style';

type TextFieldVariants = 'primary' | 'secondary';

interface TextFieldProps extends TextInputProps {
  label: string;
  error: string;
  touched: boolean;
  variant: TextFieldVariants;
}

const TextField = React.forwardRef(
  (props: TextFieldProps, ref: React.Ref<TextInput>) => {
    const {label, touched, error, variant} = props;

    return (
      <View>
        {label && (
          <Typography
            variant={variant === 'primary' ? 'label' : 'labelSecondary'}>
            {label}
          </Typography>
        )}
        <Spacer value={pv(7)} />
        <TextInput
          ref={ref}
          underlineColorAndroid={'transparent'}
          style={[
            variant === 'primary'
              ? styles.textInput
              : styles.textInputSecondary,
            {
              borderColor:
                (touched != null || touched !== undefined) &&
                !touched &&
                error != null
                  ? Colors.RED
                  : `rgba(0, 0, 0, 0.1)`,
            },
          ]}
          {...props}
        />
        {(touched != null || touched !== undefined) &&
          !touched &&
          error != null && <Typography variant="error">{error}</Typography>}
      </View>
    );
  },
);

TextField.defaultProps = {
  variant: 'primary',
};

export default TextField;
