<script>
  export let doc

  import {createEventDispatcher} from 'svelte'
  const dispatch = createEventDispatcher()
</script>

<style type="postcss">
  input {
    @apply shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight;

    &:focus {
      @apply outline-none shadow-outline;
    }
  }

  .buttonForgot {
    @apply inline-block;
    @apply align-baseline font-bold text-sm text-blue-500;

    &:focus {
      @apply outline-none;
    }
    &:hover {
      @apply text-blue-600;
    }

    &:active {
      @apply text-blue-400;
    }

    &.disabled {
      @apply text-gray-500;
      @apply cursor-default;

      &:hover {
        @apply text-gray-500;
      }

      &:active {
        @apply text-gray-500;
      }
    }
  }
</style>

<div class="w-full max-w-xs">
  <form class="bg-white shadow-md rounded px-4 md:px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <!-- svelte-ignore a11y-autofocus -->
      <input
        autofocus
        name="username"
        type="text"
        placeholder="Username"
        on:input={({target: {value}}) => dispatch(`input`, {username: value})}
        value={doc.username} />
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input
        name="password"
        type="password"
        placeholder="************"
        on:input={({target: {value}}) => dispatch(`input`, {password: value})}
        value={doc.password} />
    </div>
    <div class="flex items-center justify-between">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4
        rounded focus:outline-none focus:shadow-outline text-sm md:text-base"
        type="submit"
        on:click|preventDefault={(e) => dispatch(`signIn`)}>
        Sign In
      </button>
    </div>
  </form>
</div>
