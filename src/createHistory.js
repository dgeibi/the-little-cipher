export default pathname => {
  if (process.env.SSR) {
    const { createMemoryHistory } = require('history')
    return createMemoryHistory({
      initialEntries: [pathname],
    })
  }
  const { createBrowserHistory, createHashHistory } = require('history')
  const supportHistoryAPI = window.history && window.history.pushState
  return (supportHistoryAPI ? createBrowserHistory : createHashHistory)()
}
