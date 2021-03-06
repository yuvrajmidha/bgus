import CardWithIcon from "./CardWithIcon"
import services from "../../database/services"
import React, { useEffect } from 'react';


function Service(props) {

    var service = Object.entries(services).filter(s => s[1].title === props.service)[0]

    return (
        <>
            {service && <CardWithIcon title={service[1].title} iconBg={service[1].color} link={"/solutions/" + service[0]} icon={service[1].icon}>{service[1].description}</CardWithIcon>}
        </>
    );
}

export default Service;