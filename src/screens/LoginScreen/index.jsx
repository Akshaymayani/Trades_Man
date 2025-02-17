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
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const { control, handleSubmit } = useForm();
    const navigation = useNavigation();

    const onSubmit = (data) => {
        console.log('User Data:', data);
    };

    const handleForgotPassword = () => {
        navigation.navigate('ForgotPassword');
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            {/* Make StatusBar transparent */}
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />

            <ScrollView
                contentContainerStyle={styles.scrollViewContainer}
                keyboardShouldPersistTaps="handled"
            >
                {/* Image Section */}
                <View style={styles.imageContainer}>
                    <Image
                        source={require('../../assets/SignupBg.png')}
                        style={styles.image}
                        resizeMode="cover"
                    />
                    <View style={styles.nestImageContainer}>
                        <Image
                            source={require('../../assets/SignupMan.png')}
                            style={styles.image}
                            resizeMode="cover"
                        />
                    </View>
                </View>

                {/* Form Section */}
                <View style={styles.formContainer}>
                    <Text style={styles.title}>Login</Text>

                    <FormInput
                        label="Email"
                        control={control}
                        name="email"
                        placeholder="example@email.com"
                        keyboardType="email-address"
                        rules={{
                            required: 'Email is required',
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: 'Please enter a valid email',
                            },
                        }}
                    />

                    <FormInput
                        label="Password"
                        control={control}
                        name="password"
                        placeholder="Enter your password"
                        secureTextEntry
                        rules={{
                            required: 'Password is required',
                            minLength: {
                                value: 8,
                                message: 'Password must be at least 8 characters long',
                            },
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                                message:
                                    'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
                            },
                        }}
                    />

                    <TouchableOpacity style={styles.forgotPassword} onPress={handleForgotPassword}>
                        <Text style={styles.forgotText}>Forgot password?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.loginButton} onPress={handleSubmit(onSubmit)}>
                        <Text style={styles.loginText}>Login</Text>
                    </TouchableOpacity>

                    {/* Signup Text at Bottom */}
                    <View style={styles.signupContainer}>
                        <Text style={styles.signupText}>Don’t have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                            <Text style={styles.signupLink}> Signup</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollViewContainer: {
        flex: 1,
    },
    imageContainer: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 280,
        backgroundColor: '#fff',
    },
    nestImageContainer: {
        position: 'absolute',
        alignSelf: 'center',
        width: 170,
        height: 200,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    formContainer: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 30,
        justifyContent: 'flex-start',
        position: 'relative',
    },
    title: {
        marginTop: 15,
        fontFamily: 'Poppins',
        fontWeight: '900',
        fontSize: 28,
        lineHeight: 42,
        letterSpacing: 2,
    },
    forgotPassword: {
        marginTop: 10,
        alignSelf: 'flex-end',
    },
    forgotText: {
        color: '#314FA4',
        fontWeight: '800',
        fontSize: 16,
        textAlign: 'right',
    },
    loginButton: {
        backgroundColor: '#314FA4',
        paddingVertical: 12,
        borderRadius: 30,
        alignItems: 'center',
        marginTop: 20,
    },
    loginText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    signupContainer: {
        position: 'absolute',
        bottom: 30,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    signupText: {
        fontSize: 16,
        color: '#000',
    },
    signupLink: {
        color: '#314FA4',
        fontWeight: '700',
        fontSize: 16,
    },
});

export default LoginScreen;
