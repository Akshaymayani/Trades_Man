import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import React from 'react';

const IncorrectOtpScreen = ({navigation}) => {
    const handleContinue = () => {
        console.log('Continue to App pressed');
        navigation.navigate('ResetSuccess');
        // Navigate or perform your next action
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>

            <View style={styles.topImageContainer}>
                <Image
                    source={require('../assets/incorrectOtp.png')}
                    style={styles.topImage}
                    resizeMode="contain"
                />
                {/* <View style={styles.nestedImageContainer}>
                    <Image
                        source={require("../../assets/")}
                        style={styles.nestedImage}
                        resizeMode="contain"
                    />
                </View> */}
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>OTP is incorrect</Text>

                <Text style={styles.description}>
                Please enter valid data, code is incorrect.
                </Text>
                <TouchableOpacity onPress={handleContinue}>
                    <Text style={styles.linkText}>Try Again</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default IncorrectOtpScreen;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
    },
    topImageContainer: {
        width: '100%',
        height: 370,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
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

    /* Main Content */
    contentContainer: {
        backgroundColor: '#fff',
        paddingHorizontal: 30,
        paddingTop: 10,
        paddingBottom: 30,
    },
    title: {
        fontSize: 28,
        fontWeight: '900',
        color: '#000',
        fontFamily: 'Poppins',
        lineHeight: 34,
        letterSpacing: 2,
    },
    description: {
        fontSize: 16,
        color: '#343434',
        fontWeight:'400',
        lineHeight: 20,
        marginVertical: 16,
    },
    linkText: {
        color: '#314FA4',
        fontSize: 16,
        fontWeight:'bold',
        lineHeight:24,
        fontFamily:'Poppins',
        textDecorationLine: 'underline',
    },
});
