import React, {useState} from 'react';
import {TextInput, View, StyleSheet, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import TextBox from './common/TextBox';
import Header from './common/Header';
import {Colors} from '../styles';

const CONFIG = {
  HEADER_TITLE: 'SIMPLE TRANSLATOR APP',
  PICKER_DESCRIPTION: 'Select language to translate to:',
  INPUT_PLACEHOLDER: 'Touch to write...',
};

const Translator = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [translatedText, setTranslatedText] = useState('text will appear here');
  return (
    <View>
      <Header title={CONFIG.HEADER_TITLE} />
      <Text style={styles.pickerDescription}>{CONFIG.PICKER_DESCRIPTION}</Text>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
        }>
        <Picker.Item label="Polish" value="pl" />
        <Picker.Item label="Deutsch" value="de" />
        <Picker.Item label="Chinesee" value="ch" />
      </Picker>
      <TextBox placeholder={CONFIG.INPUT_PLACEHOLDER} />
      <Text style={styles.translatedText}>{translatedText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  pickerDescription: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 5,
    paddingTop: 20,
  },
  picker: {
    borderColor: Colors.green,
  },
  translatedText: {
    marginLeft: 20,
    paddingVertical: 10,
  },
});

export default Translator;
