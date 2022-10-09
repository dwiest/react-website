import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../styles/Home.module.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import React from 'react';
import Box from '@mui/material/Box';
import SiteHeader from '../../header'

function TabsOne() {
  return ( 
	<Tabs variant='enclosed' align='begin'>
          <TabList>
            <Tab>One</Tab>
            <Tab>Two</Tab>
            <Tab>Three</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
  )
}

function TabsTwo() {
  return ( 
	<Tabs variant='soft-rounded' colorScheme='green' align='end' isFitted size='lg'>
          <TabList>
            <Tab>One</Tab>
            <Tab>Two</Tab>
            <Tab>Three</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
  )
}

function TabsThree() {
  return ( 
	<Tabs variant='solid-rounded' colorScheme='green' align='begin' size='sm' defaultIndex={2}>
          <TabList>
            <Tab _selected={{ color: 'red.300', bg: 'blue.500'}}>One</Tab>
            <Tab _selected={{ color: 'black', bg: 'green.400'}} isDisabled>Two</Tab>
            <Tab _selected={{ color: 'blue.500', bg: 'red.300'}}>Three</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
  )
}

function TabsFour() {
  const [tabIndex, setTabIndex] = React.useState(0)

  const handleSliderChange = (event) => {
    setTabIndex(parseInt(event.target.value, 10))
  }

  const handleTabsChange = (index) => {
    setTabIndex(index)
  }

  return (
    <Box>
      <input
        type='range'
        min='0'
        max='2'
        value={tabIndex}
        onChange={handleSliderChange}
      />

      <Tabs index={tabIndex} onChange={handleTabsChange}>
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>Click the tabs or pull the slider around</p>
          </TabPanel>
          <TabPanel>
            <p>Yeah yeah. What&apos;s up?</p>
          </TabPanel>
          <TabPanel>
            <p>Oh, hello there.</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default function ChakraTabs() {
  return ( 
    <div className={styles.container}>
      <main className={styles.main}>
      <div className={styles.card}>
	<TabsOne/ >
      </div>
      <div className={styles.card}>
	<TabsTwo/ >
      </div>
      <div className={styles.card}>
	<TabsThree/ >
      </div>
      <div className={styles.card}>
	<TabsFour/ >
      </div>
      </main>
    </div>
  )
}
