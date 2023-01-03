import profilePicture from '../../static/profile-picture.jpg';

const Headline = () => {
	return (
		<main className='flex items-center bg-black justify-center'>
			<div className='flex flex-col items-end w-[50%]'>
				<div className='w-96'>
					<img className='h-96 w-full object-cover rounded-bl-[80px]' src={profilePicture} alt="Ernesto's photo" />
				</div>
				<h1 className='text-5xl font-josefin font-bold text-white mt-2'> Ernesto de Loayza </h1>
				<h3 className='text-3xl font-josefin font-bold text-white mt-2 text-blue-500'> Fullstack Developer </h3>
			</div>
			<p className='text-white p-12 w-[50%]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati possimus tenetur sed ducimus rem dignissimos officiis illo veritatis, consequatur cumque porro, quis voluptas, odio vel dolor dolorem nostrum doloremque voluptatem dolores repellendus voluptatum placeat! Sed consequuntur suscipit illum delectus iusto! Praesentium repudiandae sit, aliquid error fugiat dolorum quod nulla nihil!</p>
		</main>
	);
}

export default Headline;