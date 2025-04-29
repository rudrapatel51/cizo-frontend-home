const workingStyles = [
  {
    title: "Build the right team to scale",
    description:
      "We help you identify the right talent and build high-performing teams that can scale with your business needs.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Build the right team to scale",
    description:
      "Our agile approach ensures that we can adapt quickly to changing requirements and deliver value at every stage of the project.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Build the right team to scale",
    description:
      "We work closely with your team to ensure knowledge transfer and build internal capabilities for long-term success.",
    image: "/placeholder.svg?height=300&width=400",
  },
]

const WaysOfWorking = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Ways of Working
          <br />
          <span className="text-purple-600">Great Software</span>
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Our approach to software development is focused on delivering value through collaboration, flexibility, and
          technical excellence.
        </p>

        <div className="space-y-16">
          {workingStyles.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center gap-8">
              {index % 2 === 0 ? (
                <>
                  <div className="md:w-1/2">
                    <div className="relative">
                      <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-full bg-purple-200"></div>
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-auto rounded-lg relative z-10"
                      />
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <p className="text-gray-600 mb-6">{item.description}</p>
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-gray-200 mr-3"></div>
                      <div>
                        <p className="font-semibold">Team Member</p>
                        <p className="text-sm text-gray-600">Position</p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="md:w-1/2 md:order-2">
                    <div className="relative">
                      <div className="absolute -bottom-4 -right-4 h-20 w-20 rounded-full bg-purple-200"></div>
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-auto rounded-lg relative z-10"
                      />
                    </div>
                  </div>
                  <div className="md:w-1/2 md:order-1">
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <p className="text-gray-600 mb-6">{item.description}</p>
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-gray-200 mr-3"></div>
                      <div>
                        <p className="font-semibold">Team Member</p>
                        <p className="text-sm text-gray-600">Position</p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WaysOfWorking
