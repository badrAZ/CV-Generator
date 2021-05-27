const makeRequest = (method, ...args) =>
  window
    .fetch('/cv/api', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({ method, args }),
    })
    .then(res => res.text())
    .then(v => {
      try {
        return JSON.parse(v)
      } catch (error) {
        console.log(error)
      }
    })

export const getData = (tmp = true) => makeRequest('getData', tmp)
export const setData = (data, tmp = true) => makeRequest('setData', data, tmp)

export const getStyles = (tmp = true) => makeRequest('getStyles', tmp)
export const setStyles = (data, tmp = true) =>
  makeRequest('setStyles', data, tmp)
