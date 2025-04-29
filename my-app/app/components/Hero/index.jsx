function Hero() {
  return (
    <>
      <section
        className='w-full bg-cover bg-right-top  max-[560px]:bg-center h-[600px] bg-gradient-to-r  from-white via-white/0 to-white/0'
        style={{
          backgroundImage: `url("HeroImg.png")`,
          backgroundRepeat: 'no-repeat',
        }}
      >
				<div className="w-full h-full max-[1080px]:bg-[#000]/60">
        <div className='max-w-[90%] m-auto flex flex-col items-start justify-center h-full text-left'>
          <div className='md:w-[550px]'>
            <h1 className='text-4xl max-[700px]:text-center max-[360px]:text-[25px] max-[430px]:text-[30px] max-[1080px]:text-[rgba(170,170,170,1)] md:text-5xl font-bold text-[rgba(1,103,138,1)] mb-4 leading-tight'>
              Лучшая медицинская помощь для здорового детства
            </h1>
            <p className='text-lg max-[700px]:text-center max-[430px]:text-[16px] max-[1080px]:text-[#fff] md:text-xl text-[#000000] mb-8'>
              Наши опытные детские врачи ставят здоровье вашего ребенка на
              первое место. Мы предоставляем профессиональный уход и атмосферу
              заботы.
            </p>
          </div>
        </div>
				</div>
      </section>
    </>
  );
}

export default Hero;
