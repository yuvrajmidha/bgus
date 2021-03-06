import BackupPricing from "../../pricing/BackupPricing";
export default [
    {
        gap: 10,
        py: [8, 16],
        body: [
            {
                width: ["100%", "100%","50%"],
                py: [2, 6, 6, 6, 2],
                type: "imageGroup",
                data: {
                    images: ["/assets/images/services/backup-2.jpg"],
                    borderRadius: 8,
                    width: '90%',
                    height: "300px",
                    objectFit: "cover"
                }
            },
            {
                width: ["100%", "100%","50%"],
                type: "content",
                data: [{
                    textAlign: "justify",
                    fontSize: ["md", "md", "md", "lg"],
                    title: "Protecting your Data is the New Normal!!",
                    titleSize: [28, 28, 28, 32],
                    text: <span>BG Unified Solutions provides reliable, secure & 
                    cost-effective managed services for backup and recovery of 
                    all data types. We handle protection and management for 
                    all of your structured and unstructured data while 
                    enabling your teams’ self-service restoration capability. We’ll create 
                    a realistic roadmap and provide continual service so you 
                    can capture the promise of tomorrow’s data center, cloud, and backup—today.
</span>
                }]
            }]
    },
    {
        title: "Our Pricing Plans",
        backgroundColor: "light.400",
        width: "100%",
         
        my: 0,
        py: 16,
        gap: 0,
        body: [{
            width: "100%",
            type: "pricing",
            data: <BackupPricing />
        }]
    },
    {
        title: "Why BG Unified Solutions?",
        body: [
            {
                type: "image&text",
                data: {
                    image: "/assets/images/illustrations/productivity.svg",
                    title: "Flexible and Scalable Service",
                    flexDirection: ["column", "column", "row"],
                    description: "Our BaaS offering provides a simplified IT management and a highly scalable platform concerning any department of your organization. Irrespective of the end-user, everyone gets access to the latest and the most excellent backup technology stack—customized and tailor-made solutions to meet client needs with Local end-market support services and Local language capabilities."
                }
            },
            {
                type: "image&text",
                data: {
                    image: "/assets/images/illustrations/Sound_and_Efficient_Planning.svg",
                    title: "Cost-Effective Solution",
                    flexDirection: ["column", "column", "row-reverse"],
                    description: "To your business, we are offering and providing a flat billing structure. It’s designed for pay as you go model that shifts your costs from Capex to Opex. You will have very simplified and predictable expenses and have the option of rolling any upfront or one-off fees into your monthly payment."
                }
            },
            {
                type: "image&text",
                data: {
                    image: "/assets/images/illustrations/Completeness_CloudLogging.svg",
                    title: "Back it Up",
                    flexDirection: ["column", "column", "row"],
                    description: "Geographically sound, quick, and efficient, increasing your backup by 60%. Highly advanced, available, and multiple data center locations offer multiple IP types globally, in a clustered or isolated environment."
                }
            },
        ]
    }
]