/* eslint-disable react/react-in-jsx-scope */
import { StyleSheet, Text, View } from 'react-native';

import { Controller } from 'react-hook-form';
import React from 'react';
import { TextInput } from 'react-native-paper';

export default function FormInput({ control, name, rules={}, ...rest }) {
    return (
        <View style={styles.container}>
            <Controller
                control={control}
                rules={rules}
                name={name}
                render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                    <React.Fragment>
                        <View style={styles.inputContainer}>
                            <TextInput
                                // placeholder={placeholder}
                                onChangeText={onChange}
                                value={value}
                                style={styles.input}
                                theme={{ colors: { primary: '#fff' } }}
                                underlineColor="transparent"
                                activeUnderlineColor="#2D60FF"
                                {...rest}
                            />
                        </View>
                        {error &&
                            <View style={styles.errorContainer}>
                                <Text style={styles.errorText}>{error.message || 'This is required.'}
                                </Text>
                            </View>
                        }
                    </React.Fragment>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 1,
    },
    label: {
        fontSize: 14,
        color: '#333',
    },
    inputContainer: {
        borderBottomWidth: 1,
        borderColor: '#B3B3B3',
        borderRadius: 5,
    },
    input: {
        backgroundColor: '#fff',
        // height: 40,
        fontSize: 14,
        paddingHorizontal: 10,
    },
    errorContainer: {
        marginTop: 3,
    },
    errorText: {
        fontSize: 11,
        color: 'red',
    },
});
