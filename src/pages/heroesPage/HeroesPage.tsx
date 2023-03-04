import { useEffect } from 'react'
import HeroCard from '../../components/heroCard/HeroCard'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchHero } from '../../store/reducers/fetchHero'
import './HeroesPage.scss'

const HeroesPage = () => {
    const dispatch = useAppDispatch()
    const { heroinfo } = useAppSelector(e => e.hero)

    useEffect(() => {
        dispatch(fetchHero())
    }, [])

    return (
        <div className='hero-pagecontainer'>
            <div className='heroGrid'>

                {heroinfo.map(e => {
                    return <HeroCard heroinfo={e} key={e.id} />
                })}



            </div>

            <div>        box-shadow: 0px -23px 7px -7px rgba(0, 0, 0, 0.9) inset;
            </div>

            <div>afasf</div>





        </div>

    )
}

export default HeroesPage