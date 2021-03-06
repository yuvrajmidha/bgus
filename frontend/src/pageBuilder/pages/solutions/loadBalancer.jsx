import LoadBalancerPricing from "../../pricing/LoadBalancerPricing";

export default [
    {
        gap: 10,
        py: [8,16],
        body: [
        {
            width:["100%", "100%", "50%"],
            py:[2,6,6,6,2],
            type: "imageGroup",
                my:[0,2],
                data: {
                    images: ["/assets/images/services/lb-2.jpg"],
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
                fontSize: ["md","md","md","lg"],
                title: "Load Balancing Solutions for your Application Servers",
                titleSize: [28,28,28,32],
                text: <span>Load balancing is the most scalable methodology for 
                    handling many requests from modern multi-application, multi-device 
                    workflows. When traffic runs at normal levels, global (geographic) 
                    load balancers direct traffic to dedicated optimized application 
                    servers, rapidly redirect traffic from a data center suffering from 
                    an outage to an available server.
                </span>
            }]
        }]
    },
    {
        py: [0, 4],
        gap: 0, mt: 0,
        mb:0,
        px:0,
        bg: "light.400",
        body: [{
            width: "100%",
            type: "pricing",
            data: <LoadBalancerPricing/>
        },
        ]
    },
    {
        title : "Manage your Traffic with Our Load Balancers",
        
        description: "BG Unified Solutions provide F5 topology for your Load Balancing needs to manage traffic asserted on your servers and applications.",

        my: 0,
        py: 20,
        bg: "gray.100",
        color: "dark.500",
        rowDistance: 12,
        gap: 8,
        body: [
        {
            width: ["50%", "33%", "25%"],
            type: "feature",
            data: {align: "center",titleSize:"md", iconColor:"red.500", svg:"/assets/images/icons/library/shopping/chart-line-1.svg", mt: 4, title: "High Availability"}
        },
        {
            width: ["50%", "33%", "25%"],
            type: "feature",
            data: {align: "center", titleSize:"md", iconColor:"red.500", svg:"/assets/images/icons/library/design/line.svg", mt: 4, title: "Flexibility Assured"}
        },
        {
            width: ["50%", "33%", "25%"],
            type: "feature",
            data: {align: "center",titleSize:"md", iconColor:"red.500", svg:"/assets/images/icons/library/code/git-4.svg",mt: 4, title: "Multiple Features"}
        },
        {
            width: ["50%", "33%", "25%"],
            type: "feature",
            data: {align: "center",titleSize:"md", iconColor:"red.500", svg:"/assets/images/icons/library/devices/headphones.svg", mt: 4, title: "Personalized Support"}
        },
        {
            width: ["50%", "33%", "25%"],
            type: "feature",
            data: {align: "center",titleSize:"md", iconColor:"red.500", svg:"/assets/images/icons/library/home/clock.svg", mt: 4, title: "Designed for Uptime"}
        },
        {
            width: ["50%", "33%", "25%"],
            type: "feature",
            data: {align: "center", titleSize:"md",iconColor:"red.500", svg:"/assets/images/icons/library/general/size.svg", mt: 4, title: "Scalability Guaranteed"}
        },
        {
            width: ["50%", "33%", "25%"],
            type: "feature",
            data: {align: "center",titleSize:"md",iconColor:"red.500", svg:"/assets/images/icons/library/home/chair-1.svg", mt: 4, title: "Easy Deployment"}
        }
    ]
},
{
    body: [{
        type: "content",
        data: [{
            text: <span>High traffic sites need resources to serve large amounts of unique 
                visitors quickly and efficiently. To scale to meet those needs, 
                several web servers, commonly known as a farm, need to be implemented 
                and route traffic across them in a balanced way.
            </span>,
            fontSize: ["lg","lg","xl"],
            textAlign: "center",
        }]
    }],
    pt: 0,
    pb: 0,
    mb: 0
},
]