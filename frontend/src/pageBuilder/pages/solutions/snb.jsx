
export default [
    {
        gap: 10,
        py: [8, 16],
        body: [
            {
                width: ["100%", "100%", "50%"],
                py: [2, 6, 6, 6, 2],
                type: "imageGroup",
                data: {
                    images: ["/assets/images/services/snb-2.jpg"],
                    borderRadius: 8,
                    width: '90%',
                    height: "300px",
                    objectFit: "cover"
                }
            },
            {
                width: ["100%", "100%", "50%"],
                type: "content",
                data: [{
                    textAlign: "justify",
                    fontSize: ["md", "md", "md", "lg"],
                    title: "Smart Business Solutions",
                    titleSize: [28, 28, 28, 32],
                    text: <span>If you plan to promote your business using the 
                        1300 numbers, you should consider the range of smart numbers 
                        with high impact numeric patterns. And apart from being able 
                        to use the number to promote your business in various ways, it 
                        becomes your business asset that can be on-sold or traded. 
                        Promoting your business by just being displayed, Smart Numbers 
                        have also proven to be more memorable. And that means more 
                        calls leading to more business.


                     </span>
                }]
            }]
    },
    
  
    {
        my: 0,
        bgImage: "url('/assets/images/backgrounds/network_abstract.jpg')",
        blend: "screen",
        bg: "light.400",
        color: "dark.500",
        containerWidth: ["100%", "100%", "88%", "72%"],
        rowDistance: 8,
        gap: 6,
        body: [
            {
                my:[0,0,6,4],
                width: ["100%","100%","100%","50%", 5/12],
                type: "content",
                data: [{
                    title: "BGUS SNB-As-A-Service",
                    textAlign: "left",
                    fontSize: ["lg","xl"],
                    titleSize: [25,25,32],
                    my:[2,4,8],
                    text: "BGUS offers you a complete package for your business. Get your Smart Numbers hosted by our telco vendors; we???ll provide you with the full billing logs and statistics. We ensure to be a completely trustworthy partner for your inbound calls. Give your business a boost with BGUS Smart Number Billing."
                    
                }]
            },
            {
                width : ["100%","100%","100%","50%", 7/12],
                type: "container",
                containerData : [{
                    width: ["50%","33%","33%","50%","33%"],
                    type: "feature",
                    data: {align: "center",titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/code/lock-circle.svg", mt: 4, title: "Secure Hosting"}
                },
                {
                    width: ["50%","33%","33%","50%","33%"],
                    type: "feature",
                    data: {align: "center", titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/tools/compass.svg", mt: 4, title: "Flexible"}
                },
                {
                    width: ["50%","33%","33%","50%","33%"],
                    type: "feature",
                    data: {align: "center",titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/devices/iphone-x.svg",mt: 4, title: "Portable"}
                },
                {
                    width: ["50%","33%","33%","50%","33%"],
                    type: "feature",
                    data: {align: "center",titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/map/marker-1.svg", mt: 4, title: "Relocatable"}
                },
                {
                    width: ["50%","33%","33%","50%","33%"],
                    type: "feature",
                    data: {align: "center",titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/general/size.svg", mt: 4, title: "Scalable"}
                },
                {
                    width: ["50%","33%","33%","50%","33%"],
                    type: "feature",
                    data: {align: "center", titleSize:"md", iconColor:"primary.500", svg:"/assets/images/icons/library/media/equalizer.svg", mt: 4, title: "Maximum Utilization"}
                }],
            },
        ]   
    },
    {
        rowDistance: 8,
        gap: 6,
        body: [
            {
                width: ["100%","100%","100%", 2/3],
                type: "content",
                data: [{
                    title: "SNB: Seamless Inbound Service",
                    fontSize: ["lg","xl"],
                    titleSize: [32,36,40,48],
                    my:[2,4,8],
                    text:   <>
                            <span>Being unique to your business, Smart Numbers make 
                                it much easier for customers to remember your number 
                                and more accessible for them to reach you. Research shows
                                 they are a very successful marketing tool for creating 
                                 more sales leads phone calls to your business.

</span><br/><br/>
                            <span> Smart Numbers aren???t limited to your local area, 
                                so your business can reach all of Australia. Whether 
                                you???re ready to expand now???or down the track, a Smart 
                                Number gives your business more options. BGUS provide 
                                diversified solutions for smart number integration for your business.


                                </span>
                            </>    
                },
                {   
                    list: [
                        "Buy New Smart Numbers",
                        "Host Existing Smart Numbers",
                        "Get a Smart Number Billing Service",
                        "Reports and complete billing logs."
                    ],
                    spacing: 2,
                    styleType: "none",
                    icon: "check",
                    iconColor: "green.500"
                }    
            ]
            },
        ]   
    },
    
]