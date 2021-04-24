/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import ItemList from './ItemList';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      data: [],
    };
  }

  render() {
    const {text, data} = this.state;
    return (
      <SafeAreaView>
        <View style={style.title}>
          <Text style={style.title_text}>To-Do List</Text>
        </View>
        <View style={{padding: 10, flexDirection: 'row'}}>
          <TextInput
            style={style.input}
            value={text}
            onChangeText={text => this.setState({text})}
          />
          <TouchableOpacity onPress={this.handleSave} style={style.button}>
            <Text style={style.title_text}>Ekle</Text>
          </TouchableOpacity>
        </View>
        <View>
          {data.map((item, index) => {
            return (
              <ItemList
                text={item.text}
                id={index}
                remove={this.handleRemove}
              />
            );
          })}
        </View>
      </SafeAreaView>
    );
  }

  handleSave = () => {
    const {text, data} = this.state;
    if (text) {
      data.push({text});
      this.setState({data, text: ''});
    }
  };

  handleRemove = index => {
    const {data} = this.state;
    if (index) {
      data.splice(index, 1);
      this.setState({data});
    }
  };
}

const style = StyleSheet.create({
  title: {
    backgroundColor: 'red',
    padding: 10,
  },
  title_text: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  input: {
    padding: 10,
    backgroundColor: 'white',
    flex: 1,
  },
  button: {
    padding: 10,
    backgroundColor: 'red',
    flex: 0.3,
    borderRadius: 5,
    marginLeft: 10,
  },
});
