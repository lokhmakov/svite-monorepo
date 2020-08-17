<script>
  import { Button } from "@svite-monorepo/screens";
  import { v4 as uuid } from "uuid";

  const world = uuid();
</script>

<style>
  h1 {
    color: orangered; /* change color an save to see hmr update */
  }
</style>

<h1>Hello {world}</h1>
<p>Open App.svelte in your editor and change something to see HMR in action</p>

<Button />
<!-- <button on:click={process}>Click me</button> -->
