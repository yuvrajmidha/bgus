import React from 'react';
import {Accordion,Box, Icon, AccordionButton, AccordionItem, AccordionPanel, Flex, Image, SimpleGrid, Grid, Heading} from "@chakra-ui/react"
import { FaPlus } from 'react-icons/fa';

function AccordionWithImage({content, ...props}) {
    const [current, setCurrent] = React.useState(0)
    return (
        <Grid templateColumns= {["auto", "auto", "50% 50%"]} {...props}>
            <Box>
                <Accordion onChange={(index) => setCurrent(index)} >
                {content && content.map((data, index) => (
                        <AccordionItem>
                            {({ isExpanded }) => (
                            <>
                                <AccordionButton>
                                <Box py={2} flex="1" textAlign="left">
                                    <Heading size="md">{data.title}</Heading>
                                </Box>
                                {!isExpanded && <FaPlus name="add"/>}
                                </AccordionButton>
                                <AccordionPanel pb={4}>
                                    {data.description}
                                </AccordionPanel>
                            </>
                            )}
                        </AccordionItem>
                ))}
                </Accordion>
            </Box>
            <Box display={["none", "none", "block"]} p={6}>
            {content && content.map((data, index) => {
                if(data.image) return (<>
                    {current === index &&  <Image key={index} alt={data.title} h="280px" m="auto" src={data.image}></Image>}
                </>)   
            })}
            </Box>
        </Grid>
    );
}

export default AccordionWithImage;