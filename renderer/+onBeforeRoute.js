export default onBeforeRoute

import { extractLocale } from '../locales'

function onBeforeRoute(pageContext) {
  console.log("onBeforeRoute")
  const { urlWithoutLocale, locale } = extractLocale(pageContext.urlOriginal)
  console.log(locale, urlWithoutLocale)
  return {
    pageContext: {
      // We make `locale` available as `pageContext.locale`. We can then use https://vike.dev/pageContext-anywhere to access pageContext.locale in any React/Vue component.
      locale,
      // Tell Vike's router to use the value urlWithoutLocale instead of pageContext.urlOriginal
      urlLogical: urlWithoutLocale
    }
  }
}
