import {createDomain} from 'effector'
import {featureMain} from './feature--main'
import {featureDebug} from './feature--debug'

const $ = {}
const on = {}
const run = {}

const domain = createDomain()

const main = featureMain({domain})
const debug = featureDebug({domain, main})

export const fromDebug = {
  main,
  debug,
}
