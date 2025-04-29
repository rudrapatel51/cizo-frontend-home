const ClientLogos = () => {
  // Array of placeholder logos
  const logos = Array(8).fill(null)

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {logos.map((_, index) => (
            <div key={index} className="flex justify-center">
              <div className="h-8 w-24 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClientLogos
