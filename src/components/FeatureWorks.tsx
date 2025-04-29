const features = [
  "Scalable Architecture",
  "Responsive Design",
  "Performance Optimization",
  "Security Implementation",
  "API Development",
  "Database Design",
]

const FeatureWorks = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our development
          <br />
          through feature works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-8 w-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold mr-3">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold">{feature}</h3>
              </div>
              <p className="text-gray-600">
                Our team excels in {feature.toLowerCase()}, ensuring your software is built to the highest standards.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureWorks
