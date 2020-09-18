mport I18n from "i18n-js";
import * as RNLocalize from "react-native-localize";

import en from "./locale/translations/en_US";
import tr from "./locale/translations/tr_TR";

const locales = RNLocalize.getLocales();

if (Array.isArray(locales)) {
  I18n.locale = locales[0].languageTag;
}

I18n.fallbacks = true;
I18n.translations = {
  en,
  tr
};

export default I18n;
