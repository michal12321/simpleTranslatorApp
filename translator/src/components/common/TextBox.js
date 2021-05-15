import React, {useState} from 'react';
import {TextInput, StyleSheet} from 'react-native';

const TextBox = ({placeholder}) => {
  const [text, setText] = useState();

  return (
    <TextInput
      style={styles.input}
      onChangeText={setText}
      value={text}
      placeholder={placeholder}
      multiline={true}
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
