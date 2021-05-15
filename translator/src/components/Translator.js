import React, {useState} from 'react';
import {TextInput, View, StyleSheet, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import TextBox from './common/TextBox';
import Header from './common/Header';

const CONFIG = {
  HEADER_TITLE: 'SIMPLE TRANSLATOR APP',
  PICKER_DESCRIPTION: 'Select language to translate to:',
};

const Translator = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <View>
      <Header title={CONFIG.HEADER_TITLE} />
      <Text>{CONFIG.PICKER_DESCRIPTION}</Text>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
        }>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
      <TextBox />
    </View>
  );
};

export default Translator;
