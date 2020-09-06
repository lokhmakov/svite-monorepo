export function featureMain({domain}) {
  const $ = {}
  const on = {}
  const run = {}

  on.data = domain.event(`data`)
  on.order = domain.event(`order`)

  $.data = domain.store({}, {name: `data`})
  $.order = domain.store([], {name: `order`})

  $.data.on(on.data, (state, v) => v)
  $.order.on(on.order, (state, v) => v)

  return {$, on, run}
}
