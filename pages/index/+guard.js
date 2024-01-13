// https://vike.dev/guard
export { guard }

//import { renderI18n } from '#/renderer/render-i18n'
import { render } from 'vike/abort'

const guard = async (pageContext) => {
  if (pageContext.locale == 'fr-FR') {
    throw render('/about') // Works on full page reload but not client side as the locale is not known
    //throw render('/' + pageContext.locale + '/about') // URL /fr-FR/about doesn't match the route of any of your pages:
  }
}
