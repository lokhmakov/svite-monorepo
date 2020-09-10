<script>
  import {value, pointer, physics, spring} from 'popmotion'

  const coords = value({x: 0, y: 0})
  const r = value(10)

  const physicsAnimation = physics({
    from: coords.get(),
    to: coords.get(),
    velocity: coords.getVelocity(),
    restSpeed: false,
    friction: 1,
    springStrength: 2000,
  }).start(coords)

  pointer().start(physicsAnimation.setSpringTarget)

  function _onMouseDown() {
    spring({
      from: r.get(),
      to: 30,
      stiffness: 500,
      mass: 1,
      damping: 10,
    }).start(r)
  }

  function _onMouseUp() {
    spring({
      from: r.get(),
      to: 10,
      stiffness: 500,
      mass: 1,
      damping: 20,
    }).start(r)
  }
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
    @apply text-blue-400;
    fill: currentColor;
  }

  :global(*) {
    cursor: none !important;
  }
</style>

<svelte:body on:mousedown={_onMouseDown} on:mouseup={_onMouseUp} />

<svg>
  <circle cx={$coords.x - 2} cy={$coords.y - 2} r={$r} />
</svg>
