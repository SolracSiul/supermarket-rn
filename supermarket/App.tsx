import { StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc'

export default function App() {
  return (
    <View style={tw`flex w-full justify-center items-center bg-blue-400`}>
      <Text style={tw`justify-center items-center bg-blue-400`}>hello world</Text>
    </View>
  );
}

