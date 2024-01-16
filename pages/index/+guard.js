// https://vike.dev/guard
export { guard }

//import { renderI18n } from '#/renderer/render-i18n'
import { render } from 'vike/abort'

const guard = async (pageContext) => {
  if (pageContext.locale == 'fr-FR') {
    const url = '/' + pageContext.locale + '/about'
    console.log(`throw render('${url}')`);
    throw render(url)
  }
}
