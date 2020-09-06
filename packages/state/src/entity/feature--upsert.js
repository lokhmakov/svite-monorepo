import {sample} from 'effector'

export function featureUpsert({domain, main, update, create}) {
  const $ = {}
  const on = {}
  const run = {}

  on.upsert = domain.event(`upsert`)

  run._upsert = domain.effect({
    name: `_upsert`,
    handler({data, doc}) {
      return doc.id in data ? update.on.update(doc) : create.on.create(doc)
    },
  })

  sample({
    source: main.$.data,
    clock: on.upsert,
    fn: (data, doc) => ({data, doc}),
    target: run._upsert,
  })

  return {$, on, run}
}
