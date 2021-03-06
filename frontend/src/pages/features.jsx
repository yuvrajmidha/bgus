import React from "react";
import Head from "next/head";
import Fade from 'react-reveal/Fade';
import { Heading, Image, Text, Box } from "@chakra-ui/react";
import RenderSection from "../pageBuilder/RenderSection";
import Conclusion from "../components/footer/conclusion";
import Section from "../pageBuilder/Section";
import Title from "../pageBuilder/Title";
function features() {
  return (
    <div className="features overflow-hidden">
      <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name ="description" content = "Desktop virtualization, and server management, connectivity with highly secured infrastructure with multiple telco vendors. 10000 Cores CPU, 10TB RAM, Huawei 10G core switching. SourceFire, Cisco / Palo Alto / Checkpoint / Fortinet Firewall, DDOS Protection.">
                </meta>
                <meta property="og:title" content="Our Features - BG Unified Solutions" key="title" />
                <meta property="og:description" content="Desktop virtualization, and server management, connectivity with highly secured infrastructure with multiple telco vendors.10000 Cores CPU, 10TB RAM, Huawei 10G core switching. SourceFire, Cisco / Palo Alto / Checkpoint / Fortinet Firewall, DDOS Protection."></meta>
                <title>Our Features - BG Unified Solutions</title>
      </Head>
      <Box  zIndex="10" pos="relative" bg="dark.500">
          <Image position="absolute" height="100%" zIndex="0" top={0} left={0}  opacity=".5" objectFit="cover" width="100%" src="/assets/images/backgrounds/features.jpg"></Image>
          {/* <Fade distance="5%" duration={500} top> */}
          <Section transform="scale(1)" position="relative" textAlign="center" color="white" py={[24, 32]} my={0}>
          <Heading zIndex="100" size="xs" letterSpacing={1.8} textAlign="center" color="primary.500" mb={4} textTransform="uppercase">Our Features</Heading>
          <Title zIndex="100" fontSize={["44px","64px"]}>Why BG Unified Solutions</Title>
          </Section>
          {/* </Fade> */}
      </Box>
      <RenderSection
        body={[
          {
            width: ["100%", "33%"],
            type: "numberCount",
            data: {
              count: 3000,
              suffix: "+",
              title: "SIP Channels"
            }            
          },
          {
            width: ["100%", "33%"],
            type: "numberCount",
            data: {
              count: 14000,
              title: "Cores of CPU"
            }            
          },
          {
            width: ["100%", "33%"],
            type: "numberCount",
            data: {
              count: 5,
              suffix: "PB+",
              title: "Storage"
            }            
          },
        ]}
      />
      <RenderSection
        mt={0}
        pt={0}
        body={[
            {
              type: "image&text",
              data: {
                title: "Efficient Infrastructure",
                titleStyle: {
                  size: "2xl"
                },
                descriptionStyle: {
                  fontSize: "lg",
                  fontWeight: "600",
                  opacity: .7,
                  textAlign: "left"
                },
                image: "/assets/images/features/vectors/network_design.png",
                maxH: "400px",
                imageProps:{
                  objectFit: "contain"
                },
                description: <span>
                  Infrastructure includes more than 10000 Cores CPU, 10TB RAM. 
                  The storage infrastructure comprises more than 900TB of storage: 
                  desktop virtualization and server management. Geographically sound, 
                  redundant, quick, and efficient, increasing your backup by 60%. F5 load balancing 
                  solutions ensure scaling your critical applications, scaling up or down your 
                  storage capacity as and when required.

                </span>,
                  flexDirection: ["column", "column", "row-reverse"],
              }
          },
            {
              type: "image&text",
              data: {
                title: "Secure Enterprise Connectivity",
                titleStyle: {
                  size: "2xl"
                },
                descriptionStyle: {
                  fontSize: "lg",
                  fontWeight: "600",
                  opacity: .7,
                  textAlign: "left"
                },
                image: "/assets/images/features/vectors/data_protection.png",
                maxH: "400px",
                description: <span>
                  Connectivity to the highly secured infrastructure using multiple
                  telco vendors. Improved operational efficiencies, Reduced
                  communication-related delays and enhanced collaboration. High
                  levels of availability (HA) as well as flexibility and scalability
                  for core business tasks. Improved clustering scenarios with
                  remote locations.
                </span>,
                  flexDirection: ["column", "column", "row"],
              }
          },
          {
            type: "image&text",
            data: {
              title: "Data center Networking",
              titleStyle: {
                size: "2xl"
              },
              descriptionStyle: {
                fontSize: "lg",
                fontWeight: "600",
                opacity: .7,
                textAlign: "left"
              },
              image: "/assets/images/features/vectors/end_to_end.svg",
              maxH: "400px",
              description: <span>
                End-to-End DC network infrastructure encompassing server switching, 
                storage switching, and DC Interconnect Solutions. 10G/40G core 
                switching offering a high-speed spine and leaf network. We can help 
                you implement a flexible, agile architecture explicitly designed to 
                meet your unique needs. Next-general data centers and enable your journey to the cloud.

              </span>,
                flexDirection: ["column", "column", "row-reverse"],
            }
        },
          
        ]}
      ></RenderSection>

      {/* <Image alt=""        src="/assets/images/backgrounds/left_navy_triangle.svg"
        className="position-absolute left-navy-triangle d-none d-md-block"
        width="40%"
        alt=""
      /> */}
      <Section my={0}>
        <div className="row px-3 p-md-0">
          <div className="col-md-7 pl-0 position-relative d-md-none">
            <Image alt=""            my={2}
            paddingX={4}
              src="/assets/images/features/vectors/sip.svg"
            />
          </div>
          <div className="col-md-7 pl-0 position-relative d-none d-md-block">
            <Image alt=""              transform="translateX(-15%)"
              src="/assets/images/features/vectors/sip.svg"
            />
          </div>
          <div className="col-md-5 mt-lg-5 align-self-center">
            <Heading fontFamily="Nexa Bold" size="2xl" mb={4}>
              Up to 1600 SIP Channels
            </Heading>
            <Text fontSize="lg" fontWeight="600" opacity=".7">
            15 Cisco Unified Border Elements with 1600 SIP channels spanned across 
            multiple DC locations with DUAL Exchange Homing. Improved operational 
            efficiencies, Reduced communication-related delays, and enhanced collaboration. 
            Ensure a completely secure network by technologies such as NAC(Network Access Control) 
            using ISE, SourceFire, Cisco / Palo Alto / Checkpoint / Fortinet Firewall, DDOS Protection.

              </Text>
          </div>
        </div>
        </Section>

        <Section my={0}>
        <div className="row p-3 p-md-0">
          <div className="col-md-7 position-relative d-md-none">
            <Image alt=""            my={2}
            px={2}
            src="/assets/images/features/vectors/map.svg"
            />
          </div>
          <div className="col-md-5 mt-lg-5 align-self-center">
            <Heading fontFamily="Nexa Bold" size="2xl" mt={6} mb={4}>
              Multiple Data Center Locations
            </Heading>
            <Text fontSize="lg" fontWeight="600" opacity=".7">
            Seven to be precise, including Solarix, Auckland, Airtrunk SYD/ME, and GovDC.End-to-End 
            DC network infrastructure encompassing server switching. Server consolidation and 
            virtualization, high availability & clustering.

              </Text>
          </div>
          <div className="col-md-7 px-0 position-relative d-none d-md-block">
            <Image alt=""           px={0}
              w="100%"
              src="/assets/images/features/vectors/map.svg"
            />
          </div>
        </div>
        </Section>

      <Conclusion></Conclusion>
    </div>
  );
}

export default features;
