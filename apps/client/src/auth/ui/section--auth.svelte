<script>
  export let id = `auth`

  import {onMount} from 'svelte'
  import {fromAuth} from '../domain/domain--auth'
  import BlockLogin from './block--login.svelte'

  onMount(async () => {
    fromAuth.on.upsert({id, username: ``, password: ``})
  })

  const data = fromAuth.$.data

  $: doc = $data[id]
</script>

{#if doc}
  <div class="flex justify-center">
    <BlockLogin
      on:input={({detail}) => fromAuth.on.update({id, ...detail})}
      {doc} />
  </div>
{:else}Loading{/if}
