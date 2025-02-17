import {
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import FormInput from '../../components/FormInput'; // Adjust path to your custom FormInput
import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ForgotPasswordScreen = ({ navigation }) => {
    const { control, handleSubmit } = useForm();
    const Top = useSafeAreaInsets().top;
    // Handle form submission
    const onSubmit = (data) => {
        console.log('Email:', data.email);
        navigation.navigate('ResetPassword');
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView contentContainerStyle={{ flex: 1,paddingTop:Top }}>
                {/* Top Illustration */}
                <View style={styles.topContainer}>
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
                        <Text style={styles.title}>Forgot Password?</Text>
                        <Text style={styles.subtitle}>
                            Enter your registered email id, we will share verification code.
                        </Text>
                    </View>

                    {/* Email Input and Submit Button */}
                    <View style={styles.formContainer}>
                        <FormInput
                            label="Email"
                            control={control}
                            name="email"
                            placeholder="johndoe@mail.com"
                            keyboardType="email-address"
                            rules={{
                                required: 'Email is required',
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: 'Please enter a valid email',
                                },
                            }}
                        />

                        <TouchableOpacity
                            style={styles.submitButton}
                            onPress={handleSubmit(onSubmit)}
                            activeOpacity={0.6}
                        >
                            <Text style={styles.submitButtonText}>Submit</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Bottom Link: "Remember Password? Login" */}
                    <View style={styles.bottomContainer}>
                        <Text style={styles.rememberText}>Remember Password?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.loginText}> Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default ForgotPasswordScreen;

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
    topImageContainer: {
        width: '100%',
        height: 294,
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
        width: 170,
        height: 160,
        alignSelf: 'center',
    },
    nestedImage: {
        width: '100%',
        height: '100%',
    },
    mainContainer: {
        flex: 1,
        paddingHorizontal: 30,
        paddingTop: 20,
        position: 'relative',
    },
    headerContainer: {
        marginBottom: 20,
    },
    title: {
        marginBottom: 8,
        color: '#000',
        fontFamily: 'Poppins',
        fontWeight: '900',
        fontSize: 28,
        lineHeight: 42,
        letterSpacing: 2,
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
        lineHeight: 20,
    },
    formContainer: {
        marginBottom: 30,
    },
    submitButton: {
        backgroundColor: '#314FA4',
        paddingVertical: 12,
        borderRadius: 30,
        alignItems: 'center',
        marginTop: 20,
    },
    submitButtonText: {
        color: '#FFFFFF',
        fontFamily: 'Poppins',
        fontWeight: 600,
        fontSize: 18,
        lineHeight: 27,
        letterSpacing: 1,
        textAlign: 'center',
    },
    bottomContainer: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    rememberText: {
        fontSize: 16,
        color: '#000',
    },
    loginText: {
        fontSize: 16,
        color: '#314FA4',
        fontWeight: '800',
        lineHeight: 24,
        fontFamily: 'Poppins',
        letterSpacing: 0.89,
    },
});
