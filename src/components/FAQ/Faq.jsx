import React, { useState } from "react";

function Faq() {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      question: "Piezoelektrik nədir?",
      answer:
        "Piezoelektrik, mexaniki enerjini elektrik enerjisinə çevirən bir materialdır. Bu dəyişiklik materialın xaricində elektrik sahələrinin yaranmasına səbəb olur. Piezoelektrik sensorlar kiçik təzyiqləri dəqiq bir şəkildə aşkar edə və elektrik enerjisi yarada bilir. Bu praktik və vacib materiallar maraqlı və unikal bir fiziki xüsusiyyətə malikdir: mexaniki gərginliyə reaksiya olaraq gərginlik yaradır. İlk dəfə 1880-ci illərdə alimlər bu fenomeni bəzi kristal növlərində kəşf etmişdir.",
    },
    {
      question: "Harada tətbiq oluna bilər?",
      answer:
        "Piezoelektrik materiallar bu gün bir çox fərqli sənayedə istifadə olunan vacib bir texnologiyaya çevrilmişdir. Bizim işimiz məhsullarımızı əsasən insan sıxlığı yüksək olan yerlərdə (təhsil müəssisələri, idman zalları, xüsusi obyektlər, metro və s.) quraşdırmaqdan ibarətdir.",
    },
    {
      question: "Çevrilmiş enerjidən harada istifadə edə bilərik?",
      answer:
        "Metodu tətbiq etməklə əldə olunan enerjinin istifadəsi tamamilə tələblərdən asılıdır və müxtəlif məqsədlər üçün istifadə oluna bilər.",
    },
  ];

  return (
    <section id="faq">
      <div className="faq__container">
        <div className="faq__top" data-aos="fade-up">
          <p>Tez-tez verilən suallar</p>
        </div>
        <div className="faq__bottom" data-aos="fade-up">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq__row ${activeFaq === index ? "active-faq" : ""}`}
            >
              <div
                onClick={() => {
                  setActiveFaq(index);
                  if (index === activeFaq) {
                    setActiveFaq(null);
                  }
                }}
                className="faq__dropdown-main"
              >
                <p>{faq.question}</p>
                <i class="ri-add-line"></i>
              </div>
              <div className="faq__dropdown">{faq.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
