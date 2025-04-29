import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO, TechStart",
    rating: 5,
    text: "Working with this team has been an amazing experience. They delivered our project on time and exceeded our expectations.",
  },
  {
    name: "Michael Brown",
    position: "CTO, InnovateCorp",
    rating: 5,
    text: "The team's technical expertise and attention to detail made all the difference in our project's success.",
  },
  {
    name: "Emily Davis",
    position: "Product Manager, GrowthLabs",
    rating: 5,
    text: "Their collaborative approach and commitment to quality resulted in a product our users love.",
  },
]

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Why customers love
          <br />
          working with us
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Don't just take our word for it. Here's what our clients have to say about working with us.
        </p>

        <div className="relative">
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 h-40 w-40 rounded-full bg-purple-100 -z-10"></div>
          <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-purple-100 -z-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">{testimonial.text}</p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-200 mr-3"></div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
