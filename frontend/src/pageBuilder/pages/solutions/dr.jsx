import CloudExchangePricing from "../../pricing/CloudExchangePricing";
import DRPricing from "../../pricing/DRPricing";
export default [
    {
        mt: "-96px",
        mb: 0,
        py: 0,
        gap: 0,
        body: [{
            width: "100%",
            type: "pricing",
            data: <DRPricing />
        }],
    },
    {
        gap: 10,
        py: 8,
        body: [
            {
                width: ["100%", "100%", "50%"],
                type: "imageGroup",
                data: {
                    images: ["/assets/images/services/dr.jpg"],
                    borderRadius: 8,
                    width: ['100%',"100%","90%"],
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
                    title: "Always stay aware and prepared.",
                    titleSize: 32,
                    text: <span>Disaster Recovery Management as a Service is preparing your organization 
                        for a failure or situation that you cannot predict. The circumstances 
                        may be a catastrophic failure, a natural calamity, data loss, server not 
                        functioning correctly, data centers compromised, and so on. We predict 
                        the most unlikely events that may cause data loss, data breach, 
                        and hinder an organization’s functioning, finding and installing solutions.


                    </span>
                }]
            }]
    },
    {
        title: "Assist in DR strategy, evaluate threat models and much more...",
        titleStyle: {
            mt: 8,
        },
        my: 0,
        py: 16,
        bg: "light.400",
        color: "dark.500",
        rowDistance: 8,
        gap: 8,
        body: [
            {
                width: ["50%", "33.33%", "25%"],
                type: "feature",
                data: {
                    align: "center", titleSize: "md", iconColor: "red.500", svg: "/assets/images/icons/library/weather/cloudy.svg", mt: 4, title: "Multisite or Multi-Cloud"
                }
            },
            {
                width: ["50%", "33.33%", "25%"],
                type: "feature",
                data: { align: "center", titleSize: "md", iconColor: "red.500", svg: "/assets/images/icons/library/tools/swiss-knife.svg", mt: 4, title: "Robust" }
            },
            {
                width: ["50%", "33.33%", "25%"],
                type: "feature",
                data: { align: "center", titleSize: "md", iconColor: "red.500", svg: "/assets/images/icons/library/devices/display-1.svg", mt: 4, title: "Regular Monitoring" }
            },
            {
                width: ["50%", "33.33%", "25%"],
                type: "feature",
                data: {
                    align: "center", titleSize: "md", iconColor: "red.500", svg: "/assets/images/icons/library/navigation/check.svg", mt: 4, title: "Quality Ensured"
                }
            },
            {
                width: ["50%", "33.33%", "25%"],
                type: "feature",
                data: { align: "center", titleSize: "md", iconColor: "red.500", svg: "/assets/images/icons/library/general/size.svg", mt: 4, title: "Scalable" }
            },
            {
                width: ["50%", "33.33%", "25%"],
                type: "feature",
                data: { align: "center", titleSize: "md", iconColor: "red.500", svg: "/assets/images/icons/library/home/key.svg", mt: 4, title: "Reliable" }
            },
            {
                width: ["50%", "33.33%", "25%"],
                type: "feature",
                data: { align: "center", titleSize: "md", iconColor: "red.500", svg: "/assets/images/icons/library/code/time-schedule.svg", mt: 4, title: "Low Redundant Time" }
            }
        ]
    },
    {
        title: "Why BG Unified Solutions?",
        py: 12,
        body: [
            {
                type: "image&text",
                data: {
                    image: "/assets/images/illustrations/deploy.svg",
                    title: "Simplified Deployment",
                    flexDirection: ["column", "column", "row"],
                    description: "An additional redundancy option is possible by implementing a CUBE at the client site so that in the event of any catastrophic failure in our data center, SRST will still provide basic inbound and outbound calling facilities."
                }
            },
            {
                type: "image&text",
                data: {
                    image: "/assets/images/illustrations/Completeness_CloudLogging.svg",
                    title: "Non - Disruptive Testing",
                    flexDirection: ["column", "column", "row-reverse"],
                    description: "We’ve got it covered under all circumstances, whether natural calamities, forecasted events, confound events. The time taken to restore normal conditions becomes significantly less, thanks to our team of experts, who take precautionary measures from the starting."
                }
            },
            {
                type: "image&text",
                data: {
                    image: "/assets/images/illustrations/ClientSpecific_AppDev.svg",
                    title: "Flexible Solutions",
                    flexDirection: ["column", "column", "row"],
                    description: "In-place upgrades reduce downtime and maximize operational efficiencies. And you can customize how you intercept, inspect, transform, and direct inbound or outbound application traffic with powerful, flexible Rules."
                }
            },
        ]
    }
]