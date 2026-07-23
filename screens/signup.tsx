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
import { Keyboard } from 'react-native';

type SignUpScreenProps = {
    navigation: {
        navigate: (screen: 'Home' | 'Login' | string) => void;
    };
};

const SignUpScreen: React.FC<SignUpScreenProps> = ({ navigation }) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [secureEntry, setSecureEntry] = useState(true);
    const [confirmSecureEntry, setConfirmSecureEntry] = useState(true);

    const handleCreateAccount = () => {
        Keyboard.dismiss();
        navigation.navigate('Home');
    };
    const handleLogin = () => navigation.navigate('Login');

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
                            <Text style={styles.title}>Create Account</Text>
                            <Text style={styles.subtitle}>
                                Create a new account to start tracking your expenses.
                            </Text>
                        </View>

                        <View style={styles.form}>
                            <View style={styles.inputWrapper}>
                                <Ionicons name="person-outline" size={22} color="#888" />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Full Name"
                                    placeholderTextColor="#9ca3af"
                                    value={fullName}
                                    autoCapitalize="words"
                                    onChangeText={setFullName}
                                    underlineColorAndroid="transparent"
                                />
                            </View>

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
                                    autoCorrect={false}
                                    underlineColorAndroid="transparent"
                                />
                            </View>

                            <View style={styles.inputWrapper}>
                                <Ionicons name="lock-closed-outline" size={22} color="#888" />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Password"
                                    placeholderTextColor="#9ca3af"
                                    secureTextEntry={secureEntry}
                                    autoCapitalize="none"
                                    value={password}
                                    onChangeText={setPassword}
                                    textContentType="password"
                                    autoCorrect={false}
                                    underlineColorAndroid="transparent"
                                />
                                <TouchableOpacity
                                    style={styles.eyeButton}
                                    onPress={() => setSecureEntry((prev) => !prev)}
                                    activeOpacity={0.7}
                                >
                                    <Ionicons
                                        name={secureEntry ? 'eye-off-outline' : 'eye-outline'}
                                        size={22}
                                        color="#888"
                                    />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.inputWrapper}>
                                <Ionicons name="lock-closed-outline" size={22} color="#888" />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Confirm Password"
                                    placeholderTextColor="#9ca3af"
                                    secureTextEntry={confirmSecureEntry}
                                    autoCapitalize="none"
                                    value={confirmPassword}
                                    textContentType="newPassword"
                                    onChangeText={setConfirmPassword}
                                    autoCorrect={false}
                                    underlineColorAndroid="transparent"
                                />
                                <TouchableOpacity
                                    style={styles.eyeButton}
                                    onPress={() => setConfirmSecureEntry((prev) => !prev)}
                                    activeOpacity={0.7}
                                >
                                    <Ionicons
                                        name={confirmSecureEntry ? 'eye-off-outline' : 'eye-outline'}
                                        size={22}
                                        color="#888"
                                    />
                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity
                                style={styles.primaryButton}
                                onPress={handleCreateAccount}
                                activeOpacity={0.85}
                            >
                                <Text style={styles.primaryButtonText}>Create Account</Text>
                            </TouchableOpacity>

                            <View style={styles.bottomRow}>
                                <Text style={styles.bottomText}>Already have an account? </Text>
                                <TouchableOpacity onPress={handleLogin} activeOpacity={0.7}>
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
    eyeButton: {
        padding: 8,
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

export default SignUpScreen;
