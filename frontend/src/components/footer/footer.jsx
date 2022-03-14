import React from "react";
import { Box, Flex,Button, Text, Heading } from "@chakra-ui/react";
import Link from "next/link";
import FeedbackForm from "../Feedback/main";
import ErrorForm from "../ReportanError/main";
import Container from "../../pageBuilder/Container";
import Section from "../../pageBuilder/Section";

function footer(props) {
  return (
    <>
   <Section my={0} py={8} bg="light.400">
     <Container>
            {/* <Box display={["none","none","block"]} width={"33%"}>
              <Heading px={2} mb={3} size="sm" textTransform="uppercase" letterSpacing={1.2}>About the company</Heading>
              <Text px={2}>BG Unified Solutions is a specialist IT services and solutions provider that helps clients plan, build, support and manage their IT infrastructures</Text>
              <Button mt={3} variant="unstyled" colorScheme="white" p={1}><SVG src="/assets/images/icons/library/social/linkedin.svg" color="light.500" size="24px"></SVG></Button>
            </Box> */}
            <Flex mx={[2,2,0]} flexDirection="row" wrap="wrap" justify="center" mt={2} px={4}>
                <Link href="/"><Button mx={4} variant="unstyled" colorScheme="white">Home</Button></Link>
                <Link href="/solutions"><Button mx={4} variant="unstyled" colorScheme="white">Solutions</Button></Link>
                <Link href="/features"><Button mx={4} variant="unstyled" colorScheme="white">Our Features</Button></Link>
                <Link href="/newsroom"><Button mx={4} variant="unstyled" colorScheme="white">Newsroom</Button></Link>
                <Link href="/about"><Button mx={4} variant="unstyled" colorScheme="white">About Us</Button></Link>
                <Link href="/policies"><Button mx={4} variant="unstyled" colorScheme="white">Privacy Policy</Button></Link>
                {/* <ErrorForm/><FeedbackForm/> */}
            </Flex>
            
            {/* <Flex mt={5} align="center">
                  <SVG src="/assets/images/icons/library/communication/call.svg" color="light.500" size="28px"></SVG>
                  <Heading px={2} mb={1} size="md">1300 00 BGUS</Heading>
              </Flex> */}
      </Container>
   </Section>
   <Box bg="light.400" py={3}>
     <Container>
       <Flex fontSize={["10px","12px","14px"]} wrap="wrap" justify="space-between">
       <Text textAlign={["center", "center", "left"]} fontSize="lg" my={[3,3,0]} width={["100%","100%","50%"]}>Website developed and maintained by 
        <a className="link" href="https://www.linkedin.com/company/codbrix/" target="_blank"> Codbrix Labs</a>
       </Text>
       <Text textAlign={["center", "center", "right"]} fontSize="md" my={[3,3,0]} width={["100%","100%","50%"]}>© Copyright 2022 BG Unified Solutions</Text>
       </Flex>
     </Container>
   </Box>
   </>
  );
}

export default footer;
