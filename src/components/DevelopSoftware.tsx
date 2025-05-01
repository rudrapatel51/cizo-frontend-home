
const DevelopSoftware: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
<div className="absolute left-1/4 top-[-50px] -translate-x-1/2 translate-y-1/2 w-24 h-12 lg:h-16 rounded-t-full bg-[linear-gradient(180deg,rgba(247,102,128,1),rgba(87,0,123,1))] shadow-lg rotate-180">
</div>

    <section className="p-6 md:p-16" >


        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2" data-aos="fade-up-right">
            <div className="w-16 h-1 bg-purple-600 mb-6"></div>
            <h2 className="text-4xl font-normal mb-8 leading-tight" >
              <span className="font-normal text-gray-800">Leading companies trust us</span>
              <br/>
              <span className="font-bold text-black"> to develop software</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-normal max-w-lg tracking-wide">
  We <span className="font-medium gradient-text">add development capacity</span>{" "}
  to tech teams. Our value isn't limited to building teams but is
  equally distributed across the project lifecycle. We are a custom
  software development company that guarantees the successful
  delivery of your project.
</p>

            <div className="flex items-center text-[#57007B]">
              <span className="font-medium mr-3">See more Informations</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative h-[300px] md:h-[400px]  overflow-hidden">
            <video 
  src="https://videos.pexels.com/video-files/3255275/3255275-sd_640_360_25fps.mp4"
  controls
  autoPlay
  loop
  muted
  playsInline
  className="rounded shadow-md"
/>

            </div>
          </div>
        </div>
    </section>
  </div>
  );
};

export default DevelopSoftware;
