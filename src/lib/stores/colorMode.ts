import { get, writable } from "svelte/store";


type ColorMode =
  | "dark"
  | "light"


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

      if (localColorMode === null) {
        return store.change("dark");
      }

      document.body.className = localColorMode;
      set(localColorMode);
    },
    toggle: () => {
      const currentColorMode: ColorMode = get(store);

      if (currentColorMode === "dark") return store.change("light");
      if (currentColorMode === "light") return store.change("dark");
    }
  }

  return store;
}


export const colorMode = createStore();
