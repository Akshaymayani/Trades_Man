import {
    CheckBox,
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';

import CustomCheckbox from '../../components/Checkbox';
import FormInput from '../../components/FormInput'; // Importing reusable component
import { useForm } from 'react-hook-form';

const SignUpScreen = ({ navigation }) => {
    const { control, handleSubmit, setValue } = useForm();
    //   const [isChecked, setChecked] = useState(false);

    const onSubmit = (data) => {
        console.log(data);
        navigation.navigate('VerifyCode');
    };

    const handleSignin = () => {
        navigation.navigate('Login');
    };
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <ScrollView style={{ flex: 1 }}>
                {/* Top Image */}
                <View style={styles.imageContainer}>
                    <Image
                        source={require('../../assets/SignupBg.png')}
                        style={styles.image}
                        alt="background image"
                        resizeMode="cover"
                    />
                    <View style={styles.nestImageContainer}>
                        <Image
                            source={require('../../assets/SignupMan.png')}
                            style={styles.image}
                            alt="background image"
                            resizeMode="cover"
                        />
                    </View>
                </View>

                {/* Form Section */}
                <View style={styles.formContainer}>
                    <Text style={styles.title}>Sign up</Text>
                    <View style={styles.mainForm}>
                        <FormInput
                            label="First Name"
                            control={control}
                            name="firstName"
                            placeholder="John"
                            rules={{
                                required: 'First name is required',
                                minLength: {
                                    value: 2,
                                    message: 'First name should be at least 2 characters long',
                                },
                            }}
                        />
                        <FormInput
                            label="Last Name"
                            control={control}
                            name="lastName"
                            placeholder="Doe"
                            rules={{
                                required: 'Last name is required',
                                minLength: {
                                    value: 2,
                                    message: 'Last name should be at least 2 characters long',
                                },
                            }}
                        />
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
                            placeholder="••••••••"
                            secureTextEntry
                            rules={{
                                required: 'Password is required',
                                minLength: {
                                    value: 8,
                                    message: 'Password should be at least 8 characters long',
                                },
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                    message: 'Password should contain at least one uppercase letter, one lowercase letter, one number, and one special character',
                                },
                            }}
                        />

                        {/* Checkbox for Terms & Conditions */}
                        <View style={styles.checkboxContainer}>
                            {/* <CheckBox value={isChecked} onValueChange={setChecked} /> */}
                            <CustomCheckbox
                                onCheck={(checked) => console.log('Checked:', checked)}
                                control={control}
                                name="terms"
                            >
                                <View>
                                    <Text style={styles.checkboxText}>
                                        By clicking here you agree to our{' '}
                                        <Text style={styles.termsText}>Terms & Condition</Text>
                                    </Text>
                                </View>
                            </CustomCheckbox>

                        </View>

                        <TouchableOpacity
                            style={styles.button}
                            onPress={handleSubmit(onSubmit)}
                            activeOpacity={0.6}
                        >
                            <Text style={styles.buttonText}>Sign up</Text>
                        </TouchableOpacity>
                        <Text style={styles.infoText}>
                            We will share OTP to your Email ID for authentication
                        </Text>

                        {/* Login Text */}
                        <View style={styles.loginTextContainer}>
                            <Text style={styles.loginText}>
                                Already have an account? <Text onPress={handleSignin} style={styles.linkText}>Login</Text>
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    imageContainer: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#fff',
        height: 280,
        zIndex: 9999999,
    },
    nestImageContainer: {
        position: 'absolute',
        alignSelf: 'center',
        width: 170,
        marginBottom: 20,
        height: 200,
        zIndex: 444,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    mainForm: {
        marginTop: 12,
    },
    formContainer: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 30,
        paddingVertical:10,
        borderRadius: 12,
        backgroundColor: '#fff',
        position:'relative',
    },
    title: {
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: 28,
        lineHeight: 42,
        letterSpacing: 2,
        paddingLeft: 6,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        width: '100%',
        flexWrap: 'wrap',
    },
    checkboxText: {
        fontSize: 14,
        color: '#333',
        marginLeft: 2,
        flexWrap: 'wrap',
    },
    termsText: {
        fontFamily: 'Poppins',
        fontWeight: '900',
        fontSize: 14,
        lineHeight: 21,
        letterSspacing: 0.78,
        color: '#314FA4',
    },
    loginTextContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    loginText: {
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.89,
        textAlign: 'center',
        marginTop: 12,
    },

    button: {
        backgroundColor: '#314FA4',
        padding: 15,
        borderRadius: 30,
        alignItems: 'center',
        // marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontFamily: 'Poppins',
        fontWeight: '600',
        fontSize: 18,
        letterSpacing: 1,
    },
    infoText: {
        fontFamily: 'Poppins',
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 18,
        letterSpacing: -0.3,
        textAlign: 'center',
        marginTop: 6,
    },
    linkText: {
        textAlign: 'center',
        marginTop: 15,
        fontFamily: 'Poppins',
        fontWeight: '900',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.89,
        color:'#314FA4',
    },
});

export default SignUpScreen;
