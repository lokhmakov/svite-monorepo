<script>
  import {writable} from 'svelte/store'
  import {spring} from 'svelte/motion'

  let coords = spring(
    {x: 50, y: 50},
    {
      stiffness: 1,
      damping: 1,
    },
  )
  let size = spring(10)
</script>

<style>
  svg {
    background-color: transparent;

    width: 100vw;
    height: 100vh;

    margin-left: -25px;
    margin-top: -25px;

    position: fixed;
    pointer-events: none;
  }
  circle {
    fill: #ff3e00;
  }

  :global(*) {
    cursor: none !important;
  }
</style>

<svelte:body
  on:mousemove={(e) => coords.set({x: e.clientX, y: e.clientY})}
  on:mousedown={() => size.set(30)}
  on:mouseup={() => size.set(10)} />

<svg>
  <circle cx={$coords.x} cy={$coords.y} r={$size} />
</svg>
