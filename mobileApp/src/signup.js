import React from 'React';
import axios from 'axios';
import { 
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  AsyncStorage,
} from 'react-native';
const URL = 

class SignUp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      error: null,
    }

    handleInputChange = (text, type) => {
      this.setState({[type]: text});
      
    };

    signUp: () => {
      const { email, password } = this.state;
      axios.post(`${URL}/users`, { email, password })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
          this.setState({
            error: 'Error on sign up',
          });
          setTimeout(() => {
            this.setState({error: null});
          }, 3000);
        });
      this.setState({
        email: '',
        password: '',
      });
    };

  };

  render() {
    return (
      <View style={container}>
        <Text style={heading}>
          Create an Account
        </Text>
        <TextInput onChangeText={(text) => this.handleInputChange(text, email)}  style={inputStyle} placeholder="Email" />
        <TextInput onChangeText={(text) => this.handleInputChange(text, password)}  style={inputStyle} placeholder="Password" />
        <Button onPress={() => this.signUp} title="Sign Up" />
        { this.state.error !== null ? <Text style={errorText}>{this.state.error}</Text> : null }
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center'
  },
  heading: {
    fontSize: 20,
  },
  inputStyle: {
    height: 40,
    width: 250,
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white'
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  }
});

const { container, inputStyle, heading, errorText } = styles;

export default Signup;