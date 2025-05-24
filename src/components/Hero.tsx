import HeroImage from '../assets/img/Hero.jpg'

const Hero = () => {
  return (
    <section id="o-brendu" className="py-16 px-6" style={{ backgroundColor: '#d9c098' }}>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 pt-16 md:pt-20">
        <img src={HeroImage} />
      </div>
    </section>
  )
}

export default Hero
