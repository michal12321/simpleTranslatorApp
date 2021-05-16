import React, {useState} from 'react';
import {Image, View, StyleSheet, Text} from 'react-native';
import axios from 'axios';
import Config from 'react-native-config';

import {baseLanguages, targetLanguages} from '../assets/languages';
import Header from './common/Header';
import LangPicker from './common/Picker';
import TextBox from './common/TextBox';

const CONFIG = {
  HEADER_TITLE: 'SIMPLE TRANSLATOR APP',
  PICKER_DESCRIPTION: 'Select languages:',
  INPUT_PLACEHOLDER: 'Touch to write...',
  OUTPUT_DESCRIPTION: 'Translated text: ',
  ARROW_PATH: require('../assets/icons/arrow.png'),
};

const Translator = () => {
  const [text, setText] = useState();
  const [translatedText, setTranslatedText] = useState('text will appear here');
  const [baseLanguage, setBaseLanguage] = useState();
  const [targetLanguage, setTargetLanguage] = useState();

  const translate = () => {
    axios
      .post(
        `${Config.API_URL}/language/translate/v2`,
        {},
        {
          params: {
            q: text,
            target: targetLanguage,
            key: Config.API_KEY,
            format: 'text',
            source: baseLanguage,
          },
        },
      )
      .then(res => {
        console.log(res.data.data.translations[0].translatedText);
        setTranslatedText(res.data.data.translations[0].translatedText);
      })
      .catch(err => console.log(err));
  };

  return (
    <View style={styles.container}>
      <Header title={CONFIG.HEADER_TITLE} />
      <Text style={styles.pickerDescription}>{CONFIG.PICKER_DESCRIPTION}</Text>
      <View style={styles.pickerContainer}>
        <LangPicker
          style={styles.picker}
          pickerItems={baseLanguages}
          selectedLanguage={baseLanguage}
          setSelectedLanguage={setBaseLanguage}
        />
        <Image style={styles.icon} source={CONFIG.ARROW_PATH} />
        <LangPicker
          style={styles.picker}
          pickerItems={targetLanguages}
          selectedLanguage={targetLanguage}
          setSelectedLanguage={setTargetLanguage}
        />
      </View>
      <TextBox
        placeholder={CONFIG.INPUT_PLACEHOLDER}
        textValue={text}
        onChangeText={setText}
        onSubmit={translate}
      />
      <Text style={styles.pickerDescription}>{CONFIG.OUTPUT_DESCRIPTION}</Text>
      <Text style={styles.translatedText}>{translatedText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pickerDescription: {
    height: 50,
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 5,
    paddingTop: 20,
  },
  pickerContainer: {
    justifyContent: 'space-between',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  picker: {
    width: '40%',
  },
  icon: {
    height: 40,
    width: 50,
  },
  translatedText: {
    marginLeft: 20,
    paddingVertical: 10,
    height: 400,
  },
});

export default Translator;
