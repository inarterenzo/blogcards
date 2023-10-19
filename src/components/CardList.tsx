import React from 'react'
import Card from './Card'
import { ICard } from '../types'


interface ICardList {
  data: ICard[]
}

const CardList = ( {data}:ICardList ) => {
  
  return (

      <div className="row">
        { data.map((item: ICard) => (
          <Card key={item.id} data={item} />
        ))}
      </div>  
  )
}

export default CardList
