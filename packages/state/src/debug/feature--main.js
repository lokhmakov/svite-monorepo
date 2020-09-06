export function featureMain({domain}) {
  const $ = {}
  const on = {}
  const run = {}

  on.create = domain.event()

  $.rules = domain.store([])
  $.rules.on(on.create, (state, doc) => [...state, doc])

  return {$, on, run}
}
