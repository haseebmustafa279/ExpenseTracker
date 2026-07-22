import React, {useEffect, useRef} from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function SplashScreen({ navigation }: any) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
  Animated.timing(fadeAnim, {
    toValue: 1,
    duration: 1000,
    useNativeDriver: true,
  }).start();

  const timer = setTimeout(() => {
    navigation.replace('Onboarding');
  }, 2000);

  return () => clearTimeout(timer);
}, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.background} />
      <View style={styles.overlay} />
      <Animated.View style={[styles.content, {opacity: fadeAnim}]}> 
        <Text style={styles.title}>Expense Tracker</Text>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f766e',
  },
  background: {
    ...StyleSheet.absoluteFill,
    backgroundColor: '#0f766e',
  },
  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: '#14b8a6',
    opacity: 0.35,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#ffffff',
    fontSize: 42,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});

export default SplashScreen;
