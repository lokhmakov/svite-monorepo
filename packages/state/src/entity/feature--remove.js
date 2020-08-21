export function featureRemove({$, domain, debug, on, run}) {
  on.remove = domain.event(`remove`)

  $.data.on(on.remove, (state, doc) => {
    const {[doc.id]: r, ...rest} = state
    return rest
  })

  $.order.on(on.remove, (state, doc) => state.filter((v) => v !== doc.id))
}
