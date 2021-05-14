import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';

import Translator from './components/Translator';

const App: () => Node = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Translator />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
