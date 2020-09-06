export function featureDebugEffects({domain, debug}) {
  domain.onCreateEffect((effect) => {
    const {shortName} = effect
    const name = `run.${shortName}`
    effect.done.watch((v) => debug(name, `done`, v))
    effect.fail.watch(({params, error}) =>
      debug(name, `fail`, params, error.message),
    )
  })
}
