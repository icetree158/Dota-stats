import { FC, MouseEvent } from 'react'
import './FilterPanel.scss'
import Melee from '../../assets/melee.svg'
import Ranged from '../../assets/ranged.svg'
import { IFilterHero } from '../../pages/heroesPage/HeroesPage';


interface FilterPanelProps {
    filter: IFilterHero;
    setFilter: (filterValue: IFilterHero) => void;
}



const FilterPanel: FC<FilterPanelProps> = ({ filter, setFilter }) => {
    const setAtr = (e: MouseEvent<HTMLImageElement>) => {
        setFilter({
            mainAtrr: e.currentTarget.alt,
            name: filter.name,
            attack_type: filter.attack_type,
        })
    }
    const setAttackType = (e:MouseEvent<HTMLImageElement>) => {
        console.log(e.currentTarget.alt)
        setFilter({
            mainAtrr: filter.mainAtrr,
            name: filter.name,
            attack_type: e.currentTarget.alt,
        })
    }
    return (
        <div className='filter-panel'>
            <span>  Фильтр</span>
            <div className='filter-art'>
                Атрибут
                <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png" alt="str" onClick={(e) => setAtr(e)} />
                <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="agi" onClick={(e) => setAtr(e)} />
                <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png" alt="int" onClick={(e) => setAtr(e)} />

            </div>
            <div className='filter-attact-type'>
                Тип атаки
                <img className='attack_type-svg' src={Melee} alt="Melee" onClick={(e) => setAttackType(e)} />
                <img className='attack_type-svg' src={Ranged} alt="Ranged" onClick={(e) => setAttackType(e)} />

            </div>
            <input type="search" />
        </div>
    )
}

export default FilterPanel