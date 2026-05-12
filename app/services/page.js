import React from "react";
import ServiceHero from "../../components/ServiceHero";
import Physiotherapy from "../../components/Physiotherapy";
import ServiceList from "../../components/ServiceList";

const ServicePage = () => {
  return (
    <>
      <ServiceHero />
      <Physiotherapy />
      <ServiceList />
    </>
  );
};

export default ServicePage;
