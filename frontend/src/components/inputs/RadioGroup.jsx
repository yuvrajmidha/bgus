import { Box, HStack, useRadio, useRadioGroup } from '@chakra-ui/react';
import React from 'react'

const RadioCard = React.forwardRef((props, ref) => {
    const { getInputProps, getCheckboxProps } = useRadio(props)
  
    const input = getInputProps()
    const checkbox = getCheckboxProps()
    return (
      <Box onClick={props.onClick} my={0} as='label'>
        <input {...input} />
        <Box
          {...checkbox}
          cursor='pointer'
          borderWidth='1px'
          borderRadius='md'
          fontSize={["13px","14px","16px"]}
        _checked={{
            bg: 'primary.500',
            color: 'white',
          }}
          _focus={{
            boxShadow: 'outline',
          }}
          
          px={5}
          py={3}
        >
          {props.children}
        </Box>
      </Box>
    );
  });

export default function RadioGroup({name= 'options', options, defaultIndex, setValue, onChange, ...props}) {

    const { getRootProps, getRadioProps } = useRadioGroup({
        name,
        defaultValue: options[defaultIndex],
    })  

    const group = getRootProps()

    return (
        <HStack align={"center"} {...group}>
            {options.map((value, index) => {
            const radio = getRadioProps({ value: value.render ? value.value : value })
            return (
                <RadioCard key={index} onClick={() => {setValue(value.render ? value.value : value); if(onChange) onChange();}} key={value.render ? value.value : value} {...radio}>
                {value.render ? value.render : value}
                </RadioCard>
            )
            })}
        </HStack>
    )
}
