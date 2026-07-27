import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

const THEME_GREEN = '#0F766E';

export default function ConnectWalletScreen() {
  const navigation = useNavigation<any>();
  const [activeSegment, setActiveSegment] = useState<'cards' | 'accounts'>('cards');

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headerSection}>
          <View style={styles.headerRow}>
            <TouchableOpacity style={styles.headerIcon} activeOpacity={0.85}>
              <Ionicons name="chevron-back" size={24} color="#FFFFFF" />
            </TouchableOpacity>

            <Text style={styles.headerTitle}>Connect Wallet</Text>

            <TouchableOpacity style={styles.headerIcon} activeOpacity={0.85}>
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

          <View style={styles.cardPreview}>
            <View style={styles.cardTopRow}>
              <Text style={styles.cardLabel}>Debit Card</Text>
              <Text style={styles.cardSubtype}>Mono</Text>
            </View>

            <View style={styles.chipPlaceholder} />

            <Text style={styles.cardNumber}>6219 8610 2888 8075</Text>
            <View style={styles.cardBottomRow}>
              <View>
                <Text style={styles.cardHolderLabel}>Card Holder</Text>
                <Text style={styles.cardHolderName}>IRVAN MOSES</Text>
              </View>
              <View style={styles.expiryBox}>
                <Text style={styles.cardHolderLabel}>Expiry</Text>
                <Text style={styles.cardHolderName}>22/01</Text>
              </View>
            </View>
          </View>

          <View style={styles.sectionWrap}>
            <Text style={styles.sectionTitle}>Add your debit Card</Text>
            <Text style={styles.sectionDescription}>
              This card must be connected to a bank account under your name.
            </Text>
          </View>

          <View style={styles.form}>
            <TextInput style={styles.input} placeholder="Name on Card" placeholderTextColor="#94A3B8" />

            <View style={styles.row}>
              <TextInput
                style={[styles.input, styles.inputHalf]}
                placeholder="Debit Card Number"
                placeholderTextColor="#94A3B8"
                keyboardType="number-pad"
              />
              <TextInput
                style={[styles.input, styles.inputHalf]}
                placeholder="CVC"
                placeholderTextColor="#94A3B8"
                keyboardType="number-pad"
              />
            </View>

            <View style={styles.row}>
              <TextInput
                style={[styles.input, styles.inputHalf]}
                placeholder="Expiration MM/YY"
                placeholderTextColor="#94A3B8"
              />
              <TextInput
                style={[styles.input, styles.inputHalf]}
                placeholder="ZIP"
                placeholderTextColor="#94A3B8"
                keyboardType="number-pad"
              />
            </View>
          </View>

          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => navigation.navigate('ConnectWalletAccounts')}
            activeOpacity={0.9}
          >
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
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 22,
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
  cardPreview: {
    backgroundColor: THEME_GREEN,
    borderRadius: 24,
    padding: 20,
    marginBottom: 20,
  },
  cardTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardLabel: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
  cardSubtype: {
    color: '#CCFBF1',
    fontSize: 13,
    fontWeight: '600',
  },
  chipPlaceholder: {
    width: 42,
    height: 32,
    borderRadius: 8,
    backgroundColor: '#D1FAE5',
    marginTop: 24,
    marginBottom: 16,
  },
  cardNumber: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 1.3,
    marginBottom: 20,
  },
  cardBottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  cardHolderLabel: {
    color: '#CCFBF1',
    fontSize: 11,
    fontWeight: '600',
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  cardHolderName: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },
  expiryBox: {
    alignItems: 'flex-end',
  },
  sectionWrap: {
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 4,
  },
  sectionDescription: {
    fontSize: 13,
    color: '#64748B',
    lineHeight: 20,
  },
  form: {
    gap: 12,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 13,
    fontSize: 14,
    color: '#0F172A',
    backgroundColor: '#F8FAFC',
    flex: 1,
  },
  inputHalf: {
    flex: 1,
  },
  nextButton: {
    marginTop: 20,
    borderWidth: 1.5,
    borderColor: THEME_GREEN,
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  nextButtonText: {
    color: THEME_GREEN,
    fontSize: 15,
    fontWeight: '700',
  },
});