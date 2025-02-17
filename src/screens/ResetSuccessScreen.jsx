import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import React from 'react';

const ResetSuccessScreen = ({navigation}) => {
    const handleContinue = () => {
        console.log('Continue to App pressed');
        navigation.navigate('Signup');
        // Navigate or perform your next action
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>

            <View style={styles.topImageContainer}>
                <Image
                    source={require('../assets/codeVerified.png')}
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
                <Text style={styles.title}>Password is set</Text>

                <Text style={styles.description}>
                Reset password is done, login with new password to continue using app.
                </Text>
                <TouchableOpacity onPress={handleContinue}>
                    <Text style={styles.linkText}>Continue to App</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default ResetSuccessScreen;

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
        paddingBottom: 30,
    },
    title: {
        fontSize: 28,
        fontWeight: '900',
        marginBottom: 16,
        color: '#000',
        fontFamily: 'Poppins',
        lineHeight: 42,
        letterSpacing: 2,
    },
    description: {
        fontSize: 16,
        color: '#343434',
        fontWeight:'400',
        lineHeight: 20,
        marginBottom: 16,
    },
    linkText: {
        fontSize: 16,
        color: '#314FA4',
        fontWeight: '700',
        textDecorationLine: 'underline',
    },
});
