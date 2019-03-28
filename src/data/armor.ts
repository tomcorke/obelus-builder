import { randomFrom } from "../utils";

export const ARMOR_NAMES = [
  '"Awe" Thigh Mag/Holster',
  'Artemis Fast Draw Holster',
]

export const randomArmorName = () => randomFrom(ARMOR_NAMES)