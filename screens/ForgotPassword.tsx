import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Keyboard,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

type ForgotPasswordScreenProps = {
    navigation: {
        navigate: (screen: 'Login' | string) => void;
    };
};

const ForgotPasswordScreen: React.FC<ForgotPasswordScreenProps> = ({ navigation }) => {
    const [email, setEmail] = useState('');

    const handleSendResetLink = () => {
        Keyboard.dismiss();
        navigation.navigate('Login');
    };

    const handleBackToLogin = () => navigation.navigate('Login');

    return (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView
                style={styles.keyboardAvoiding}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >
                <ScrollView
                    contentContainerStyle={styles.scrollContainer}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                    keyboardDismissMode="on-drag"
                >
                    <View style={styles.innerContainer}>
                        <View style={styles.headingWrapper}>
                            <Text style={styles.title}>Forgot Password</Text>
                            <Text style={styles.subtitle}>
                                Enter your registered email address and we'll send you a password reset link.
                            </Text>
                        </View>

                        <View style={styles.form}>
                            <View style={styles.inputWrapper}>
                                <Ionicons name="mail-outline" size={22} color="#888" />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Email Address"
                                    placeholderTextColor="#9ca3af"
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    value={email}
                                    onChangeText={setEmail}
                                    underlineColorAndroid="transparent"
                                />
                            </View>

                            <TouchableOpacity
                                style={styles.primaryButton}
                                onPress={handleSendResetLink}
                                activeOpacity={0.85}
                            >
                                <Text style={styles.primaryButtonText}>Send Reset Link</Text>
                            </TouchableOpacity>

                            <View style={styles.bottomRow}>
                                <Text style={styles.bottomText}>Back to </Text>
                                <TouchableOpacity onPress={handleBackToLogin} activeOpacity={0.7}>
                                    <Text style={styles.bottomLink}>Login</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    keyboardAvoiding: {
        flex: 1,
    },
    scrollContainer: {
        flexGrow: 1,
    },
    innerContainer: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 32,
        paddingBottom: 24,
        justifyContent: 'center',
    },
    headingWrapper: {
        marginBottom: 32,
    },
    title: {
        fontSize: 32,
        fontWeight: '800',
        color: '#0F766E',
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#6B7280',
        textAlign: 'center',
        lineHeight: 24,
    },
    form: {
        width: '100%',
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        borderRadius: 16,
        paddingHorizontal: 16,
        marginBottom: 16,
        height: 56,
    },
    input: {
        flex: 1,
        color: '#111827',
        fontSize: 16,
        paddingVertical: 0,
        marginLeft: 12,
    },
    primaryButton: {
        backgroundColor: '#0F766E',
        borderRadius: 16,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 20,
    },
    primaryButtonText: {
        color: '#ffffff',
        fontSize: 17,
        fontWeight: '700',
    },
    bottomRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    bottomText: {
        fontSize: 15,
        color: '#6B7280',
    },
    bottomLink: {
        fontSize: 15,
        color: '#0F766E',
        fontWeight: '700',
    },
});

export default ForgotPasswordScreen;
