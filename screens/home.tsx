import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
type HomeScreenProps = {
  navigation: {
    navigate: (screen: 'AddIncome' | 'AddExpense' | 'Transactions' | 'Profile' | string) => void;
  };
};

import {
  Image
} from 'react-native';
const transactions = [
  {
    id: '1',
    title: 'Netflix',
    date: 'Apr 12, 2026',
    amount: '-$12.99',
    type: 'expense',
    image: require('../assets/images/netflix.png'),
  },
  {
    id: '2',
    title: 'Food',
    date: 'Apr 10, 2026',
    amount: '-$45.20',
    type: 'expense',
    image: require('../assets/images/food.png'),
  },
  {
    id: '3',
    title: 'Salary',
    date: 'Apr 08, 2026',
    amount: '+$3,500.00',
    type: 'income',
    image: require('../assets/images/salary.png'),
  },
  {
    id: '4',
    title: 'Shopping',
    date: 'Apr 06, 2026',
    amount: '-$120.75',
    type: 'expense',
    image: require('../assets/images/shopping.png'),
  },
];

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.greeting}>Good Morning,</Text>
            <Text style={styles.userName}>Muhammad</Text>
          </View>

          <TouchableOpacity
            style={styles.avatarButton}
            onPress={() => navigation.navigate('Profile')}
            activeOpacity={0.8}
          >
            <View style={styles.avatarPlaceholder}>
              <Text style={styles.avatarText}>M</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.balanceCard}>
          <View style={styles.balanceHeader}>
            <Text style={styles.cardTitle}>Total Balance</Text>

            <TouchableOpacity activeOpacity={0.7}>
              <Ionicons
                name="ellipsis-horizontal"
                size={22}
                color="#ffffff"
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.balanceAmount}>$12,450.75</Text>

          <View style={styles.balanceRow}>
            <View style={styles.balanceItem}>
              <View style={styles.labelRow}>
                <Ionicons
                  name="trending-up"
                  size={16}
                  color="#ffffff"
                />
                <Text style={styles.balanceLabel}> Income</Text>
              </View>
              <Text style={[styles.balanceValue, styles.balanceIncome]}>$15,000</Text>
            </View>
            <View style={styles.balanceItem}>
              <View style={styles.labelRow}>
                <Ionicons
                  name="trending-down"
                  size={16}
                  color="#ffffff"
                />
                <Text style={styles.balanceLabel}> Expense</Text>
              </View>
              <Text style={[styles.balanceValue, styles.balanceExpense]}>$2,549.25</Text>
            </View>
          </View>
        </View>







        <View style={styles.body}>
          <View style={styles.quickActionsRow}>
            <TouchableOpacity
              style={[styles.actionButton, styles.incomeButton]}
              onPress={() => navigation.navigate('AddIncome')}
              activeOpacity={0.85}
            >
              <Text style={styles.actionText}>+ Add Income</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.actionButton, styles.expenseButton]}
              onPress={() => navigation.navigate('AddExpense')}
              activeOpacity={0.85}
            >
              <Text style={styles.actionText}>+ Add Expense</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Transactions</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Transactions')}
              activeOpacity={0.7}
            >
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.transactionList}>
            {transactions.map((item) => (
              <View key={item.id} style={styles.transactionRow}>

                <View style={styles.transactionIcon}>
                  <Image
                    source={item.image}
                    style={styles.transactionImage}
                    resizeMode="contain"
                  />
                </View>

                <View style={styles.transactionDetails}>
                  <Text style={styles.transactionTitle}>
                    {item.title}
                  </Text>

                  <Text style={styles.transactionDate}>
                    {item.date}
                  </Text>
                </View>

                <Text
                  style={[
                    styles.transactionAmount,
                    item.type === 'income'
                      ? styles.transactionIncome
                      : styles.transactionExpense,
                  ]}
                >
                  {item.amount}
                </Text>

              </View>
            ))}
          </View>

        </View>



        <View style={styles.bottomSpacer} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  balanceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },

  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentContainer: {
    paddingBottom: 40,
  },

  body: {
    paddingHorizontal: 20,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: 'darkgreen',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 150,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },
  greeting: {
    fontSize: 16,
    color: 'white',
  },
  userName: {
    fontSize: 28,
    fontWeight: '700',
    color: 'white',
    marginTop: 4,
  },
  avatarButton: {
    borderRadius: 30,
  },
  avatarPlaceholder: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#E6FFFA',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 4,
  },
  avatarText: {
    color: '#0F766E',
    fontSize: 20,
    fontWeight: '700',
  },
  balanceCard: {
    backgroundColor: '#0a5106',
    marginHorizontal: 20,
    marginTop: -120,
    borderRadius: 28,
    padding: 24,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.12,
    shadowRadius: 18,
    elevation: 10,
  },
  cardTitle: {
    fontSize: 15,
    color: 'white',
    marginBottom: 12,
  },
  balanceAmount: {
    fontSize: 34,
    fontWeight: '800',
    color: 'white',
    marginBottom: 20,
  },
  balanceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  balanceItem: {
    flex: 1,
  },
  balanceLabel: {
    fontSize: 14,
    color: 'white',
    marginBottom: 8,
  },
  balanceValue: {
    fontSize: 18,
    fontWeight: '700',
  },
  balanceIncome: {
    color: 'white',
  },
  balanceExpense: {
    color: 'white',
  },
  quickActionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  actionButton: {
    flex: 1,
    paddingVertical: 16,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    shadowRadius: 14,
    elevation: 3,
  },
  incomeButton: {
    backgroundColor: '#ECFDF5',
  },
  expenseButton: {
    backgroundColor: '#FEE2E2',
  },
  actionText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0F766E',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0F766E',
  },
  seeAllText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0F766E',
  },
  transactionList: {
    backgroundColor: '#ffffff',
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.03,
    shadowRadius: 16,
    elevation: 4,
  },
  transactionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#EFF6FF',
  },
  transactionIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#F8FAFC',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  transactionImage: {
    width: 30,
    height: 30,
  },
  transactionDetails: {
    flex: 1,
  },
  transactionIncome: {
    color: '#22C55E',
    fontWeight: '700',
  },

  transactionExpense: {
    color: '#EF4444',
    fontWeight: '700',
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 4,
  },
  transactionDate: {
    fontSize: 13,
    color: '#64748B',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: '700',
  },
  bottomSpacer: {
    height: 56,
  },
});

export default HomeScreen;
