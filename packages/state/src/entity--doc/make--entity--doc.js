import {featureDoc} from './feature--doc'
import {featureStart} from './feature--start'
import {featureUpdate} from './feature--update'

export function makeEntityDoc({fromEntity, id, makeOne}) {
  const doc = featureDoc({fromEntity, id})
  const start = featureStart({fromEntity})
  const update = featureUpdate({fromEntity, id})

  if (makeOne) {
    start.run.start({id, makeOne})
  }

  return {
    doc,
    start,
    update,
  }
}
