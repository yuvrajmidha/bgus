import { Box, Heading, Text, Image, Flex, VStack, Link, HStack, Button, UnorderedList, ListItem, Collapse } from "@chakra-ui/react";
import Head from "next/head";
import Fade from 'react-reveal/Fade';
import Section from "../pageBuilder/Section";
import Row from "../pageBuilder/Row";
import Title from "../pageBuilder/Title";
import career from "../database/career";
import Description from "../pageBuilder/Description";
import { PricingQuote } from "../components/cards/PricingCard";
import Conclusion from "../components/footer/conclusion";
import { FaBuilding } from "react-icons/fa";
import { useState } from "react";
function Training(props) {
    return <>
    <Fade bottom distance="10%" duration={300}>
        <Flex wrap="wrap" width="100%" height="100%" pos="relative" overflow="hidden" boxShadow="xl" bg="white" rounded={8}>
            <Box width={["100%","100%","100%","25%"]} px={[12]} py={[8,8,8,8,12]}>
                <Image objectFit="contain" width="100%" maxW="256px" height="128px" src={"assets/images/brands/Icons/" + props.image}></Image>
            </Box>
            <Box width={ ["100%","100%","100%","75%"]} px={12} py={[8,8,8,8,12]}>
                {/* <Title textAlign="left">
                    {props.title}
                </Title> */}
                <Text mb={3} textAlign="justify">
                    {props.content}
                </Text>
                <PricingQuote button serviceName="Trainings & Certifications" serviceDescription={props.title}>Get a Quote</PricingQuote>
            </Box>
            
        </Flex>
    </Fade>
    </>
}


function main() {

    const [open, SetOpen] = useState(0);

    const handleOpen = (i) => {
        if(i === open){
            SetOpen(0)
        }
        else SetOpen(i)
    }

    return <>
        <Head><title>Careers | BG Unified Solutions</title></Head>
        <Section color="white" py={["6rem","8rem","10rem"]} my={0} bg="dark.500" pos="relative">
    <img
        className="bg-image"
        src="/assets/images/backgrounds/tranings.jpg"
        style={{opacity:"0.3"}}
        />
                {/* <Fade duration={700} delay={1000} bottom> */}
                    <Flex transform="scale(1)" textAlign={["center","center","left"]} alignContent={["center","center","left"]} justifyContent={["center","center","left"]}  align="center" py={4}>
                        <Heading fontSize={["18px","24px"]}>Jobs & Career</Heading>
                    </Flex>
                {/* </Fade> */}
                {/* <Fade duration={700} delay={100} bottom> */}
                <Flex transform="scale(1)" textAlign={["center","center","left"]} justifyContent={["center","center","left"]}>
                    <Heading fontSize={["40px", "48px","56px","64px"]} className="display2 text-white">
                        Lets Work Together to <br/> Make Future
                    </Heading>
                </Flex>
                {/* </Fade> */}
        </Section>
        <Section mb={0}>
            <Row rowDistance={8}>
                {career.map((job, index) => <Box key={index} width="100%" my={3} px={3}>
                    <Box px="8" py={12} rounded={"xl"} shadow="lg">
                    <HStack align={"center"} justify="space-between" >
                       
                        <VStack color="gray.900" fontWeight={700} align={"start"} spacing={1}>
                            <HStack align={"center"}>
                                <Heading size="lg" fontFamily={"Nexa Bold"}>{job.title}</Heading> 
                            </HStack>
                            <HStack display={"flex"} variant={"link"} textAlign="left">
                                <FaBuilding size="16px"/>
                                <Text>{job.location}</Text>
                                <Text pl={6} color="gray.500">{job.openings} Opening{job.openings > 1 && 's'}</Text>
                            </HStack>
                        </VStack>
                        
                    </HStack>
                        <Box mt={6} fontFamily="Nunito Sans Semibold">
                            <Text>{job.description}</Text>
                            <Collapse in={open === index + 1}>
                                <UnorderedList spacing={4} mt={6}>
                                    {job.role.map((role, i) => <ListItem>{role}</ListItem>)}
                                </UnorderedList>
                            </Collapse>
                            <Button onClick={() => {handleOpen(index + 1)}} mt={4} color="primary.500" variant={"link"}>
                               {index + 1 === open ? "View Less" : "View More"}
                            </Button>
                        </Box>
                    </Box>
                </Box>)}
            </Row>
        </Section>
        <Section my={0} py={0}>
            <Description>To apply at any role listed above, please mail your resume at <Link color="primary.500">hr@bgunifiedsolutions.net</Link></Description>
        </Section>
        <Section mt={0} py={0}>
            <Conclusion align="center" description="Aspire to be a certified IT Professional??" explore={false} contact></Conclusion>
        </Section>
    </>
}
export default main;
