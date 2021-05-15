import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';

import Translator from './src/components/Translator';

const App: () => Node = () => {
  return (
    <SafeAreaView>
      <View>
        <Translator />
      </View>
    </SafeAreaView>
  );
};

export default App;
