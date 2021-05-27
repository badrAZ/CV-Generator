import level from 'level'

import config from './config.json'

const db = level(config.dbLocation)
const get = key => db.get(key).then(JSON.parse, console.error)
const set = (key, data) => db.put(key, JSON.stringify(data))

const KEY = 'data'
const TMP_KEY = 'tmpData'
const getData = (tmp = false) => get(tmp ? TMP_KEY : KEY)
const setData = (data, tmp) => set(tmp ? TMP_KEY : KEY, data)

const STYLES_KEY = 'styles'
const TMP_STYLES_KEY = 'tmpStyles'
const getStyles = (tmp = false) => get(tmp ? TMP_STYLES_KEY : STYLES_KEY)
const setStyles = (data, tmp) => set(tmp ? TMP_STYLES_KEY : STYLES_KEY, data)

export default { getData, setData, getStyles, setStyles }
