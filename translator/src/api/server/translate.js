import axios from 'axios';
import Config from 'react-native-config';

export default {
  async getTranslation(text, targetLanguage, baseLanguage) {
    return axios.post(
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
    );
  },
};
