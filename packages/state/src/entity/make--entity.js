import {createDomain} from 'effector'
import {fromDebug} from '../debug/domain--debug'

import {featureMain} from './feature--main'
import {featureCreate} from './feature--create'
import {featureUpdate} from './feature--update'
import {featureRemove} from './feature--remove'
import {featureUpsert} from './feature--upsert'
import {featureDebugStores} from './feature--debug-stores'
import {featureDebugEvents} from './feature--debug-events'
import {featureDebugEffects} from './feature--debug-effects'

export function makeEntity({
  who,
  isDebugEffects = false,
  isDebugEvents = false,
  isDebugStores = false,
}) {
  const debug = (...args) => fromDebug.debug.run.debug({who, args})

  const domain = createDomain()

  if (isDebugStores) {
    featureDebugStores({domain, debug})
  }

  if (isDebugEffects) {
    featureDebugEffects({domain, debug})
  }

  if (isDebugEvents) {
    featureDebugEvents({domain, debug})
  }

  const main = featureMain({domain})
  const create = featureCreate({domain, main})
  const update = featureUpdate({domain, main})
  const remove = featureRemove({domain, main})
  const upsert = featureUpsert({domain, main, create, update})

  return {
    domain,
    debug,
    main,
    create,
    update,
    remove,
    upsert,
  }
}
