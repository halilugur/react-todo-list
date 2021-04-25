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
  ScrollView,
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
      <SafeAreaView style={{flex: 1}}>
        <View>
          <View style={style.title}>
            <Text style={style.title_text}>Things To Do</Text>
          </View>
          <View style={{padding: 10, flexDirection: 'row'}}>
            <TextInput
              style={style.input}
              value={text}
              onChangeText={text => this.setState({text})}
            />
            <TouchableOpacity onPress={this.handleSave} style={style.button}>
              <Text style={style.title_text}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView>
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
        </ScrollView>
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
    backgroundColor: '#002ca0',
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
    borderRadius: 5,
    flex: 1,
  },
  button: {
    padding: 10,
    backgroundColor: '#002ca0',
    flex: 0.3,
    borderRadius: 5,
    marginLeft: 10,
  },
});
