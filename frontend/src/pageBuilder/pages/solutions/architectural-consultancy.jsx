export default [
    {
        
        body: [
        {
            width:["100%", "100%", "50%"],
            type: "imageGroup",
                my:[0,2],
                data: {
                    images: ["/assets/images/services/arch_consul.jpg"],
                    borderRadius: 8,
                    width: ['100%',"100%","90%"],
                    height: "300px",
                    objectFit: "cover"
                }
            },
            {
                mt:[0,3],
            width: ["100%", "100%", "50%"],
            type: "content",
            data: [{
                textAlign: "justify",
                title: "Achieve Higher Business Efficiency with BG Unified Solutions",
                titleSize: [30,32],
                text: <span>As the name suggests, Architectural Consultancy Services is 
                    accessing users' needs about their organization and providing them with the
                     best solutions tailored according to their requirements. Monitoring and 
                     measuring various aspects of the network environment so that overall 
                     performance can be maintained and optimized. Knowing what’s best for you 
                     is the primary criterion for optimizing your resources and using them to the fullest.

                </span>
            }]
        }]
    },

    {
        my: 0,
        title: "Architectural Consultancy Service - Quality Assured",
        py: "48px",
        bgImage: "url('/assets/images/backgrounds/network_abstract.jpg')",
        blend: "screen",
        bg: "light.400",
        color: "dark.500",
        rowDistance: 8,
        gap: 6,
        body : [{
            width: ["50%","33%","33%","50%","33%"],
            type: "feature",
            data: {align: "center",titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/tools/tools.svg", mt: 4, title: "Increase Agility"}
        },
        {
            width: ["50%","33%","33%","50%","33%"],
            type: "feature",
            data: {align: "center", titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/media/equalizer.svg", mt: 4, title: "High Resource Utilization"}
        },
        {
            width: ["50%","33%","33%","50%","33%"],
            type: "feature",
            data: {align: "center",titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/communication/chat-smile.svg",mt: 4, title: "Customer-Centric"}
        },
        {
            width: ["50%","33%","33%","50%","33%"],
            type: "feature",
            data: {align: "center",titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/code/settings-4.svg", mt: 4, title: "Advanced Technologies"}
        },
        {
            width: ["50%","33%","33%","50%","33%"],
            type: "feature",
            data: {align: "center",titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/communication/flag.svg", mt: 4, title: "Competitive"}
        },
        {
            width: ["50%","33%","33%","50%","33%"],
            type: "feature",
            data: {align: "center", titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/code/shift.svg", mt: 4, title: "Increased Business Efficiency"}
        }],
     
    },

    {
        title: <div className="d-block d-sm-none">Why BG Unified Solutions for your Business?</div>,
        pt: 0,
        pb: 10,
        body: [{
            width: "100%",
            type: "accordion",
            data: {
                fontSize: "lg",
                content: [{
                    title: "Performance Optimized",
                    description: "Monitors and measures various aspects of the network environment so that overall performance can be maintained and optimized.",
                    image: "/assets/images/illustrations/analytics.svg"
                },
                {
                    title: "Configuration Management",
                    description: "Configures network devices, performs inventory management and software management. Local end-market support services and Local language capabilities.",
                    image: "/assets/images/illustrations/SimplifiedLogManagment_CloudLogging.svg"
                },
                {
                    title: "Wide Expert Range",
                    description: "Weather System Architecture, Technology Roadmap, or optimization solutions for your business, we’ve got it all covered. Customized and tailor solutions to meet client needs",
                    image: "/assets/images/illustrations/infrastructure_city.svg"
                },]
            }
        }]
    }
]