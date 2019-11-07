import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, Button, ThemeProvider } from "react-native-elements";

class App extends React.Component {
  state = {
    number: 0,
  }

  render() {    
    return (
      <View style={styles.container}>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <Button
          style={styles.button}
          title="Press me!"
          onPress={() => {this.setState({number: this.state.number+1})}}
        />
        <Text style={styles.text} >{this.state.number}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
  }
});

export default App;