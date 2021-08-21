export default class Cv {
  static req = (method, ...args) =>
    window
      .fetch('/api', {
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
          console.log(v, error)
        }
      })

  static get = () => Cv.req('getData')
  static set = data => Cv.req('setData', data)
}
