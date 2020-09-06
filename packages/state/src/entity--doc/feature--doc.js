export function featureDoc({fromEntity, id}) {
  const $ = {}
  const on = {}
  const run = {}

  $.doc = fromEntity.main.$.data.map((state) => state[id] || null)

  return {$, on, run}
}
