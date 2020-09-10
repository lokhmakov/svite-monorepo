<script>
  import {fromPmNode} from '../domain'
  import {onMount} from 'svelte'

  onMount(() => {
    fromPmNode.queryAll.run.queryAll({})
  })
</script>

BlockPmNodeListView
