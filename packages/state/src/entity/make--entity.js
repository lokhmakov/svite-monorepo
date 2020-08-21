import {createDomain} from 'effector'
import {fromDebug} from '../debug/domain--debug'

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
  const debug = (...args) =>
    fromDebug.run.debug({
      who,
      args,
    })

  const debugUnfolded = (...args) =>
    fromDebug.run.debug({
      who,
      args,
      isFolded: false,
    })

  const domain = createDomain()
  const $ = {}
  const on = {}
  const run = {}

  if (isDebugStores) {
    featureDebugStores({domain, debug})
  }

  if (isDebugEffects) {
    featureDebugEffects({domain, debug: debugUnfolded})
  }

  if (isDebugEvents) {
    featureDebugEvents({domain, debug: debugUnfolded})
  }

  on.data = domain.event(`data`)
  on.order = domain.event(`order`)

  $.data = domain.store({}, {name: `data`})
  $.order = domain.store([], {name: `order`})

  $.data.on(on.data, (state, v) => v)
  $.order.on(on.order, (state, v) => v)

  featureCreate({$, debug, domain, on, run})
  featureUpdate({$, debug, domain, on, run})
  featureRemove({$, debug, domain, on, run})
  featureUpsert({$, debug, domain, on, run})

  return {$, domain, debug, on, run}
}
