import { Code, PenTool, BarChart, MessageSquare, Zap, Database } from "lucide-react"

const approaches = [
  {
    icon: <Code className="h-8 w-8 text-white" />,
    color: "bg-purple-600",
    title: "Software Engineering",
    description: "We build scalable, maintainable software using modern engineering practices and technologies.",
  },
  {
    icon: <PenTool className="h-8 w-8 text-white" />,
    color: "bg-blue-500",
    title: "Product Design Fundamentals",
    description: "Our design process focuses on creating intuitive, user-friendly interfaces that solve real problems.",
  },
  {
    icon: <BarChart className="h-8 w-8 text-white" />,
    color: "bg-pink-500",
    title: "Agile Development Process",
    description: "We follow agile methodologies to deliver value quickly and adapt to changing requirements.",
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-white" />,
    color: "bg-green-500",
    title: "Continuous Integration/Delivery",
    description: "Our CI/CD pipeline ensures that code is tested and deployed efficiently and reliably.",
  },
  {
    icon: <Zap className="h-8 w-8 text-white" />,
    color: "bg-orange-500",
    title: "Quality Assurance Testing",
    description: "We rigorously test our software to ensure it meets the highest standards of quality and reliability.",
  },
  {
    icon: <Database className="h-8 w-8 text-white" />,
    color: "bg-teal-500",
    title: "Scalable Infrastructure Planning",
    description: "We design infrastructure that can scale with your business and handle increasing loads.",
  },
]

const DevelopmentApproach = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our design and
          <br />
          development approach
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {approaches.map((approach, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className={`${approach.color} h-12 w-12 rounded-lg flex items-center justify-center mb-4`}>
                {approach.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{approach.title}</h3>
              <p className="text-gray-600">{approach.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DevelopmentApproach
