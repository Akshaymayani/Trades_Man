import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import React from 'react';

const ErrorMsgScreen = ({navigation}) => {
    const handleContinue = () => {
        console.log('Continue to App pressed');
        navigation.navigate('IncorrectOtp');
        // Navigate or perform your next action
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>

            <View style={styles.topImageContainer}>
                <Image
                    source={require('../assets/errorMsg.png')}
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
                <Text style={styles.title}>Something went wrong!</Text>

                <Text style={styles.description}>
                Taking too much time, Please check your internet connection.
                </Text>
                <TouchableOpacity onPress={handleContinue}>
                    <Text style={styles.linkText}>Try Again</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default ErrorMsgScreen;

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
        backgroundColor: '#fff',
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
    },
    title: {
        fontSize: 28,
        fontWeight: '900',
        marginBottom: 16,
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
        marginBottom: 16,
    },
    linkText: {
        fontSize: 16,
        color: '#314FA4',
        fontWeight:'900',
        lineHeight:24,
        fontFamily:'Poppins',
        textDecorationLine: 'underline',
    },
});
