import {makeEntity} from '@evoke-me/state'

const {$, domain, debug, on, run} = makeEntity({
  who: [`@evoke-me`, `ui`, `auth`],
  isDebugStores: true,
  isDebugEvents: true,
})

export const fromAuth = {
  $,
  domain,
  debug,
  on,
  run,
}
