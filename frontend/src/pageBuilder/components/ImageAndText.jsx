import React from 'react';
import { Flex, Image, Box, Heading, Text } from '@chakra-ui/react';

function ImageAndText({image, maxH = "280px",spacing="24px",px="16px", description, title, titleStyle, descriptionStyle, imageProps, ...props}) {
    return (
        <Flex px={px} my={spacing} width="100%" align="center" {...props}>
            <Image alt="" padding={["20px","15px","12px"]} width={["100%", "100%", "50%"]} maxH={maxH} src={image} {...imageProps}></Image>
            <Box width={["100%", "100%", "50%"]} px={["10px","10px","0"]}>
                <Heading mb="16px" fontFamily="Nexa Bold" {...titleStyle}>{title}</Heading>
                <Text textAlign="justify" fontSize="lg" {...descriptionStyle}>{description}</Text>
            </Box>
        </Flex>
    );
}

export default ImageAndText;