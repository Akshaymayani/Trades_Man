import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';

import OtpTextInput from 'react-native-otp-textinput';

const VerifyCodeScreen = ({ navigation }) => {
  // State to store the OTP code
  const [otp, setOtp] = useState('');
  const otpInputRef = useRef(null);

  // TIMER STATE: 2 minutes 33 seconds = 153 seconds
  const [timeLeft, setTimeLeft] = useState(153);

  // useEffect for the countdown timer
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalId);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Cleanup the interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  // Format the time into (MM:SS)
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    // Return in the format (MM:SS), adding leading zeros if needed
    return `(${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds})`;
  };

  // Handle verify button press
  const onVerifyPress = () => {
    console.log('OTP Entered:', otp);
    navigation.navigate('CodeVerified');
    // Add your verification logic here
  };

  // Resend code handler
  const onResendPress = () => {
    console.log('Resend code tapped');
    // Example: reset the timer if you want
    setTimeLeft(153);
    // Add your resend logic here
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Top Image Section */}
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

      {/* Main Content */}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Verify Code</Text>
        <Text style={styles.subTitle}>
          Check your Email Inbox we have sent you the code at{' '}
          <Text style={styles.highlightedText}>john*****com</Text>
        </Text>

        {/* OTP Input */}
        <View style={styles.otpContainer}>
          <OtpTextInput
            ref={otpInputRef}
            containerStyle={styles.otpBoxesContainer}
            textInputStyle={styles.otpBox}
            handleTextChange={(text) => setOtp(text)}
            inputCount={4}
            tintColor="#314FA4"
          />
        </View>

        {/* Timer */}
        <Text style={styles.timer}>{formatTime(timeLeft)}</Text>

        {/* Resend Link */}
        <View style={styles.resendContainer}>
          <Text style={styles.resendText}>Did not receive the code? </Text>
        </View>
        <TouchableOpacity style={styles.resendLinkContainer} onPress={onResendPress}>
          <Text style={styles.resendLinkText}>Resend Code</Text>
        </TouchableOpacity>

        {/* Verify Button */}
        <TouchableOpacity
          style={styles.verifyButton}
          onPress={onVerifyPress}
          activeOpacity={0.6}
        >
          <Text style={styles.verifyButtonText}>Verify</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default VerifyCodeScreen;
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
    },

    /* Top Image Section */
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
    contentContainer: {
        marginTop: 10,
        paddingHorizontal: 30,
        paddingTop: 10,
    },
    title: {
        fontSize: 26,
        fontWeight: '700',
        color: '#000',
        marginBottom: 10,
    },
    subTitle: {
        color: '#343434',
        lineHeight: 20,
        marginBottom: 8,
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 16,
        letterSpacing: 0,
    },
    highlightedText: {
        fontWeight: '600',
    },
    /* Timer */
    timer: {
        fontSize: 14,
        color: '#333',
    },

    /* OTP Input Styles */
    otpContainer: {
        // alignItems: "center",
        marginVertical: 10,
    },
    otpBoxesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%', // adjust to your preference
    },
    otpBox: {
        width: 55,
        height: 55,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#B3B3B3',
        textAlign: 'center',
        fontSize: 18,
        color: '#000',
        backgroundColor: '#E2E9FF',
    },

    /* Resend Link */
    resendContainer: {
        // flexDirection: "row",
        justifyContent: 'center',
        marginTop:5,
    },
    resendText: {
        fontSize: 16,
        color: '#454545',
        lineHeight:24,
        fontWeight:'400',
        fontFamily:'Poppins',
    },
    resendLinkContainer:{
        marginTop:2,
    },
    resendLinkText: {
        fontSize: 14,
        textDecorationLine:'underline',
        textDecorationColor: '#314FA4',
        color: '#314FA4',
        fontWeight: 'bold',
    },

    /* Verify Button */
    verifyButton: {
        marginTop: 25,
        backgroundColor: '#314FA4',
        padding: 15,
        borderRadius: 30,
        alignItems: 'center',
        alignSelf: 'center',
        width: '100%', // adjust as needed
    },
    verifyButtonText: {
        color: '#fff',
        fontFamily: 'Poppins',
        fontWeight: '600',
        fontSize: 18,
        lineHeight: 27,
        letterSpacing: 1,
        textAlign: 'center',
    },
});
