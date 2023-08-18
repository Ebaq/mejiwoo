import { useState } from 'react'
import './App.css'
import Categories from './components/categories'
import Header from './components/header'
import Promo from './components/promo'
import Scrollable from './components/slider'

function App() {
	const [activeIndex, setActiveIndex] = useState(0)
	let Index = 0
	const [top, setTop] = useState([
		{
			image: 'images/top_1.png',
			title: 'Eto V Neck Yellow',
			price: 'Rp. 129.000',
		},
		{
			image: 'images/top_2.png',
			title: 'Macaroon Dry Half',
			price: 'Rp. 139.000',
		},
		{
			image: 'images/top_3.png',
			title: 'Wave Stripe Hally',
			price: 'Rp. 130.000',
		},
		{
			image: 'images/top_4.png',
			title: 'Eve Punching Floral',
			price: 'Rp. 229.000',
		},
		{
			image: 'images/top_5.png',
			title: 'Floral Waffle Tee',
			price: 'Rp. 119.000',
		},
		{
			image: 'images/top_6.png',
			title: 'Snap Pure Blouse',
			price: 'Rp. 225.000',
		},
	])

	const best = [
		{
			image: '/images/bestseller_1.png',
			title: 'Euphoria Crop Blouse',
			price: 'Rp. 125000',
		},
		{
			image: '/images/bestseller_2.png',
			title: 'Venus Halter Dress',
			price: 'Rp. 180.000',
		},
		{
			image: '/images/bestseller_3.png',
			title: 'Snap Pure Blouse',
			price: 'Rp. 129.000',
		},
		{
			image: '/images/bestseller_4.png',
			title: 'West Bootscut Denim',
			price: 'Rp. 229.000',
		},
		{
			image: '/images/bestseller_5.png',
			title: 'Ribbon Check Long',
			price: 'Rp. 175.000',
		},
		{
			image: '/images/bestseller_6.png',
			title: 'Shouldcut Knit',
			price: 'Rp. 149.000',
		},
	]

	const feedback = [
		{
			image: 'images/feedback_1.png',
			product: 'Essence Long Denim',
			name: '-Lisa-',
			feedback:
				'“I like this pants. Its fit and perfect for me. The material is so comfortable that it can be used anywhere. It is also suitable to be combined with all types of my clothes.”',
		},
		{
			image: '/images/feedback_2.png',
			product: 'Andcable Knit Top',
			name: '-Celine-',
			feedback:
				'“I like knitted materials. I bought this shirt because the design is very pretty and comfortable to wear casually. The material is also neat and good. I love shopping here and I’ll be a frequent customer at this store.”',
		},
		{
			image: '/images/feedback_3.png',
			product: 'Candy Stripe Boxy',
			name: '-Tiffany-',
			feedback:
				'“This shirt is very pretty and nice. The color is cute too. At first I bought it as a present for my friend but I also wanted it so we ended up going out wearing twin clothes haha.”',
		},
		{
			image: '/images/feedback_4.png',
			product: 'Summer Cheese Slacks',
			name: '-Mona-',
			feedback:
				'“This pants are very comfortable to wear in the office all day. The material is breathable and stretchy. I also bought this cardigan because I like the beautiful pattern. It goes very well with the pants.”',
		},
		{
			image: '/images/feedback_5.png',
			product: 'Tinkerbell Chiffon Skirt',
			name: '-Hana-',
			feedback:
				'“I bought this one set of this pretty cardigan and skirt. I really like the Korean style. Its very trendy and comfortable to use when hanging out. Im happy to be a regular customer at this store.”',
		},
		{
			image: '/images/feedback_6.png',
			product: 'Sweet Serendipity Cardigan',
			name: '-Bella-',
			feedback:
				'“I really like this cardigan. I like the material because its very soft and comfortable to use. I also bought 2 different colors because they are really good to use and pretty.” ',
		},
	]

	const productsList = () => {
		if (Index == 1) {
			setTop([
				{
					image: 'images/top_1.png',
					title: 'Test',
					price: 'Rp. 129.000',
				},
				{
					image: 'images/top_2.png',
					title: 'Test2',
					price: 'Rp. 139.0001241',
				},
				{
					image: 'images/top_3.png',
					title: 'Wave Stripe Hally',
					price: 'Rp. 130.000',
				},
				{
					image: 'images/top_4.png',
					title: 'Eve Punching Floral',
					price: 'Rp. 229.000',
				},
				{
					image: 'images/top_5.png',
					title: 'Floral Waffle Tee',
					price: 'Rp. 119.000',
				},
				{
					image: 'images/top_6.png',
					title: 'Snap Pure Blouse',
					price: 'Rp. 225.000',
				},
			])
			console.log(top)
			console.log(activeIndex)
		} else if (Index == 0) {
			setTop([
				{
					image: 'images/top_1.png',
					title: 'Eto V Neck Yellow',
					price: 'Rp. 129.000',
				},
				{
					image: 'images/top_2.png',
					title: 'Macaroon Dry Half',
					price: 'Rp. 139.000',
				},
				{
					image: 'images/top_3.png',
					title: 'Wave Stripe Hally',
					price: 'Rp. 130.000',
				},
				{
					image: 'images/top_4.png',
					title: 'Eve Punching Floral',
					price: 'Rp. 229.000',
				},
				{
					image: 'images/top_5.png',
					title: 'Floral Waffle Tee',
					price: 'Rp. 119.000',
				},
				{
					image: 'images/top_6.png',
					title: 'Snap Pure Blouse',
					price: 'Rp. 225.000',
				},
			])
		} else if (Index == 2) {
			setTop([
				{
					image: 'images/top_1.png',
					title: 'Eto V Neck Yellow43163',
					price: 'Rp. 129.0003421',
				},
				{
					image: 'images/top_2.png',
					title: 'Macaroon Dry Halfsadf',
					price: 'Rp. 139.00023',
				},
				{
					image: 'images/top_3.png',
					title: 'Wave Stripe Hallyfdas',
					price: 'Rp. 130.000',
				},
				{
					image: 'images/top_4.png',
					title: 'Eve Punching Floral',
					price: 'Rp. 229.000',
				},
				{
					image: 'images/top_5.png',
					title: 'Floral Waffle Tee',
					price: 'Rp. 119.000',
				},
				{
					image: 'images/top_6.png',
					title: 'Snap Pure Blouse',
					price: 'Rp. 225.000',
				},
			])
		}
	}

	return (
		<div className='App'>
			<Header />
			<Promo image='promo' />
			<div className='season-collections'>
				<h1>Season Collections</h1>
				<div className='pictures'>
					<section className='section'>
						<img className='season-pictures' src='/images/spring.png' alt='' />
						<h2>spring</h2>
						<button className='more'>MORE</button>
					</section>
					<section className='section'>
						<img className='season-pictures' src='/images/summer.png' alt='' />
						<h2>summer</h2>
						<button className='more'>MORE</button>
					</section>
					<section className='section'>
						<img className='season-pictures' src='/images/winter.png' alt='' />
						<h2>winter</h2>
						<button className='more'>MORE</button>
					</section>
				</div>
			</div>
			<div className='best-sellers'>
				<h1>Our Best Seller</h1>
				<div className='slider'>
					<Scrollable _class='items'>
						{best.map((v, i) => {
							return (
								<div className='bestseller' key={i}>
									<section className='section'>
										<img className='bestseller__image' src={v.image} alt='' />
										<h3 className='bestseller__title'>{v.title}</h3>
										<h4 className='bestseller__price'>{v.price}</h4>
									</section>
								</div>
							)
						})}
					</Scrollable>
				</div>
			</div>
			<div className='promo-sale'>
				<Promo className='sale' image='sale' />
				<button className='saleBtn'>SHOP NOW</button>
			</div>
			<div className='products'>
				<h1>Our Products</h1>
				<ul className='choice'>
					<li
						onClick={() => {
							setActiveIndex(0)
							Index = 0
							productsList()
						}}
						className={`product-type ${activeIndex === 0 ? ' active' : ''}`}
					>
						<span>Top</span>
					</li>
					<li
						onClick={() => {
							setActiveIndex(1)
							Index = 1
							productsList()
						}}
						className={`product-type ${activeIndex === 1 ? ' active' : ''}`}
					>
						<span>Bottom</span>
					</li>
					<li
						onClick={() => {
							setActiveIndex(2)
							Index = 2
							productsList()
						}}
						className={`product-type ${activeIndex === 2 ? ' active' : ''}`}
					>
						<span>Dress</span>
					</li>
					<li
						onClick={() => {
							setActiveIndex(3)
							Index = 3
							console.log(activeIndex)
							productsList()
						}}
						className={`product-type ${activeIndex === 3 ? ' active' : ''}`}
					>
						<span>Set</span>
					</li>
					<li
						onClick={() => {
							setActiveIndex(4)
							Index = 4
							console.log(activeIndex)
							productsList()
						}}
						className={`product-type ${activeIndex === 4 ? ' active' : ''}`}
					>
						<span>Knit</span>
					</li>
					<li
						onClick={() => {
							setActiveIndex(5)
							Index = 5
							console.log(activeIndex)
							productsList()
						}}
						className={`product-type ${activeIndex === 5 ? ' active' : ''}`}
					>
						<span>Outer</span>
					</li>
				</ul>
				<div className='products__pictures'>
					<Categories>
						{top.map((v, i) => {
							return (
								<section className='section' key={i}>
									<img className='product-picture' src={v.image} alt='' />
									<h3>{v.title}</h3>
									<h4>{v.price}</h4>
								</section>
							)
						})}
					</Categories>
					{/* <Categories isActive={activeIndex} top={bottom}></Categories> */}
				</div>
			</div>
			<div className='featured'>
				<h1>Our Featured Collections</h1>
				<div className='featured__pictures'>
					<div className='featured_1 feat'>
						<div className='featured__section'>
							<img
								className='featured-picture_1 featured-picture'
								src='/images/featured_1.png'
								alt=''
							/>
							<h3 className='knitwear'>COLORFUL KNITWEAR SERIES</h3>
							<svg
								className='featured-btn'
								width='49'
								height='49'
								viewBox='0 0 55 55'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									className='featured-btn-path'
									d='M0 10C0 4.47715 4.47715 0 10 0H58V55H0V10Z'
									fill='#F7F6F0'
								/>
								<path
									d='M37.6667 13.2083L47.875 23.4167L37.6667 33.625'
									stroke='black'
									stroke-width='2'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
								<path
									d='M47.875 23.4167H31.5417C20.2655 23.4167 11.125 32.5572 11.125 43.8334V45.875'
									stroke='black'
									stroke-width='2'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
							</svg>
						</div>
						<div className='featured__section'>
							<img
								className='featured-picture_2 featured-picture'
								src='/images/featured_2.png'
								alt=''
							/>
							<h3 className='pants'>TOP PANTS SERIES</h3>
							<svg
								className='featured-btn'
								width='49'
								height='49'
								viewBox='0 0 55 55'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									className='featured-btn-path'
									d='M0 10C0 4.47715 4.47715 0 10 0H58V55H0V10Z'
									fill='#F7F6F0'
								/>
								<path
									d='M37.6667 13.2083L47.875 23.4167L37.6667 33.625'
									stroke='black'
									stroke-width='2'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
								<path
									d='M47.875 23.4167H31.5417C20.2655 23.4167 11.125 32.5572 11.125 43.8334V45.875'
									stroke='black'
									stroke-width='2'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
							</svg>
						</div>
					</div>
					<div className='featured_2 feat'>
						<div className='featured__section large'>
							<img
								className='featured-picture_large featured-picture'
								src='/images/featured_large.png'
								alt=''
							/>
							<h3 className='special'>JIWOO MADE SPECIAL SERIES</h3>
							<svg
								className='featured-btn'
								width='49'
								height='49'
								viewBox='0 0 55 55'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									className='featured-btn-path'
									d='M0 10C0 4.47715 4.47715 0 10 0H58V55H0V10Z'
									fill='#F7F6F0'
								/>
								<path
									d='M37.6667 13.2083L47.875 23.4167L37.6667 33.625'
									stroke='black'
									stroke-width='2'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
								<path
									d='M47.875 23.4167H31.5417C20.2655 23.4167 11.125 32.5572 11.125 43.8334V45.875'
									stroke='black'
									stroke-width='2'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
							</svg>
						</div>
					</div>
					<div className='featured_3 feat'>
						<div className='featured__section'>
							<img
								className='featured-picture_3 featured-picture'
								src='/images/featured_3.png'
								alt=''
							/>
							<h3 className='fresh-top'>FRESHIDER TOP SERIES</h3>
							<svg
								className='featured-btn'
								width='49'
								height='49'
								viewBox='0 0 55 55'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									className='featured-btn-path'
									d='M0 10C0 4.47715 4.47715 0 10 0H58V55H0V10Z'
									fill='#F7F6F0'
								/>
								<path
									d='M37.6667 13.2083L47.875 23.4167L37.6667 33.625'
									stroke='black'
									stroke-width='2'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
								<path
									d='M47.875 23.4167H31.5417C20.2655 23.4167 11.125 32.5572 11.125 43.8334V45.875'
									stroke='black'
									stroke-width='2'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
							</svg>
						</div>
						<div className='featured__section'>
							<img
								className='featured-picture_4 featured-picture'
								src='/images/featured_4.png'
								alt=''
							/>
							<h3 className='dresses'>SWEET DRESSES SERIES</h3>
							<svg
								className='featured-btn'
								width='49'
								height='49'
								viewBox='0 0 55 55'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									className='featured-btn-path'
									d='M0 10C0 4.47715 4.47715 0 10 0H58V55H0V10Z'
									fill='#F7F6F0'
								/>
								<path
									d='M37.6667 13.2083L47.875 23.4167L37.6667 33.625'
									stroke='black'
									stroke-width='2'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
								<path
									d='M47.875 23.4167H31.5417C20.2655 23.4167 11.125 32.5572 11.125 43.8334V45.875'
									stroke='black'
									stroke-width='2'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
							</svg>
						</div>
					</div>
				</div>
			</div>
			<div className='feedback'>
				<h1>What They Said</h1>
				<div className='slider'>
					<Scrollable _class='items'>
						{feedback.map((v, i) => {
							return (
								<div className='review' key={i}>
									<section className='review-section'>
										<img
											className='offered-product-picture'
											src={v.image}
											alt=''
										/>
										<h3 className='offered-product'>{v.product}</h3>
										<div className='stars'>
											<img src='images/star.png' alt='' />
											<img src='images/star.png' alt='' />
											<img src='images/star.png' alt='' />
											<img src='images/star.png' alt='' />
											<img src='images/star.png' alt='' />
										</div>
										<h4 className='name'>{v.name}</h4>
										<h4 className='review-text'>{v.feedback}</h4>
									</section>
								</div>
							)
						})}
					</Scrollable>
				</div>
			</div>
			<div className='authorization'>
				<div className='benefits'>
					<div className='benefits__wrapper'>
						<h1 class='get-more'>
							Get more benefits by Sign Up & Join Mejiwoo Community!
						</h1>
						<ul className='benefits__list'>
							<li className='benefits__points'>
								FREE Special Gift to a new member
							</li>
							<li className='benefits__points'>
								Get 2x JIWOO Points to purchase items
							</li>
							<li className='benefits__points'>
								Get special voucher code every month
							</li>
							<li className='benefits__points'>
								Claim Voucher Disc. Up To 50%
							</li>
						</ul>
					</div>
				</div>
				<div className='border'></div>
				<div className='authorization-variants'>
					<input type='text' placeholder='Full Name' />
					<input type='text' placeholder='Email Address' />
					<input type='text' placeholder='Password' />
					<div className='terms'>
						<label>
							<input class='real-checkbox' type='checkbox' />
							<span className='custom-checkbox'></span>
							<h3>
								I agree to all the <span>Terms</span> and{' '}
								<span>Privacy Policy</span>
							</h3>
						</label>
					</div>
					<button className='signUp'>SIGN UP</button>
					<h3 className='or'>Or</h3>
					<button className='google socialBtn'>
						<img src='/images/google-icon.png' alt='' />
						SIGN UP WITH GOOGLE
					</button>
					<button className='facebook socialBtn'>
						<img src='/images/facebookBtn-icon.png' alt='' />
						SIGN UP WITH FACEBOOK
					</button>
				</div>
			</div>
			<footer className='footer'>
				<div className='footer-info'>
					<div className='big-logo'>
						<img src='/images/big-logo.png' alt='' />
					</div>
					<div className='about-us'>
						<span className='about-us__title'>About us</span>
						<ul className='about-us__list'>
							<li className='about-us__points'>News</li>
							<li className='about-us__points'>Official Store</li>
							<li className='about-us__points'>Company</li>
							<li className='about-us__points'>Careers</li>
						</ul>
					</div>
					<div className='get-help'>
						<span className='get-help__title'>Get Help</span>
						<ul className='get-help__list'>
							<li className='get-help__points'>FAQ</li>
							<li className='get-help__points'>Shipping</li>
							<li className='get-help__points'>Payment </li>
							<li className='get-help__points'>Returns</li>
							<li className='get-help__points'>Contact Us</li>
						</ul>
					</div>
					<div className='follow-us'>
						<span className='follow-us__title'>Follow Us</span>
						<div className='social-icons'>
							<div className='social-icon'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='20'
									height='20'
									viewBox='0 0 20 20'
									fill='none'
								>
									<path
										d='M20 10C20 4.47719 15.5228 0 10 0C4.47719 0 0 4.47711 0 10C0 14.9913 3.65687 19.1284 8.4375 19.8785V12.8906H5.89844V10H8.4375V7.79688C8.4375 5.29063 9.93047 3.90625 12.2146 3.90625C13.3088 3.90625 14.4531 4.10156 14.4531 4.10156V6.5625H13.1922C11.9498 6.5625 11.5625 7.33336 11.5625 8.12422V10H14.3359L13.8926 12.8906H11.5625V19.8785C16.3431 19.1284 20 14.9913 20 10Z'
										fill='#1877F2'
									/>
								</svg>
							</div>
							<div className='social-icon'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='20'
									height='20'
									viewBox='0 0 20 20'
									fill='none'
								>
									<g clip-path='url(#clip0_104_230)'>
										<path
											d='M15.3125 0H4.6875C2.09867 0 0 2.09867 0 4.6875V15.3125C0 17.9013 2.09867 20 4.6875 20H15.3125C17.9013 20 20 17.9013 20 15.3125V4.6875C20 2.09867 17.9013 0 15.3125 0Z'
											fill='url(#paint0_radial_104_230)'
										/>
										<path
											d='M15.3125 0H4.6875C2.09867 0 0 2.09867 0 4.6875V15.3125C0 17.9013 2.09867 20 4.6875 20H15.3125C17.9013 20 20 17.9013 20 15.3125V4.6875C20 2.09867 17.9013 0 15.3125 0Z'
											fill='url(#paint1_radial_104_230)'
										/>
										<path
											d='M10.0007 2.1875C7.87898 2.1875 7.61266 2.1968 6.77938 2.23469C5.94766 2.27281 5.37992 2.40445 4.8832 2.59766C4.3693 2.79719 3.93344 3.06414 3.49922 3.49852C3.06461 3.93281 2.79766 4.36867 2.5975 4.88234C2.40375 5.37922 2.27195 5.94719 2.23453 6.77852C2.19727 7.61188 2.1875 7.87828 2.1875 10.0001C2.1875 12.1219 2.19688 12.3873 2.23469 13.2206C2.27297 14.0523 2.40461 14.6201 2.59766 15.1168C2.79734 15.6307 3.0643 16.0666 3.49867 16.5008C3.93281 16.9354 4.36867 17.203 4.88219 17.4025C5.3793 17.5957 5.94711 17.7273 6.77867 17.7655C7.61203 17.8034 7.87813 17.8127 9.99977 17.8127C12.1217 17.8127 12.3872 17.8034 13.2205 17.7655C14.0522 17.7273 14.6205 17.5957 15.1177 17.4025C15.6313 17.203 16.0666 16.9354 16.5006 16.5008C16.9352 16.0666 17.2021 15.6307 17.4023 15.117C17.5944 14.6201 17.7262 14.0522 17.7653 13.2208C17.8027 12.3875 17.8125 12.1219 17.8125 10.0001C17.8125 7.87828 17.8027 7.61203 17.7653 6.77867C17.7262 5.94695 17.5944 5.3793 17.4023 4.88258C17.2021 4.36867 16.9352 3.93281 16.5006 3.49852C16.0661 3.06398 15.6315 2.79703 15.1172 2.59773C14.6191 2.40445 14.0511 2.27273 13.2194 2.23469C12.386 2.1968 12.1207 2.1875 9.99828 2.1875H10.0007ZM9.29984 3.59539C9.50789 3.59508 9.74 3.59539 10.0007 3.59539C12.0867 3.59539 12.3339 3.60289 13.1577 3.64031C13.9194 3.67516 14.3328 3.80242 14.6082 3.90938C14.9728 4.05094 15.2327 4.22023 15.506 4.49375C15.7795 4.76719 15.9487 5.02758 16.0906 5.39219C16.1976 5.66719 16.325 6.08063 16.3597 6.84234C16.3971 7.66594 16.4052 7.91328 16.4052 9.99828C16.4052 12.0833 16.3971 12.3307 16.3597 13.1542C16.3248 13.9159 16.1976 14.3294 16.0906 14.6045C15.9491 14.9691 15.7795 15.2287 15.506 15.502C15.2326 15.7754 14.973 15.9446 14.6082 16.0863C14.3331 16.1937 13.9194 16.3206 13.1577 16.3555C12.3341 16.3929 12.0867 16.401 10.0007 16.401C7.91461 16.401 7.66734 16.3929 6.84383 16.3555C6.08211 16.3203 5.66867 16.193 5.39305 16.0861C5.02852 15.9445 4.76805 15.7752 4.49461 15.5018C4.22117 15.2284 4.05195 14.9686 3.91 14.6038C3.80305 14.3287 3.67562 13.9153 3.64094 13.1536C3.60352 12.33 3.59602 12.0827 3.59602 9.99633C3.59602 7.91008 3.60352 7.66398 3.64094 6.84039C3.67578 6.07867 3.80305 5.66523 3.91 5.38984C4.05164 5.02523 4.22117 4.76484 4.49469 4.49141C4.76813 4.21797 5.02852 4.04867 5.39312 3.9068C5.66852 3.79938 6.08211 3.67242 6.84383 3.63742C7.56453 3.60484 7.84383 3.59508 9.29984 3.59344V3.59539ZM14.171 4.89258C13.6534 4.89258 13.2335 5.31211 13.2335 5.82977C13.2335 6.34734 13.6534 6.76727 14.171 6.76727C14.6886 6.76727 15.1085 6.34734 15.1085 5.82977C15.1085 5.31219 14.6886 4.89227 14.171 4.89227V4.89258ZM10.0007 5.98797C7.78508 5.98797 5.98867 7.78438 5.98867 10.0001C5.98867 12.2158 7.78508 14.0113 10.0007 14.0113C12.2164 14.0113 14.0122 12.2158 14.0122 10.0001C14.0122 7.78445 12.2163 5.98797 10.0005 5.98797H10.0007ZM10.0007 7.39586C11.4389 7.39586 12.6049 8.56172 12.6049 10.0001C12.6049 11.4383 11.4389 12.6043 10.0007 12.6043C8.56242 12.6043 7.39656 11.4383 7.39656 10.0001C7.39656 8.56172 8.56242 7.39586 10.0007 7.39586Z'
											fill='white'
										/>
									</g>
									<defs>
										<radialGradient
											id='paint0_radial_104_230'
											cx='0'
											cy='0'
											r='1'
											gradientUnits='userSpaceOnUse'
											gradientTransform='translate(5.3125 21.5404) rotate(-90) scale(19.8215 18.4355)'
										>
											<stop stop-color='#FFDD55' />
											<stop offset='0.1' stop-color='#FFDD55' />
											<stop offset='0.5' stop-color='#FF543E' />
											<stop offset='1' stop-color='#C837AB' />
										</radialGradient>
										<radialGradient
											id='paint1_radial_104_230'
											cx='0'
											cy='0'
											r='1'
											gradientUnits='userSpaceOnUse'
											gradientTransform='translate(-3.35008 1.4407) rotate(78.681) scale(8.86031 36.5225)'
										>
											<stop stop-color='#3771C8' />
											<stop offset='0.128' stop-color='#3771C8' />
											<stop offset='1' stop-color='#6600FF' stop-opacity='0' />
										</radialGradient>
										<clipPath id='clip0_104_230'>
											<rect width='20' height='20' fill='white' />
										</clipPath>
									</defs>
								</svg>
							</div>
							<div className='social-icon'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='20'
									height='18'
									viewBox='0 0 20 18'
									fill='none'
								>
									<path
										d='M17.9525 4.92001C17.9647 5.09641 17.9647 5.27266 17.9647 5.45063C17.9647 10.8725 13.837 17.1256 6.28969 17.1256V17.1225C4.06001 17.1256 1.87655 16.487 0 15.2828C0.324219 15.3219 0.65 15.3414 0.976562 15.3422C2.82455 15.3437 4.61938 14.7239 6.07266 13.5824C5.2164 13.5662 4.3866 13.2828 3.69929 12.7719C3.01197 12.261 2.50149 11.5481 2.23922 10.7328C2.85438 10.8516 3.48812 10.827 4.09188 10.662C2.1775 10.2753 0.800313 8.59344 0.800313 6.64016V6.58813C1.37099 6.90605 2.00969 7.08219 2.66266 7.10173C0.859375 5.89673 0.303906 3.49813 1.39266 1.62298C2.4228 2.89058 3.70806 3.92731 5.16497 4.66583C6.62188 5.40436 8.21785 5.82815 9.84922 5.90969C9.68661 5.2095 9.71068 4.47889 9.91901 3.79092C10.1274 3.10294 10.5127 2.48173 11.0364 1.98938C12.6891 0.435788 15.2883 0.515476 16.8417 2.16735C17.7607 1.9859 18.6419 1.64898 19.4475 1.1711C19.1412 2.12121 18.5002 2.92772 17.6437 3.44063C18.4571 3.34473 19.2515 3.12692 20 2.79454C19.4493 3.61917 18.756 4.33893 17.9525 4.92001Z'
										fill='#1D9BF0'
									/>
								</svg>
							</div>
							<div className='social-icon'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='21'
									height='15'
									viewBox='0 0 21 15'
									fill='none'
								>
									<g clip-path='url(#clip0_104_237)'>
										<path
											d='M20.5362 2.33958C20.4158 1.88738 20.1808 1.47512 19.8547 1.14386C19.5287 0.812593 19.1228 0.573884 18.6777 0.4515C17.0481 0 10.4894 0 10.4894 0C10.4894 0 3.9303 0.0136666 2.30066 0.465167C1.85552 0.587558 1.44971 0.82628 1.12363 1.15756C0.79756 1.48884 0.562604 1.90111 0.442164 2.35333C-0.0507616 5.29483 -0.241976 9.777 0.455699 12.6008C0.576152 13.053 0.811113 13.4653 1.13719 13.7966C1.46326 14.1278 1.86907 14.3665 2.3142 14.4889C3.94383 14.9404 10.5027 14.9404 10.5027 14.9404C10.5027 14.9404 17.0615 14.9404 18.6911 14.4889C19.1362 14.3665 19.5421 14.1278 19.8681 13.7966C20.1942 13.4653 20.4292 13.053 20.5497 12.6008C21.0696 9.65517 21.2298 5.17575 20.5362 2.33958Z'
											fill='#FF0000'
										/>
										<path
											d='M8.40161 10.6717L13.8426 7.47016L8.40161 4.26866V10.6717Z'
											fill='white'
										/>
									</g>
									<defs>
										<clipPath id='clip0_104_237'>
											<rect width='21' height='15' fill='white' />
										</clipPath>
									</defs>
								</svg>
							</div>
						</div>
					</div>
					<div className='guide'>
						<ul className='guide__list'>
							<li className='guide__points'>Guide</li>
							<li className='guide__points'>Terms & Conditions</li>
							<li className='guide__points'>Privacy Policy</li>
						</ul>
					</div>
				</div>
				<div className='footer-rights'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
					>
						<path
							d='M11.88 9.14C13.16 9.2 13.49 10.29 13.51 10.8H15.3C15.22 8.82 13.81 7.61 11.85 7.61C9.64 7.61 8 9 8 12.14C8 14.08 8.93 16.38 11.84 16.38C14.06 16.38 15.25 14.73 15.28 13.43H13.49C13.46 14.02 13.04 14.81 11.86 14.87C10.55 14.83 10 13.81 10 12.14C10 9.25 11.28 9.16 11.88 9.14ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z'
							fill='white'
						/>
					</svg>
					<span>2023 MEJIWOO. All Rights Reserved</span>
				</div>
			</footer>
		</div>
	)
}

export default App
