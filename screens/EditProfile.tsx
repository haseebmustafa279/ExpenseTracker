import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

type EditProfileProps = {
  navigation: {
    goBack: () => void;
    navigate: (screen: string, params?: object) => void;
  };
};

const EditProfileScreen: React.FC<EditProfileProps> = ({ navigation }) => {
  const [fullName, setFullName] = useState('Muhammad Haseeb');
  const [email, setEmail] = useState('haseeb@example.com');
  const [phone, setPhone] = useState('+92 300 1234567');
  const [username, setUsername] = useState('haseeb');
  const [country, setCountry] = useState('Pakistan');
  const [currency, setCurrency] = useState('PKR');

  const handleSave = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.headerIcon}
            activeOpacity={0.8}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back" size={24} color="#FFFFFF" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Edit Profile</Text>

          <View style={styles.headerSpacer} />
        </View>

        <View style={styles.profileArea}>
          <View style={styles.avatarWrap}>
            <Image
              source={require('../assets/images/logo.png')}
              style={styles.avatar}
            />
            <TouchableOpacity style={styles.cameraButton} activeOpacity={0.8}>
              <Ionicons name="camera-outline" size={18} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Personal Information</Text>

          <View style={styles.fieldWrap}>
            <Text style={styles.label}>Full Name</Text>
            <View style={styles.inputBox}>
              <Ionicons name="person-outline" size={18} color="#0F766E" />
              <TextInput
                value={fullName}
                onChangeText={setFullName}
                style={styles.input}
                placeholderTextColor="#94A3B8"
              />
            </View>
          </View>

          <View style={styles.fieldWrap}>
            <Text style={styles.label}>Email</Text>
            <View style={styles.inputBox}>
              <Ionicons name="mail-outline" size={18} color="#0F766E" />
              <TextInput
                value={email}
                onChangeText={setEmail}
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
                placeholderTextColor="#94A3B8"
              />
            </View>
          </View>

          <View style={styles.fieldWrap}>
            <Text style={styles.label}>Phone Number</Text>
            <View style={styles.inputBox}>
              <Ionicons name="call-outline" size={18} color="#0F766E" />
              <TextInput
                value={phone}
                onChangeText={setPhone}
                style={styles.input}
                keyboardType="phone-pad"
                placeholderTextColor="#94A3B8"
              />
            </View>
          </View>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Account Information</Text>

          <View style={styles.fieldWrap}>
            <Text style={styles.label}>Username</Text>
            <View style={styles.inputBox}>
              <Ionicons name="person-circle-outline" size={18} color="#0F766E" />
              <TextInput
                value={username}
                onChangeText={setUsername}
                style={styles.input}
                autoCapitalize="none"
                placeholderTextColor="#94A3B8"
              />
            </View>
          </View>

          <View style={styles.fieldWrap}>
            <Text style={styles.label}>Country</Text>
            <View style={styles.inputBox}>
              <Ionicons name="flag-outline" size={18} color="#0F766E" />
              <TextInput
                value={country}
                onChangeText={setCountry}
                style={styles.input}
                placeholderTextColor="#94A3B8"
              />
            </View>
          </View>

          <View style={styles.fieldWrap}>
            <Text style={styles.label}>Currency</Text>
            <View style={styles.inputBox}>
              <Ionicons name="cash-outline" size={18} color="darkgreen" />
              <TextInput
                value={currency}
                onChangeText={setCurrency}
                style={styles.input}
                placeholderTextColor="#94A3B8"
              />
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.saveButton}
          activeOpacity={0.85}
          onPress={handleSave}
        >
          <Text style={styles.saveButtonText}>Save Changes</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  contentContainer: {
    paddingBottom: 40,
    backgroundColor: '#FFFFFF',
  },
  header: {
    height: 230,
    backgroundColor: 'darkgreen',
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 20,
    position: 'relative',
    paddingBottom: 150,
  },
  headerIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.14)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 0.2,
  },
  headerSpacer: {
    width: 40,
    height: 40,
  },
  profileArea: {
    marginTop: -42,
    marginBottom: 18,
    alignItems: 'center',
  },
  avatarWrap: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#FFFFFF',
    backgroundColor: '#D1FAE5',
  },
  cameraButton: {
    position: 'absolute',
    right: -8,
    bottom: -2,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#0F766E',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#FFFFFF',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 4,
  },
  sectionCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 22,
    borderRadius: 24,
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 6,
    marginBottom: 18,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 16,
  },
  fieldWrap: {
    marginBottom: 16,
  },
  label: {
    fontSize: 13,
    fontWeight: '700',
    color: '#475569',
    marginBottom: 8,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
    color: '#0F172A',
    paddingVertical: 0,
  },
  saveButton: {
    marginHorizontal: 22,
    marginTop: 10,
    backgroundColor: '#0F766E',
    borderRadius: 18,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#0F766E',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 4,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
  },
});
