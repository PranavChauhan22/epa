import React from 'react'
import "./Card.css"
function Card(props) {
  return (
    <div className="card_body">
        <div className='card_head1'>
            {props.head}
        </div>
        <div className='card_head2'>
            {props.body}
        </div>
        <div className='card_head3'>
            {props.btnsmall}
        </div>
        <div className='card_head4'>
            {props.btn}
        </div>
    </div>
  )
}

export default Card