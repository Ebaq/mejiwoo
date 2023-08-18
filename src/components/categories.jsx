import React from 'react'

export default function Categories({ children }) {
	return (
		<div className='products-list'>
			<div className='wrapper'>{children}</div>
			<button className='see-more'>
				SEE MORE <img width={24} height={24} src='images/seeMore.png' alt='' />
			</button>
		</div>
	)
}
