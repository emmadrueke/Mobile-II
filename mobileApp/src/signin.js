import React from 'React';
import {
  View,
  Text, 
  StyleSheet
} from 'react-native';

const SignIn = props => {
  return (
    <View style={container}>
      <Text>
        {/*fill in a form to log in and save the token*/}
        Hellow From Sign in
      </Text>
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

});

const { container } = styles;

export default SignIn;