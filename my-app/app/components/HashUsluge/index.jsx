function Services() {
	const services = [
		{
			name: 'Педиатр',
			description: 'Проверяет и лечит здоровье детей.',
		},
		{
			name: 'ЛОР',
			description: 'Диагностирует и лечит заболевания уха, горла и носа.',
		},
		{
			name: 'Невропатолог',
			description: 'Занимается заболеваниями нервной системы.',
		},
		{
			name: 'Гинеколог',
			description: 'Услуги по женскому здоровью и гинекологии.',
		},
		{
			name: 'УЗИ',
			description: 'Ультразвуковое исследование внутренних органов.',
		},
		{
			name: 'Терапевт',
			description: 'Консультации и лечение для общего здоровья.',
		},
		{
			name: 'Кардиолог',
			description: 'Диагностика и лечение заболеваний сердца и сосудов.',
		},
		{
			name: 'Лабораторные услуги',
			description: 'Анализы и лабораторные исследования.',
		},
		{
			name: 'Муволажа услуги',
			description: 'Физиотерапия и лечебные процедуры.', // Agar "Муволажа" o'zbek so'zi bo'lsa, izohini o'zgartiraman.
		},
	];
	

	return (
		<div className='max-w-6xl mx-auto px-4 py-10'>
			<h1 className='text-4xl font-bold text-center mb-10'>Наши услуги</h1>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
				{services.map((service, index) => (
					<div
						key={index}
						className='bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition'
					>
						<h2 className='text-2xl font-semibold text-[rgba(1,103,138,1)] mb-2'>
							{service.name}
						</h2>
						<p className='text-gray-600'>{service.description}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default Services
