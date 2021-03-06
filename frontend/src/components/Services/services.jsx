import React from "react";
import Link from "../AnchorLink";
import { Text, Stack, Button } from "@chakra-ui/react"
import services from "../../database/services"
const servicesArray = Object.entries(services);

function Services(props) {
  return (
    <div>
      <div className="d-flex flex-column headerMenu-content ">

        <Text mb={"8px"} fontSize="lg" fontWeight="700">IT Infrastructural Services</Text>

        {servicesArray.filter(service => service[1].category === "IT Infrastructural Services").map((service, index) => (
          <Link key={index} href={"/solutions/" + service[0]}><a className="link py-1">{service[1].title}</a></Link>
        ))}


        <Text mb={"8px"} mt={"16px"} fontSize="lg" fontWeight="700">Network Services</Text>

        {servicesArray.filter(service => service[1].category === "Network Services").map((service, index) => (
          <Link key={index} href={"/solutions/" + service[0]}><a className="link py-1">{service[1].title}</a></Link>
        ))}


        <Text mb={"8px"} mt={"16px"} fontSize="lg" fontWeight="700">Cyber Security Services</Text>

        {servicesArray.filter(service => service[1].category === "Cyber Security Services").map((service, index) => (
          <Link key={index} href={"/solutions/" + service[0]}><a className="link py-1">{service[1].title}</a></Link>
        ))}


        <Text mb={"8px"} mt={"16px"} fontSize="lg" fontWeight="700">Collaborative Services</Text>

        {servicesArray.filter(service => service[1].category === "Collaborative Services").map((service, index) => (
          <Link key={index} href={"/solutions/" + service[0]}><a className="link py-1">{service[1].title}</a></Link>
        ))}


        <Text mb={"8px"} mt={"16px"} fontSize="lg" fontWeight="700">Professional Services</Text>

        {servicesArray.filter(service => service[1].category === "Professional Services").map((service, index) => (
          <Link key={index} href={"/solutions/" + service[0]}><a className="link py-1">{service[1].title}</a></Link>
        ))}


      </div >
    </div>
  );
}

export default Services;
