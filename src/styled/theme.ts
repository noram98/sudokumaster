// Colors
export const colors = (opacity?: number) => ({
  // Accent
  accent: `rgba(217,240,255, ${opacity || 1})`, // rgba(217,240,255,1)

  //Border
  border: `rgba(0, 40, 100, ${opacity || 0.12})`, // rgba(0, 40, 100,0.12)

  // Background Colors
  activeBg: `rgba(245,250,254, ${opacity || 1})`, // rgba(245,250,254,1)
  container: `rgba(255,255,255, ${opacity || 1})`, // rgba(255,255,255,1)
  darkBg: `rgba(36,36,36, ${opacity || 1})`, // rgba(36,36,36,1)
  overlay: `rgba(0, 0, 0,  ${opacity || 0.8})`, // rgba(0, 0, 0,0.8)
  wrapper: `rgba(245, 247, 251, ${opacity || 1})`, // rgba(245, 247, 251,1)
  wrapper2: `rgba(248,249,250, ${opacity || 1})`, // rgba(247,249,250,1)

  // Brand
  brand: `rgba(70,127,207, ${opacity || 1})`, // rgba(70,127,207,1)

  // Color Roles
  ok: `rgba(18,182,116, ${opacity || 1})`, // rgba(18,182,116,1)
  okLight: `rgba(185,244,188, ${opacity || 1})`, // rgba(185,244,188,1)
  warning: `rgba(205,32,31, ${opacity || 1})`, // rgba(205,32,31,1)
  neutral: `rgba(32, 75, 87, ${opacity || 1})`, // rgba(32, 75, 87,1)
  inactive: `rgba(166,170,181, ${opacity || 1})`, // rgba(166,170,181,1)
  subtle: `rgba(220,223,230, ${opacity || 1})`, // rgba(220,223,230,1)
  light: `rgba(255,255,255, ${opacity || 1})`, // rgba(255,255,255,1)

  // Font/Icon Colors
  black: `rgba(0, 0, 0, ${opacity || 1})`, // rgba(0, 0, 0,1)
  text: `rgba(51, 51, 51, ${opacity || 1})`, // rgba(51, 51, 51,1)
  text2: `rgba(136, 152, 170, ${opacity || 1})`, // rgba(136, 152, 170,1)
  text3: `rgba(50,50,93, ${opacity || 1})`, // rgba(50,50,93,1)
  lightTitle: `rgba(255,255,255, ${opacity || 1})`, // rgba(255,255,255,1)
  lightSubtitle: `rgba(217,252,255, ${opacity || 1})`, // rgba(217,252,255,1)

  // Misc
  semiTransparent: `rgba(15, 15, 120, ${opacity || 0.08})`, // rgba(15, 15, 120,0.08)
  transparent: `rgba(0,0,0, ${opacity || 0})` // rgba(0,0,0,0)
})

export const viewportWidths = [735, 1068, 1442]
const breakpoints = viewportWidths.map(w => `${w}px`)

// Theme
const theme = {
  breakpoints,
  colors: colors(),

  //---------- 0   1   2   3   4   5   6   7   8   9
  fontSizes: [12, 14, 17, 20, 21, 32, 40, 48, 64, 72],

  //----- 0  1  2   3   4   5   6   7    8    9   10
  space: [0, 4, 8, 16, 24, 32, 48, 70, 128, 256, 512]
}

export default theme

declare global {
  type ITheme = typeof theme
}

export const getColor = (color: keyof typeof theme.colors) => (p: { theme: typeof theme }) =>
  p.theme.colors[color]
