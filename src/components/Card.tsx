import React from 'react'
import { ICard } from '../types'


const Card = ({data}:{data: ICard}) => {
    const date = new Date(data.date)
  const formattedDate = date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <div className="col-4" style={{display:"flex", flexDirection:"column", flexWrap:"wrap"}}>
        <div className="p-card" style={{flex:'1', display:"flex", flexDirection:"column", borderTop: "2px solid red" }}>
            <div className="p-card__inner u-no-padding--bottom u-no-padding--top">
                <p className='p-card__top'>
                {data._embedded['wp:term'][1][0].name.toUpperCase()}
                </p>
                <hr className="u-sv1"></hr>
            </div>
            <div className="p-card__inner">
                <a href={data.link.toString()}>
                    <img className="p-card__image" src={data.featured_media} />
                </a>
            </div>
            <div className="p-card__inner" style={{ overflow:"hidden" }} >
                <h3 className='u-no-padding--bottom u-no-padding--top' style={{fontWeight:"normal"}}>
                    <a href={data.link.toString()}>{data.title.rendered.substring(0, 80)} </a>
                </h3>
                <h6> by 
                    {
                        data._embedded.author.map((item: {name: string, link: string}, idx) => (
                            <a href={item.link} key={item.link}> {item.name} </a>
                        ))
                    }
                 on {formattedDate}</h6>
            </div>
            
            <div className="p-card__inner u-no-padding--bottom" style={{marginTop:"auto"}}>
                <hr className="u-sv1" />
                <p>
                    {data._embedded['wp:term'][0][0].name}
                </p>
            </div>
        </div>

    </div>
  )
}

export default Card
