import {sample} from 'effector'

export function featureUpsert({$, domain, debug, on, run}) {
  on.upsert = domain.event(`upsert`)

  run._upsert = domain.effect({
    name: `_upsert`,
    handler({data, doc}) {
      return doc.id in data ? on.update(doc) : on.create(doc)
    },
  })

  sample({
    source: $.data,
    clock: on.upsert,
    fn: (data, doc) => ({data, doc}),
    target: run._upsert,
  })
}
