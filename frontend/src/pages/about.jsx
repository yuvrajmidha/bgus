import React, { Component } from "react";
import Slider from "react-flickity-component";
import Team from "../components/cards/team";
import { FaArrowRight, FaRedo } from "react-icons/fa";
import { Box, Flex, Heading, Text, Image, Button, Icon, SimpleGrid } from "@chakra-ui/react";
import Head from "next/head";
import Fade from 'react-reveal/Fade';
import Section from "../pageBuilder/Section";
import Row from "../pageBuilder/Row";
import Title from "../pageBuilder/Title";
import MyCount from "../components/Countup/main";
import Link from "../components/AnchorLink";
import skills from "../database/skills";
import timeline from "../database/timeline";
import Container from "../pageBuilder/Container";

function about(){
    const [activeCard, setCard] = React.useState(0);
    const setNext = () => {
      if(activeCard === timeline.length){
        setCard(0)
      }
      else {
        setCard(activeCard + 1)
      }
    }
    const move = (index) => {
        if(activeCard === timeline.length){
          setCard(0)
        }
        else {
          setCard(activeCard + 1)
        }
    }
    const setPrev = () => {
      if(activeCard === 0){
        setCard(timeline.length)
      }
      else {
        setCard(activeCard - 1)
      }
    }
    return (
      <>
        <div className="about">
          <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

            <title>More About Us | BG Unified Solutions</title>
            <meta name="description" content=" BG Unified Solutions Pty. Ltd. Team consists of experts in different technologies like Security, Voice, and a broad range of additional skills, including F5 Load Balancers, WAN Optimization, WAN, Cloud Technologies, and Cisco Technologies. As experts in different technologies, our focus is to provide competitive and affordable Unified Solutions to our clients.">
          </meta>
          <meta property="og:title" content="More About Us | BG Unified Solutions" key="title" />
          <meta property="og:description" content=" BG Unified Solutions Pty. Ltd. Team consists of experts in different technologies like Security, Voice, and a broad range of additional skills, including F5 Load Balancers, WAN Optimization, WAN, Cloud Technologies, and Cisco Technologies. As experts in different technologies, our focus is to provide competitive and affordable Unified Solutions to our clients." />
          </Head>
          <Box pos="relative" bg="dark.500">
            <Image position="absolute" height="100%" zIndex="0" top={0} left={0} opacity=".3" objectFit="cover" width="100%" src="/assets/images/backgrounds/aboutus.jpg"></Image>
            {/* <Fade distance="5%" duration={500} top> */}
              <Section transform="scale(1)" textAlign="center" color="white" zIndex={"100"} py={[16, 40]} my={0}>
                <Heading size="xs" letterSpacing={1.8} textAlign="center" color="primary.500" mb={4} textTransform="uppercase">Know More</Heading>
                <Title fontSize={["44px", "64px"]}>About Us</Title>
              </Section>
            {/* </Fade> */}
          </Box>
          {/* <Box mt="-48px">
            <Slider
              className="timeline"
              flickityRef={(c) => (this.flkty = c)}
              options={{
                freeScroll: true,
                pageDots: false,
                prevNextButtons: false,
                contain: true,
                draggable: true,
              }}
            >
              <div className="slider-offset">
                <Flex justify="center" align="center" height="96px"><Box width="100%" height="4px" bg="gray.200"></Box></Flex>
              </div>
              {timeline.reverse().map((notes)=>{
              return <Box pos="relative">
                <Flex h="300px">
                  <Flex justify="center" align="center" width="160px" height="96px"><Box width="100%" height="4px" bg="gray.200"></Box></Flex>
                  <Flex justify="center" align="center" rounded="50%" borderWidth={5} borderWidthColor="gray.200" size="96px" color="white" bg="primary.500">
                    <Heading size="md" fontFamily="Nexa Bold">{notes.year}</Heading>
                  </Flex>
                  <Flex justify="center" align="center" width="160px" height="96px"><Box width="100%" height="4px" bg="gray.200"></Box></Flex>
                </Flex>
                <Box pos="absolute" top="96px" width="100%" px={6} mt={8}>
                  <Text fontSize="lg" textAlign="center">
                    {notes.text}
                  </Text>
                </Box>
              </Box>
              })}
              <div className="slider-offset">
                <Flex justify="center" align="center" height="96px"><Box width="100%" height="4px" bg="gray.200"></Box></Flex>
              </div>
            </Slider>
          </Box> */}
          <Box maxWidth={"100vw"} overflowX="hidden" minH="440px" my={12} pos="relative">
            <Container>
              <Flex width="100%" height="400px" onClick={() => move()} cursor="pointer" pos="relative">
                {timeline.map((year, index) => <Box key={index} cursor="pointer"  transition="1s" zIndex={index * -1} transform={`rotate(${year.rotate}deg) translateX(${activeCard > index ? 600 : 0}px)`} p={12} overflow="hidden" pos="absolute" height="400px" bg="white" width="360px" boxShadow="md" rounded={8}>
                  <Heading position="absolute" bottom="-48px" left="48px" size="lg" transform="scale(1.2)" fontSize="120px" opacity=".05" my={4} color={year.color} fontFamily="Nexa Bold">{year.year}</Heading>
                  <Heading size="xl" my={4} color={year.color} fontFamily="Nexa Bold">{year.year}</Heading>
                  <Box mt={8}>{year.text}</Box>
                </Box>)}
              </Flex>
              {/* <Button onClick={() => {setNext()}}>Next</Button>
              <Button onClick={() => {setPrev()}}>Prev</Button>{activeCard} */}
              <Flex transform={`translateX(600px)`} opacity={activeCard === 0 ? ".5" : 0} transition=".3s" position="absolute" top={0} height="400px" width="300px" justify="center" align="center" flexDirection="column">
                <Image src="/assets/images/vectors/arrow.svg" height="32px" my={4}></Image>
                Click on the card to explore...
              </Flex>              
              
                <Flex cursor="pointer" transform={`scale(${activeCard === timeline.length ? 1 : 0})`} transition=".3s" opacity=".5" onClick={() => setCard(0)} position="absolute" top={0} height="400px" width="300px" justify="center" align="center" flexDirection="column">
                <FaRedo size="64px"/>
                {/* Reset */}
              </Flex>
            </Container>
          </Box>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="row my-4">
                  <div className="col-sm-3 col-4">
                    <span className="display4 mb-0 text-primary">
                      <MyCount endPoint={50} suffix="+" />
                    </span>
                    <h5>Clients</h5>
                  </div>
                  <div className="col-sm-3 col-4">
                    <span className="display4 mb-0 text-primary">
                      <MyCount endPoint={5} suffix="+" />
                    </span>
                    <h5>Locations</h5>
                  </div>
                  <div className="col-sm-3 col-4">
                    <span className="display4 mb-0 text-primary">
                      <MyCount endPoint={40} suffix="+" />
                    </span>
                    <h5>Projects</h5>
                  </div>
                </div>
                <Text textAlign="justify" fontSize="xl" >
                BG Unified Solutions Pty. Ltd. Team consists of experts in 
                different technologies like Security, Voice, and a broad range of 
                additional skills, including F5 Load Balancers, WAN Optimization, WAN, 
                Cloud Technologies, and Cisco Technologies. As experts in different 
                technologies, our focus is to provide competitive and affordable 
                Unified Solutions to our clients.

                </Text>
               <SimpleGrid columns={{base:1, lg: 2}} columnGap={3} >
                  <Box bg="gray.50" rounded={"lg"} p={8} my={6}>
                    <Flex mt={4} align="center"><Image src="/assets/images/icons/color/target.svg" height="32px" mr={3}></Image>&nbsp;&nbsp;<Heading size="lg" fontFamily="Nexa Bold">Our Mission</Heading></Flex>
                    <Text  mt={2} fontSize="xl" >Render comprehensive, secure, dependable, 
                    affordable IT services and amenities that intensify the End-customer Experience.
                    </Text> 
                  </Box>
                  <Box bg="gray.50" rounded={"lg"} p={8} my={6}>
                  <Flex mt={4} align="center"><Image src="/assets/images/icons/color/strategic-vision.svg" mr={3} height="32px"></Image>&nbsp;&nbsp;<Heading size="lg" fontFamily="Nexa Bold">Our Vision</Heading></Flex>
                  <Text mt={2} fontSize="xl" >Uplifting Tech Essentials for your Enterprise.
                  </Text>
                  </Box>
               </SimpleGrid>
              </div>
            </div>
          </div>
          <div id="team" className="section">
            <div className="container">
              <div className="px-3 text-left d-flex flex-column">
                <span className="h6 text-primary">CORPORATE TEAM</span>
                <span className="display5">Meet, the Visionary People</span>
              </div>
              <div className="row py-2">
                <div className="col-lg-8 offset-lg-2 offset-xl-0 col-xl-6">
                  <Team
                    title="Founder & Owner"
                    name="Jingyi Li"
                    img="/assets/images/team/jenny.jpg"
                  >
                    CPA and Master of Accounting.
                    The financial specialist started up this company back in 2014. Responsible personality,
                    an expert when it comes to finance and accounts.
                  </Team>
                </div>
                <div className="col-lg-8 offset-lg-2 offset-xl-0 col-xl-6">
                  <Team
                    title="Co-Founder and Managing Director"
                    name="Saurabh Sareen"
                    img="/assets/images/team/saurabh.jpg"
                  >
                    Managing Director / Owner at BG Unified Solutions Limited, AU, and NZ. 
                    Hardworking, Cloud Services, and Hosting Solutions Specialist, entirely 
                    driven by customer satisfaction and deliverability.
                  </Team>
                </div>
                <div className="col-lg-8 offset-lg-2 offset-xl-0 col-xl-6">
                  <Team
                    title="Principal Solution Architect"
                    name="Rhydian Giles"
                    img="/assets/images/team/rhydian.jpg"
                  >
                    Highly accomplished technical visionary leader with record of leveraging in-depth 
                    technical acumen to provide creative business solutions. Expert at facilitating 
                    the stakeholders of business processes to increase enterprise-wide agility. 
                  </Team>
                </div>
                
              </div>
              <div className="px-3 mt-4 text-left d-flex flex-column">
                <span className="h6 text-primary">INDIA TEAM</span>
                <span className="display5">Meet, the Awesome People from India</span>
              </div>
               <div className="row py-2">
                <div className="col-lg-8 offset-lg-2 offset-xl-0 col-xl-6">
                  <Team
                    title="Director of Technology"
                    name="Hitesh Makkad"
                    img="/assets/images/team/hitesh.png"
                  >
                  
                    Telecommunications expert, who started his entrepreneurial journey in 2011, has helped various organizations with digital transformation.
                  </Team>
                </div>
                <div className="col-lg-8 offset-lg-2 offset-xl-0 col-xl-6">
                  <Team
                    title="Legal Counsel India Operations"
                    name="Priyanka Sekhri"
                    img="/assets/images/team/priyanka.png"
                  >
                  
                  With an inherent ability to lead and having learnt intricacies of law, an independent and iron-willed woman. She brims with optimism, is full of life and inspires others with her sheer presence.
                  </Team>
                </div>
                <div className="col-lg-8 offset-lg-2 offset-xl-0 col-xl-6">
                  <Team
                    title="Operation Supervisor India Operations"
                    name="Dolly Sekhri"
                    img="/assets/images/team/dolly.png"
                  >
                   
                   An amazing manager with a solid understanding of operations management she ensures that the organization is adhering to its quality standards.
                  </Team>
                </div>
                <div className="col-lg-8 offset-lg-2 offset-xl-0 col-xl-6">
                  <Team
                    title="Audit Associate"
                    name="Sonali Rana"
                    img="/assets/images/team/sonali.png"
                  >
                   
                   Creative, hard-working, and detail-oriented. Focused on deliverability and enhancing customer's experience.
                  </Team>
                </div>
                <div className="col-lg-8 offset-lg-2 offset-xl-0 col-xl-6">
                  <Team
                    title="Customer Service"
                    name="Anuj Bora"
                    img="/assets/images/team/anuj.png"
                  >
                   
                   I strive to do best work in every possible manner and i am open to learning to perform even better to prove an asset for the organisation
                  </Team>
                </div>
                <div className="col-lg-8 offset-lg-2 offset-xl-0 col-xl-6">
                  <Team
                    title="Senior Technical Support"
                    name="Viplav Kumar"
                    img="/assets/images/team/viplav.png"
                  >
                   
                   Personable and knowledgeable IT support technician with over 6+ years of experience assisting customers with various software and hardware related issues.
                  </Team>
                </div>
                <div className="col-lg-8 offset-lg-2 offset-xl-0 col-xl-6">
                  <Team
                    title="Audit Associate"
                    name="Parvinder Singh Gaba"
                    img="/assets/images/team/parvinder.jpg"
                  >
                   
                   A BULATS Certified, IELTS Expert, Trained on ILT & CBT, Trainer???s Trainer who trained most of the professionals in English Language. Performed as a Sr. Manager (Quality). Commenced his career in 2007.
                  </Team>
                </div>
                <div className="col-lg-8 offset-lg-2 offset-xl-0 col-xl-6">
                  <Team
                    title="Audit Associate"
                    name="Ashesh Tokas"
                    img="/assets/images/team/ashesh.png"
                  >
                   
                   Doing Validation of Home and Content Claims
                  </Team>
                </div>
                <div className="col-lg-8 offset-lg-2 offset-xl-0 col-xl-6">
                  <Team
                    title="Customer Service Associate"
                    name="Chirag Sareen"
                    img="/assets/images/team/chirag.jpg"
                  >
                   Working in this industry from more than 10 years now, Passionate about my work, that's always my priority.Few of my USP's are, quick learner, hard & a Smart worker, team player & a leader.
                  </Team>
                </div>
                <div className="col-lg-8 offset-lg-2 offset-xl-0 col-xl-6">
                  <Team
                    title="Customer Care/Sales Executive"
                    name="Ashu Vashisht"
                    img="/assets/images/team/ashu.jpg"
                  >
                   
                   Passionate and experienced IT support Customer Care/Sales Executive with over 7+ years of experience in handling customers by providing a one-stop-shop for their IT needs.
                  </Team>
                </div>
            
       
                
              </div>
              <div className="row">
                {/* <div className="col-lg-8 offset-lg-4 offset-xl-6 col-xl-6 d-flex flex-column align-items-end py-3">
                  <Link href="/webteam"><a className="text-primary  Nexa-Bold d-flex my-2" href="">Meet the Development Team<Box as={FaArrowRight} h="16px" ml="12px" my="4px"></Box></a></Link>
                </div> */}
                {/* <Section>
                  <Box textAlign="center" className="display5" fontSize={[32, 36, 40, 48]} fontWeight="bold">Our Expertise</Box>
                  <Box textAlign="center" pt={2} fontSize={["lg", "xl"]}>The BG Unified Solutions Team is specializes in</Box>
                  <Row justify="space-between">
                    {skills.map((a) => <Box borderRadius="10px" textAlign="justify" align="center" boxShadow={"xl"} my={3} mx={2} p={4} width={["100%","100%", "46%", "31%"]}>
                      <Box>{a.title}</Box>
                      <Flex align="center">{a.subtitles && a.subtitles.map(b => <Box m={2} fontSize={"xs"}>{b}</Box>)}</Flex>
                    </Box>)}
                  </Row>
                </Section> */}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

export default about;
