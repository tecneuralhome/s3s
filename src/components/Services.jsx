const services = [
    { title: "SECURITY SERVICES", description: "Deployment of personnel..." },
    { title: "INTEGRATED FACILITY MANAGEMENT", description: "Housekeeping, maintenance..." },
    { title: "TRAINING & SKILL DEVELOPMENT", description: "A company is as good..." },
    { title: "CHARACTER VERIFICATION", description: "Our success has been..." },
    { title: "ELECTRONIC SECURITY SYSTEMS", description: "Planning & clock-work like..." },
  ];
  
  export default function Services() {
    return (
      <section className="bg-orange-600 text-white py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {services.map((service, index) => (
            <div key={index}>
              <div className="text-3xl mb-2">🔒</div>
              <h3 className="font-bold">{service.title}</h3>
              <p className="text-xs mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  