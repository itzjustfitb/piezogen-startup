function Services() {
  const services = [
    {
      img: "ri-truck-line",
      title: "Çatdırılma",
      description:
        "Sürətli və etibarlı çatdırılma və quraşdırma şirkət tərəfindən həyata keçirilir.",
      price: "Free",
    },
    {
      img: "ri-vip-fill",
      title: "Premium Paket",
      description:
        "Panellərin alınması və quraşdırılması şirkət tərəfindən qarşılanır. 1 il ərzində yaranan problemlər pulsuz aradan qaldırılır.",
      price: "2000 $",
    },
    {
      img: "ri-home-3-fill",
      title: "Standart Paket",
      description:
        "Panellər alıcı tərəfindən şəxsən alınır. 1 il ərzində quraşdırma və nasazlıqların aradan qaldırılması müəssisə tərəfindən həyata keçirilir.",
      price: "1000 $",
    },
  ];

  return (
    <section id="services">
      <div className="services__container">
        <div className="services__top" data-aos="fade-up">
          Servislər
        </div>
        <div className="services__bottom">
          {services.map((service, index) => {
            return (
              <div key={index} className="services__card" data-aos="fade-up">
                <i className={service.img}></i>
                <h1>{service.title}</h1>
                <p>{service.description}</p>
                <p id="service__price">{service.price}</p>
                <button>
                  <i className="ri-arrow-right-line"></i>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
