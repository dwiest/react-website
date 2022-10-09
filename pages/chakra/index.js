import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import React from 'react';
import Box from '@mui/material/Box';
import SiteHeader from '../header'
import ChakraTabs from './tabs'

export default function App() {
  return ( 
<ChakraProvider>
    <div className={styles.container} align="center">
      <Head>
        <title>Chakra UI Demos</title>
        <meta name="description" content="Demonstrate the use of Chakra UI components." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SiteHeader />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Chakra UI Demos
        </h1>

      <div className={styles.card}>
	<Tabs variant='soft-rounded' colorScheme='green' align='end' isFitted size='lg'>
          <TabList>
            <Tab>Tabs</Tab>
            <Tab>?</Tab>
            <Tab>??</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <ChakraTabs />
            </TabPanel>
            <TabPanel>
              <p>TBD</p>
            </TabPanel>
            <TabPanel>
              <p>TBD</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
      </main>
    </div>
</ChakraProvider>
  )
}
