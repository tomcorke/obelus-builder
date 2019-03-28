import { randomFrom } from "../utils";

const BRAND_FENRIS = 'fenris'
const BRAND_DOUGLASHARDING = 'douglasharding'
const BRAND_ARIALDI = 'arialdi'
const BRAND_GILA = 'gila'

export type Brand =
  | typeof BRAND_FENRIS
  | typeof BRAND_DOUGLASHARDING
  | typeof BRAND_ARIALDI
  | typeof BRAND_GILA

export const BRANDS: Brand[] = [
  BRAND_FENRIS,
  BRAND_DOUGLASHARDING,
  BRAND_ARIALDI,
  BRAND_GILA,
]

export const Brands = {
  FENRIS: BRAND_FENRIS as typeof BRAND_FENRIS,
  DOUGLASHARDING: BRAND_DOUGLASHARDING as typeof BRAND_DOUGLASHARDING,
  ARIALDI: BRAND_ARIALDI as typeof BRAND_ARIALDI,
  GILA: BRAND_GILA as typeof BRAND_GILA
}

export const BRAND_NAMES = {
  [BRAND_FENRIS]: 'Fenris',
  [BRAND_DOUGLASHARDING]: 'Douglas & Harding',
  [BRAND_ARIALDI]: 'Arialdi Holdings',
  [BRAND_GILA]: 'Gila Group',
}

export const randomBrand = () => {
  return randomFrom(BRANDS)
}