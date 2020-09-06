import {makeEntity} from '@evoke-me/state'
import {makeAuthDoc} from './doc/make--auth--doc'

export const fromEntity = makeEntity({
  who: [`@evoke-me`, `auth`],
  isDebugStores: true,
  isDebugEvents: true,
  isDebugEffects: true,
})

function makeDoc({id}) {
  return makeAuthDoc({fromEntity, id})
}

export const fromAuth = {
  ...fromEntity,
  utils: {
    makeDoc,
  },
}
