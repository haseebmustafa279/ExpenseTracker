import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type OnboardingScreenProps = {
  navigation?: {
    navigate: (screen: string) => void;
  };
};

const Onboarding: React.FC<OnboardingScreenProps> = ({navigation}) => {
  const insets = useSafeAreaInsets();

  const handleGetStarted = () => {
    navigation?.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, {paddingTop: insets.top, paddingBottom: insets.bottom}]}> 
        <View style={styles.logoWrap}>
          <View style={styles.logoCircle}>
            <Text style={styles.logoText}>mono</Text>
          </View>
        </View>

        <View style={styles.illustrationWrap}>
          <View style={styles.illustrationBox}>
            <Text style={styles.illustrationText}>Illustration</Text>
          </View>
        </View>

        <View style={styles.textSection}>
          <Text style={styles.title}>Take Control of Your Finances</Text>
          <Text style={styles.description}>
            Track your income and expenses easily with a beautiful and modern interface.
          </Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.85}
          onPress={handleGetStarted}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 24,
    paddingVertical: 20,
    justifyContent: 'space-between',
  },
  logoWrap: {
    alignItems: 'center',
    marginTop: 8,
  },
  logoCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#0f766e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 1,
  },
  illustrationWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
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
    color: '#111827',
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 12,
  },
  description: {
    color: '#6b7280',
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
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default Onboarding;
