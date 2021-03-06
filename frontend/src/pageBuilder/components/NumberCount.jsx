import React from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';
import MyCount from '../../components/Countup/main';
import Head from 'next/head';

function NumberCount({count, digitColor = "primary.500", prefix, suffix, duration=2,fontSize=["30px","36px","40px"], title, titleSize=["18px","20px","22px"], description, align="center", ...props}) {
    return (
        <Flex direction="column" align={align} {...props}>
            <Text fontSize={fontSize} fontFamily="Nexa Bold" color={digitColor}>
                <MyCount endPoint={count} prefix={prefix} suffix={suffix} duration={duration}></MyCount>
            </Text>
            <Heading my={2} fontSize={titleSize} textAlign ={align}>{title}</Heading>
            <Text textAlign={align}>{description}</Text>
        </Flex>
    );
}

export default NumberCount;