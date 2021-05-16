import React, {useState} from 'react';
import {TextInput, StyleSheet} from 'react-native';

const TextBox = ({placeholder, textValue, onChangeText, onSubmit}) => {
  return (
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      value={textValue}
      placeholder={placeholder}
      multiline={true}
      onSubmitEditing={onSubmit}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    textAlignVertical: 'top',
    height: 100,
    margin: 12,
    borderWidth: 1,
  },
});

export default TextBox;
