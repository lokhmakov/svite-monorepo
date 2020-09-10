export function featureMain({domain}) {
  const $ = {}
  const on = {}
  const run = {}

  on.clear = domain.event(`clear`)

  on.data = domain.event(`data`)
  on.order = domain.event(`order`)

  $.data = domain.store({}, {name: `data`})
  $.order = domain.store([], {name: `order`})

  $.data.on(on.data, (state, v) => v)
  $.order.on(on.order, (state, v) => v)

  $.order.reset(on.clear)
  $.data.reset(on.clear)

  return {$, on, run}
}
