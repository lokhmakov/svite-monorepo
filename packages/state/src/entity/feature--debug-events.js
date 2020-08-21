export function featureDebugEvents({domain, debug}) {
  domain.onCreateEvent((event) => {
    const {shortName} = event
    event.watch((v) => debug(`on.${shortName}`, v))
  })
}
