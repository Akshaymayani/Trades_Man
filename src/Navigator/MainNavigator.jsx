// In App.js in a new project

import * as React from 'react';

import ErrorMsgScreen from '../screens/ErrorMsgScreen';
import ForgotPasswordScreen from '../screens/ForgotPassword';
import IncorrectOtpScreen from '../screens/IncorrectOtpScreen';
import LoginScreen from '../screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import OtpVerifiedScreen from '../screens/OtpVerifiedScreen';
import ResetPasswordScreen from '../screens/ResetPassword';
import ResetSuccessScreen from '../screens/ResetSuccessScreen';
import SignUpScreen from '../screens/SignupScreen';
import VerifyCodeScreen from '../screens/VerifyCode';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function MainNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                   name="Signup"
                   component={SignUpScreen}
                   options={{
                    headerShown:false,
                   }}
                />
                <Stack.Screen
                   name="VerifyCode"
                   component={VerifyCodeScreen}
                   options={{
                    headerShown:false,
                   }}
                />
                 <Stack.Screen
                   name="CodeVerified"
                   component={OtpVerifiedScreen}
                   options={{
                    headerShown:false,
                   }}
                />
                <Stack.Screen
                   name="ErrorScreen"
                   component={ErrorMsgScreen}
                   options={{
                    headerShown:false,
                   }}
                />
                <Stack.Screen
                   name="IncorrectOtp"
                   component={IncorrectOtpScreen}
                   options={{
                    headerShown:false,
                   }}
                />
                 <Stack.Screen
                   name="ResetSuccess"
                   component={ResetSuccessScreen}
                   options={{
                    headerShown:false,
                   }}
                />
                 <Stack.Screen
                   name="Login"
                   component={LoginScreen}
                   options={{
                    headerShown:false,
                   }}
                />
                 <Stack.Screen
                   name="ForgotPassword"
                   component={ForgotPasswordScreen}
                   options={{
                    headerShown:false,
                   }}
                />
                 <Stack.Screen
                   name="ResetPassword"
                   component={ResetPasswordScreen}
                   options={{
                    headerShown:false,
                   }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
