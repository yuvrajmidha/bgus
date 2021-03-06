import React from "react";
import {
  Button,
  Box,
  Collapse,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Drawer,
  Switch,
  FormLabel,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Slider,
  SliderThumb,
  SliderTrack,
  SliderFilledTrack,
} from "@chakra-ui/react";
import Fade from "react-reveal/Fade";
import { FaWindows, FaServer, FaDatabase, FaChevronDown } from "react-icons/fa";
import { PricingCard, PricingQuote } from "../../components/cards/PricingCard";
import RadioGroup from "../../components/inputs/RadioGroup";

const tabs = [
  {
    index: 0,
    title: "Base Server",
    icon: FaServer,
  },
  {
    index: 1,
    title: "Windows 10",
    icon: FaWindows,
  },
  {
    index: 2,
    title: "Windows 2016 Standard",
    icon: FaWindows,
  },
  {
    index: 3,
    title: "Windows 2016 DC",
    icon: FaWindows,
  },
  {
    index: 4,
    title: "Dedicated DB Server",
    icon: FaDatabase,
  },
];

const plans = [
  {
    index: 0,
    name: "Standard",
    icon: "/assets/images/icons/theme/origami.svg",
    feature: [
      "2vCPU",
      "80GB SSD Storage",
      "4GB RAM",
      "Desktop Virtualization",
      "High Availability",
      "High Clustering",
    ],
    cpu: 2,
    popular: false,
    storage: 80,
    ram: 4,
  },
  {
    index: 1,
    name: "Professional",
    icon: "/assets/images/icons/theme/paper-plane.svg",
    feature: [
      "4vCPU",
      "80GB SSD Storage",
      "6GB RAM",
      "Desktop Virtualization",
      "High Availability",
      "High Clustering",
    ],
    popular: false,
    cpu: 4,
    storage: 80,
    ram: 6,
  },
  {
    index: 2,
    name: "Business",
    icon: "/assets/images/icons/theme/airplane.svg",
    feature: [
      "6vCPU",
      "80GB SSD Storage",
      "8GB RAM",
      "Desktop Virtualization",
      "High Availability",
      "High Clustering",
    ],
    popular: true,
    cpu: 6,
    storage: 80,
    ram: 8,
  },
  {
    index: 3,
    name: "Enterprise",
    icon: "/assets/images/icons/theme/rocket.svg",
    feature: [
      "8vCPU",
      "80GB SSD Storage",
      "16GB RAM",
      "Desktop Virtualization",
      "High Availability",
      "High Clustering",
    ],
    popular: false,
    cpu: 8,
    storage: 80,
    ram: 16,
  },
];

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

