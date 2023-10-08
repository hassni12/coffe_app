import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TextInput,
} from 'react-native';

const App = () => {
  const [name, setName] = React.useState('');
  const onPress = () => {
    console.warn('error');
  };
  const onClickHandler = () => {};
  return (
    <View>
      <Text style={styles.sectionTitle}>my first app {name}</Text> 

      <Text>my first app</Text>
      <TextInput placeholder="Enter test" onChangeText={e => setName(e)} />
      <Button title="press here" onPress={onPress} color={'grey'}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    backgroundColor: 'purple',
    fontWeight: '500',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
