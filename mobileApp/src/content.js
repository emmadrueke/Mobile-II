import React from 'React';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
} from 'react-natvie';

const Contents = props => {
  return (
    <View style={container}>
      <Text>
        Create an Account
      </Text>
      <TextInput style={inputStyle} placeholder="Email" />
      <TextInput style={inputStyle} placeholder="Password" />
      <Button titel="Sign Up" />    
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputStyle: {
    height: 430,
    width: 250,
    marginTop: 5,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'white',
  }
});

const { container, inputStyle } = styles;

export default Contents;