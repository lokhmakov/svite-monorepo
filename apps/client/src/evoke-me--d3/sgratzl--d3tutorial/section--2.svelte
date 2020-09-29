<script>
  // https://github.com/sgratzl/d3tutorial
  // codepen.io/lokhmakov/pen/KKzezYN

  import * as d3 from 'd3'
  import {onMount} from 'svelte'

  onMount(() => {
    const body = d3.select('main')
    body.append('svg').attr('width', 800).attr('height', 600)

    // d3.select('svg').remove()
  })
</script>

<style>
  :global(svg) {
    background-color: steelblue;
  }
</style>

<main />
