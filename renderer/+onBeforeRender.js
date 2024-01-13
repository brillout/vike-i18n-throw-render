export default onBeforeRender

function onBeforeRender(pageContext) {
    console.log("onBeforeRender", pageContext.locale)
    return {
        pageContext: {
            
        }
    }
}
