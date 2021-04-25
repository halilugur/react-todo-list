import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ItemList = ({text, id, remove}) => {
  return (
    <View style={style.main}>
      <View style={style.card}>
        <Text style={{marginRight: 20}}>{id}</Text>
        <Text>{text}</Text>
      </View>
      <View style={style.button}>
        <TouchableOpacity onPress={remove}>
          <Text
            style={{textAlign: 'center', color: 'white', fontWeight: 'bold'}}>
            Remove
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  main: {
    flexDirection: 'row',
    flex: 1,
  },
  card: {
    padding: 10,
    backgroundColor: '#ddd',
    margin: 5,
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    padding: 10,
    backgroundColor: 'red',
    margin: 5,
    flex: 0.3,
    borderRadius: 5,
  },
});

export default ItemList;
