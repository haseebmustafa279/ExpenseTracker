import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type OnboardingScreenProps = {
    navigation?: {
        navigate: (screen: string) => void;
    };
};

const Onboarding: React.FC<OnboardingScreenProps> = ({ navigation }) => {
    // 2. Extract edge offsets dynamically
    const insets = useSafeAreaInsets();

    const handleGetStarted = () => {
        navigation?.navigate('Login');
    };

    return (
        <View style={styles.rootBackground}>
            {/* 4. Applied top/bottom insets directly onto the padding array */}
            <View
                style={[
                    styles.container,
                    {
                        paddingTop: Math.max(insets.top, 20),      // Keeps a clean 20px padding buffer even if device has no notch
                        paddingBottom: Math.max(insets.bottom, 20) // Keeps a clean 20px padding buffer away from soft home keys
                    }
                ]}
            >

                <View style={styles.illustrationWrap}>
                    {/* Pass the exact relative path to your .jfif file inside require() */}
                    <Image
                        source={require('../assets/images/logo.png')}
                        style={styles.illustrationImage}
                    />
                </View>


                <View style={styles.textSection}>
                    <Text style={styles.title}>Take Control of Your Finances</Text>
                    <Text style={styles.description}>
                        Track your income and expenses easily with a beautiful and modern interface.
                    </Text>
                </View>

                <View>
                    <TouchableOpacity
                        style={styles.button}
                        activeOpacity={0.85}
                        onPress={handleGetStarted}>
                        <Text style={styles.buttonText}>Get Started</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.loginContainer}
                        onPress={() => navigation?.navigate('Login')}>
                        <Text style={styles.loginText}>
                            Already have an account?{' '}
                            <Text style={styles.loginLink}>Login</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    // 5. Renamed safeArea style property to rootBackground to reflect clean semantics
    rootBackground: {
        flex: 1,
        backgroundColor: '#ffffff',
    },

    illustrationWrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        width: '100%',
    },
    // Replace your old illustrationBox style with this:
    illustrationImage: {
        width: '100%',
        maxWidth: 320,         // Keeps the clean, uniform width bounds of your old design
        height: 340,           // Restores your original design height dimension
        borderRadius: 28,      // Maintains your original rounded corner aesthetics
        resizeMode: 'contain', // 💡 Crucial: Prevents your image from getting distorted or squished
    },

    loginContainer: {
        marginTop: 20,
        alignItems: 'center',
    },

    loginText: {
        fontSize: 15,
        color: '#6b7280',
    },

    loginLink: {
        color: '#0f766e',
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 24,
        justifyContent: 'space-between',
    },
    illustrationBox: {
        width: '100%',
        maxWidth: 320,
        height: 240,
        borderRadius: 28,
        backgroundColor: '#ccfbf1',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#99f6e4',
    },
    illustrationText: {
        color: '#0f766e',
        fontSize: 20,
        fontWeight: '600',
    },
    textSection: {
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        color: '#0f766e',
        fontSize: 28,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 12,
    },
    description: {
        color: 'gray',
        fontSize: 16,
        textAlign: 'center',
        lineHeight: 24,
        paddingHorizontal: 8,
    },
    button: {
        backgroundColor: '#0f766e',
        borderRadius: 999,
        paddingVertical: 16,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '700',
    },
});

export default Onboarding;
