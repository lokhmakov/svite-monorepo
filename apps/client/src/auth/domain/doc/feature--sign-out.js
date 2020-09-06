import {attach} from 'effector'

export function featureSignOut({domain, update}) {
  const $ = {}
  const on = {}
  const run = {}

  const name = `signOut`
  const _name = `_${name}`

  run[_name] = domain.effect({
    name: _name,
    async handler() {
      update.on.update({
        jwt: null,
        user: null,
      })
    },
  })

  run[name] = attach({
    name,
    effect: run[_name],
    source: {},
    mapParams: (params, states) => ({...params, ...states}),
  })

  return {$, on, run}
}
