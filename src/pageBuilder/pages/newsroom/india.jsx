import {Image} from "@chakra-ui/react"

export default [
    {
        type: "content",
        fontSize: "xl",
        data: [
            {
                text: <span>We are very proud to announce that a brand new office in the Delhi NCR, India will be fully operational in the next few months.
                </span>,
                textAlign: "justify"
            },
            {
                text: <span>This office will be fully equipped with high end Cisco Voice Solution(s) including a full suite of Cisco Collaboration offering Contact Center As A Service, UCAAS and lot more.
                </span>,
                textAlign: "justify",
            },
            // {
            //     image:<Image justifySelf="center" src="/assets/images/services/sdwan.jpg"/>,
            //     imageJustify: "center",
                
            // },
            {
                text:<span>The same office will have a team who will provide SOCAAS - Security Operations Center as a service to all of the BGUS existing and prospective clients.
                </span>,
            },
            
            {
                text:"If your company is looking for offshore agents, please contact me. We can provide you highly skilled agents to support your business operations. Any data sovereignty requirements will be met as all of these agents will use high performance VDI's located within Australian DC's.",                
                textAlign: "justify"
            },
            
                   ]
    }
]