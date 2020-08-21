export function featureDebugEffects({domain, debug}) {
  domain.onCreateEffect((effect) => {
    const {shortName} = effect
    effect.watch((v) => debug(`run.${shortName}`, v))
  })
}
