import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

const activityItems = [
  {
    id: '1',
    title: 'Netflix',
    date: 'Today, 09:30',
    amount: '-$12.99',
    type: 'expense' as const,
  },
  {
    id: '2',
    title: 'Amazon',
    date: 'Yesterday, 18:00',
    amount: '-$56.30',
    type: 'expense' as const,
  },
  {
    id: '3',
    title: 'Salary',
    date: 'Jun 25, 10:00',
    amount: '+$3500',
    type: 'income' as const,
  },
];

export default function BudgetScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headerWrap}>
          <Text style={styles.pageTitle}>Wallet</Text>
          <Text style={styles.pageSubtitle}>Manage your payment methods</Text>
        </View>

        <View style={styles.balanceCard}>
          <View style={styles.balanceTopRow}>
            <Text style={styles.balanceLabel}>Current Balance</Text>
            <View style={styles.visaBadge}>
              <Text style={styles.visaText}>VISA</Text>
            </View>
          </View>

          <Text style={styles.balanceAmount}>$12,450.75</Text>
          <Text style={styles.cardNumber}>•••• 4589</Text>

          <View style={styles.cardMetaRow}>
            <View style={styles.metaColumn}>
              <Text style={styles.metaLabel}>Card Holder</Text>
              <Text style={styles.metaValue}>Muhammad Haseeb</Text>
            </View>

            <View style={styles.metaColumn}>
              <Text style={styles.metaLabel}>Expiry</Text>
              <Text style={styles.metaValue}>08/28</Text>
            </View>
          </View>
        </View>

        <Text style={styles.sectionTitle}>My Cards</Text>

        <View style={styles.cardGrid}>
          <View style={[styles.miniCard, styles.miniCardDark]}>
            <View style={styles.cardRow}>
              <Text style={styles.cardName}>Visa Classic</Text>
              <Text style={styles.cardChip}>VISA</Text>
            </View>
            <Text style={styles.cardNumberSmall}>**** 4589</Text>
            <Text style={styles.cardBalanceLabel}>Balance</Text>
            <Text style={styles.cardBalanceValue}>$4,250</Text>
          </View>

          <View style={[styles.miniCard, styles.miniCardLight]}>
            <View style={styles.cardRow}>
              <Text style={styles.cardName}>Master Card</Text>
              <Text style={styles.cardChip}>MC</Text>
            </View>
            <Text style={styles.cardNumberSmall}>**** 7712</Text>
            <Text style={styles.cardBalanceLabel}>Balance</Text>
            <Text style={styles.cardBalanceValue}>$2,180</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.addCardButton} activeOpacity={0.9}>
          <Ionicons name="add-circle-outline" size={22} color="#0F766E" />
          <Text style={styles.addCardText}>Add New Card</Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Recent Activity</Text>

        {activityItems.map((item) => (
          <View key={item.id} style={styles.activityRow}>
            <View style={styles.activityLeft}>
              <View style={styles.iconCircle}>
                <Text style={styles.iconText}>{item.title.charAt(0)}</Text>
              </View>

              <View style={styles.activityTextWrap}>
                <Text style={styles.activityTitle}>{item.title}</Text>
                <Text style={styles.activityDate}>{item.date}</Text>
              </View>
            </View>

            <Text
              style={[
                styles.activityAmount,
                item.type === 'income' ? styles.incomeAmount : styles.expenseAmount,
              ]}
            >
              {item.amount}
            </Text>
          </View>
        ))}

        <View style={styles.bottomSpacer} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 110,
  },
  headerWrap: {
    marginBottom: 18,
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#0F766E',
    marginBottom: 4,
  },
  pageSubtitle: {
    fontSize: 14,
    color: '#6B7280',
  },
  balanceCard: {
    backgroundColor: '#0F766E',
    borderRadius: 28,
    paddingHorizontal: 20,
    paddingVertical: 22,
    shadowColor: '#0F766E',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.22,
    shadowRadius: 18,
    elevation: 7,
    marginBottom: 24,
  },
  balanceTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  balanceLabel: {
    fontSize: 14,
    color: '#D1FAE5',
    fontWeight: '600',
  },
  visaBadge: {
    backgroundColor: 'rgba(255,255,255,0.22)',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  visaText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1,
  },
  balanceAmount: {
    fontSize: 32,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  cardNumber: {
    fontSize: 18,
    fontWeight: '700',
    color: '#E7FFF8',
    marginBottom: 24,
  },
  cardMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  metaColumn: {
    gap: 4,
  },
  metaLabel: {
    fontSize: 12,
    color: '#CFF6EA',
    fontWeight: '600',
  },
  metaValue: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '700',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0F766E',
    marginBottom: 14,
  },
  cardGrid: {
    marginBottom: 18,
    gap: 12,
  },
  miniCard: {
    borderRadius: 22,
    paddingHorizontal: 18,
    paddingVertical: 18,
    minHeight: 130,
  },
  miniCardDark: {
    backgroundColor: '#115E59',
  },
  miniCardLight: {
    backgroundColor: '#D1FAE5',
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  cardName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  cardChip: {
    fontSize: 12,
    fontWeight: '700',
    color: '#FFFFFF',
    backgroundColor: 'rgba(255,255,255,0.18)',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  cardNumberSmall: {
    fontSize: 14,
    fontWeight: '700',
    color: '#EAFBF6',
    marginBottom: 18,
  },
  cardBalanceLabel: {
    fontSize: 12,
    color: '#D1FAE5',
    marginBottom: 4,
  },
  cardBalanceValue: {
    fontSize: 26,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  addCardButton: {
    borderWidth: 1,
    borderColor: '#0F766E',
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    marginBottom: 24,
  },
  addCardText: {
    marginLeft: 8,
    color: '#0F766E',
    fontSize: 16,
    fontWeight: '700',
  },
  activityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  activityLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconCircle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#DCFCE7',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  iconText: {
    color: '#0F766E',
    fontSize: 16,
    fontWeight: '800',
  },
  activityTextWrap: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 2,
  },
  activityDate: {
    fontSize: 12,
    color: '#6B7280',
  },
  activityAmount: {
    fontSize: 15,
    fontWeight: '700',
    textAlign: 'right',
  },
  incomeAmount: {
    color: '#16A34A',
  },
  expenseAmount: {
    color: '#EF4444',
  },
  bottomSpacer: {
    height: 24,
  },
});