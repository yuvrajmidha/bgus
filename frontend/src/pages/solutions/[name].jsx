import React, {useState} from "react";
import services from "../../database/services"
import Head from "next/head";
import Link from "next/link";
import Conclusion from "../../components/footer/conclusion"
import RenderSection from "../../pageBuilder/RenderSection";
import { Box, Button, ButtonGroup, Image, Heading, Flex } from "@chakra-ui/react"
import Fade from "react-reveal/Fade"
import SVG from "../../components/svg/SVG";
import Section from "../../pageBuilder/Section";
import { useRouter } from 'next/router';

// onClick={() => {
//     window.scrollTo(0, document.getElementById("pricing").offsetTop - 80)
// }}

function Solutions(props) {

    const router = useRouter()
    const { name } = router.query

    const service = services[name];
    const [pricing, setPricing] = React.useState(false)

    React.useEffect(() => {
        if(document){
            setPricing(document.getElementById('pricing'))
        }
    })

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name ="description" content = {service?.description}>
                </meta>
                <meta property="og:title" content={`${service?.slogan} - ${service?.title} | BG Unified Solutions`} key="title" />
                <meta property="og:description" content={service?.description}></meta>
                <title>{service?.slogan} - {service?.title} | BG Unified Solutions</title>
            </Head>

                     
                <Section color="white" py={["6rem","8rem","10rem"]} my={0} bg="dark.500" pos="relative">
                <img
                    className="bg-image"
                    src={service?.bgImage}
                    alt={service?.title}
                    style={{opacity:"0.3"}}
                    />
                            <Fade duration={700} delay={1000} bottom>
                                <Flex textAlign={["left","left","left"]} alignContent={["left","left","left"]} justifyContent={["left","left","left"]}  align="center" py={4}>
                                    <SVG src={service?.icon} color="light.400" size="24px"></SVG>
                                    <Heading mx={6} fontSize={["18px","24px"]}>{service?.title}</Heading>
                                </Flex>
                            </Fade>
                            <Fade duration={700} delay={100} bottom>
                            <Flex textAlign={["left","left","left"]} justifyContent={["left","left","left"]}>
                                <Heading fontSize={["40px", "48px","56px","64px"]} className="text-white">{service?.slogan}</Heading>
                            </Flex>
                            </Fade>
                            <Fade duration={700} delay={150} bottom>
                                {service?.image_below_title && <Box mt={4}>
                                    <Image src={service?.image_below_title} h={16}></Image>
                                </Box>}
                            </Fade>
                            {/* <Fade duration={700} delay={300} bottom>
                                <p className="h6 mt-2 text-white" style={{ opacity: ".7" }}>
                                    Storage consolidation and virtualization, backup and recovery, archiving, and disaster recovery and storage management.
                                </p>
                            </Fade> */}
                            <Fade duration={700} delay={1000} top>
                                <Flex justifyContent={["left","left","left"]}>
                                <ButtonGroup mt={10} spacing={["10px","16px"]}>
                                    {pricing && <Button as={"a"} href={window.location.href + "#pricing"}  variant="solid" className="primary-btn" fontSize={["14px","18px"]} px={["18px","24px"]} colorScheme="primary" size="lg" >Explore Now</Button>}
                                    <Link href="/contact"><Button variant="outline" fontSize={["14px","18px"]} px={["18px","24px"]} color="white" _hover={{ color: "black", bg: "white" }} size="lg">Contact Sales</Button></Link>
                                </ButtonGroup>
                                </Flex>
                            </Fade>
                  </Section>
            {service?.sections && service?.sections.map((section, index) => (
                <RenderSection key={index} {...section}></RenderSection>
            ))}
            <Box bg="light.400" mt="128px" px="16px" py={6}>
            {service?.conclusion && <Conclusion mt="-128px" align="center" title="Get Started Now" description={service?.conclusion} explore={false} contact></Conclusion>}
            </Box>
            {service?.relatedService && <RenderSection
                title="Related Services"
                bg="light.400"
                my={0}
                pt={6}
                pb={12}
                titleStyle={{ mb: 6 }}
                body={[
                    {
                        width: ["100%", "100%", "50%", "33%"],
                        type: "service",
                        data: service?.relatedService[0],
                    },
                    {
                        width: ["100%", "100%", "50%", "33%"],
                        type: "service",
                        data: service?.relatedService[1],
                    },
                    {
                        width: ["100%", "100%", "50%", "33%"],
                        type: "service",
                        data: service?.relatedService[2],
                    },
                ]}
            />}
        </>
    );
}

export async function getStaticPaths() {
    const ServiceNames = Object.keys(services)
    return {
        paths: ServiceNames.map((x)=>({params:{name:x}})),
        fallback: false // See the "fallback" section below
    };
}
export async function getStaticProps() {
    return {
      props: {
      },
    }
  }
// export async function getServerSideProps({query}) {
//     const { name } = query;

//     return {
//         props: {
//             name
//         },
//     }
// }

export default Solutions;
