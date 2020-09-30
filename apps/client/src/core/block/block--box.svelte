<script>
  export let debug = false
  export let debugWhite = false
</script>

<style type="postcss">
  div {
    @apply p-4 m-4;
  }

  .debug {
    @apply border-dotted border-2 border-gray-700;
  }

  .debugWhite {
    @apply border-dotted border-2 border-white;
  }
</style>

<div class:debug class:debugWhite>
  <slot />
</div>
