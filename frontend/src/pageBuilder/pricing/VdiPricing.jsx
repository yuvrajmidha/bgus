import React from 'react';
import {Button, Collapse,
Slider, SliderThumb, SliderTrack, SliderFilledTrack,Switch,FormLabel,Tabs,
TabList,
TabPanels,
Tab,
TabPanel} from '@chakra-ui/react'
import Fade from 'react-reveal/Fade';
import {PricingCard, PricingQuote} from '../../components/cards/PricingCard'
import { FaWindows } from "react-icons/fa";
import RadioGroup from '../../components/inputs/RadioGroup';

const CustomRadio = React.forwardRef((props, ref) => {
    const { isChecked, isDisabled, value, ...rest } = props;
    return (
        <Button
            className="my-1"
            fontSize={["13px","14px","16px"]}
            ref={ref}
            variant={isChecked ? "solid" : "outline"}
            colorScheme={isChecked ? "primary" : "gray.300"}
            aria-checked={isChecked}
            role="radio"
            isDisabled={isDisabled}
            {...rest}
        />
    );
});

function VdiPricing(props) {
  const [show, setShow] = React.useState(false);
    const openControls = () => {setShow(true); window.scrollTo(0, document.getElementById("collapse-1").offsetTop - 100);}
    const [plan,setPlan] = React.useState("");
    const [tab,setTab] = React.useState("Dedicated VDI");
    const [os,setOS] = React.useState(`,Windows 10`);
    const [goldenImage, setGoldenImage] = React.useState(false);
    const handleGoldenImage = (goldenImage) => (goldenImage) ? (",Include Golden Image Creation") : ("")
    const [value, setValue] = React.useState(1);
    const handleChange = value => setValue(value);
    const resetOnCardChange = () =>{
      setGoldenImage(false);
      setOS(`,Windows 10`);
      setValue(1);
  }
  return (
    <div id="pricing" className="container">
        <Tabs align="center">
                                <TabList
                                >
                                    <Tab onClick={()=>{setTab('Dedicated VDI'); setShow(false); resetOnCardChange();}} className="py-4 px-5 display6 ">
                                        Dedicated VDI
                                    </Tab>
                                    <Tab onClick={()=>{setTab('RDS'); setShow(false); resetOnCardChange();}} className="py-4 px-5 display6">
                                        RDS
                                    </Tab>
                                </TabList>

                                <TabPanels>
                                    <TabPanel className="py-2">
    <Fade duration={500} bottom>
    <div className="row no-gutters px-lg-5 px-3">
        <div className="col-lg-4 my-3">
            <PricingCard  title="Standard" icon="/assets/images/icons/theme/paper-plane.svg" featureList={["Include 2vCPU", "Includes 4 GB RAM", "Include 80 GB Storage"]}>
                <Button className="mt-3" colorScheme="primary" variant="outline" size="lg" onClick={()=>{openControls(); setPlan("Standard"); resetOnCardChange();}}>View More</Button>
           </PricingCard>
        </div>
        <div className="col-lg-4 my-3">
            <PricingCard title="Professional" popular icon="/assets/images/icons/theme/airplane.svg" featureList={["Include 4vCPU", "Includes 6 GB RAM", "Include 80 GB Storage"]}>
                <Button className="mt-3" colorScheme="primary" variant="outline" size="lg" onClick={()=>{openControls(); setPlan("Professional"); resetOnCardChange();}}>View More</Button>
            </PricingCard>
        </div>
        <div className="col-lg-4 my-3">
            <PricingCard title="Business" icon="/assets/images/icons/theme/rocket.svg" featureList={["Include 6vCPU", "Includes 8 GB RAM", "Include 80 GB Storage"]}>
                <Button className="mt-3" colorScheme="primary" variant="outline" size="lg" onClick={()=>{openControls(); setPlan("Business"); resetOnCardChange();}}>View More</Button>
            </PricingCard>
        </div>
    </div>
    </Fade>
    </TabPanel>
    <TabPanel className="py-2">
    <Fade duration={500} bottom>
    <div className="row no-gutters px-lg-5 px-3">
        <div className="col-lg-4 my-3">
            <PricingCard  title="Professional" icon="/assets/images/icons/theme/paper-plane.svg" featureList={["Include 8vCPU", "Includes 16 GB RAM", "Include 500 GB Storage"]}>
                <Button className="mt-3" colorScheme="primary" variant="outline" size="lg" onClick={()=>{openControls(); setPlan("Professional"); resetOnCardChange();}}>View More</Button>
           </PricingCard>
        </div>
        <div className="col-lg-4 my-3">
            <PricingCard title="Business" popular icon="/assets/images/icons/theme/airplane.svg" featureList={["Include 16vCPU", "Includes 32 GB RAM", "Include 1TB Storage"]}>
                <Button className="mt-3" colorScheme="primary" variant="outline" size="lg" onClick={()=>{openControls(); setPlan("Business"); resetOnCardChange();}}>View More</Button>
            </PricingCard>
        </div>
        <div className="col-lg-4 my-3">
            <PricingCard title="Enterprise" icon="/assets/images/icons/theme/rocket.svg" featureList={["Include 32vCPU", "Includes 64 GB RAM", "Include 2TB Storage"]}>
                <Button className="mt-3" colorScheme="primary" variant="outline" size="lg" onClick={()=>{openControls(); setPlan("Enterprise"); resetOnCardChange();}}>View More</Button>
            </PricingCard>
        </div>
    </div>
    </Fade>
    </TabPanel>
    </TabPanels>
    </Tabs>
    <div>
        <div id="collapse-1">
        <Collapse className="px-lg-5" mt={6} in={show}>
            <div className="px-4 py-5 border">
            <div className="display5 text-center">{tab} / {plan} Plan</div>
                <div className="row px-3">
                    <div className="col-lg-10 offset-lg-1 my-lg-4 my-3">
                        <div className="h6">
                                Choose an OS
                            </div>
                            < RadioGroup
                                setValue={setOS}
                                options={["WIndows 10", "Windows 2016 Standard"]}
                            />
                      
                    </div>
                    <div className="col-lg-10 offset-lg-1 my-lg-4 my-3">
                    <div className="h6 mb-3">
                            Shared Storage
                        </div>
                        <Slider color="primary" defaultValue={1} min={1} max={100} value={value} onChange={handleChange}>
                            <SliderTrack h="16px" borderRadius="8px" >
                            <SliderFilledTrack h="16px" borderRadius="8px" />
                            </SliderTrack>
                            <SliderThumb
                                        className="shadow-md" 
                                        fontSize="md"
                                        fontWeight="800"
                                        width="auto"
                                        padding="8px"
                                        height="32px"
                                        children={value + "TB"} />
                        </Slider>
                    </div>
                    <div className="col-lg-10 offset-lg-1 d-flex align-items-center my-lg-4 my-3">      
                        <Switch isChecked={goldenImage} onChange={(e) => { setGoldenImage(e.target.checked) }} color="primary" mb={0} id="golden-image-creation" />
                        <FormLabel mb={0} ml="12px" htmlFor="golden-image-creation">Include Golden Image Creation</FormLabel>   
                    </div>
                    
                    <div className="col-lg-10 offset-lg-1 text-center mt-lg-4 mt-3">
                        <PricingQuote serviceName="Workstation As A Service" serviceDescription={`${tab} ,${plan} ,${os} ${handleGoldenImage(goldenImage)} ,${value+"TB Shared Storage"}`} button ></PricingQuote>
                    </div>
                </div>
            </div>
        </Collapse>
    </div>
    </div>
</div>
  )
}

export default VdiPricing;