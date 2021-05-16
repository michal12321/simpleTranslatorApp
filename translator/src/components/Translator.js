import React, {useState, useEffect} from 'react';
import {Image, View, StyleSheet, Text} from 'react-native';

import {baseLanguages, targetLanguages} from '../assets/languages';
import Header from './common/Header';
import LangPicker from './common/Picker';
import TextBox from './common/TextBox';
import translate from '../api/server/translate';

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

  useEffect(() => {
    const getTranslation = () => {
      translate
        .getTranslation(text, targetLanguage, baseLanguage)
        .then(res => {
          setTranslatedText(res.data.data.translations[0].translatedText);
        })
        .catch(err => console.log(err));
    };

    clearTimeout(translationTimeout);
    const translationTimeout = setTimeout(() => getTranslation(), 500);
  }, [text, targetLanguage, baseLanguage]);

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
