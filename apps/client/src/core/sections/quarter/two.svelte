<script>
export let debug = false

$: console.log(debug)
</script>

<section class="{$$props.class}">
  <div class="w-full md:w-1/2 lg:w-1/3 flex items-stretch">
    <div class="slot w-1/2" class:debug>
      <slot>MAIN</slot>
    </div>
    <div class="slot w-1/2" class:debug>
      <slot name="second">SECOND</slot>
    </div>
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
