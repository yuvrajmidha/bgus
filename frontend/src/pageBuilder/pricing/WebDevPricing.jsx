import React from 'react';
import {
    Button,
    Box,
    Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
    Select,
    VStack
} from '@chakra-ui/react'
import Fade from 'react-reveal/Fade';
import { PricingQuote } from '../../components/cards/PricingCard'
import { FaMobileAlt,FaGlobe,FaRobot,FaPencilRuler,FaDrawPolygon,FaCode, FaChevronRight, FaChevronDown } from "react-icons/fa";

import { Text } from '@chakra-ui/react';
import RadioGroup from '../../components/inputs/RadioGroup';

function Description({mt = 4, opacity=.7, fontSize=["lg","xl"],px= ["6.17%","8.17%"], textAlign="center", children="", ...props}) {
    return (
        <Text style={{textAlignLast: textAlign}} fontSize={fontSize} px={px} mt={mt} textAlign="justify" opacity={opacity} {...props}>
            {children}
        </Text>
    );
}

const CustomRadio = React.forwardRef((props, ref) => {
    const { isChecked, isDisabled, value, ...rest } = props;
    return (
        <Button
            className="my-1"
            flexDirection="column"
            padding={16}
            color={isChecked ? "white" : "gray.400"}
            fontSize={["13px", "14px", "16px"]}
            ref={ref}
            borderRadius={12}
            variant={isChecked ? "solid" : "outline"}
            colorScheme={isChecked ? "primary" : "gray.300"}
            aria-checked={isChecked}
            role="radio"
            isDisabled={isDisabled}
            {...rest}
        />
    );
});



