<script>
  import { onMount } from "svelte";
  import NavLink from "$lib/components/NavLink.svelte";
  import { restoreColorMode } from "$lib/utils/colorMode";
  import "../scss/reset.scss";
  import "../scss/theme.scss";

  onMount(() => {
    restoreColorMode();
  });
</script>


<header>
  <nav>
    <NavLink href="/">home</NavLink>
    <NavLink href="/about">about</NavLink>
    <NavLink href="/blog">blog</NavLink>
  </nav>

  <div>
    werewolf dev
  </div>
</header>

<slot></slot>


<style lang="scss">
  header {
    display: flex;
    flex-direction: row;
    font-size: xx-large;
    justify-content: space-between;
    padding: 1rem;
  }
</style>
