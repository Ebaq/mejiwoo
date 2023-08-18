import React from 'react'

export default function Promo({ image }) {
	return <img className='promo' src={`images/${image}.png`} alt='' />
}
