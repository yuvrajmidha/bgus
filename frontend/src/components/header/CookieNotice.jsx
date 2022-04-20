import React, { Component } from 'react';
import Container from '../../pageBuilder/Container';
import { Flex, Box, Text, Button, Collapse } from '@chakra-ui/react';
import Fade from "react-reveal/Fade"
import cookie from 'react-cookies'
import Link from '../AnchorLink';
import { render } from 'react-dom';
import { IoMdClose } from 'react-icons/io';


class CookieNotice extends Component {
    constructor(props) {
        super(props);
        this.state = { notice: "1" };
      }
    componentDidMount(){
        setTimeout(() => {
            this.setState({notice: cookie.load('notice') || "0"})
        }, 2000)
        setTimeout(() => {
            this.setState({
                notice: "1"
            })
        }, 12000)
    }    
    render(){
        return (
            <>
            <Collapse in={this.state.notice === "0"}>
                <Container pos="fixed" bottom={"0px"} roundedTop={"12px"} padding={8} left="50%" transform="translate(-50%)" borderBottomWidth={1} borderBottomColor="gray.200" bg="white" zIndex="1000">
                    <Text fontSize={["xs","sm","md"]} pr={3}>We use cookies to personalize your experience. By continuing to visit the website you agree to our use of cookies. <Link href="/policies"><a className="text-primary">Read our Privacy Policy</a></Link></Text>
                    <Button pos="absolute" top="28px" right="16px" onClick={() => {
                        cookie.save('notice', '1')
                        this.setState({
                            notice: "1"
                        })
                    }} variant="unstyled" rightIcon={<IoMdClose />}></Button>
                </Container>
            </Collapse>
            </>
        )
    }
}

export default CookieNotice;