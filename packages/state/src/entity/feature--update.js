export function featureUpdate({domain, main}) {
  const $ = {}
  const on = {}
  const run = {}

  on.update = domain.event(`update`)

  main.$.data.on(on.update, (state, doc) => ({
    ...state,
    [doc.id]: {...state[doc.id], ...doc},
  }))

  return {$, on, run}
}
