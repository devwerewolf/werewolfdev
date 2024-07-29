<script lang="ts">
  import { page } from "$app/stores";

  export let href: string;

  $: current = $page.route.id === href;
</script>


<a {href} class:current>
  <slot></slot>
</a>


<style lang="scss">
  .current {
    &::before {
      content: "[";
    }

    &::after {
      content: "]";
    }
  }
</style>
