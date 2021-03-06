import FirewallPricing from "../../pricing/FirewallPricing";
export default [
    {
        gap: 10,
        py: [8, 16],
        body: [
            {
                width: ["100%", "100%", "50%"],
                type: "imageGroup",
                data: {
                    images: ["/assets/images/services/firewall.jpg"],
                    borderRadius: 8,
                    width: ['100%', "100%", "90%"],
                    height: "300px",
                    objectFit: "cover"
                }
            },
            {
                width: ["100%", "100%", "50%"],
                type: "content",
                data: [{
                    textAlign: "justify",
                    fontSize: "lg",
                    title: "Your Security Needs Meet Our Expertise",
                    titleSize: 32,
                    text: <span>At BG Unified Solutions, we tend to offer the best-in-class
                         Security for your business around the globe. With our team of experts,
                          the experience we’ve gained ensures you can provide customizable security
                           to your network, prevent any security breach, and secure data flowing 
                           through your system. We offer you solutions that especially suit your 
                           business model; whether small, medium, or large, we’ve got it covered.


                </span>
                }]
            }]
    },
    {
        title: "Firewall Technologies",
        mt: 0,
        containerWidth: "100%",
        body: [
            {
                width: ["100%"],
                mt: 8,
                type: "imageGroup",
                data: {
                    images: ["/assets/images/brands/cisco.png", "/assets/images/brands/fortinet.png", "/assets/images/brands/paloalto.png"],
                    px: 3,
                    height: "90px",
                    objectFit: "contain",
                    maxW: ["175px", "231px", "283px"]
                },
            },
        ]
    },
    {
        title: "Protect Your Network With BG Unified Solutions",

        description: "BG Unified solutions provide you firewalls for a single location system, or a multi-homed network, as per your needs and requirements. We have On-premise or cloud-based that helps secure your IT environment quickly.",

        my: 0,
        py: 20,
        bg: "gray.100",
        color: "dark.500",
        rowDistance: 12,
        gap: 8,
        body: [
            {
                width: ["50%", "33.33%", "25%"],
                type: "feature",
                data: { align: "center", titleSize: "md", iconColor: "red.500", svg: "/assets/images/icons/library/general/thunder-move.svg", mt: 4, title: "Smooth and Efficient Performance" }
            },
            {
                width: ["50%", "33.33%", "25%"],
                type: "feature",
                data: { align: "center", titleSize: "md", iconColor: "red.500", svg: "/assets/images/icons/library/communication/group.svg", mt: 4, title: "Experienced Team of Experts" }
            },
            {
                width: ["50%", "33.33%", "25%"],
                type: "feature",
                data: { align: "center", titleSize: "md", iconColor: "red.500", svg: "/assets/images/icons/library/files/upload.svg", mt: 4, title: "Proven Deployment Methodology" }
            },
            {
                width: ["50%", "33.33%", "25%"],
                type: "feature",
                data: { align: "center", titleSize: "md", iconColor: "red.500", svg: "/assets/images/icons/library/communication/shield-user.svg", mt: 4, title: "Extended Security Infrastructure" }
            },
            {
                width: ["50%", "33.33%", "25%"],
                type: "feature",
                data: { align: "center", titleSize: "md", iconColor: "red.500", svg: "/assets/images/icons/library/communication/chat-5.svg", mt: 4, title: "Consultation and Customer Support" }
            },
            {
                width: ["50%", "33.33%", "25%"],
                type: "feature",
                data: { align: "center", titleSize: "md", iconColor: "red.500", svg: "/assets/images/icons/library/shopping/dollar.svg", mt: 4, title: "Cost-Efficient Service" }
            },
            {
                width: ["50%", "33.33%", "25%"],
                type: "feature",
                data: { align: "center", titleSize: "md", iconColor: "red.500", svg: "/assets/images/icons/library/code/lock-circle.svg", mt: 4, title: "Secure Data Flow" }
            }
        ]
    },
    {
        title: "Our Pricing Plans",

        width: "100%",
         
        my: 0,
        pt: 16,
        gap: 0,
        body: [{
            width: "100%",
            type: "pricing",
            data: <FirewallPricing />
        }]
    },
    {
        title: <div className="d-block d-sm-none">We Offer</div>,
        pt: 0,
        pb: 10,
        body: [{
            width: "100%",
            type: "accordion",
            data: {
                fontSize: "lg",
                content: [{
                    title: "Platform Diversity",
                    description: "On-premise or cloud-based, that helps secure your IT environment quickly. The mainstay of Enterprise Security. Blocks malicious traffic and allows legitimate traffic to flow without any hindrance.",
                    image: "/assets/images/illustrations/diversity.svg"
                },
                {
                    title: "Fast and Easy Deployment",
                    description: "Rapid evolvement, easily deployable with tremendous speed. Proven deployment methodology that integrates and extends your existing security infrastructure without Capex.",
                    image: "/assets/images/illustrations/FastAndEasyDevelopment_Firewall.svg"
                },
                {
                    title: "Advanced Technology Stack",
                    description: "Advanced Malware Protection, Anti-Virus Detection, Uniform resource Locator Filtering, User-Based Policy and Advanced Logging facilities, SSL Virtual Private Network included.",
                    image: "/assets/images/illustrations/data_protection.svg"
                },]
            }
        }]
    }
]
