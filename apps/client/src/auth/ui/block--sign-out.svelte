<script>
  import {createEventDispatcher} from 'svelte'
  const dispatch = createEventDispatcher()
</script>

<div class="w-full max-w-xs">
  <form class="bg-white shadow-md rounded px-4 md:px-8 pt-6 pb-8 mb-4">
    <div class="flex items-center justify-between">
      <!-- svelte-ignore a11y-autofocus -->
      <button
        autofocus
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4
        rounded focus:outline-none focus:shadow-outline text-sm md:text-base"
        type="submit"
        on:click|preventDefault={() => dispatch(`signOut`)}>
        Sign Out
      </button>
    </div>
  </form>
</div>
