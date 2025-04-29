const CtaSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Hire the best developers and
            <br />
            designers around
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Ready to bring your digital vision to life? Our team of expert developers and designers is here to help you
            create exceptional software solutions.
          </p>
          <button className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition-colors">
            Get in touch
          </button>
        </div>
      </div>
    </section>
  )
}

export default CtaSection
