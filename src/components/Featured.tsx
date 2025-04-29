const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A comprehensive e-commerce solution with product management, payment processing, and customer analytics.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Healthcare App",
    description: "A mobile application for healthcare providers to manage patient records and appointments.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Financial Dashboard",
    description: "An interactive dashboard for financial analysis and reporting with real-time data visualization.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Social Media Platform",
    description: "A social networking platform with user profiles, content sharing, and messaging capabilities.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Learning Management System",
    description: "An educational platform for course creation, student management, and progress tracking.",
    image: "/placeholder.svg?height=200&width=300",
  },
]

const Featured = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
              <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <button className="text-purple-600 font-semibold hover:text-purple-700 transition-colors">
                  View project →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Featured
