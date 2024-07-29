<script context="module" lang="ts">
  import { writable } from "svelte/store";

  type Orientation = 
  | "landscape"
  | "portrait"

  export const orientation = writable<Orientation>();  
</script>

<script lang="ts">
  let innerHeight: number;
  let innerWidth: number;

  $: {
    if (innerWidth > innerHeight) $orientation = "landscape";
    if (innerWidth <= innerHeight) $orientation = "portrait";
  }
</script>


<svelte:window bind:innerHeight bind:innerWidth />
