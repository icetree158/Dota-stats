import { IHero } from "../../../models/heroModel"

export  const checkAtr = (attr: IHero["primary_attr"]): string => {
    if (attr === 'agi') {
        return "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png"
    }
    if (attr === 'int') {
        return "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png"
    }
    if (attr === 'str') {
        return "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png"
    }
    else return ''

}