function WebDevPricing(props) {
    
    const [page, setPage] = React.useState(1);
    const [phase, setPhase] = React.useState(null);
    const [mobile,setMobile] = React.useState(false);
    const [web,setWeb] = React.useState(false);
    const [ai,setAi] = React.useState(false);
    const [functionalities,setFunctionalities] = React.useState([""]);
    const handleFunctionalities = (fun) => {if(fun.length==1){return("Choose functionalities");} else{return(fun.slice(1,).toString())}}
    const [industry,setIndustry] = React.useState(",Industry : IVS & Product Companies");

    
    return (
        <Box overflow="hidden" boxShadow="xl" rounded={12} id="pricing">

            {page == 1 &&    
                <div className="px-lg-4 py-5 rounded-8 shadow-lg">
                    <Fade className="px-lg-5 " duration={500} bottom>
                    <div className="display5 text-center">Project Phase?</div>
                    <div className="row px-3 justify-content-center px-lg-4">
                        <div className="col-lg-10 my-3 d-flex justify-content-center">
                            < RadioGroup
                                setValue={setPhase}
                                options={[
                                    {
                                        value: "Planning", 
                                        render:<VStack width="120px" p={6}>
                                                    <Box as={FaPencilRuler} boxSize="48px"></Box>
                                                    <Box>Planning</Box>
                                                </VStack>
                                    },
                                    {
                                        value: "Design", 
                                        render:<VStack  width="120px" p={6}>
                                                    <Box as={FaDrawPolygon} boxSize="48px"></Box>
                                                    <Box>Design</Box>
                                                </VStack >
                                     },
                                     {
                                         value: "Development", 
                                         render:<VStack width="120px" p={6}>
                                                    <Box as={FaCode} boxSize="48px"></Box>
                                                    <Box>Development</Box>
                                                </VStack>
                                    }
                                ]}
                            />
                        </div>
                        <div className="col-lg-12 d-flex justify-content-center my-3">
                            <Button rightIcon={<FaChevronRight></FaChevronRight>}
                            isDisabled={(phase==null)?true:false} onClick={() => {
                                setPage(2);
                            }} variant="solid" className="primary-btn" colorScheme="primary" size="lg" >Next</Button>
                        </div>
                    </div>
                </Fade>  
                </div>
            }

{page == 2 &&
                <div className="px-lg-4 py-5 rounded-8 shadow-lg">
                    <Fade className="px-lg-5 " duration={500} right >
                    <div className="display5 text-center">Choose Project Domain</div>
                    <div className="row px-3 justify-content-center px-lg-4">
                        <div className="col-lg-10 my-3">
                            <div className="row justify-content-center">
                        <Button
                            className="my-1 mx-2"
                            p={16}
                            flexDirection="column"
                            rounded={12}
                            color={mobile ? "white" : "gray.400"}
                            fontSize={["13px", "14px", "16px"]}
                            onClick={() => {setMobile(!mobile)}}
                            variant={mobile ? "solid" : "outline"}
                            colorScheme={mobile ? "primary" : "gray.300"}
                            aria-checked={mobile}
                        >
                            
                                <span className="d-flex pb-2 justify-content-center text-center">
                                <FaMobileAlt size="48px"/>
                                </span>
                                Mobile
                            </Button>
                            <Button
                            className="my-1 mx-2"
                            p={16}
                            flexDirection="column"
                            rounded={12}
                            color={web ? "white" : "gray.400"}
                            fontSize={["13px", "14px", "16px"]}
                            onClick={() => {setWeb(!web)}}
                            variant={web ? "solid" : "outline"}
                            colorScheme={web ? "primary" : "gray.300"}
                            aria-checked={web}
                        >
                            <span className="d-flex pb-2 justify-content-center text-center">
                                <FaGlobe size="48px"/>
                                </span>
                                Web
                            </Button>
                            <Button
                            className="my-1 mx-2"
                            p={16}
                            flexDirection="column"
                            color={ai ? "white" : "gray.400"}
                            rounded={12}
                            variant={ai ? "solid" : "outline"}
                            fontSize={["13px", "14px", "16px"]}
                            onClick={() => {setAi(!ai)}}
                            colorScheme={ai ? "primary" : "gray.300"}
                            aria-checked={ai}
                        >
                            <span className="d-flex pb-2 justify-content-center text-center">
                                <FaRobot size="48px"/>
                                </span>
                                AI/ML
                            </Button>
                            </div>
                        </div>
                        <div className="col-lg-12 d-flex justify-content-center my-3">
                            
                            <Button rightIcon={<FaChevronRight></FaChevronRight>}
                            isDisabled={(mobile==false && web==false && ai==false)?true:false} onClick={() => {
                                setPage(3);
                            }} variant="solid" className="primary-btn" colorScheme="primary" size="lg" >Next</Button>
                        </div>
                    </div>
                </Fade>  
                </div>
            }

{page == 3 &&
                <div className="px-lg-4 py-5 overflow-y-auto rounded-8 shadow-lg">
                    <Fade className="px-lg-5 " duration={500} right >
                    <div className="row text-center px-3 px-lg-5 justify-content-center">
                        <Box w={["90%","80%","72%"]}>
                            <div className="h6 mt-4 d-flex justify-content-start">Functionalities </div>
                            <Menu closeOnSelect={false}>
                                <div>
                            <MenuButton marginY={3} w={["100%"]} fontWeight="normal" overflow="hidden" justifyContent="space-between" bg="white" borderWidth={1} padding={4} as={Button} rightIcon={<FaChevronDown/>}>
                                {handleFunctionalities(functionalities)}
                            </MenuButton>
                            <MenuList w={["50%"]} placement="bottom">
                                <MenuOptionGroup value={functionalities} onChange={setFunctionalities} type="checkbox">
                                <MenuItemOption value=" CMS">CMS</MenuItemOption>
                                <MenuItemOption value=" Frontend">Frontend</MenuItemOption>
                                <MenuItemOption value=" Server-Side">Server-Side</MenuItemOption>
                                <MenuItemOption value=" Responsiveness">Responsiveness</MenuItemOption>
                                <MenuItemOption value=" E-Commerce">E-Commerce</MenuItemOption>
                                <MenuItemOption value=" Digital-Marketing">Digital-Marketing</MenuItemOption>
                                <MenuItemOption value=" SEO">SEO</MenuItemOption>
                                <MenuItemOption value=" Chatbot">Chatbot</MenuItemOption>
                                </MenuOptionGroup>
                            </MenuList>
                            </div>
                            </Menu>
                        
                            <div className="h6 mt-4 d-flex justify-content-start">Industry </div>
                            
                                <Select value={industry} marginY={3} variant="filled" bg="white" borderWidth={1} borderColor="#E2E8F0" fontSize="16px" fontWeight="semi-bold" onChange={(e)=>{setIndustry(e.target.value)}} type="checkbox">
                                <option value=",Industry : IVS & Product Companies">IVS & Product Companies</option>
                                <option value=",Industry : Digital & Marketing Agencies">Digital & Marketing Agencies</option>
                                <option value=",Industry : Banking & Finance">Banking & Finance</option>
                                <option value=",Industry : Retailt & E-Commerce">Retailt & E-Commerce</option>
                                <option value=",Industry : Healthcare">Healthcare</option>
                                <option value=",Industry : Education and E-Learning">Education and E-Learning</option>
                                <option value=",Industry : Logistics & Transportation">Logistics & Transportation</option>
                                <option value=",Industry : Media & Entertainment">Media & Entertainment</option>
                                <option value=",Industry : Automotive">Automotive</option>
                                <option value=",Industry : Travel & Tourism">Travel & Tourism</option>
                                <option value=",Industry : Technology">Technology</option>
                                <option value=",Industry : Publishing & Advertising">Publishing & Advertising</option>
                                </Select>
                            
                            
                            <div className="d-flex justify-content-center mt-5">
                                <Button rightIcon={<FaChevronRight></FaChevronRight>} onClick={() => {
                                    setPage(4);
                                }} variant="solid" className="primary-btn" colorScheme="primary" size="lg" >Next</Button>
                                
                            </div>
                        </Box>
                    </div>
                </Fade>  
                </div>
            }

{page == 4 &&
                <div className="px-lg-4 py-5 rounded-8 shadow-lg">
                    <Fade className="px-lg-5 " duration={500} right >
                    <div className="display5 mt-3 text-center">Your Idea, Our Execution!!</div>
                        <div className="row px-3 justify-content-center px-lg-4">
                           
                            <Description my={5} children="Share your ideas with us, then sit back and relax. Let us transform your idea into your desired end-product, specifically tailored and designed according to your needs and specifications. Experts in our domains, we are committed to client-satisfaction and deliverability."/>
                            
                        <div className="col-lg-12 d-flex justify-content-center mb-3 mt-4">
                            <PricingQuote serviceName="Web Development As A Service" serviceDescription={`${phase}, ${mobile?" Mobile":""} ${web?" Web":""} ${ai?" AI&ML":""} ${(functionalities.length>1)?",Functionalities : "+functionalities.slice(1,).join(";"):""} ${industry} `} button ></PricingQuote>
                        </div>
                    </div>
                </Fade>  
                </div>
            }

        </Box>
    )
}

//<PricingQuote serviceName="Web Hosting As A Service" serviceDescription={`${phase}, ${mobile?"Mobile /":""} ${web?"Web /":""} ${ai?"AI & ML ":""} `} button ></PricingQuote>

export default WebDevPricing;