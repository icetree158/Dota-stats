import { FC, MouseEvent, useState } from 'react'
import './FilterPanel.scss'
import Melee from '../../assets/melee.svg'
import Ranged from '../../assets/ranged.svg'
import { IFilterHero } from '../../pages/heroesPage/HeroesPage';


interface FilterPanelProps {
    filter: IFilterHero;
    setFilter: (filterValue: IFilterHero) => void;
}



const FilterPanel: FC<FilterPanelProps> = ({ filter, setFilter }) => {
    const [activeAtr, setactiveAtr] = useState('')
    const [activeAttackType, setactiveAttackType] = useState('')

    const setAtr = (e: MouseEvent<HTMLImageElement>) => {
        if (!e.currentTarget.className.includes('active')) {
            setactiveAtr(e.currentTarget.alt)
            setFilter({
                mainAtrr: e.currentTarget.alt,
                name: filter.name,
                attack_type: filter.attack_type,
            })
        } else {
            setactiveAtr('')
            setFilter({
                mainAtrr: '',
                name: filter.name,
                attack_type: filter.attack_type,
            })


        }
    }

    const setAttackType = (e: MouseEvent<HTMLImageElement>) => {
        if (!e.currentTarget.className.includes('active')) {
            setactiveAttackType(e.currentTarget.alt)
            setFilter({
                mainAtrr: filter.mainAtrr,
                name: filter.name,
                attack_type: e.currentTarget.alt,
            })
        } else {
            setactiveAttackType('')
            setFilter({
                mainAtrr: filter.mainAtrr,
                name: filter.name,
                attack_type: '',
            })
        }
    }
    
    return (
        <div className='filter-panel'>
            <span>  Фильтр</span>
            <div className='filter-art'>
                Атрибут
                <img className={activeAtr === 'str' ? 'attr-filter active' : 'attr-filter'} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png" alt="str" onClick={(e) => setAtr(e)} />
                <img className={activeAtr === 'agi' ? 'attr-filter active' : 'attr-filter'} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="agi" onClick={(e) => setAtr(e)} />
                <img className={activeAtr === 'int' ? 'attr-filter active' : 'attr-filter'} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png" alt="int" onClick={(e) => setAtr(e)} />

            </div>
            <div className='filter-attact-type'>
                Тип атаки
                <img className={activeAttackType === 'Melee' ? 'attack_type-svg active' : 'attack_type-svg'} src={Melee} alt="Melee" onClick={(e) => setAttackType(e)} />
                <img className={activeAttackType === 'Ranged' ? 'attack_type-svg active' : 'attack_type-svg'} src={Ranged} alt="Ranged" onClick={(e) => setAttackType(e)} />

            </div>
            <input type="search" />
        </div>
    )
}

export default FilterPanel