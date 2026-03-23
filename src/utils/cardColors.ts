export const Colors = {
  BUG: { light: "#B8C26A", main: "#91A119", dark: "#5E6910" },
  DARK: { light: "#998B8C", main: "#624D4E", dark: "#403233" },
  DRAGON: { light: "#8D98EC", main: "#5060E1", dark: "#343E92" },
  ELECTRIC: { light: "#FCD659", main: "#FAC000", dark: "#A37D00" },
  FAIRY: { light: "#F5A2F5", main: "#EF70EF", dark: "#9B499B" },
  FIGHTING: { light: "#FFAC59", main: "#FF8000", dark: "#A65300" },
  FIRE: { light: "#EF7374", main: "#E62829", dark: "#961A1B" },
  FLYING: { light: "#ADD2F5", main: "#81B9EF", dark: "#54789B" },
  GHOST: { light: "#A284A2", main: "#704170", dark: "#492A49" },
  GRASS: { light: "#82C274", main: "#3FA129", dark: "#29691B" },
  GROUND: { light: "#B88E6F", main: "#915121", dark: "#5E3515" },
  ICE: { light: "#81DFF7", main: "#3DCEF3", dark: "#28869E" },
  NORMAL: { light: "#C1C2C1", main: "#9FA19F", dark: "#676967" },
  POISON: { light: "#B884DD", main: "#9141CB", dark: "#5E2A84" },
  PSYCHIC: { light: "#F584A8", main: "#EF4179", dark: "#9B2A4F" },
  ROCK: { light: "#CBC7AD", main: "#AFA981", dark: "#726E54" },
  STEEL: { light: "#98C2D1", main: "#60A1B8", dark: "#3E6978" },
  STELLAR: { light: "#83CFC5", main: "#40B5A5", dark: "#2A766B" },
  WATER: { light: "#74ACF5", main: "#2980EF", dark: "#1B539B" },
  UNKNOWN: {
    light: "#9DC1B7",
    main: "#68A090",
    dark: "#44685E",
    text: "#FFFFFF",
  },
} as const;

export type PokemonType = keyof typeof Colors;
export type TypeColor = (typeof Colors)[PokemonType];

export function getColor(type: PokemonType) {
  return Colors[type];
}
