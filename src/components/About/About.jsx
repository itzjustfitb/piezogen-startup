import aboutImage from "../../assets/images/about-image.png";

function About() {
  return (
    <section id="about">
      <div className="about__container">
        <div className="about__bottom">
          <div className="about__container-image" data-aos="fade-right">
            <img src={aboutImage} alt="" />
          </div>
          <div className="about__container-content" data-aos="fade-left">
            <h1 className="about__container-header">Haqqımızda</h1>
            <p>
              Piezoelektrik materiallarla məşğul olanlar bu materialların
              nəzəriyyəsini bilsələr də, piezo materialları ümumilikdə o qədər
              də tanınmır. Ölkəmiz alternativ enerji sahəsində digər ölkələrdən
              çoxda irəlidə deyil. Buna görə də, bu texnologiyanın tətbiq
              sahələrini genişləndirməyi, alternativ yanaşmaların istifadəsinin
              inkişafını təmin etməyi və hədəflərimizə çatmaq üçün maksimum
              böyüməyi qarşımıza məqsəd qoymuşuq.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
