<script lang="ts">
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import NavLink from "$lib/components/NavLink.svelte";
  import { colorMode } from "$lib/stores/colorMode";
  import "../scss/reset.scss";
  import "../scss/theme.scss";

  onMount(() => {
    colorMode.restore();
  });
</script>

<svelte:body in:fade />

<header>
  <nav>
    <NavLink href="/">home</NavLink>
    <NavLink href="/about">about</NavLink>
    <NavLink href="/blog">blog</NavLink>
  </nav>

  <button id="color-mode-toggle" on:click={colorMode.toggle}>
    werewolf {$colorMode}
  </button>
</header>

<slot></slot>


<style lang="scss">
  #color-mode-toggle {
    background: none;
    border: none;
	  color: inherit;
    cursor: pointer;
    font: inherit;
    padding: 0;
  }
</style>