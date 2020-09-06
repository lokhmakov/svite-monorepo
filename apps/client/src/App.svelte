<script>
  import {fromDebug} from '@evoke-me/state'
  import PageHome from 'pages/page--home.svelte'

  fromDebug.main.on.create({
    fn: ({who, args}) => (args?.[0]?.includes(`*`) ? {isShow: false} : {}),
  })

  fromDebug.main.on.create({
    fn: ({who, args}) => (args?.[0]?.includes(`$`) ? {isFolded: true} : {}),
  })
</script>

<PageHome />
