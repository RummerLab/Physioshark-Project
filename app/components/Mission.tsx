export default function Mission() {
  return (
    <section id="our-mission" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Mission Statement */}
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold uppercase tracking-wide text-gray-900">
              Our Mission
            </h1>
            <h2 className="text-2xl font-medium text-gray-800">
              To protect future generations of sharks as they face threats in an ever changing climate.
            </h2>
          </div>

          <hr className="border-gray-200" />

          {/* Mission Details */}
          <div className="space-y-6 text-gray-700">
            <p>
              The Physioshark project, led by Dr. Jodie Rummer from James Cook University in Australia, 
              investigates how climate change impacts the physiology of newborn and juvenile reef sharks. 
              Sharks that are born today represent adult shark populations of the future. Understanding how 
              human and environmental impacts affect these sharks is crucial knowledge for developing 
              effective shark conservation strategies.
            </p>
            
            <p>
              The fieldwork is based at the CRIOBE Research Center on Moorea, French Polynesia. The project 
              investigates the physiological energetics (i.e., costs/benefits) of newborn blacktip reef and 
              sicklefin lemon sharks living in the 11 potential nursery areas identified around the island. 
              For instance, the research team is investigating how well newborn sharks cope with hot water 
              temperatures in these nurseries and how the cost of growing up in these nurseries will change 
              with increased human disturbances like coastal development and climate change.
            </p>
            
            <p>
              While French Polynesia is a protected shark sanctuary, there is a need to address the sharks' 
              physiological tolerance to the environmental conditions of their nurseries that will likely 
              become more severe as climate change progresses. Decreases in physiological performance may 
              translate to decreases in fitness.
            </p>

            <h3 className="text-xl italic text-gray-800">
              What can we learn from these sharks – sharks that are protected in the largest shark sanctuary 
              in the world – that can be applied not only locally, but also on a global scale?
            </h3>
          </div>

          <hr className="border-gray-200" />
        </div>
      </div>
    </section>
  )
} 