export function featureUpdate({$, domain, debug, on, run}) {
  on.update = domain.event(`update`)

  $.data.on(on.update, (state, doc) => ({
    ...state,
    [doc.id]: {...state[doc.id], ...doc},
  }))
}
