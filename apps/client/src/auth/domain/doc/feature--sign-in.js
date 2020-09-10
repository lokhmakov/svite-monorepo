import {attach} from 'effector'

import {authSignIn} from '../../api/sign-in'

export function featureSignIn({debug, doc, domain, update}) {
  const $ = {}
  const on = {}
  const run = {}

  const name = `signIn`
  const _name = `_${name}`

  run[_name] = domain.effect({
    name: _name,
    async handler(params) {
      const {username, password} = params.doc
      const r = await authSignIn({username, password})

      update.on.update({
        ...r,
        password: ``,
      })

      return r
    },
  })

  run[name] = attach({
    name,
    effect: run[_name],
    source: {
      doc: doc.$.doc,
    },
    mapParams: (params, states) => ({...params, ...states}),
  })

  return {$, on, run}
}
