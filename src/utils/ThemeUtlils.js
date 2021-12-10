import { argonTheme } from "../config";

function createObjectType(type){
  switch (type.toLowerCase()){
    case 'fire':
      return {color:argonTheme.COLORS.FEU,image:argonTheme.TYPES.FIRE}
    case 'grass':
      return {color:argonTheme.COLORS.PLANTE,image:argonTheme.TYPES.GRASS}
    case 'water':
      return {color:argonTheme.COLORS.EAU,image:argonTheme.TYPES.WATER}
    case 'bug':
      return {color:argonTheme.COLORS.INSECTE,image:argonTheme.TYPES.INSECTE}
    case 'normal':
      return {color:argonTheme.COLORS.NORMAL,image:argonTheme.TYPES.NORMAL}
    case 'dragon':
      return {color:argonTheme.COLORS.DRAGON,image:argonTheme.TYPES.DRAGON}
    case 'flying':
      return {color:argonTheme.COLORS.VOL,image:argonTheme.TYPES.VOL}
    case 'fairy':
      return {color:argonTheme.COLORS.FEE,image:argonTheme.TYPES.FEE}
    case 'electric':
      return {color:argonTheme.COLORS.ELECTRIK,image:argonTheme.TYPES.ELECTRIK}
    case 'psychic':
      return {color:argonTheme.COLORS.PSY,image:argonTheme.TYPES.PSY}
    case 'rock':
      return {color:argonTheme.COLORS.ROCHER,image:argonTheme.TYPES.ROCHE}
    case 'ghost':
      return {color:argonTheme.COLORS.SPECTRE,image:argonTheme.TYPES.SPECTRE}
    case 'steel':
      return {color:argonTheme.COLORS.ACIER,image:argonTheme.TYPES.ACIER}
    case 'ice':
      return {color:argonTheme.COLORS.GLACE,image:argonTheme.TYPES.GLACE}
    case 'ground':
      return {color:argonTheme.COLORS.SOL,image:argonTheme.TYPES.SOL}
    case 'fighting':
      return {color:argonTheme.COLORS.COMBAT,image:argonTheme.TYPES.COMBAT}
    case 'dark':
      return {color:argonTheme.COLORS.TENEBRE,image:argonTheme.TYPES.TENEBRE}
    case 'poison':
      return {color:argonTheme.COLORS.POISON,image:argonTheme.TYPES.POISON}
    default:
      break
  }
}

module.exports = {
  createObjectType
}
