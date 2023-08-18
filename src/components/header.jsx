import React from 'react'

export default function Header() {
	return (
		<header>
			<ul className='categories'>
				<a className='category'>
					<li>Home</li>
				</a>
				<a className='category'>
					<li>Product</li>
				</a>
				<a className='category'>
					<li>Categories</li>
				</a>
				<a className='category'>
					<li>SALE</li>
				</a>
			</ul>
			<div className='logo'>
				<img src='/images/logo.png' alt='' />
			</div>
			<div className='tools'>
				<div className='search-wrapper'>
					<input className='search' type='text' placeholder='Search' />
					<img
						className='search-icon icon'
						src='images/search.png'
						height={22}
						width={22}
						alt=''
					/>
				</div>
				<img
					className='bag icon'
					height={18}
					width={18}
					src='images/bag.png'
					alt=''
				/>
				<img
					className='user icon'
					height={18}
					width={18}
					src='images/user.png'
					alt=''
				/>
			</div>
		</header>
	)
}
