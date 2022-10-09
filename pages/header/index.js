import React, { Component } from 'react';
import styles from '../../styles/Home.module.css';
import Link from 'next/link';

import {
  useDisclosure,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  Heading,
  HStack,
  Input,
  List,
  ListItem,
  ListIcon,
  Spacer,
  Switch,
  VStack,
} from '@chakra-ui/react';

import {
  MdCheckCircle,
  ExternalLinkIcon,
  HamburgerIcon,
  SettingsIcon,
  MoonIcon,
} from '@chakra-ui/icons';

function HamburgerMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <Button ref={btnRef} onClick={onOpen} bg="white">
        <HamburgerIcon/>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader><Link href="/">wiest.world</Link></DrawerHeader>

          <DrawerBody>
        <Accordion bg="gray" color="white">
	  <AccordionItem>
	    <AccordionButton><Link href="#">About</Link></AccordionButton>
	  {/*<AccordionPanel>woot</AccordionPanel>*/}
	  </AccordionItem>
	</Accordion>
{/* HERE */}
	<Accordion defaultIndex={[0]} allowToggle>
	  <AccordionItem>
	    <AccordionButton bg="teal" color="white" _hover={{}} _expanded={{bg:'teal'}}>
	      Experience
	      <Spacer /> 
              <AccordionIcon />
	    </AccordionButton>
	    <AccordionPanel>
	  <Accordion allowToggle>
  <AccordionItem>
    <h3>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          AWS 
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h3>
    <AccordionPanel pb={4}>
	    <List spacing={0}>
              <ListItem>
                <ListIcon as={SettingsIcon} color='green.500' />
	        IAM
              </ListItem>
              <ListItem>
                <ListIcon as={SettingsIcon} color='green.500' />
	        VPC
              </ListItem>
              <ListItem>
                <ListIcon as={SettingsIcon} color='green.500' />
	        EC2
              </ListItem>
              <ListItem>
                <ListIcon as={SettingsIcon} color='green.500' />
	        S3 
              </ListItem>
	    </List>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h3>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          Configuration Management 
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h3>
    <AccordionPanel pb={2}>
      <List spacing={0}>
        <ListItem>
          <ListIcon as={SettingsIcon} color='green.500' />
	  SaltStack 
        </ListItem>
        <ListItem>
          <ListIcon as={SettingsIcon} color='green.500' />
	  Terraform
        </ListItem>
      </List>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h3>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          Monitoring & Metrics
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h3>
    <AccordionPanel pb={2}>
      <List spacing={0}>
        <ListItem>
          <ListIcon as={SettingsIcon} color='green.500' />
	  Nagios
        </ListItem>
        <ListItem>
          <ListIcon as={SettingsIcon} color='green.500' />
	  Cacti 
        </ListItem>
        <ListItem>
          <ListIcon as={SettingsIcon} color='green.500' />
	  RRDTool 
        </ListItem>
        <ListItem>
          <ListIcon as={SettingsIcon} color='green.500' />
	  Net-SNMP
        </ListItem>
      </List>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h3>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          Data Encryption
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h3>
    <AccordionPanel pb={2}>
      <List spacing={0}>
        <ListItem>X.509 certificates</ListItem>
        <ListItem>PGP/GPG</ListItem>
        <ListItem>Libreswan VPN</ListItem>
        <ListItem>stunnel</ListItem>
        <ListItem>ecryptfs</ListItem>
        <ListItem>GEOM</ListItem>
      </List>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h3>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          Database Systems
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h3>
    <AccordionPanel pb={4}>
      <List spacing={0}>
        <ListItem>MongoDB</ListItem>
        <ListItem>MySQL</ListItem>
      </List>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h3>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          Messaging Middleware
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h3>
    <AccordionPanel pb={4}>
      <List spacing={0}>
        <ListItem>RabbitMQ</ListItem>
      </List>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h3>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          Operating Systems 
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h3>
    <AccordionPanel pb={4}>
      <List spacing={0}>
        <ListItem>Unix</ListItem>
        <ListItem>Linux</ListItem>
        <ListItem>MacOS</ListItem>
        <ListItem>Solaris</ListItem>
        <ListItem>Windows</ListItem>
      </List>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
{/* THERE */}
    </AccordionPanel>
  </AccordionItem>
</Accordion>

	  <Accordion allowToggle>
	    <AccordionItem>
	      <AccordionButton bg="orange" color="white" _hover={{}} _expanded={{bg:'orange'}}>
	      Demos
	      <Spacer />
              <AccordionIcon />
	      </AccordionButton>
	      <AccordionPanel>
<Accordion allowToggle="true">
  <AccordionItem>
    <h3>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          Django 
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h3>
    <AccordionPanel>
      <List spacing={0}>
        <ListItem><Link href="https://wiest.world/uwsgi/inventory" isExternal>Inventory Manager</Link> <ExternalLinkIcon /></ListItem>
      </List>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h3>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          React.js
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h3>
    <AccordionPanel>
      <List spacing={0}>
        <ListItem><Link href="/demo/lightsout">Lights Out</Link></ListItem>
        <ListItem><Link href="/chakra">Chakra UI</Link></ListItem>
      </List>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
	      </AccordionPanel>
	    </AccordionItem>
	  </Accordion>

	  <Accordion allowToggle>
	    <AccordionItem>
	      <AccordionButton bg="green" color="white" _hover={{}} _expanded={{bg:'green'}}>
	        <Link href="/tabs" classname={styles.card}>Resources</Link>
	        <Spacer />
                <AccordionIcon />
	      </AccordionButton>
	      <AccordionPanel>
                <List spacing={0}>
                  <ListItem>Github</ListItem>
                  <ListItem>Resume</ListItem>
                </List>
	      </AccordionPanel>
	    </AccordionItem>
	  </Accordion>

        <Accordion allowToggle>
	  <AccordionItem>
	    <AccordionButton bg="black" color="white" _hover={{}} _expanded={{bg:'black'}}><Link href="#">Contact</Link><Spacer /><AccordionIcon /></AccordionButton>
	    <AccordionPanel>
              <List spacing={0}>
                <ListItem>Email</ListItem>
              </List>
	    </AccordionPanel>
	  </AccordionItem>
	</Accordion>

          </DrawerBody>

 {/*
        <DrawerFooter>
          <Button variant='outline' mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme='blue'>Save</Button>
        </DrawerFooter>
 */}
        </DrawerContent>
      </Drawer>
    </>
  )
}

function SettingsMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <Button ref={btnRef} onClick={onOpen} bg="white">
        <SettingsIcon />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Site Settings</DrawerHeader>

          <DrawerBody>
	    <VStack spacing={2}>
	      
	  <Divider />
	  <Box><Button>Login</Button></Box>
	  <Divider />
	  <Box>Aasdfkljsdf</Box>
	    </VStack>
          </DrawerBody>
	  <DrawerFooter>
            <MoonIcon /><Spacer /><Switch id="darkmode" />
	  </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default function SiteHeader() {
  return ( 
    <Flex>
      <HamburgerMenu />
      <Spacer />
      <SettingsMenu/>
    </Flex>
  )
}
