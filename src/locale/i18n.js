import I18n from 'i18n-js'
import * as RNLocalize from 'react-native-localize'

import en from './translations/en_US'
import tr from './translations/tr_TR'

I18n.fallbacks = true

I18n.translations = {
  en,
  tr,
}

export default I18n
