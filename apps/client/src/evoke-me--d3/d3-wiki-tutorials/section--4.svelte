<script>
  // https://bost.ocks.org/mike/selection/

  import * as d3 from 'd3'
  import {onMount} from 'svelte'

  function main1() {
    d3.select(`body`).datum(42).append(`h1`)

    console.log(`document.body.__data__`, document.body.__data__, `is 42`)
    console.log(`h1.__data__`, `is 42`)

    d3.select(`body`).datum(155)

    console.log(`document.body.__data__`, document.body.__data__, `is 155`)
    console.log(`h1.__data__`, `is 42`)
  }

  onMount(main1)
</script>

<svg width="720" height="120">
  <circle cx="40" cy="60" r="10" />
</svg>
