import {Image} from "@chakra-ui/react"

export default [
    {
        type: "content",
        fontSize: "xl",
        data: [
            {
                text: <span> A start of a new journey where BG Unified Solutions and Forcepoint collaboratively offer CDR Zero Trust Content to the end customers in a bundled offering for Managed Firewall As A Service. It was very exciting to hear the benefits of the Forcepoint CDR Zero Trust Content and its advantages to the end customers.
                </span>,
                textAlign: "justify"
            },
            {
                text: <span>Rather than identifying known malware, Zero Trust CDR takes the data and extracts useful information from it. The extracted information is transformed into an intermediary format and verified. This advanced threat protection process makes sure no threats or attacks can reach the next stage. The original data is stored or discarded along with malware, known or unknown. Brand new data is then built in a normalized way, containing the verified information. The new data replicates the original data, without the threat of embedded malware and is now guaranteed safe.
                </span>,
                textAlign: "justify",
                mb:"32px",
            },
            {
                image:<Image justifySelf="center" rounded={"xl"} height={"400px"} width="100%" objectFit={"cover"} src="https://media-exp1.licdn.com/dms/image/C5622AQHhpF1R9lqHdA/feedshare-shrink_800/0/1644544777727?e=1649289600&v=beta&t=ut32JXmonGlN0vumhJjwVBU8PTVf7mlD6mBLxaf72Tc"/>,
                imageJustify: "center",
                
            },
            {
                text:<span>A mind-blowing concept of Zero Trust CDR bundled with multi-layered firewall protection in addition to the F5 Web Application Firewall protection, what else a customer can expect from the service provider.
                        <br></br>
                        A big thanks to the team at Forcepoint especially Yusuf M. for spending some time with the BG Unified Solutions team this morning and highlighting the advantages of Zero Trust CDR.
                    </span>,
                mt:"32px"
            },
            
            {
                text:<span>A big step towards the upcoming IRAP Assessment for multiple service offerings this year. A highly secured multi-tenanted solution(s) maintaining all requirements of data sovereignty and protection, with extensive vendor support to go the extra mile to provide each customer with a robust solution.
                </span> ,
                textAlign: "justify"
            },
            
                   ]
    }
]