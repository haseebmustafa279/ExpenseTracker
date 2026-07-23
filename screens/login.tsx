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
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

type LoginScreenProps = {
    navigation: {
        navigate: (screen: 'Home' | 'Signup' | 'ForgotPassword' | string) => void;
    };
};

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secureEntry, setSecureEntry] = useState(true);

    const handleLogin = () => navigation.navigate('Home');
    const handleSignup = () => navigation.navigate('Signup');
    const handleForgotPassword = () => navigation.navigate('ForgotPassword');
    const togglePasswordVisibility = () => setSecureEntry((prev) => !prev);

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
                >
                    <View style={styles.innerContainer}>
                        <View style={styles.headingWrapper}>
                            <Text style={styles.title}>Welcome Back</Text>
                            <Text style={styles.subtitle}>
                                Sign in to continue managing your finances
                            </Text>
                        </View>

                        <View style={styles.form}>
                            <View style={styles.inputWrapper}>
                                <Ionicons
                                    name="mail-outline"
                                    size={22}
                                    color="#888"
                                />
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

                            <View style={styles.inputWrapper}>
                                <Ionicons
                                    name="lock-closed-outline"
                                    size={22}
                                    color="#888"
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Password"
                                    placeholderTextColor="#9ca3af"
                                    secureTextEntry={secureEntry}
                                    autoCapitalize="none"
                                    value={password}
                                    onChangeText={setPassword}
                                    underlineColorAndroid="transparent"
                                />
                                <TouchableOpacity
                                    style={styles.eyeButton}
                                    onPress={togglePasswordVisibility}
                                    activeOpacity={0.7}
                                >
                                    <Ionicons
                                        name={secureEntry ? 'eye-off-outline' : 'eye-outline'}
                                        size={22}
                                        color="#888"
                                    />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.forgotRow}>
                                <TouchableOpacity onPress={handleForgotPassword} activeOpacity={0.7}>
                                    <Text style={styles.forgotText}>Forgot Password?</Text>
                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity
                                style={styles.loginButton}
                                onPress={handleLogin}
                                activeOpacity={0.85}
                            >
                                <Text style={styles.loginButtonText}>Login</Text>
                            </TouchableOpacity>

                            <View style={styles.signUpRow}>
                                <Text style={styles.signUpText}>Don't have an account? </Text>
                                <TouchableOpacity onPress={handleSignup} activeOpacity={0.7}>
                                    <Text style={styles.signUpLink}>Sign Up</Text>
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
        color: '#0f766e',
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#6b7280',
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
    inputIcon: {
        marginRight: 12,
        fontSize: 18,
        color: '#6b7280',
    },
    input: {
        flex: 1,
        color: '#111827',
        fontSize: 16,
        paddingVertical: 0,
    },
    eyeButton: {
        padding: 8,
    },
    eyeIcon: {
        fontSize: 18,
        color: '#6b7280',
    },
    forgotRow: {
        alignItems: 'flex-end',
        marginBottom: 28,
    },
    forgotText: {
        color: '#0f766e',
        fontSize: 14,
        fontWeight: '600',
    },
    loginButton: {
        backgroundColor: '#0F766E',
        borderRadius: 16,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    loginButtonText: {
        color: '#ffffff',
        fontSize: 17,
        fontWeight: '700',
    },
    signUpRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    signUpText: {
        fontSize: 15,
        color: '#6b7280',
    },
    signUpLink: {
        fontSize: 15,
        color: '#0f766e',
        fontWeight: '700',
    },
});

export default LoginScreen;
