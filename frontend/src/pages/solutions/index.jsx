import React, { Component } from "react";
import Slider from "react-flickity-component";
import solutions from "../../database/services";
import Fade from 'react-reveal/Fade';
import Head from "next/head";
import Link from "../../components/AnchorLink";
import Section from "../../pageBuilder/Section";
import Title from "../../pageBuilder/Title";
import { Heading, Text, Box, Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,useDisclosure, InputGroup, InputLeftElement, Button, Image, Flex,  Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Service from "../../components/cards/Service";
import Row from "../../pageBuilder/Row";
import SVG from "../../components/svg/SVG";
import { FaArrowRight, FaChevronDown } from "react-icons/fa";

const tabs = [
  {
    index: 0,
    title: "IT & Infrastructure",
  },
  {
    index: 1,
    title: "Network",
  },
  {
    index: 2,
    title: "Cyber Security",
  },
  {
    index: 3,
    title: "Collaborative",

  },
  {
    index: 4,
    title: "Professional",

  },
];

function OurSolutions(){
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const [tabIndex, setTabIndex] = React.useState(0);
  const handleTabsChange = (index) => {
    setTabIndex(index);
  };
  
    return (
      <>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

            <title>Our Solutions | BG Unified Solutions</title>
            <meta name ="description" content = "Infrastructure, Contact Center, UCaaS, Service Desk, App Development, Web Development. Secured infrastructure with telco vendors. Backup and Recovery. Silver-Peak and Cisco. Data Center Locations. Wireless, CEX, CLoud Logging. Load Balancing, DNS and Web Hosting. SD-WAN optimization, managed firewall, proxy, WAF">
          </meta>
          <meta property="og:title" content="Our Solutions | BG Unified Solutions" key="title" />
          <meta property="og:description" content="Infrastructure, Contact Center, UCaaS, Service Desk, App Development, Web Development. Secured infrastructure with telco vendors. Backup and Recovery. Silver-Peak and Cisco. Data Center Locations. Wireless, CEX, CLoud Logging. Load Balancing, DNS and Web Hosting. SD-WAN optimization, managed firewall, proxy, WAF"/>
          </Head>
        <Box  zIndex="10" pos="relative" bg="dark.500">
          <Image position="absolute" height="100%" zIndex="0" top={0} left={0}  opacity=".5" objectFit="cover" width="100%" src="/assets/images/backgrounds/solutions.jpg"></Image>
            {/* <Fade distance="5%" duration={500} top> */}
            <Section transform="scale(1)" position="relative" textAlign="center" color="white" py={[24, 32]} my={0}>
            <Heading zIndex="100" size="xs" letterSpacing={1.8} textAlign="center" color="primary.500" mb={4} textTransform="uppercase">What we deliver</Heading>
            <Title zIndex="100" fontSize={["44px","64px"]}>Our Solutions</Title>
            <Text zIndex="100" fontSize="xl" mt={2}>We provide you with the solution, needed for your Enterprise</Text>
            </Section>
            {/* </Fade> */}
          </Box>
        <Section mt={0} pt={0}>
        <div className="d-flex mt-3 justify-content-center">
      <Button
        onClick={onOpen}
        className="tab-dropdown"
        size="lg"
        py="32px"
        mb="12px"
        px="48px"
        rightIcon={<FaChevronDown />}
      >
        <Box as={tabs[tabIndex].icon} size="32px" mr="12px"></Box>
        {tabs[tabIndex].title}
      </Button>
      <Drawer
        placement="bottom"
        size="lg"
        onClose={onClose}
        isOpen={isOpen}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            Choose an Operating System
          </DrawerHeader>
          <DrawerBody>
            {tabs.map((tab) => {
              return (
                <>
                  <Button
                    key={tab.index}
                    onClick={() => {
                      setTabIndex(tab.index);
                      onClose();
                    }}
                    colorScheme="white"
                    py="32px"
                    className="box-none text-dark justify-content-start hover-effect w-100 display6"
                  >
                    <Box as={tab.icon} boxSize="32px" mr="12px"></Box>{" "}
                    {tab.title}
                  </Button>
                </>
              );
            })}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
          <Tabs index={tabIndex} align="center" onChange={handleTabsChange} colorScheme="red.500">
            <TabList fontFamily="Nexa Bold">
              <Tab className="tab"><Box minH={"82px"} className="d-flex align-items-center">IT & Infrastructure</Box></Tab>
              <Tab className="tab"><Box minH={"82px"} className="d-flex align-items-center">Network</Box></Tab>
              <Tab className="tab"><Box minH={"82px"} className="d-flex align-items-center">Cyber Security</Box></Tab>
              <Tab className="tab"><Box minH={"82px"} className="d-flex align-items-center">Collaborative</Box></Tab>
              <Tab className="tab"><Box minH={"82px"} className="d-flex align-items-center">Professional</Box></Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
              <Row>
                {Object.entries(solutions).filter(service => service[1].category === "IT Infrastructural Services").map((service, index) => (
                    <Box key={index} width={["100%","100%","50%"]} p={5}>
                      <Flex my={5} bg="white" boxShadow="lg" height="100%" direction={["column","row"]} rounded={8} overflow="hidden">
                        <Flex minH="100px" minW="160px" justify="center" align="center" bg={service[1].color}>
                            <SVG src={service[1].icon} size="48px"></SVG>
                        </Flex>
                        <Box p={8}>
                            <Heading size="lg" textAlign={"left"} fontFamily="Nexa Bold">{service[1].title}</Heading>
                            <Text textAlign={"left"} mt={2} >{service[1].description}</Text>
                            <Link href={"/solutions/" + service[0]}><Button as="a" justifyContent={"left"} w="100%" mt={3} px={0} bg="white" className="link" _hover={{color:"primary.500", bg:"white"}} rightIcon={<FaArrowRight />}>Learn More</Button></Link>
                        </Box>
                    </Flex>
                    </Box>
                ))}
                </Row>
              </TabPanel>
              <TabPanel>
              <Row>
                {Object.entries(solutions).filter(service => service[1].category === "Network Services").map((service, index) => (
                    <Box key={index} width={["100%","100%","50%"]} p={5}>
                      <Flex my={5} bg="white" boxShadow="lg" height="100%" direction={["column","row"]} rounded={8} overflow="hidden">
                        <Flex minH="100px" minW="160px" justify="center" align="center" bg={service[1].color}>
                            <SVG src={service[1].icon} size="48px"></SVG>
                        </Flex>
                        <Box p={8}>
                            <Heading size="lg" fontFamily="Nexa Bold">{service[1].title}</Heading>
                            <Text mt={2} >{service[1].description}</Text>
                            <Link href={"/solutions/" + service[0]}><Button as="a" mt={3} px={0} bg="white" className="link" _hover={{color:"primary.500", bg:"white"}} rightIcon={<FaArrowRight />}>Learn More</Button></Link>
                        </Box>
                    </Flex>
                    </Box>
                ))}
                </Row>
              </TabPanel>
              <TabPanel>
              <Row>
              {Object.entries(solutions).filter(service => service[1].category === "Cyber Security Services").map((service, index) => (
                    <Box key={index} width={["100%","100%","50%"]} p={5}>
                      <Flex my={5} bg="white" boxShadow="lg" height="100%" direction={["column","row"]} rounded={8} overflow="hidden">
                        <Flex minH="100px" minW="160px" justify="center" align="center" bg={service[1].color}>
                            <SVG src={service[1].icon} size="48px"></SVG>
                        </Flex>
                        <Box p={8}>
                            <Heading size="lg" fontFamily="Nexa Bold">{service[1].title}</Heading>
                            <Text mt={2} >{service[1].description}</Text>
                            <Link href={"/solutions/" + service[0]}><Button as="a" mt={3} px={0} bg="white" className="link" _hover={{color:"primary.500", bg:"white"}} rightIcon={<FaArrowRight />}>Learn More</Button></Link>
                        </Box>
                    </Flex>
                    </Box>
                ))}
                </Row>
              </TabPanel>
              <TabPanel>
              <Row>
              {Object.entries(solutions).filter(service => service[1].category === "Collaborative Services").map((service, index) => (
                    <Box key={index} width={["100%","100%","50%"]} p={5}>
                      <Flex my={5} bg="white" boxShadow="lg" height="100%" direction={["column","row"]} rounded={8} overflow="hidden">
                        <Flex minH="100px" minW="160px" justify="center" align="center" bg={service[1].color}>
                            <SVG src={service[1].icon} size="48px"></SVG>
                        </Flex>
                        <Box p={8}>
                            <Heading size="lg" fontFamily="Nexa Bold">{service[1].title}</Heading>
                            <Text mt={2} >{service[1].description}</Text>
                            <Link href={"/solutions/" + service[0]}><Button as="a" mt={3} px={0} bg="white" className="link" _hover={{color:"primary.500", bg:"white"}} rightIcon={<FaArrowRight />}>Learn More</Button></Link>
                        </Box>
                    </Flex>
                    </Box>
                ))}
                </Row>
              </TabPanel>
              <TabPanel>
              <Row>
              {Object.entries(solutions).filter(service => service[1].category === "Professional Services").map((service, index) => (
                    <Box key={index} width={["100%","100%","50%"]} p={5}>
                      <Flex my={5} bg="white" boxShadow="lg" height="100%" direction={["column","row"]} rounded={8} overflow="hidden">
                        <Flex minH="100px" minW="160px" justify="center" align="center" bg={service[1].color}>
                            <SVG src={service[1].icon} size="48px"></SVG>
                        </Flex>
                        <Box p={8}>
                            <Heading size="lg" fontFamily="Nexa Bold">{service[1].title}</Heading>
                            <Text mt={2} >{service[1].description}</Text>
                            <Link href={"/solutions/" + service[0]}><Button as="a" mt={3} px={0} bg="white" className="link" _hover={{color:"primary.500", bg:"white"}} rightIcon={<FaArrowRight />}>Learn More</Button></Link>
                        </Box>
                    </Flex>
                    </Box>
                ))}
                </Row>
              </TabPanel>
            </TabPanels>
          </Tabs>
          
        </Section>
      </>
    );
}

export default OurSolutions;
