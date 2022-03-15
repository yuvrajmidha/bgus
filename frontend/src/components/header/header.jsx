import React, { useEffect } from 'react';
import WhatsNew from './whatsnew'
import Search from './search'
import Menu from './menu'
import {
    Image,
    Box,
    Button,
    Collapse,
    Icon,
    Flex,
    Text,
    Popover,
    PopoverTrigger,
    PopoverContent,
    Stack, Link, Heading, Grid, Divider, useDisclosure, Tabs, TabList, TabPanels, Tab, TabPanel, useColorMode
} from '@chakra-ui/react'
import services from "../../database/services"
import { FaInfoCircle, FaNewspaper, FaCommentAlt, FaBriefcase, FaSearch } from "react-icons/fa"
import { IoIosCall } from "react-icons/io"
import newsroom from "../../database/newsroom"
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Hyperlink from '../../components/AnchorLink';
import Router from 'next/router';
import Container from '../../pageBuilder/Container';
import CookieNotice from './CookieNotice';
import Row from '../../pageBuilder/Row';
import SVG from '../svg/SVG';
import LoginButton from '../auth/loginbutton';
import Auth from '../auth/main';
import Axios from 'axios';

function header(props) {
    const initRef = React.useRef();
    const [show, setShow] = React.useState(0);
    const [country, setCountry] = React.useState('');
    const [search, setSearch] = React.useState(false)
    Router.events.on('routeChangeComplete', () => setShow(false));
    const overlayClick = () => {
        setShow(0);
    }
    const servicesArray = Object.entries(services)
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isOpen2, setIsOpen2] = React.useState(false);
    const onOpen2 = () => setIsOpen2(true);
    const onClose2 = () => setIsOpen2(false);

    const { colorMode, toggleColorMode } = useColorMode()

    useEffect(() => {
      console.log(colorMode)
      console.log(colorMode)
    }, [])


    useEffect(() => {


        if(!localStorage.getItem('location')){
            Axios.get('https://api.ipregistry.co/?key=tryout').then((res) => {
                setCountry(res.data.location.country.name)
                localStorage.setItem('location', res.data.location.country.name)
            })
        }
        else{
            setCountry(localStorage.getItem('location'))
        }

    }, [])

    return (
        <>

            <Box className="headerBox" top="0px" bg="white" boxShadow="lg" zIndex={1000}>
                <div className="container">
                    <div className="p-3 transition-3 d-flex justify-content-between align-items-center layer-4">
                        <div className="d-flex align-items-center">
                            <Menu></Menu>
                            <Hyperlink href="/"><a>
                                <Image alt="" src="/assets/logo.png" height="40px" className="d-none d-sm-block mr-3"></Image>
                            </a></Hyperlink>

                            <Box className="header-menu">
                                <Link className="header-link" display={["none", "none", "none", "flex"]} mx={3} fontWeight="500" fontSize="md" color="primary" _hover={{ color: "#ff0000", textDecoration: "none" }}>Solutions</Link>
                                <Box className="header-dropdown">
                                    <Container>
                                        <Fade duration={300} distance={"5%"} top>
                                            <Box rounded={4} boxShadow="xl" bg="white">
                                                <Tabs align="center">
                                                    <TabList>
                                                        <Tab p={6} _selected={{ color: "blue.500", borderBottomColor: "blue.500" }}>IT & Infrastructure Services</Tab>
                                                        <Tab p={6} _selected={{ color: "green.400", borderBottomColor: "green.400" }}>Network Services</Tab>
                                                        <Tab p={6} _selected={{ color: "purple.500", borderBottomColor: "purple.500" }}>Cyber Security Services</Tab>
                                                        <Tab p={6} _selected={{ color: "orange.400", borderBottomColor: "orange.400" }}>Collaborative Services</Tab>
                                                        <Tab p={6} _selected={{ color: "primary.500", borderBottomColor: "primary.500" }}>Professional Services</Tab>
                                                        {/* <Tab p={6} _selected={{ color: "primary.500", borderBottomColor: "yellow.500" }}>Equipment Finance</Tab> */}
                                                    </TabList>

                                                    <TabPanels>
                                                        <TabPanel key={1}>
                                                            <Flex wrap="wrap" p={6}>
                                                                {servicesArray.filter(service => service[1].category === "IT Infrastructural Services").map((service, index) => (
                                                                        <Link href={"/solutions/" + service[0]} onClick={onClose2} my={1} width="33%" fontSize="md" px={3} fontWeight="600">
                                                                            <Flex align="center" p={3} className="hover-effect">
                                                                                <SVG hex={service[1].color} size="24px" src={service[1].icon} />
                                                                                <Box textAlign={"left"} as="span" ml={3}>{service[1].title}</Box>
                                                                            </Flex>
                                                                        </Link>
                                                                ))}
                                                            </Flex>
                                                        </TabPanel>
                                                        <TabPanel key={2}>
                                                            <Flex wrap="wrap" p={6}>
                                                                {servicesArray.filter(service => service[1].category === "Network Services").map((service, index) => (
                                                                    <Hyperlink key={index} href="/solutions/[name]" as={"/solutions/" + service[0]}>
                                                                        <Link onClick={onClose2} my={1} width="33%" fontSize="md" px={3} fontWeight="600">
                                                                            <Flex align="center" p={3} className="hover-effect">
                                                                                <SVG hex={service[1].color} size="24px" src={service[1].icon} />
                                                                                <Box textAlign={"left"} as="span" ml={3}>{service[1].title}</Box>
                                                                            </Flex>
                                                                        </Link>
                                                                    </Hyperlink>
                                                                ))}
                                                            </Flex>
                                                        </TabPanel>
                                                        <TabPanel key={3}>
                                                            <Flex wrap="wrap" p={6}>
                                                                {servicesArray.filter(service => service[1].category === "Cyber Security Services").map((service, index) => (
                                                                    <Hyperlink key={index} href="/solutions/[name]" as={"/solutions/" + service[0]}>
                                                                        <Link onClick={onClose2} my={1} width="33%" fontSize="md" px={3} fontWeight="600">
                                                                            <Flex align="center" p={3} className="hover-effect">
                                                                                <SVG hex={service[1].color} size="24px" src={service[1].icon} />
                                                                                <Box textAlign={"left"} as="span" ml={3}>{service[1].title}</Box>
                                                                            </Flex>
                                                                        </Link>
                                                                    </Hyperlink>
                                                                ))}
                                                            </Flex>
                                                        </TabPanel>
                                                        <TabPanel key={4}>
                                                            <Flex wrap="wrap" p={6}>
                                                                {servicesArray.filter(service => service[1].category === "Collaborative Services").map((service, index) => (
                                                                    <Hyperlink key={index} href="/solutions/[name]" as={"/solutions/" + service[0]}>
                                                                        <Link onClick={onClose2} my={1} width="33%" fontSize="md" px={3} fontWeight="600">
                                                                            <Flex align="center" p={3} className="hover-effect">
                                                                                <SVG hex={service[1].color} size="24px" src={service[1].icon} />
                                                                                <Box textAlign={"left"} as="span" ml={3}>{service[1].title}</Box>
                                                                            </Flex>
                                                                        </Link>
                                                                    </Hyperlink>
                                                                ))}
                                                            </Flex>
                                                        </TabPanel>
                                                        <TabPanel key={5}>
                                                            <Flex wrap="wrap" p={6}>
                                                                {servicesArray.filter(service => service[1].category === "Professional Services").map((service, index) => (
                                                                    <Hyperlink key={index} href="/solutions/[name]" as={"/solutions/" + service[0]}>
                                                                        <Link onClick={onClose2} my={1} width="33%" fontSize="md" px={3} fontWeight="600">
                                                                            <Flex align="center" p={3} className="hover-effect">
                                                                                <SVG hex={service[1].color} size="24px" src={service[1].icon} />
                                                                                <Box textAlign={"left"} as="span" ml={3}>{service[1].title}</Box>
                                                                            </Flex>
                                                                        </Link>
                                                                    </Hyperlink>
                                                                ))}
                                                            </Flex>
                                                        </TabPanel>
                                                        {/* <TabPanel>
                                                            <Flex wrap="wrap" p={6}>
                                                                {servicesArray.filter(service => service[1].category === "Equipment Finance").map(service => (
                                                                    <Hyperlink href="/solutions/[name]" as={"/solutions/" + service[0]}>
                                                                        <Link onClick={onClose2} my={1} width="33%" fontSize="md" px={3} fontWeight="600">
                                                                            <Flex align="center" p={3} className="hover-effect">
                                                                                <SVG hex={service[1].color} size="24px" src={service[1].icon} />
                                                                                <Box as="span" ml={3}>{service[1].slogan}</Box>
                                                                            </Flex>
                                                                        </Link>
                                                                    </Hyperlink>
                                                                ))}
                                                            </Flex>
                                                        </TabPanel> */}
                                                    </TabPanels>
                                                </Tabs>
                                            </Box>
                                        </Fade>
                                    </Container>
                                </Box>
                            </Box>
                            <Box className="header-menu">
                                <Link className="header-link" display={["none", "none", "none", "flex"]} mx={3} fontWeight="500" fontSize="md" color="primary" _hover={{ color: "#ff0000", textDecoration: "none" }}>Company</Link>
                                <Box className="header-dropdown">

                                <Container>
                                    <Fade duration={300} distance="5%" top>
                                        <Box rounded={4} boxShadow="xl" bg="white" overflow="hidden">

                                            <Row>
                                                <Box p={12} w="50%">
                                                    <Grid templateColumns="auto auto" templateRows="72px" wrap="wrap">
                                                        <Box height="48px" my={4}>
                                                            <Hyperlink href="/about">
                                                                <a className="link"><Flex align="center">
                                                                    <SVG color="primary.500" src="/assets/images/icons/library/home/building.svg"></SVG>
                                                                    <Box onClick={onClose} ml="3">
                                                                        <Heading size="sm" fontFamily="Nexa Bold">About us</Heading>
                                                                        <Text fontSize="sm" fontWeight="500" opacity=".7">Our Vision & Core values</Text>
                                                                    </Box>
                                                                </Flex></a>
                                                            </Hyperlink>
                                                        </Box>
                                                        <Box height="48px" my={4}>
                                                            <Hyperlink href="/newsroom">
                                                                <a className="link"><Flex align="center">
                                                                    <SVG color="primary.500" src="/assets/images/icons/library/layout/layout-top-panel-5.svg"></SVG>
                                                                    <Box onClick={onClose} ml="3">
                                                                        <Heading size="sm" fontFamily="Nexa Bold">Newsroom</Heading>
                                                                        <Text fontSize="sm" fontWeight="500" opacity=".7">What we are up to!</Text>
                                                                    </Box>
                                                                </Flex></a>
                                                            </Hyperlink>
                                                        </Box>
                                                        <Box height="48px" my={4}>
                                                            <Hyperlink href="/solutions">
                                                                <a className="link"><Flex align="center">
                                                                    <SVG color="primary.500" src="/assets/images/icons/library/general/folder.svg"></SVG>
                                                                    <Box onClick={onClose} ml="3">
                                                                        <Heading size="sm" fontFamily="Nexa Bold">Our Solutions</Heading>
                                                                        <Text fontSize="sm" fontWeight="500" opacity=".7">What do we deliver</Text>
                                                                    </Box>
                                                                </Flex></a>
                                                            </Hyperlink>
                                                        </Box>
                                                        <Box height="48px" my={4}>
                                                            <Hyperlink href="/about#team">
                                                                <a className="link"><Flex align="center">
                                                                    <SVG color="primary.500" src="/assets/images/icons/library/communication/group.svg"></SVG>
                                                                    <Box onClick={onClose} ml="3">
                                                                        <Heading size="sm" fontFamily="Nexa Bold">Team</Heading>
                                                                        <Text fontSize="sm" fontWeight="500" opacity=".7">Meet Us!!</Text>
                                                                    </Box>
                                                                </Flex></a>
                                                            </Hyperlink>
                                                        </Box>
                                                    </Grid>
                                                    <Divider borderWidth={2} my={6}></Divider>
                                                    <Flex wrap="wrap">
                                                        <Box onClick={onClose} px={3} my={3} width="50%">
                                                            <Hyperlink href="/trainings"><a className="link">
                                                                <Heading size="sm" fontFamily="Nexa Bold">Trainings</Heading>
                                                                <Text fontSize="sm" fontWeight="500" opacity=".7">Learn and Grow!!</Text>
                                                            </a></Hyperlink>
                                                        </Box>
                                                        <Box onClick={onClose} px={3} my={3} width="50%">
                                                            <Hyperlink href="/newsroom?tab=Case%20Study"><a className="link">
                                                                <Heading size="sm" fontFamily="Nexa Bold">Case Studies</Heading>
                                                                <Text fontSize="sm" fontWeight="500" opacity=".7">Our Projects</Text>
                                                            </a></Hyperlink>
                                                        </Box>
                                                        <Box onClick={onClose} px={3} my={3} width="50%">
                                                            <Hyperlink href="/stories"><a className="link">
                                                                <Heading size="sm" fontFamily="Nexa Bold">Customer Stories</Heading>
                                                                <Text fontSize="sm" fontWeight="500" opacity=".7">The word out there!</Text>
                                                            </a></Hyperlink>
                                                        </Box>
                                                        <Box onClick={onClose} px={3} my={3} width="50%">
                                                            <Hyperlink href="/partners"><a className="link">
                                                                <Heading size="sm" fontFamily="Nexa Bold">Our Partners</Heading>
                                                                <Text fontSize="sm" fontWeight="500" opacity=".7">Companies who trust us!</Text>
                                                            </a></Hyperlink>
                                                        </Box>
                                                    </Flex>
                                                </Box>
                                                <Flex flexDirection="column" width="50%" p={12} bg="light.400">
                                                    <Heading mb={4} size="md" fontFamily="Nexa Bold">What's New</Heading>
                                                    <WhatsNew
                                                        onClick={onClose}
                                                        image={newsroom[0].headerIcon}
                                                        heading={newsroom[0].headertitle}
                                                        link={"/newsroom/" + newsroom[0].link}
                                                    />
                                                    <WhatsNew
                                                        onClick={onClose}
                                                        image={newsroom[1].headerIcon}
                                                        heading={newsroom[1].headertitle}
                                                        link={"/newsroom/" + newsroom[1].link}
                                                    />
                                                    <WhatsNew
                                                        onClick={onClose}
                                                        image={newsroom[2].headerIcon}
                                                        heading={newsroom[2].headertitle}
                                                        link={"/newsroom/" + newsroom[2].link}
                                                    />
                                                </Flex>
                                            </Row>
                                        </Box>
                                    </Fade>
                                </Container>
                                </Box>                                      
                                </Box>
                            <Hyperlink href="/features">
                                <Link display={["none", "none", "none", "flex"]} mx={3} fontWeight="500" fontSize="md" color="primary" _hover={{ color: "#ff0000", textDecoration: "none" }}>Our Features</Link>
                            </Hyperlink>
                        </div>
                        <Hyperlink href="/"><a>
                            <Image alt="" src="/assets/logo.png" height="45px" className="mr-3 d-sm-none"></Image>
                        </a></Hyperlink>
                        <div className="d-flex">

                            {country !== '' && <Button variant="unstyled" leftIcon={<IoIosCall/>} className="NunitoSans-Bold link p-2 mt-1 d-none d-lg-flex"> <a href={country === 'India' ? 'tel:1800 309 2487' : 'tel:1300 00 BGUS'} className="link">{country === 'India' ? '1800 309 2487' : '1300 00 BGUS'}</a> </Button>}

                            {/* <Search toggle ={() => setSearch(!search)} searching={search}></Search> */}
                            {/*propper syntax to use link with dynamic routing*/}
                            <Hyperlink href={`/search?search=`}>
                                <Button p={2} rounded={4} bg="white" onClick={props.toggle}>
                                    <FaSearch size="18px"/>
                                </Button>
                            </Hyperlink>
                            <Button display={"none"} onClick={colorMode === 'dark' ? toggleColorMode : () => {}} id="contact">{colorMode}</Button>
                            <Hyperlink href={`/contact`}>
                                <Button className="mx-3 d-none d-sm-block primary-btn" variant="solid" colorScheme="primary">Contact Us</Button>
                            </Hyperlink>
                        </div>
                    </div>
                </div>

                <CookieNotice></CookieNotice>
            </Box>

            {show ? <div className="overlay" onClick={overlayClick} /> : ""}
        </>
    )
}

export default header;
