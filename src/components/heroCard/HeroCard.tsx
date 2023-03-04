import React, { FC } from 'react'
import { IHero } from '../../models/heroModel'
import { checkAtr } from './helpers/CheckAttr';
import './HeroCard.scss'
interface HeroCardProps {
  heroinfo: IHero;

}

const HeroCard: FC<HeroCardProps> = ({ heroinfo }) => {

  return (
    <div className='heroCardContainer'>
      <img className='img-hero' src={'https://cdn.cloudflare.steamstatic.com' + heroinfo.img} alt={heroinfo.localized_name} />
      <div className='hover-info'>
        <img className='icon-attr' src={checkAtr(heroinfo.primary_attr)} alt={heroinfo.primary_attr} />
        <span className='name-hero'>{heroinfo.localized_name}</span>
      </div>
    </div>
  )
}

export default HeroCard