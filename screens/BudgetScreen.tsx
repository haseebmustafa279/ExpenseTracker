import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

type TabKey = 'transactions' | 'upcomingBills';

const billItems = [
  {
    id: '1',
    title: 'Youtube',
    date: 'Feb 20, 2022',
    image: require('../assets/images/yt.png'),
  },
  {
    id: '2',
    title: 'Electricity',
    date: 'Mar 28, 2022',
    image: require('../assets/images/Electricity.png'),
  },
  {
    id: '3',
    title: 'House Rent',
    date: 'Mar 31, 2022',
    image: require('../assets/images/house.png'),
  },
  {
    id: '4',
    title: 'Spotify',
    date: 'Feb 20, 2022',
    image: require('../assets/images/spotify.png'),
  },
];

const transactionItems = [
  {
    id: '1',
    title: 'Salary',
    date: 'Jun 10, 2022',
    amount: '+$3,500.00',
    type: 'income' as const,
    image: require('../assets/images/salary.png'),
  },
  {
    id: '2',
    title: 'Groceries',
    date: 'Jun 08, 2022',
    amount: '-$84.20',
    type: 'expense' as const,
    image: require('../assets/images/food.png'),
  },
  {
    id: '3',
    title: 'Freelance',
    date: 'Jun 05, 2022',
    amount: '+$1,250.00',
    type: 'income' as const,
    image: require('../assets/images/upwork.png'),
  },
  {
    id: '4',
    title: 'Shopping',
    date: 'Jun 01, 2022',
    amount: '-$132.75',
    type: 'expense' as const,
    image: require('../assets/images/shopping.png'),
  },
];

export default function BudgetScreen() {
  const [activeTab, setActiveTab] = useState<TabKey>('transactions');
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headerSection}>
          <View style={styles.headerTopRow}>
            <TouchableOpacity style={styles.headerIcon} activeOpacity={0.85}>
              <Ionicons name="chevron-back" size={24} color="#FFFFFF" />
            </TouchableOpacity>

            <Text style={styles.headerTitle}>Wallet</Text>

            <TouchableOpacity style={styles.headerIcon} activeOpacity={0.85}>
              <Ionicons name="notifications-outline" size={22} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.floatingCard}>
          <View style={styles.balanceSection}>
            <Text style={styles.balanceLabel}>Total Balance</Text>
            <Text style={styles.balanceAmount}>$2,548.00</Text>
          </View>

          <View style={styles.actionsRow}>
            <TouchableOpacity style={styles.actionItem} activeOpacity={0.85} onPress={() => navigation.navigate('ConnectWallet')}>
              <View style={styles.actionIconCircle}>
                <Ionicons name="add" size={22} color="#0F766E" />
              </View>
              <Text style={styles.actionLabel}>Add</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionItem} activeOpacity={0.85} onPress={() => navigation.navigate('ConnectWallet')}>
              <View style={styles.actionIconCircle}>
                <Ionicons name="grid-outline" size={20} color="#0F766E" />
              </View>
              <Text style={styles.actionLabel}>Pay</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionItem} activeOpacity={0.85} onPress={() => navigation.navigate('ConnectWallet')}>
              <View style={styles.actionIconCircle}>
                <Ionicons name="paper-plane-outline" size={20} color="#0F766E" />
              </View>
              <Text style={styles.actionLabel}>Send</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.segmentedControl}>
            <TouchableOpacity
              style={[styles.segmentItem, activeTab === 'transactions' && styles.segmentItemActive]}
              onPress={() => setActiveTab('transactions')}
              activeOpacity={0.9}
            >
              <Text
                style={[
                  styles.segmentText,
                  activeTab === 'transactions' && styles.segmentTextActive,
                ]}
              >
                Transactions
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.segmentItem, activeTab === 'upcomingBills' && styles.segmentItemActive]}
              onPress={() => setActiveTab('upcomingBills')}
              activeOpacity={0.9}
            >
              <Text
                style={[
                  styles.segmentText,
                  activeTab === 'upcomingBills' && styles.segmentTextActive,
                ]}
              >
                Upcoming Bills
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.transactionList}>
            {activeTab === 'transactions'
              ? transactionItems.map((item) => (
                  <View key={item.id} style={styles.transactionRow}>
                    <View style={styles.transactionLeft}>
                      <Image source={item.image} style={styles.transactionImage} />
                      <View style={styles.transactionTextWrap}>
                        <Text style={styles.transactionTitle}>{item.title}</Text>
                        <Text style={styles.transactionDate}>{item.date}</Text>
                      </View>
                    </View>

                    <Text
                      style={[
                        styles.transactionAmount,
                        item.type === 'income' ? styles.incomeAmount : styles.expenseAmount,
                      ]}
                    >
                      {item.amount}
                    </Text>
                  </View>
                ))
              : billItems.map((item) => (
                  <View key={item.id} style={styles.transactionRow}>
                    <View style={styles.transactionLeft}>
                      <Image source={item.image} style={styles.transactionImage} />
                      <View style={styles.transactionTextWrap}>
                        <Text style={styles.transactionTitle}>{item.title}</Text>
                        <Text style={styles.transactionDate}>{item.date}</Text>
                      </View>
                    </View>

                    <TouchableOpacity style={styles.payButton} activeOpacity={0.8}>
                      <Text style={styles.payButtonText}>Pay</Text>
                    </TouchableOpacity>
                  </View>
                ))}
          </View>
        </View>

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
    paddingBottom: 150,
  },
  headerSection: {
    backgroundColor: 'darkgreen',
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    paddingTop: 20,
    paddingBottom: 96,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },

  
  headerTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 6,
  },
  headerIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  floatingCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginTop: -70,
    borderRadius: 28,
    paddingHorizontal: 22,
    paddingTop: 24,
    paddingBottom: 18,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.12,
    shadowRadius: 18,
    elevation: 8,
  },
  balanceSection: {
    alignItems: 'center',
    marginBottom: 24,
  },
  balanceLabel: {
    fontSize: 13,
    color: '#6B7280',
    marginBottom: 8,
  },
  balanceAmount: {
    fontSize: 34,
    fontWeight: '800',
    color: '#111827',
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 28,
    paddingHorizontal: 10,
  },
  actionItem: {
    alignItems: 'center',
    flex: 1,
  },
  actionIconCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 1.5,
    borderColor: '#0F766E',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  actionLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#0F766E',
  },
  segmentedControl: {
    flexDirection: 'row',
    backgroundColor: '#F3F4F6',
    borderRadius: 999,
    padding: 4,
    marginBottom: 16,
  },
  segmentItem: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 999,
  },
  segmentItemActive: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },
  segmentText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#6B7280',
  },
  segmentTextActive: {
    color: '#0F766E',
  },
  transactionList: {
    marginTop: 8,
  },
  transactionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  transactionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  transactionImage: {
    width: 42,
    height: 42,
    borderRadius: 21,
    marginRight: 12,
  },
  transactionTextWrap: {
    flex: 1,
  },
  transactionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 2,
  },
  transactionDate: {
    fontSize: 12,
    color: '#6B7280',
  },
  transactionAmount: {
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'right',
  },
  incomeAmount: {
    color: '#16A34A',
  },
  expenseAmount: {
    color: '#EF4444',
  },
  payButton: {
    backgroundColor: '#D1FAE5',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
  },
  payButtonText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#0F766E',
  },
  bottomSpacer: {
    height: 24,
  },
});