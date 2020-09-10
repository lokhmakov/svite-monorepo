import {fromDebug} from '@evoke-me/state'

fromDebug.main.on.create({
  fn: ({who, args}) => (args?.[0]?.includes(`*`) ? {isShow: false} : {}),
})

fromDebug.main.on.create({
  fn: ({who, args}) => (args?.[0]?.includes(`$`) ? {isFolded: true} : {}),
})
