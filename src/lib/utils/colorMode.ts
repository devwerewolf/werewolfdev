const colorModeKey = "color_mode";


export function restoreColorMode() {
  let colorMode = localStorage.getItem(colorModeKey);

  if (colorMode === null) return setColorMode("dark");
  
  document.body.className = colorMode;
}


export function setColorMode(colorMode: string) {
  localStorage.setItem(colorModeKey, colorMode);
  document.body.className = colorMode;
}
