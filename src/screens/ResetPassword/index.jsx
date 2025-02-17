/* eslint-disable react-native/no-inline-styles */
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import FormInput from '../../components/FormInput';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ResetPasswordScreen = () => {
    const { control, handleSubmit } = useForm();
    const navigation = useNavigation();
    const Top = useSafeAreaInsets().top;

    // Handle form submission
    const onSubmit = (data) => {
        console.log('New Password:', data.newPassword);
        console.log('Confirm Password:', data.confirmPassword);
        // Add your password update logic here
    };

    return (
        <KeyboardAvoidingView
            style={[styles.container]}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
        <ScrollView contentContainerStyle={{ flex: 1,paddingTop:Top }}>
        <StatusBar
           translucent={true} 
           backgroundColor="transparent"
           barStyle="dark-content"
        />
                <View style={styles.topContainer}>
                    {/* Back Arrow */}
                    <View style={styles.topImageContainer}>
                        <Image
                            source={require('../../assets/SignupBg.png')}
                            style={styles.topImage}
                            resizeMode="cover"
                        />
                        <View style={styles.nestedImageContainer}>
                            <Image
                                source={require('../../assets/verifyCodeBg.png')}
                                style={styles.nestedImage}
                                resizeMode="contain"
                            />
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                        {/*<Text style={styles.backArrow}>{'<'} </Text>*/}
                        <Icon name="keyboard-backspace" size={32} color="#000" />
                    </TouchableOpacity>
                </View>


                <View style={styles.mainContainer}>
                    {/* Title and Subtitle */}
                    <View style={styles.headerContainer}>
                        <Text style={styles.title}>Reset Password?</Text>
                        <Text style={styles.subtitle}>
                            Your new password must be different from previous used password,
                            contain at least 8 letters.
                        </Text>
                    </View>

                    {/* Form Inputs and Confirm Button */}
                    <View style={styles.formContainer}>
                        <FormInput
                            label="New Password"
                            control={control}
                            name="newPassword"
                            placeholder="********"
                            secureTextEntry
                            rules={{
                                required: 'New password is required',
                                minLength: {
                                    value: 8,
                                    message: 'Password must be at least 8 characters long',
                                },
                            }}
                        />

                        <FormInput
                            label="Confirm Password"
                            control={control}
                            name="confirmPassword"
                            placeholder="********"
                            secureTextEntry
                            rules={{
                                required: 'Please confirm your password',
                                minLength: {
                                    value: 8,
                                    message: 'Password must be at least 8 characters long',
                                },
                            }}
                        />

                        <TouchableOpacity style={styles.confirmButton} onPress={handleSubmit(onSubmit)}>
                            <Text style={styles.confirmButtonText}>Confirm</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default ResetPasswordScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    topContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    backButton: {
        padding: 5,
        position: 'absolute',
        top: 21,
        left: 25,
    },
    backArrow: {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold',
    },
    topImageContainer: {
        width: '100%',
        height: 220,
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    topImage: {
        width: '100%',
        height: '100%',
    },
    nestedImageContainer: {
        position: 'absolute',
        width: 150,
        height: 150,
        alignSelf: 'center',
    },
    nestedImage: {
        width: '100%',
        height: '100%',
    },
    mainContainer: {
        paddingHorizontal: 30,
    },
    headerContainer: {
        marginTop: 20,
        marginBottom: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: '600',
        marginBottom: 8,
        color: '#000',
        letterSpacing:2,
        lineHeight:42,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        lineHeight: 20,
        fontFamily: 'Poppins',
        fontWeight: '400',
        letterSpacing: 0,
    },
    formContainer: {
        // You can adjust margins or spacing as needed
        marginBottom: 30,
    },
    confirmButton: {
        backgroundColor: '#314FA4',
        paddingVertical: 12,
        borderRadius: 30,
        alignItems: 'center',
        marginTop: 20,
    },
    confirmButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '800',
        fontSamily: 'Poppins',
        lineHeight: 27,
        letterSpacing: 1,
        textAlign: 'center',
    },
});
