const TechStack = () => {
  // Array of placeholder tech logos
  const techLogos = Array(12).fill(null)

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Tech Stack</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {techLogos.map((_, index) => (
            <div key={index} className="flex justify-center">
              <div className="h-12 w-12 bg-gray-200 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack
