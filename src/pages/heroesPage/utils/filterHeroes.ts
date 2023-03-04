import { IHero } from "../../../models/heroModel"
import { IFilterHero } from "../HeroesPage"



export default function filterHeroes(filter: IFilterHero, heroinfo: IHero[], setHeroes: (val: IHero[]) => void) {
    if (filter?.mainAtrr && filter?.attack_type) {
        setHeroes(heroinfo.filter(e => (e.attack_type === filter.attack_type) && (e.primary_attr === filter.mainAtrr)))
    } else if (filter?.mainAtrr) {
        setHeroes(heroinfo.filter(e => e.primary_attr === filter.mainAtrr))
    } else if (filter?.attack_type) {
        setHeroes(heroinfo.filter(e => e.attack_type === filter.attack_type))
    }
}