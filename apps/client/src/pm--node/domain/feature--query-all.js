import {attach} from 'effector'

import {queryAll} from '../api/query-all'

export function featureQueryAll({fromEntity}) {
  const {debug, domain, main} = fromEntity

  const $ = {}
  const on = {}
  const run = {}

  const name = `queryAll`
  const _name = `_${name}`

  async function handler(params) {
    const r = await queryAll({})

    debug(_name, `r`, r)

    const data = r.reduce((acc, v) => ((acc[v.id] = v), acc), {})
    const order = r.map((v) => v.id)

    main.on.clear()
    main.on.data(data)
    main.on.order(order)

    return r
  }

  const effect = domain.effect({name: _name, handler})

  run[name] = attach({
    name,
    effect,
    source: {},
    mapParams: (params, states) => ({...params, ...states}),
  })

  return {$, on, run}
}
