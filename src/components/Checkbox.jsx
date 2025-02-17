import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Controller } from 'react-hook-form';
import Icon from 'react-native-vector-icons/Feather';

const CustomCheckbox = ({ control, name, children, onCheck }) => {
  const [isChecked, setChecked] = useState(false);

  const toggleCheckbox = () => {
    setChecked(!isChecked);
    if (onCheck) {onCheck(!isChecked);}
  };

  return (
    <Controller
      control={control}
      rules={{
        required: true,
      }}
      name={name}
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
        <>
          <TouchableOpacity onPress={() => {
            onChange(!isChecked);
            toggleCheckbox();
          }} style={styles.container} activeOpacity={0.7}>
            {/* Checkbox */}
            <View style={[styles.checkbox, value && styles.checked]}>
              {value && <Icon name="check" size={14} color="#fff" />}
            </View>
            {children}
          </TouchableOpacity>

        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    width:'100%',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#314FA4',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  checked: {
    backgroundColor: '#314FA4',
    borderColor: '#314FA4',
  },
  label: {
    fontSize: 14,
    color: '#333',
  },
  checkboxText: {
    flexWrap: 'wrap',
    fontSize: 14,
    color: '#333',
    marginLeft: 2,
  },
  termsText: {
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.78, // Corrected spelling
  },
});

export default CustomCheckbox;
