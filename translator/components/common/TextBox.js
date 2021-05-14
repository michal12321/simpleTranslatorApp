import React, {useState} from 'react';
import {TextInput, StyleSheet} from 'react-native';

const TextBox = () => {
  const [text, setText] = useState();

  return (
    <TextInput
      style={styles.input}
      onChangeText={setText}
      value={text}
      placeholder="translate..."
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

export default TextBox;
