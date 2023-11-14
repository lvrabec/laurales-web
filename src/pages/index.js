import React from "react";
import Meta from "./../components/Meta";
import HeroSection from "./../components/HeroSection";
import FeaturesSection from "./../components/FeaturesSection";
import photo_1 from "../design/img1.jpg";
import ContactSection from "../components/ContactSection";

function IndexPage(props) {
  return (
    <>
      <Meta />
      <HeroSection
        bgColor="secondary"
        size="large"
        bgImage={photo_1}
        bgImageOpacity={0.45}
        title="OVLAŠTENI INŽENJER ŠUMARSTVA ZA "
        subtitle=" Lovstvo / Ekologiju /  Zaštitu prirode  / Urbano šumarstvo"
        buttonText="Zatražite ponudu"
        buttonColor="white"
        href="mailto: laurales.av@gmail.com"

      />
      <FeaturesSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Naše djelatnosti"
        subtitle="All the features you need to move faster (HEADLINER ZA DJELATNOSTI)"
      />
      <ContactSection
        bgColor="primary"
        size="medium"
        title="Tu smo za Vas"



      />

    </>
  );
}

export default IndexPage;
