<script lang="ts">
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import NavLink from "$lib/components/NavLink.svelte";
  import OrientationProvider, { orientation } from "$lib/providers/OrientationProvider.svelte";
  import { colorMode } from "$lib/stores/colorMode";
  import "../scss/reset.scss";
  import "../scss/theme.scss";

  onMount(() => {
    colorMode.restore();
  });
</script>


<OrientationProvider />


<header class={$orientation}>
  <nav>
    <NavLink href="/">home</NavLink>
    <NavLink href="/about">about</NavLink>
    <NavLink href="/blog">blog</NavLink>
  </nav>

  <a href={$page.route.id} on:click={colorMode.toggle}>
    werewolf dev
  </a>
</header>

<slot></slot>


<style lang="scss">
  header {
    background-color: var(--body-background-color);
    display: flex;
    font-size: xx-large;
    padding: 1rem 1rem 0.75rem 1rem;
    position: sticky;
    
    &.landscape {
      flex-direction: row;
      justify-content: space-between;
      top: 0px;
    }
    
    &.portrait {
      flex-direction: column-reverse;
      top: -3rem;
    }
  }
</style>
