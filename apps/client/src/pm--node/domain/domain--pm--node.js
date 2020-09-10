import {makeEntity} from '@evoke-me/state'
import {featureQueryAll} from './feature--query-all'

export const fromEntity = makeEntity({
  who: [`@evoke-me`, `pm`],
  isDebugStores: true,
  isDebugEvents: true,
  isDebugEffects: true,
})

const queryAll = featureQueryAll({fromEntity})

export const fromPmNode = {
  ...fromEntity,
  queryAll,
}
