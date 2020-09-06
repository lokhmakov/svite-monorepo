import {attach} from 'effector'

export function featureStart({fromEntity}) {
  const $ = {}
  const on = {}
  const run = {}

  const {domain, create, main} = fromEntity

  const name = `start`
  const _name = `_${name}`

  run[_name] = domain.effect({
    name: _name,
    async handler({data, id, makeOne}) {
      if (!data[id]) {
        const doc = makeOne({id})
        create.on.create({id, ...doc})
      }
    },
  })

  run[name] = attach({
    name,
    effect: run[_name],
    source: {
      data: main.$.data,
    },
    mapParams: (params, states) => ({...params, ...states}),
  })

  return {$, on, run}
}
