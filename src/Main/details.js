import Button from "./Buttons"
const Details = () => {
	return (
		<div className='max-w-screen-xl px-4 py-16 mx-auto md:mb-4 sm:px-6 lg:px-8'>
			<div class='grid grid-cols-1 lg:h-screen lg:grid-cols-2'>
				<div class='relative z-10 lg:py-16'>
					<div class='relative h-64 sm:h-80 lg:h-full'>
						<img
							alt='House'
							src='https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
							className='absolute inset-0 object-cover w-full h-full'
						/>
					</div>
				</div>
				<div class='relative flex items-center bg-gray-100'>
					<span class='hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100'></span>
					<div class='p-8 sm:p-16 lg:p-24'>
						<h2 class='text-2xl font-bold sm:text-3xl'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
							debitis.
						</h2>
						<p class='my-6 text-gray-600'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
							molestiae! Quidem est esse numquam odio deleniti, beatae, magni
							dolores provident quaerat totam eos, aperiam architecto eius quis
							quibusdam fugiat dicta.
						</p>
						<Button
							name='Get in Touch'
							twclass='bg-indigo-600 hover:bg-transparent hover:text-indigo-600 text-white border border-indigo-600'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Details