import level from 'level'

import config from './config.json'

const KEY = 'data'

const db = level(config.dbLocation)

const getData = async () => db.get(KEY).then(JSON.parse)

const setData = data => db.put(KEY, JSON.stringify(data))

export default { getData, setData }