function InfraPricing(props) {

  const verifyNotEmpty = (x, text) => (x > 0 ? ", " + x + " " + text : "");

  const [type, setType] = React.useState("");

  //Hooks
  const [planName, setPlan] = React.useState("Standard");
  const handlePlan = (name) => setPlan(name);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [show, setShow] = React.useState(false);
  const openControls = () => {setShow(true); window.scrollTo(0, document.getElementById("collapse-1").offsetTop - 100);}

  const [storage, setStorage] = React.useState(0);
  const handleStorage = (storage) => setStorage(storage);

  const [ram, setRam] = React.useState(0);
  const handleRam = (ram) => setRam(ram);

  const [cpu, setCPU] = React.useState(0);

  const [tabIndex, setTabIndex] = React.useState(0);
  const handleTabsChange = (index) => {
    setTabIndex(index);
    setShow(false);
  };

  const [dailybackup, setDailyBackup] = React.useState(false);
  const handleDailyBackup = (dailybackup) =>
    dailybackup ? ",Enabled Daily Backup" : "";

  const [windowLicense, setWindowLicense] = React.useState(false);
  const handleWindowLicense = (windowLicense) =>
    windowLicense ? ",I have a Windows License" : "";

  const resetOnCardChange = () =>{
    setWindowLicense(false);
    setDailyBackup(false);
    setType("");
    setCPU(0);
    setRam(0);
  setStorage(0);
}

  //Panels
  const tabPanel = (
    <TabPanel mx="auto" width={["100%", "100%", "100%", "90%", "82%" ]} className="py-2">
      <Fade cascade duration={500} distance={"30%"} bottom>
      <div className="row no-gutters justify-content-center">
        {plans.map((plan) => {
          return (
            <div key={plan.index} className="col-xl-3 col-lg-4 col-sm-6 my-3">
              
                <PricingCard
                  icon={plan.icon}
                  title={plan.name}
                  popular={plan.popular}
                  featureList={plan.feature}
                >
                  <Button
                    className="mt-3 btn-block primary-btn"
                    variant="solid"
                    size="lg"
                    colorScheme="primary"
                    onClick={() => {
                      handlePlan(plan.name);
                      openControls();
                      resetOnCardChange();
                    }}
                  >
                    Get Started
                  </Button>
                </PricingCard>
              
            </div>
          );
        })}
        
      </div>
      </Fade>
    </TabPanel>
  );
  return (
    <div className="container-fluid" id="pricing">
    <div className="row justify-content-center">
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
                    <Box as={tab.icon} size="32px" mr="12px"></Box>{" "}
                    {tab.title}
                  </Button>
                </>
              );
            })}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
    <Tabs align="center" index={tabIndex} onChange={handleTabsChange}>
    <TabList>
      {tabs.map((tab) => {
        return (
          <>
            <Tab
              key={tab.index}
              onClick={() => {
                setTabIndex(tab.index);
                setWindowLicense(false);
                setDailyBackup(false);
                setType("");
                setShow(false);
              }}
              className={
                "box-none tab display6 " +
                (tabIndex === tab.index && "tab-selected")
              }
            >
              <Box as={tab.icon} size="32px" mr="12px"></Box> {tab.title}
            </Tab>
          </>
        );
      })}
    </TabList>
      <TabPanels>
        <TabPanel className="py-2">
        <Fade duration={500} cascade distance={"30%"} bottom>
          <div className="row no-gutters justify-content-center">
            <div className="col-xl-3 col-lg-4 col-sm-6 my-3">
              
                <PricingCard
                  icon="/assets/images/icons/theme/origami.svg"
                  title="Standard"
                  featureList={[
                    "2vCPU",
                    "80GB SSD Storage",
                    "4GB RAM",
                    "Desktop Virtualization",
                    "High Availability",
                    "High Clustering",
                  ]}
                >
                  <Button
                    className="mt-3"
                    colorScheme="primary"
                    variant="outline"
                    size="lg"
                    onClick={()=>{openControls(); handlePlan("Standard"); resetOnCardChange();}}
                  >
                    Get Started
                  </Button>
                </PricingCard>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6 my-3">
                <PricingCard
                  icon="/assets/images/icons/theme/paper-plane.svg"
                  title="Business"
                  popular
                  featureList={[
                    "4vCPU",
                    "80GB SSD Storage",
                    "6GB RAM",
                    "Desktop Virtualization",
                    "High Availability",
                    "High Clustering",
                  ]}
                >
                  <Button
                    className="mt-3"
                    colorScheme="primary"
                    variant="outline"
                    size="lg"
                    onClick={()=>{openControls(); handlePlan("Business"); resetOnCardChange();}}
                  >
                    Get Started
                  </Button>
                </PricingCard>
              
            </div>
          </div>
          </Fade>
        </TabPanel>
        {tabPanel}
        {tabPanel}
        {tabPanel}
        {tabPanel}
      </TabPanels>
  </Tabs>
    <div id="collapse-1" className="container">
      <Collapse id="quoteForm" className="px-lg-5" mt={6} in={show}>
        <div className="px-4 py-5 border">
          <div className="display5 text-center">
            {tabs[tabIndex].title} ({planName})
          </div>
          <div className="row px-3">
            {tabIndex === 4 && (
              <div className="col-lg-12 mt-2">
                <div className="h6">Choose a Type</div>
                <RadioGroup
                  options={["Daily Backups", "Hourly Snapshots"]}
                  setValue={setType}
                  default={4}
                />
              </div>
            )}
            <div className="col-lg-12 mt-4">
              <div className="h6">Extend SSD Storage (in GB)</div>
              <Slider
                color="primary"
                my="18px"
                defaultValue={0}
                min={0}
                max={256-80}
                value={storage}
                onChange={handleStorage}
              >
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
                  children={80 + storage }
                />
              </Slider>
            </div>
            <div className="col-lg-12 mt-4">
              <div className="h6">Additional Memory (in GB)</div>
              <Slider
                color="primary"
                my="18px"
                defaultValue={0}
                max="64"
                value={ram}
                onChange={handleRam}
              >
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
                  children={ram*2}
                />
              </Slider>
            </div>
            {tabIndex < 4 && (
              <div className="col-lg-6 mt-4">
                <div className="d-flex d-flex align-items-center">
                  <Switch color="primary"
                    onChange={(e) => {
                      setDailyBackup(e.target.checked);
                    }}
                    isChecked={dailybackup}
                    id="daily-backups"
                  />
                  <FormLabel ml="12px" htmlFor="daily-bakups">
                    Enable Daily Backups
                  </FormLabel>
                </div>
              </div>
            )}
            {tabIndex < 4 && (
              <div className="col-lg-6 mt-4">
                <div className="d-flex d-flex align-items-center">
                  <Switch color="primary"
                    onChange={(e) => {
                      setWindowLicense(e.target.checked);
                    }}
                    isChecked={windowLicense}
                    id="license"
                  />
                  <FormLabel ml="12px" htmlFor="license">
                    I have a Windows license
                  </FormLabel>
                </div>
              </div>
            )}
            <div className="col-md-6 mt-4">
              <div className="h6">Additional vCPUs</div>
              <NumberInput
                maxWidth="160px"
                min={0}
                max={60}
                value={cpu}
                onChange={(value)=>{value<=60?setCPU(value):setCPU(60)}}
                step={cpu<2?1:2}
              >
                <NumberInputField className="bg-light" />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </div>

            <div className="col-md-6 mt-4 pt-md-4 pb-1 d-flex justify-content-md-end align-items-center">
              <PricingQuote
              serviceName="Infrastructure As A Service"
                serviceDescription={`${
                  tabs[tabIndex].title
                } (${planName})${verifyNotEmpty(
                  storage,
                  "GB Additional Storage"
                )} ${verifyNotEmpty(ram*2, "GB Additional Memory")}${handleDailyBackup(
                  dailybackup
                )}${handleWindowLicense(windowLicense)} ${verifyNotEmpty(
                  cpu,
                  "Additional vCPUs"
                )},${type}`}
                button
              ></PricingQuote>
            </div>
          </div>
        </div>
      </Collapse>
    </div>
    </div>
  )
}

export default InfraPricing;