import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

export default function AddFriendsPage() {
  const [friendName, setFriendName] = useState<string>('');
  const [friends, setFriends] = useState<string[]>([]);

  const addFriend = () => {
    if (friendName.trim() !== '') {
      setFriends([...friends, friendName.trim()]);
      setFriendName('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Friends</Text>
      <TextInput
        style={styles.input}
        placeholder="Friend's Name"
        value={friendName}
        onChangeText={setFriendName}
      />
      <Button title="Add Friend" onPress={addFriend} />
      <FlatList
        data={friends}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
  input: { width: 200, borderWidth: 1, marginBottom: 12, padding: 8 }
});
