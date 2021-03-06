import ContactCenterPricing from "../../pricing/ContactCenterPricing";
export default [
    {
        pb:0,
        body: [
        {
            width:["100%", "100%", "50%"],
            py:[2,6,6,6,2],
            type: "imageGroup",
                my:[0,2],
                data: {
                    images: ["/assets/images/services/contact-center.jpg"],
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
                fontSize: "lg",
                title: "Why Contact center for your Business?",
                titleSize: 32,
                text: <span>Collaboration or Customer Service involves
                 so much more than voice. With a full range of video 
                 and web conferencing solutions, Unified Communications,
                  and workspace applications, the adoption of Customer 
                  Service Technology is widespread across organizations
                   and affects multiple lines of business. Positive 
                   customer experience through a suite of advanced 
                   Contact center Tools.</span>
            }]
        }]
    },

    {           
        width: "100%",
         
        my: 0,
        py:[0,8,12],
        gap: 0,
        body: [{
            width: "100%",
            type: "pricing",
            data: <ContactCenterPricing/>
        }]
    },

    {
        my: 0,
        py: ["24px","30px","48px"],
        bgImage: "url('/assets/images/backgrounds/network_abstract.jpg')",
        blend: "screen",
        bg: "light.400",
        color: "dark.500",
        containerWidth: ["100%", "100%", "88%", "72%"],
        rowDistance: 8,
        gap: 6,
        body: [
            {
                my:[0,4],
                width: ["100%","100%","100%","50%", 5/12],
                type: "content",
                data: [{
                    title: "Customers above anything - OUR MOTTO",
                    textAlign: "left",
                    fontSize: "lg",
                    titleSize: 36,
                    
                    text: "BG Unified Solution???s CCaaS helps you provide a positive customer experience through a suite of advanced contact center tools. We have deep contracts with all significant Telcos, including AAPT, Telstra, and Optus. We help organizations reduce their risks by offering solutions for creating, sharing, and store the information, to protect, detect, and respond to external and internal incidents and threats."
                    
                }]
            },
            {
                width : ["100%","100%","100%","50%", 7/12],
                type: "container",
                containerData : [{
                    width: ["50%","33%","33%","50%","33%"],
                    type: "feature",
                    data: {align: "center",titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/shopping/dollar.svg", mt: 4, title: "Affordable"}
                },
                {
                    width: ["50%","33%","33%","50%","33%"],
                    type: "feature",
                    data: {align: "center", titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/code/time-schedule.svg", mt: 4, title: "Speed Efficient"}
                },
                {
                    width: ["50%","33%","33%","50%","33%"],
                    type: "feature",
                    data: {align: "center",titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/general/thunder-move.svg",mt: 4, title: "Consistent"}
                },
                {
                    width: ["50%","33%","33%","50%","33%"],
                    type: "feature",
                    data: {align: "center",titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/media/equalizer.svg", mt: 4, title: "Enhanced Productivity"}
                },
                {
                    width: ["50%","33%","33%","50%","33%"],
                    type: "feature",
                    data: {align: "center",titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/communication/flag.svg", mt: 4, title: "Competitive"}
                },
                {
                    width: ["50%","33%","33%","50%","33%"],
                    type: "feature",
                    data: {align: "center", titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/code/settings-4.svg", mt: 4, title: "Optimized Agent Functions"}
                }],
            },
        ]   
    },

    {
        title:"Why BG Unified Solutions?",
        body: [
            {
                type: "image&text",
                data: {
                    title: "Profitable Customer Experience",
                    description: "We help organizations to develop and improve communication channels and deliver lasting customer relationships at a lower cost. Our objective is to maximize the value of information within an organization while minimizing the cost.",
                    image: "/assets/images/illustrations/analytics.svg",
                    flexDirection: ["column", "column", "row"],
                }
            },
            {
                type: "image&text",
                data: {
                    title: "Employee Productivity",
                    description: "We help organizations improve employee and partner collaboration to deliver greater employee productivity, improved information sharing, and knowledge management.",
                    image: "/assets/images/illustrations/productivity.svg",
                    flexDirection: ["column", "column", "row-reverse"],
                }
            },
            {
                type: "image&text",
                data: {
                    title: "Securing Data",
                    description: "We help organizations reduce their risks by offering solutions for creating, sharing, and store the information, to protect, detect, and respond to external and internal incidents and threats.",
                    image: "/assets/images/illustrations/security_lock_firewall.svg",
                    flexDirection: ["column", "column", "row"],
                }
            },
        ]
    }
]