export function featureUpdate({fromEntity, id}) {
  const $ = {}
  const on = {}
  const run = {}

  on.update = fromEntity.update.on.update.prepend((payload) => ({
    ...payload,
    id,
  }))

  on.svelteInput = on.update.prepend(({detail}) => detail)

  return {$, on, run}
}
