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
import Svg, {
  Path,
  Defs,
  LinearGradient,
  Stop,
  Circle,
  Line,
} from 'react-native-svg';

const spendingCards = [
  {
    id: '1',
    title: 'Starbucks',
    date: 'Jan 12, 2022',
    amount: '-$150.00',
    image: require('../assets/images/logo.png'),
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

const chartLine =
  'M18 140 C38 140, 64 124, 94 112 S148 82, 178 92 S232 130, 260 108 S310 48, 334 72';

const chartFill =
  'M18 140 C38 140, 64 124, 94 112 S148 82, 178 92 S232 130, 260 108 S310 48, 334 72 L334 182 L18 182 Z';

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
            <Ionicons name="share-social-outline" size={22} color="#0F766E" />
          </TouchableOpacity>
        </View>

        <View style={styles.filterRow}>
          <TouchableOpacity style={styles.filterButton} activeOpacity={0.85}>
            <Text style={styles.filterText}>Day</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton} activeOpacity={0.85}>
            <Text style={styles.filterText}>Week</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.filterButton, styles.filterButtonActive]}
            activeOpacity={0.85}
          >
            <Text style={[styles.filterText, styles.filterTextActive]}>Month</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton} activeOpacity={0.85}>
            <Text style={styles.filterText}>Year</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.chartCard}>
          <View style={styles.chartHeaderRow}>
            <Text style={styles.chartHeader}>Expense</Text>
            <TouchableOpacity style={styles.dropdownButton} activeOpacity={0.85}>
              <Text style={styles.dropdownText}>Expense</Text>
              <Ionicons name="chevron-down" size={16} color="#0F766E" />
            </TouchableOpacity>
          </View>

          <View style={styles.chartContainer}>
            <Svg width="100%" height="240" viewBox="0 0 352 200">
              <Defs>
                <LinearGradient id="chartArea" x1="0" y1="0" x2="0" y2="1">
                  <Stop offset="0%" stopColor="#A7F3D0" stopOpacity="0.9" />
                  <Stop offset="100%" stopColor="#ECFDF5" stopOpacity="0.2" />
                </LinearGradient>
              </Defs>

              <Path d={chartFill} fill="url(#chartArea)" />
              <Path
                d={chartLine}
                fill="none"
                stroke="#0F766E"
                strokeWidth={4}
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <Line
                x1="250"
                y1="72"
                x2="250"
                y2="182"
                stroke="#0F766E"
                strokeDasharray="5 5"
                strokeWidth={2}
                opacity={0.85}
              />

              <Circle cx="250" cy="108" r="8" fill="#FFFFFF" stroke="#0F766E" strokeWidth={4} />
            </Svg>

            <View style={styles.tooltipBubble}>
              <Text style={styles.tooltipText}>$1,230</Text>
            </View>

            <View style={styles.bottomLabelsRow}>
              {['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'].map((label) => (
                <Text key={label} style={styles.bottomLabel}>
                  {label}
                </Text>
              ))}
            </View>
          </View>
        </View>

        <View style={styles.spendingSection}>
          <View style={styles.spendingHeaderRow}>
            <Text style={styles.spendingTitle}>Top Spending</Text>
            <TouchableOpacity style={styles.filterIconButton} activeOpacity={0.85}>
              <Ionicons name="filter-outline" size={20} color="#0F766E" />
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

              <Text style={[styles.transactionAmount, item.selected && styles.selectedText]}>
                {item.amount}
              </Text>
            </View>
          ))}
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
  contentContainer: {
    paddingHorizontal: 18,
    paddingTop: 10,
    paddingBottom: 100,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
  },
  filterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#F8FAFC',
    borderRadius: 16,
    padding: 4,
  },
  filterButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 10,
    marginHorizontal: 2,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  filterButtonActive: {
    backgroundColor: '#0F766E',
    shadowOpacity: 0,
    elevation: 0,
  },
  filterText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0F766E',
  },
  filterTextActive: {
    color: '#FFFFFF',
  },
  chartCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 14,
    elevation: 4,
  },
  chartHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  chartHeader: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  dropdownText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0F766E',
  },
  chartContainer: {
    borderRadius: 18,
    backgroundColor: '#F9FDFB',
    paddingVertical: 10,
    paddingHorizontal: 6,
    overflow: 'hidden',
  },
  tooltipBubble: {
    position: 'absolute',
    top: 60,
    right: 54,
    backgroundColor: '#0F766E',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.16,
    shadowRadius: 8,
    elevation: 4,
  },
  tooltipText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },
  bottomLabelsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: -4,
  },
  bottomLabel: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '600',
  },
  spendingSection: {
    marginBottom: 20,
  },
  spendingHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  spendingTitle: {
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