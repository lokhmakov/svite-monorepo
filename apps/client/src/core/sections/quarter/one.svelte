<script>
export let debug = false
</script>

<section class="{$$props.class}">
  <div class="slot w-full md:w-1/2 lg:w-1/3" class:debug>
    <slot>MAIN</slot>
  </div>
</section>

<style type="postcss">
section {
  @apply flex justify-center;

  height: 25vh;
}

.slot {
  @apply flex justify-center items-center;
}

div.debug {
  @apply border-dotted border-2 border-gray-700;
}
</style>
