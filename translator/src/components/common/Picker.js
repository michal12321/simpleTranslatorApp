import React from 'react';
import {Picker} from '@react-native-picker/picker';

const LangPicker = ({
  style,
  pickerItems,
  selectedLanguage,
  setSelectedLanguage,
}) => {
  const PickerItems = pickerItems => {
    return pickerItems.map(item => {
      return (
        <Picker.Item key={item.id} label={item.name} value={item.isoCode} />
      );
    });
  };
  return (
    <Picker
      style={style}
      selectedValue={selectedLanguage}
      onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}>
      {PickerItems(pickerItems)}
    </Picker>
  );
};

export default LangPicker;
