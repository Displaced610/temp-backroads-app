import React from "react";
import Title from "./Title";
import { services } from "../Data";

const Services = () => {
  return (
    <section class="section services" id="services">
      <Title title="our" subTitle="services" />

      <div class="section-center services-center">
        {services.map((service) => {
          const { id, icon, title, text } = service;
          return (
            <article key={id} class="service">
              <span className="service-icon">
                <i className={icon}></i>
              </span>
              <div class="service-info">
                <h4 class="service-title">{title}</h4>
                <p class="service-text">{text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
