import {attach} from 'effector'

export function featureDebug({domain, main}) {
  const $ = {}
  const on = {}
  const run = {}

  run._debug = domain.effect({
    name: `run._debug`,
    handler({args, rules, who}) {
      const {isShow, isFolded} = rules.reduce(
        (r, {fn}) => ({...r, ...fn({args, who})}),
        {
          isShow: true,
          isFolded: false,
        },
      )

      if (!isShow) return

      const [name, ...rest] = args
      if (isFolded) {
        console.groupCollapsed(who.join(`.`), name)
      } else {
        console.group(who.join(`.`), name)
      }
      console.info(...rest)
      console.groupEnd()
    },
  })

  run.debug = attach({
    name: `run.debug`,
    effect: run._debug,
    source: {
      rules: main.$.rules,
    },
    mapParams: (state, params) => ({...state, ...params}),
  })

  return {$, on, run}
}
