export function featureCreate({domain, main}) {
  const $ = {}
  const on = {}
  const run = {}

  on.create = domain.event(`create`)

  main.$.data.on(on.create, (state, doc) => ({...state, [doc.id]: doc}))
  main.$.order.on(on.create, (state, doc) => [...state, doc.id])

  return {$, on, run}
}
