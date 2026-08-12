import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

const THEME_GREEN = '#0F766E';

export default function ConnectWalletAccountsScreen() {
  const navigation = useNavigation<any>();
  const [activeSegment, setActiveSegment] = useState<'cards' | 'accounts'>('accounts');

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headerSection}>
          <View style={styles.headerRow}>
            <TouchableOpacity
              style={styles.headerIcon}
              activeOpacity={0.85}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="chevron-back" size={24} color="#FFFFFF" />
            </TouchableOpacity>

            <Text style={styles.headerTitle}>Connect Wallet</Text>

            <TouchableOpacity
              style={styles.headerIcon}
              activeOpacity={0.85}
              onPress={() => navigation.navigate('Profile')}
            >
              <Ionicons name="notifications-outline" size={22} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.floatingCard}>
          <View style={styles.segmentedControl}>
            <TouchableOpacity
              style={[styles.segmentItem, activeSegment === 'cards' && styles.segmentItemActive]}
              onPress={() => setActiveSegment('cards')}
              activeOpacity={0.9}
            >
              <Text style={[styles.segmentText, activeSegment === 'cards' && styles.segmentTextActive]}>
                Cards
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.segmentItem, activeSegment === 'accounts' && styles.segmentItemActive]}
              onPress={() => setActiveSegment('accounts')}
              activeOpacity={0.9}
            >
              <Text style={[styles.segmentText, activeSegment === 'accounts' && styles.segmentTextActive]}>
                Accounts
              </Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.sectionTitle}>Connection Methods</Text>

          <View style={styles.methodCardPrimary}>
            <View style={styles.methodLeft}>
              <View style={styles.iconCircleWhite}>
                <Ionicons name="business" size={20} color={THEME_GREEN} />
              </View>
              <View style={styles.methodTextWrap}>
                <Text style={styles.methodTitle}>Bank Link</Text>
                <Text style={styles.methodSubtitle}>Connect your bank account to deposit & fund</Text>
              </View>
            </View>
            <Ionicons name="checkmark-circle" size={24} color={THEME_GREEN} />
          </View>

          <View style={styles.methodCard}>
            <View style={styles.methodLeft}>
              <View style={styles.iconCircleGrey}>
                <Ionicons name="card-outline" size={20} color="#64748B" />
              </View>
              <View style={styles.methodTextWrap}>
                <Text style={styles.methodTitle}>Micro Deposits</Text>
                <Text style={styles.methodSubtitle}>Connect bank in 5–7 days</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#94A3B8" />
          </View>

          <View style={styles.methodCard}>
            <View style={styles.methodLeft}>
              <View style={styles.iconCircleGrey}>
                <Ionicons name="logo-paypal" size={20} color="#64748B" />
              </View>
              <View style={styles.methodTextWrap}>
                <Text style={styles.methodTitle}>PayPal</Text>
                <Text style={styles.methodSubtitle}>Connect your paypal account</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#94A3B8" />
          </View>

          <TouchableOpacity style={styles.nextButton} activeOpacity={0.9}>
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  contentContainer: {
    paddingBottom: 32,
  },
  headerSection: {
    backgroundColor: 'darkgreen',
    borderBottomLeftRadius: 36,
    borderBottomRightRadius: 36,
    paddingTop: 18,
    paddingBottom: 96,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  headerIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  floatingCard: {
    marginTop: -70,
    marginHorizontal: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 24,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 20,
    elevation: 8,
  },
  segmentedControl: {
    flexDirection: 'row',
    backgroundColor: '#F1F5F9',
    borderRadius: 999,
    padding: 4,
    alignSelf: 'center',
    marginBottom: 18,
  },
  segmentItem: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 999,
  },
  segmentItemActive: {
    backgroundColor: THEME_GREEN,
  },
  segmentText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#64748B',
  },
  segmentTextActive: {
    color: '#FFFFFF',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 12,
  },
  methodCardPrimary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ECFDF5',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 14,
    marginBottom: 12,
  },
  methodCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F8FAFC',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 14,
    marginBottom: 12,
  },
  methodLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconCircleWhite: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  iconCircleGrey: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#F1F5F9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  methodTextWrap: {
    flex: 1,
  },
  methodTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 2,
  },
  methodSubtitle: {
    fontSize: 12,
    color: '#64748B',
    lineHeight: 18,
  },
  nextButton: {
    marginTop: 12,
    borderWidth: 1.5,
    borderColor: THEME_GREEN,
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: '90%',
    alignSelf: 'center',
  },
  nextButtonText: {
    color: THEME_GREEN,
    fontSize: 15,
    fontWeight: '700',
  },
});
