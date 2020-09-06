<script>
  export let id = `auth`

  import {fromAuth} from 'auth/domain'
  import BlockSignIn from './block--sign-in.svelte'
  import BlockSignOut from './block--sign-out.svelte'

  const fromAuthDoc = fromAuth.utils.makeDoc({id})

  $: doc = fromAuthDoc.doc.$.doc
</script>

{#if $doc}
  {#if $doc.jwt}
    <BlockSignOut on:signOut={fromAuthDoc.signOut.run.signOut} />
  {:else}
    <BlockSignIn
      doc={$doc}
      on:input={fromAuthDoc.update.on.svelteInput}
      on:signIn={fromAuthDoc.signIn.run.signIn} />
  {/if}
{/if}
