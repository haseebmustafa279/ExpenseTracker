import React from 'react';
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

const spendingCards = [
  {
    id: '1',
    title: 'Starbucks',
    date: 'Jan 12, 2022',
    amount: '-$150.00',
    image: require('../assets/images/Starbucks.png'),
    selected: false,
  },
  {
    id: '2',
    title: 'Transfer',
    date: 'Yesterday',
    amount: '-$85.00',
    image: require('../assets/images/logo.png'),
    selected: true,
  },
  {
    id: '3',
    title: 'YouTube',
    date: 'Jan 16, 2022',
    amount: '-$11.99',
    image: require('../assets/images/yt.png'),
    selected: false,
  },
];

export default function StatisticsScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headerRow}>
          <TouchableOpacity style={styles.iconButton} activeOpacity={0.85}>
            <Ionicons name="chevron-back" size={24} color="#0F766E" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Statistics</Text>

          <TouchableOpacity style={styles.iconButton} activeOpacity={0.85}>
            <Ionicons name="share-outline" size={22} color="#0F766E" />
          </TouchableOpacity>
        </View>

        <View style={styles.selectorRow}>
          <TouchableOpacity style={styles.selectorButton} activeOpacity={0.85}>
            <Text style={styles.selectorText}>Day</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.selectorButton} activeOpacity={0.85}>
            <Text style={styles.selectorText}>Week</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.selectorButton, styles.selectorButtonActive]}
            activeOpacity={0.85}
          >
            <Text style={[styles.selectorText, styles.selectorTextActive]}>Month</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.selectorButton} activeOpacity={0.85}>
            <Text style={styles.selectorText}>Year</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.dropdownRow}>
          <TouchableOpacity style={styles.dropdownButton} activeOpacity={0.85}>
            <Text style={styles.dropdownText}>Expense</Text>
            <Ionicons name="chevron-down" size={16} color="#0F766E" />
          </TouchableOpacity>
        </View>

        <View style={styles.chartCard}>
          <View style={styles.graphFrame}>
            <View style={styles.graphGlow} />
            <View style={styles.graphWave} />
            <View style={styles.graphWaveBottom} />
            <View style={styles.cursorLine} />
            <View style={styles.cursorMarker} />
            <View style={styles.tooltipBubble}>
              <Text style={styles.tooltipText}>$1,230</Text>
            </View>
          </View>

          <View style={styles.monthRow}>
            <Text style={styles.monthLabel}>Mar</Text>
            <Text style={styles.monthLabel}>Apr</Text>
            <Text style={styles.monthLabel}>May</Text>
            <Text style={styles.monthLabel}>Jun</Text>
            <Text style={styles.monthLabel}>Jul</Text>
            <Text style={styles.monthLabel}>Aug</Text>
            <Text style={styles.monthLabel}>Sep</Text>
          </View>
        </View>

        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>Top Spending</Text>
          <TouchableOpacity style={styles.filterIconButton} activeOpacity={0.85}>
            <Ionicons name="options-outline" size={20} color="#0F766E" />
          </TouchableOpacity>
        </View>

        {spendingCards.map((item) => (
          <View
            key={item.id}
            style={[styles.transactionCard, item.selected && styles.selectedCard]}
          >
            <View style={styles.transactionLeft}>
              <Image source={item.image} style={styles.transactionLogo} />

              <View style={styles.transactionTextWrap}>
                <Text style={[styles.transactionTitle, item.selected && styles.selectedText]}>
                  {item.title}
                </Text>
                <Text style={[styles.transactionDate, item.selected && styles.selectedDate]}>
                  {item.date}
                </Text>
              </View>
            </View>

            <Text style={[styles.transactionAmount, item.selected 
              ?styles.selectedText :
              styles.expenseAmount
            ]}>
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
  expenseAmount:{
    color:"#EF4444",
},
  contentContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 96,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0F766E',
  },
  selectorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
    backgroundColor: '#F8FAFC',
    borderRadius: 14,
    padding: 4,
  },
  selectorButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingVertical: 10,
    marginHorizontal: 2,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  selectorButtonActive: {
    backgroundColor: '#0F766E',
    shadowOpacity: 0,
    elevation: 0,
  },
  selectorText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#6B7280',
  },
  selectorTextActive: {
    color: '#FFFFFF',
  },
  dropdownRow: {
    alignItems: 'flex-end',
    marginBottom: 16,
  },
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 106,
    height: 42,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
  },
  dropdownText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0F766E',
    marginRight: 4,
  },
  chartCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 14,
    marginBottom: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  graphFrame: {
    height: 220,
    borderRadius: 18,
    backgroundColor: '#F7FEFA',
    overflow: 'hidden',
    position: 'relative',
  },
  graphGlow: {
    position: 'absolute',
    left: 12,
    right: 12,
    top: 18,
    bottom: 20,
    backgroundColor: '#ECFDF5',
    borderRadius: 30,
  },
  graphWave: {
    position: 'absolute',
    left: -10,
    right: -10,
    top: 58,
    height: 110,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: '#D1FAE5',
    opacity: 0.98,
    transform: [{ rotate: '6deg' }],
  },
  graphWaveBottom: {
    position: 'absolute',
    left: 16,
    right: 16,
    top: 98,
    height: 90,
    borderRadius: 70,
    backgroundColor: '#A7F3D0',
    opacity: 0.75,
  },
  cursorLine: {
    position: 'absolute',
    left: 202,
    top: 70,
    width: 0,
    height: 95,
    borderLeftWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#0F766E',
  },
  cursorMarker: {
    position: 'absolute',
    left: 192,
    top: 94,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    borderWidth: 4,
    borderColor: '#0F766E',
  },
  tooltipBubble: {
    position: 'absolute',
    right: 24,
    top: 18,
    backgroundColor: '#0F766E',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 14,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  tooltipText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },
  monthRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 6,
    paddingTop: 12,
  },
  monthLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6B7280',
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },
  filterIconButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#ECFDF5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  transactionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 14,
    marginBottom: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.07,
    shadowRadius: 9,
    elevation: 3,
  },
  selectedCard: {
    backgroundColor: '#0F766E',
  },
  transactionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  transactionLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  transactionTextWrap: {
    flex: 1,
  },
  transactionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 3,
  },
  transactionDate: {
    fontSize: 13,
    color: '#6B7280',
  },
  transactionAmount: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111827',
  },
  selectedText: {
    color: '#FFFFFF',
  },
  selectedDate: {
    color: '#D1FAE5',
  },
  bottomSpacer: {
    height: 24,
  },
});