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

type ProfileScreenProps = {
  navigation: {
    navigate: (screen: string) => void;
    goBack?: () => void;
  };
};

type MenuItem = {
  title: string;
  icon: string;
  screen?: string;
};

const menuItems: MenuItem[] = [
  { title: 'Invite Friends', icon: 'diamond-outline', screen: undefined },
  { title: 'Account info', icon: 'person-outline', screen: 'EditProfile' },
  { title: 'Personal profile', icon: 'people-outline', screen: undefined },
  { title: 'Message center', icon: 'mail-outline', screen: undefined },
  { title: 'Login and security', icon: 'shield-checkmark-outline', screen: 'ChangePassword' },
  { title: 'Data and privacy', icon: 'lock-closed-outline', screen: undefined },
];

const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation }) => {
  const handleRowPress = (screen?: string) => {
    if (screen) {
      navigation.navigate(screen);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.screenWrap}>
          <View style={styles.header}>
            <View style={styles.topDecor} />
            <View style={styles.topDecorLarge} />

            <View style={styles.headerRow}>
              <TouchableOpacity style={styles.backButton} activeOpacity={0.8}>
                <Ionicons name="chevron-back" size={24} color="#FFFFFF" />
              </TouchableOpacity>

              <Text style={styles.headerTitle}>Profile</Text>

              <TouchableOpacity style={styles.notificationButton} activeOpacity={0.8}>
                <Ionicons name="notifications-outline" size={22} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.profileCard}>
            <Image
              source={require('../assets/images/logo.png')}
              style={styles.avatar}
            />

            <Text style={styles.name}>Enjelin Morgena</Text>
            <Text style={styles.handle}>@enjelin_morgena</Text>
          </View>

          <View style={styles.listCard}>
            {menuItems.map((item, index) => (
              <TouchableOpacity
                key={item.title}
                style={[
                  styles.menuRow,
                  index === menuItems.length - 1 && styles.lastRow,
                ]}
                activeOpacity={0.8}
                onPress={() => handleRowPress(item.screen)}
              >
                <View style={styles.itemLeft}>
                  <View style={styles.iconWrap}>
                    <Ionicons
                      name={item.icon}
                      size={20}
                      color="#5A6B67"
                    />
                  </View>
                  <Text style={styles.menuText}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>

          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#EAEAEA',
  },
  contentContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  screenWrap: {
    flex: 1,
    backgroundColor: '#EAEAEA',
  },
  header: {
    height: 248,
    backgroundColor: 'darkgreen',
    borderBottomLeftRadius: 38,
    borderBottomRightRadius: 38,
    overflow: 'hidden',
    paddingTop: 18,
    paddingHorizontal: 18,
    position: 'relative',
  },
  topDecor: {
    position: 'absolute',
    width: 350,
    height: 350,
    borderRadius: 175,
    backgroundColor: 'rgba(255,255,255,0.08)',
    left: -82,
    top: -90,
  },
  topDecorLarge: {
    position: 'absolute',
    width: 420,
    height: 420,
    borderRadius: 210,
    backgroundColor: 'rgba(255,255,255,0.08)',
    right: -90,
    top: -130,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    zIndex: 1,
  },
  backButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  notificationButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.12)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileCard: {
    backgroundColor: '#FFFFFF',
    marginTop: -72,
    marginHorizontal: 24,
    borderRadius: 32,
    paddingTop: 18,
    paddingBottom: 16,
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 5,
  },
  avatar: {
    width: 104,
    height: 104,
    borderRadius: 52,
    backgroundColor: '#D7F3E7',
    borderWidth: 4,
    borderColor: '#FFFFFF',
  },
  name: {
    marginTop: 16,
    fontSize: 24,
    fontWeight: '700',
    color: '#0F172A',
  },
  handle: {
    marginTop: 8,
    fontSize: 14,
    color: '#64748B',
    fontWeight: '500',
  },
  listCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 22,
    marginTop: 18,
    borderRadius: 26,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 3,
    overflow: 'hidden',
  },
  menuRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  lastRow: {
    borderBottomWidth: 0,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrap: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  menuText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#1E293B',
    letterSpacing: 0.2,
  },
  bottomNav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: 20,
    paddingVertical: 14,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 5,
  },
  navItem: {
    width: 42,
    height: 42,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navItemActive: {
    backgroundColor: '#0F766E',
  },
});
