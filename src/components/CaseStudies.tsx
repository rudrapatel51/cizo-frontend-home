const caseStudies = [
  {
    title: "Website Design for SAAS Product",
    description:
      "A complete redesign of the user interface for a leading SaaS platform, focusing on improving user experience and conversion rates.",
    images: [
      "/placeholder.svg?height=400&width=200",
      "/placeholder.svg?height=400&width=200",
      "/placeholder.svg?height=400&width=200",
    ],
  },
  {
    title: "Website Design for SAAS Product",
    description:
      "Development of a mobile application for a fintech startup, enabling users to manage their finances on the go with a secure and intuitive interface.",
    images: [
      "/placeholder.svg?height=400&width=200",
      "/placeholder.svg?height=400&width=200",
      "/placeholder.svg?height=400&width=200",
    ],
  },
  {
    title: "Website Design for SAAS Product",
    description:
      "Creation of a comprehensive e-commerce solution for a retail brand, including product catalog, payment processing, and customer management.",
    images: [
      "/placeholder.svg?height=400&width=200",
      "/placeholder.svg?height=400&width=200",
      "/placeholder.svg?height=400&width=200",
    ],
  },
]

const CaseStudies = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our recent
          <br />
          Case studies
        </h2>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-xl font-bold mb-4">{study.title}</h3>
                  <p className="text-gray-600 mb-6">{study.description}</p>
                  <button className="text-purple-600 font-semibold hover:text-purple-700 transition-colors">
                    View case study →
                  </button>
                </div>
                <div className="md:w-1/2">
                  <div className="grid grid-cols-3 gap-4">
                    {study.images.map((img, imgIndex) => (
                      <div key={imgIndex} className="bg-purple-100 rounded-lg overflow-hidden">
                        <img
                          src={img || "/placeholder.svg"}
                          alt={`Case study ${index + 1} screenshot ${imgIndex + 1}`}
                          className="w-full h-auto"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
