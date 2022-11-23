import React from 'react'
import Card from './Card'
import "./Card.css"
const data=[
    {
        head1:"0 t/m 50 m²",
        head2:"€ 270,-",
        head3:"incl. BTW",
        head4:"Label aanvragen"
    },
    {
        head1:"0 t/m 50 m²",
        head2:"€ 270,-",
        head3:"incl. BTW",
        head4:"Label aanvragen"
    },
    {
        head1:"0 t/m 50 m²",
        head2:"€ 270,-",
        head3:"incl. BTW",
        head4:"Label aanvragen"
    },
    {
        head1:"0 t/m 50 m²",
        head2:"€ 270,-",
        head3:"incl. BTW",
        head4:"Label aanvragen"
    },
    {
        head1:"0 t/m 50 m²",
        head2:"€ 270,-",
        head3:"incl. BTW",
        head4:"Label aanvragen"
    },
    {
        head1:"0 t/m 50 m²",
        head2:"€ 270,-",
        head3:"incl. BTW",
        head4:"Label aanvragen"
    },
]
function Cards() {
  return (
    <div className='card_wrap'>
        {
            data.map(e=>{
                return <Card head={e.head1} body={e.head2} btnsmall={e.head3} btn={e.head4}/>
            })
        }
    </div>
  )
}

export default Cards