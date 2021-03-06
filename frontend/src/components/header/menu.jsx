import React, { useEffect } from "react";
import { IoIosMenu } from "react-icons/io";
import Services from "../Services/services";
import Link from "../AnchorLink";
import {
  Button,
  Box,
  Icon,
  Collapse,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";
import { FaArrowLeft, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useRouter } from "next/router";

function menu(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [services, showService] = React.useState(false);
  const handleToggle = () => showService(!services);

  const [company, showCompany] = React.useState(false);
  const handleToggle2 = () => showCompany(!company);

  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      onClose()
    }

    router.events.on('routeChangeStart', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])

  return (
    <div className="d-block d-lg-none">
      <Box
        as={IoIosMenu}
        boxSize="32px"
        onClick={onOpen}
        className="hover-effect mr-3"
      ></Box>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody style={{ overflowY: "auto" }}>
            <Button
              className="btn-block btn my-2"
              bg="white"
              py="24px"
              mx={"-16px"}
              width={"100%"}
              onClick={handleToggle}
            >
              <div className="d-flex justify-content-between align-items-center w-100">
                <span className="display6">Solutions</span>
                {services ? <FaChevronUp size="16px" /> : <FaChevronDown size="16px" />}
              </div>
            </Button>
            <Collapse px="16px" mb={4} in={services}>
              <Services></Services>
            </Collapse>
            <Button
              className="btn-block btn my-2"
              bg="white"
              width={"100%"}
              mx={"-16px"}
              py="24px"
              onClick={handleToggle2}
            >
              <div className="d-flex justify-content-between align-items-center w-100">
                <span className="display6">Company</span>
                {company ? <FaChevronUp size="16px" /> : <FaChevronDown size="16px" />}
              </div>
            </Button>
            <Collapse
              px="16px"
              mb={4}
              className="headerMenu-content"
              in={company}
            >
              <div className="d-flex flex-column header-list">
                <Link href="/about">
                  <a className="link py-1">About Us</a>
                </Link>
                <Link href="/newsroom">
                  <a className="link py-1">Newsroom</a>
                </Link>
                <Link href="/solutions">
                  <a className="link py-1">Our Solutions</a>
                </Link>
                <Link href="/partners">
                  <a className="link py-1">Our Partners</a>
                </Link>
                <Link href="/about#team">
                  <a className="link py-1">Team</a>
                </Link>
                <Link href="/career">
                  <a className="link py-1">Career</a>
                </Link>
                <Link href="/trainings">
                  <a className="link py-1">Trainings</a>
                </Link>
                <Link href="/newsroom?tab=Case%20Study">
                  <a className="link py-1">Case Studies</a>
                </Link>
              </div>
            </Collapse>
            <Link href="/features">
              <Button className="btn-block btn my-2" mx={"-16px"} bg="white" py="24px">
                <div className="d-flex justify-content-between align-items-center w-100">
                  <span className="display6">Our Features</span>
                </div>
              </Button>
            </Link><br/>
            <Link href="/stories">
              <Button className="btn-block btn my-2" mx={"-16px"} bg="white" py="24px">
                <div className="d-flex justify-content-between align-items-center w-100">
                  <span className="display6">Customer Stories</span>
                </div>
              </Button>
            </Link><br/>
            <Link href="/contact">
              <Button as="a" className="btn-block btn my-2" mx={"-16px"} bg="white" py="24px">
                <div className="d-flex justify-content-between align-items-center w-100">
                  <span className="display6">Contact</span>
                </div>
              </Button>
            </Link>
          </DrawerBody>
          <DrawerFooter justifyContent="start">
            <Button leftIcon={<FaArrowLeft/>} bg="white" onClick={onClose} color="primary.500">Go Back</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default menu;
