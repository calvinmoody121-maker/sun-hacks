import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Landing: undefined;
  SignIn: undefined;
  AddFriends: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Landing'>;

export default function LandingPage({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the App</Text>
      <Button title="Sign In" onPress={() => navigation.navigate('SignIn')} />
      <Button title="Add Friends" onPress={() => navigation.navigate('AddFriends')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 }
});
