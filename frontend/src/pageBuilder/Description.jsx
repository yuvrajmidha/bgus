import React from 'react';
import { Text } from '@chakra-ui/react';

function Description({mt = 4, opacity=.7, fontSize=["lg","xl"],px= ["6.17%","8.17%"], textAlign="center", children="", ...props}) {
    return (
        <Text style={{textAlignLast: textAlign}} fontSize={fontSize} px={px} mt={mt} textAlign="justify" opacity={opacity} {...props}>
            {children}
        </Text>
    );
}

export default Description;