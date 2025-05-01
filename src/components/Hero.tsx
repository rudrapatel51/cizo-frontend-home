const Hero = () => {
  return (
    <section className="bg-white relative overflow-hidden p-6 lg:px-24">
      <div
        className="absolute left-1/3 bottom-0 -translate-x-1/2 translate-y-1/2 w-24 h-12 lg:h-16 rounded-t-full bg-[linear-gradient(180deg,rgba(247,102,128,1),rgba(87,0,123,1))] shadow-lg"
        data-aos="fade-up"
      ></div>

      <div className="flex flex-col md:flex-row items-center">
        {/* Left Text Content */}
        <div
          className="text-center md:text-left md:w-1/2 mb-10 md:mb-12"
          data-aos="fade-right"
        >
          <h1 className="text-4xl md:text-5xl font-normal text-gray-800 mb-10">
            Great <span className="hero-text font-bold">Product</span>{" "}is
            <br />
            <span className="text-black font-bold">built by great</span>{" "}
            <span className="text-purple-500 font-bold">teams</span>
          </h1>
          <p className="text-lg font-normal text-gray-600 mb-8 max-w-lg tracking-wider mx-auto md:mx-0">
            We help build and manage a team of world-class developers to bring your vision to life
          </p>
          <button className="bg-[#3D63EA] text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors mt-2 md:mt-8">
            Let's Get Started
          </button>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2" data-aos="fade-left">
          <img
            src="/home/hero.png"
            alt="Team building digital products"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
