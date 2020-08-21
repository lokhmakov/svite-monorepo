import {createDomain} from 'effector'
// import createDebugger from 'debug'

// const map = {}

const $ = {}
const on = {}
const run = {}

const domain = createDomain()

run._debug = domain.effect({
  handler({who, args, isFolded = true}) {
    const [name, ...rest] = args
    if (isFolded) {
      console.groupCollapsed(who.join(`.`), name)
    } else {
      console.group(who.join(`.`), name)
    }
    console.log(JSON.stringify(rest, null, 2))
    console.groupEnd()
  },
})

run.debug = run._debug

export const fromDebug = {$, domain, on, run}
