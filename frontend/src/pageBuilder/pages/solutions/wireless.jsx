import WirelessPricing from "../../pricing/WirelessPricing";

export default [
    {
        pt: 0,
        mt: "-96px",
        body: [
            {
                type: "pricing",
                data: <WirelessPricing></WirelessPricing>
            },
            {
                type: "content",
                data:[{
                    text: "Cisco Wi-Fi and Aruba Wi-Fi. The hosted wireless solution includes multiple clusters and isolated Data centers of Cisco WLC 5508, 2504, and Aruba controllers.",
                    textAlign: "center",
                    opacity:0.7,
                    px:[0,4,8,16]
                }]
            }
        ]
    },
    {
        title : "Wireless for your Business",
        titleStyle: {
            fontSize: ["32px","40px"],
        },
        my: 0,
        py: 20,
        bg: "gray.100",
        color: "dark.500",
        rowDistance: [4,8,12],
        gap: 8,
        body: [
        {
            width: ["50%", "33%"],
            type: "feature",
            data: {align: "center",titleSize:"md", iconColor:"red.500", svg:"/assets/images/icons/library/devices/display-1.svg", mt: 4, title: "Real-Time Monitoring"}
        },
        {
            width: ["50%", "33%"],
            type: "feature",
            data: {align: "center", titleSize:"md", iconColor:"red.500", svg:"/assets/images/icons/library/devices/lte-2.svg", mt: 4, title: "Reduced Congestion Problems"}
        },
        {
            width: ["50%", "33%"],
            type: "feature",
            data: {align: "center",titleSize:"md", iconColor:"red.500", svg:"/assets/images/icons/library/devices/cpu-2.svg",mt: 4, title: "Optimizing Infrastructural Resources"}
        },
        {
            width: ["50%", "33%"],
            type: "feature",
            data: {align: "center",titleSize:"md", iconColor:"red.500", svg:"/assets/images/icons/library/general/thunder-move.svg", mt: 4, title: "Increased Productivity"}
        },
        {
            width: ["50%", "33%"],
            type: "feature",
            data: {align: "center",titleSize:"md", iconColor:"red.500", svg:"/assets/images/icons/library/communication/shield-thunder.svg", mt: 4, title: "Completely Redundant"}
        },
        {
            width: ["50%", "33%"],
            type: "feature",
            data: {align: "center", titleSize:"md",iconColor:"red.500", svg:"/assets/images/icons/library/devices/lte-1.svg", mt: 4, title: "Collaborative and Streamlined"}
        },
    ]
    },
    {
        title: "Why BG Unified Solutions?",
        description: "Wireless plays an integral part in collaborating and streamlining an organization's resources and increases productivity at a tremendous rate.",
        rowDistance: 8,
        mb:0,
        py:45,
        body: [{
            width: "100%",
            type: "accordion",
            data: {
                fontSize: "md",
                content: [{
                    title: "Clustering of Devices",
                    description: "Wireless Solution with Cisco 5508 WLC in Cluster and 4404 WLC in Cluster, to support Wireless Phones in any environment. We reduce traffic and congestion problems significantly.",
                    image: "/assets/images/illustrations/ClusteringOfDevices_Wireless.svg"
                },
                {
                    title: "Unified and Efficient",
                    description: "Improved operational efficiencies, Reduced communication-related delays, and enhanced collaboration. Completely redundant and efficient transmission.",
                    image: "/assets/images/illustrations/unified_and_efficient.svg"
                },
                {
                    title: "Network Security",
                    description: "Ensuring a completely secure network by technologies such as NAC(Network Access Control) using ISE, SourceFire, Cisco / Palo Alto / Checkpoint / Fortinet Firewall, DDOS Protection.",
                    image: "/assets/images/illustrations/security_lock_firewall.svg"
                },]
            }
        }]
    }
]