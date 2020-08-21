export function featureDebugStores({domain, debug}) {
  domain.onCreateStore((store) => {
    const {shortName} = store
    store.watch((v) => debug(`$.${shortName}`, v))
  })
}
