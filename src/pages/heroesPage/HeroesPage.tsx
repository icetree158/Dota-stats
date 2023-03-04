import { useEffect, useState } from 'react'
import FilterPanel from '../../components/filerPanel/FilterPanel'
import HeroCard from '../../components/heroCard/HeroCard'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { IHero } from '../../models/heroModel'
import { fetchHero } from '../../store/reducers/fetchHero'
import './HeroesPage.scss'
import filterHeroes from './utils/filterHeroes'

export interface IFilterHero {
    mainAtrr: string;
    attack_type: string;
    name: string;
}


const HeroesPage = () => {
    const dispatch = useAppDispatch()
    const { heroinfo } = useAppSelector(e => e.hero)
    const [heroes, setHeroes] = useState<IHero[]>([])
    const [filter, setFilter] = useState<IFilterHero>({ mainAtrr: '', attack_type: '', name: "" })


    useEffect(() => {
        heroinfo.length > 0 ? setHeroes(heroinfo) : dispatch(fetchHero())
    }, [heroinfo, dispatch])

    useEffect(() => {
        filterHeroes(filter, heroinfo, setHeroes)
    }, [filter])

    return (
        <div className='hero-page-container'>
            <div className='hero-page-wrapper'>
                <FilterPanel
                    filter={filter}
                    setFilter={setFilter}
                />
                <div className='heroGrid'>
                    {heroes.map(e => {
                        return <HeroCard heroinfo={e} key={e.id} />
                    })}

                </div>
            </div>
        </div>

    )
}

export default HeroesPage