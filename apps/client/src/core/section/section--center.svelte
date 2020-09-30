<script>
  export let debug = false
</script>

<style type="postcss">
  div {
    @apply flex items-center justify-center bg-gray-500;
    min-height: 20vw;
  }
</style>

<div class:debug>
  <slot />
</div>
