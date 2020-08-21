export function featureCreate({$, domain, debug, on, run}) {
  on.create = domain.event(`create`)

  $.data.on(on.create, (state, doc) => ({...state, [doc.id]: doc}))
  $.order.on(on.create, (state, doc) => [...state, doc.id])
}
