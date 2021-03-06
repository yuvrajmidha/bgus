import React from 'react';
import {PricingQuote} from "../../components/cards/PricingCard"
import { Slider, Select, SliderFilledTrack, SliderTrack, SliderThumb, Button,NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,FormLabel,Switch} from "@chakra-ui/react"
import Fade from "react-reveal/Fade"
import RadioGroup from '../../components/inputs/RadioGroup';

const verifyNotEmpty = (x, text) => (x > 0 ? ", " + x + " " + text : "");

const CustomRadio = React.forwardRef((props, ref) => {
    const { isChecked, isDisabled, value, ...rest } = props;
    return (
        <Button
            className="my-1"
            fontSize={["12px","14px","15px"]}
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

function WafPricing(props) {
    const [type, setType] = React.useState("Radware");
    const [applications, setApplications] = React.useState(1);
    const [value, setValue] = React.useState(10);
    const handleChange = value => setValue(value);
    const [bot, setBot] = React.useState(false);
    const [redundancy, setRedundancy] = React.useState(false);
    
    const handleBot = (swi) => swi ? ",Enable BOT Protection" : "";
    const handleRedundancy = (swi) => swi ? ",Enable Redundancy" : "";
    return (        
        <div id="pricing" className="container">
            <Fade className="px-lg-5 " duration={500} bottom>
                <div className="px-lg-4 py-5 rounded-8 shadow-lg">
                    <div className="display5 text-center">WAF Options</div>
                    <div className="row px-3 justify-content-center px-lg-4">
                        <div className="col-lg-10 mt-4">
                                                <div className="h6">
                                                    Choose a type
                                                </div>
                                                < RadioGroup
                                                   setValue={setType}
                                                   options={["Radware", "F5", "Fortinet"]}
                                                />
                                            </div>
                        
                        <div className="col-lg-5 mt-4">
                            <div className="h6">How many applications?</div></div>
                        <div className="offset-lg-1 col-lg-4 mt-3">
                            <NumberInput
                                                    onChange={(value)=>{value<=20?setApplications(value):setApplications(20)}}
                                                    value={applications}
                                                    min={1}
                                                    max={20}
                                                    
                                                >
                                                    <NumberInputField className="bg-light" />
                                                    <NumberInputStepper>
                                                        <NumberIncrementStepper />
                                                        <NumberDecrementStepper />
                                                    </NumberInputStepper>
                                                </NumberInput>
                        </div>
                        <div className="col-lg-10 mt-4">
                                <div className="h6">
                                                    Bandwidth per Application (in Mbps)
                                                </div>
                            <Slider color="primary" my={2}  min={1} max={80} value={value} onChange={handleChange}>
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
                                            children={value*5} />
                            </Slider>
                        </div>
                        <div className="col-lg-10 mt-4 d-flex justify-content-between">
                            <div className='d-flex align-items-center'>
                            
                                <Switch color="primary"
                                    onChange={(e) => {
                                    setBot(e.target.checked);
                                    }}
                                    isChecked={bot}
                                    id="license"
                                />
                                <FormLabel ml={[0,3]} htmlFor="license">
                                    BOT Protection
                                </FormLabel>
                            </div>
                                
                        <div className='d-flex align-items-center'>
                            
                                <Switch color="primary"
                                    onChange={(e) => {
                                    setRedundancy(e.target.checked);
                                    }}
                                    isChecked={redundancy}
                                    id="license"
                                />
                                <FormLabel ml={[0,3]} htmlFor="license">
                                    Redundancy
                                </FormLabel>
                                </div>
                                
                        </div>

                        <div className="col-lg-12 mt-4 d-flex justify-content-center">
                            <PricingQuote serviceName="WAF As A Service" serviceDescription={`${type} ${verifyNotEmpty(applications, "Application")} ${verifyNotEmpty(value*5,"Mbps Bandwidth/App")} ${handleBot(bot)} ${handleRedundancy(redundancy)}`} button ></PricingQuote>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default WafPricing;