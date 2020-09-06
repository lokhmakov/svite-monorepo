export function featureRemove({domain, main}) {
  const $ = {}
  const on = {}
  const run = {}

  on.remove = domain.event(`remove`)

  main.$.data.on(on.remove, (state, doc) => {
    const {[doc.id]: r, ...rest} = state
    return rest
  })

  main.$.order.on(on.remove, (state, doc) => state.filter((v) => v !== doc.id))

  return {$, on, run}
}
