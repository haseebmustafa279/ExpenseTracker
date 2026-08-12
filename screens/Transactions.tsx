import React from 'react';
import {
  Image,
  ImageSourcePropType,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export type TransactionDetailsParams = {
  type?: 'income' | 'expense';
  image?: ImageSourcePropType | string;
  name?: string;
  amount?: string;
  date?: string;
  time?: string;
  status?: string;
  source?: string;
  earning?: string;
  spending?: string;
  fee?: string;
  total?: string;
};

type TransactionDetailsScreenProps = {
  navigation: {
    goBack: () => void;
  };
  route: {
    params?: TransactionDetailsParams;
  };
};

const TransactionDetailsScreen: React.FC<TransactionDetailsScreenProps> = ({
  navigation,
  route,
}) => {
  const {
    type,
    image: imageParam,
    amount,
    date,
    time,
    status,
    source,
    earning,
    spending,
    fee,
    total,
  } = route?.params ?? {};

  const isIncome = (type ?? 'income') === 'income';
  const title = type === 'income' ? 'Upwork' : 'Shopping';
  const detailStatus = status ?? (isIncome ? 'Income' : 'Expense');
  const detailSource = source ?? (isIncome ? 'Upwork Escrow' : 'Claire Jovalski');
  const detailAmount = amount ?? '';
  const detailDate = date ?? '';
  const detailTime = time ?? '';
  const primaryLabel = isIncome ? 'Earnings' : 'Spending';
  const primaryValue = isIncome ? earning ?? '' : spending ?? '';
  const feeValue = fee ?? '';
  const totalValue = total ?? '';

  const fallbackInitials = title
    .split(' ')
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join('');

  const resolvedImage =
    typeof imageParam === 'string' ? { uri: imageParam } : imageParam;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.screen}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => navigation.goBack()}
            activeOpacity={0.8}
          >
            <Ionicons name="chevron-back" size={24} color="#FFFFFF" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Transaction Details</Text>

          <TouchableOpacity style={styles.iconButton} activeOpacity={0.8}>
            <Ionicons name="ellipsis-horizontal" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.card}>
            <View style={styles.imageWrapper}>
              {imageParam ? (
                <Image source={resolvedImage as ImageSourcePropType} style={styles.avatarImage} />
              ) : (
                <View style={styles.avatarPlaceholder}>
                  <Text style={styles.avatarText}>{fallbackInitials}</Text>
                </View>
              )}
            </View>

            <View style={[styles.badge, isIncome ? styles.incomeBadge : styles.expenseBadge]}>
              <Text style={[styles.badgeText, isIncome ? styles.incomeBadgeText : styles.expenseBadgeText]}>
                {detailStatus}
              </Text>
            </View>

            <Text style={styles.amount}>{detailAmount}</Text>

            <View style={styles.detailsCard}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Transaction details</Text>
                <Ionicons name="chevron-down" size={18} color="#64748B" />
              </View>

              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Status</Text>
                <Text style={styles.detailValue}>{detailStatus}</Text>
              </View>
              <View style={styles.separator} />

              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>{isIncome ? 'From' : 'To'}</Text>
                <Text style={styles.detailValue}>{detailSource}</Text>
              </View>
              <View style={styles.separator} />

              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Time</Text>
                <Text style={styles.detailValue}>{detailTime}</Text>
              </View>
              <View style={styles.separator} />

              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Date</Text>
                <Text style={styles.detailValue}>{detailDate}</Text>
              </View>
              <View style={styles.separator} />

              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>{primaryLabel}</Text>
                <Text style={styles.detailValue}>{primaryValue}</Text>
              </View>
              <View style={styles.separator} />

              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Fee</Text>
                <Text style={styles.detailValue}>{feeValue}</Text>
              </View>
              <View style={styles.separator} />

              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Total</Text>
                <Text style={[styles.detailValue, styles.totalValue]}>{totalValue}</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.actionButton} activeOpacity={0.85}>
            <Text style={styles.actionButtonText}>Download Receipt</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: 'darkgreen',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
  scrollContainer: {
    paddingHorizontal: 24,
    paddingBottom: 32,
    marginTop: -36,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    paddingTop: 28,
    paddingBottom: 22,
    paddingHorizontal: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.08,
    shadowRadius: 18,
    elevation: 10,
    alignItems: 'center',
  },
  imageWrapper: {
    width: 96,
    height: 96,
    borderRadius: 48,
    overflow: 'hidden',
    marginBottom: 14,
    backgroundColor: '#E2E8F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
  },
  avatarPlaceholder: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CCFBF1',
  },
  avatarText: {
    fontSize: 28,
    fontWeight: '700',
    color: '#0F766E',
  },
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    marginBottom: 12,
  },
  incomeBadge: {
    backgroundColor: '#DCFCE7',
  },
  expenseBadge: {
    backgroundColor: '#FEE2E2',
  },
  badgeText: {
    fontSize: 13,
    fontWeight: '700',
  },
  incomeBadgeText: {
    color: '#166534',
  },
  expenseBadgeText: {
    color: '#B91C1C',
  },
  amount: {
    fontSize: 30,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 20,
  },
  detailsCard: {
    width: '100%',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    paddingHorizontal: 14,
    paddingTop: 12,
    paddingBottom: 6,
    backgroundColor: '#FAFAFA',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  detailLabel: {
    fontSize: 14,
    color: '#64748B',
    flex: 1,
  },
  detailValue: {
    fontSize: 14,
    color: '#111827',
    fontWeight: '600',
    flex: 1,
    textAlign: 'right',
  },
  separator: {
    height: 1,
    backgroundColor: '#E5E7EB',
  },
  totalValue: {
    color: '#0F766E',
  },
  actionButton: {
    marginTop: 20,
    borderWidth: 1.5,
    borderColor: '#0F766E',
    borderRadius: 999,
    paddingVertical: 14,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  actionButtonText: {
    color: '#0F766E',
    fontSize: 15,
    fontWeight: '700',
  },
});

export default TransactionDetailsScreen;
