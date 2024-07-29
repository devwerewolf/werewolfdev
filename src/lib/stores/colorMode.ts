import { get, writable } from "svelte/store";


type ColorMode =
  | "day"
  | "night"


const colorModeStorageKey = "color_mode";


function createStore() {
  const { subscribe, set } = writable<ColorMode>();

  const store = {
    subscribe,
    change: (newColorMode: ColorMode) => {
      localStorage.setItem(colorModeStorageKey, newColorMode);
      document.body.className = newColorMode;
      set(newColorMode);
    },
    restore: () => {
      const localColorMode: ColorMode | null = localStorage.getItem(colorModeStorageKey) as ColorMode;
      const invalidColorMode =
        localColorMode === null
        || (localColorMode !== "day" && localColorMode !== "night") 

      if (invalidColorMode) {
        return store.change("night");
      }

      document.body.className = localColorMode;
      set(localColorMode);
    },
    toggle: () => {
      const currentColorMode: ColorMode = get(store);

      if (currentColorMode === "night") return store.change("day");
      if (currentColorMode === "day") return store.change("night");
    }
  }

  return store;
}


export const colorMode = createStore();
