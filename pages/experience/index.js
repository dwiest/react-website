import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import {
  ChakraProvider,
  HStack,
  Input,
  InputGroup,
  VStack
} from '@chakra-ui/react'
import { Spacer, Button, Tabs, TabList, TabPanels, Tab, TabPanel, Text } from '@chakra-ui/react'
import { Component, React, useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import SiteHeader from '../header'


  const images = [
    'https://wiest.world/images/DALL%C2%B7E%202022-09-14%2011.17.10%20-%20A%20photo%20of%20an%20old%20complicated%20mechanical%20device%20that%20is%20used%20to%20encrypt%20information.png',
    'https://wiest.world/images/DALL%C2%B7E%202022-09-14%2011.16.32%20-%20A%20futuristic%20photo%20of%20everyone%27s%20electronic%20data%20being%20warehoused.png',
    'https://wiest.world/images/DALL%C2%B7E%202022-09-14%2011.18.56%20-%20a%20photo%20of%20a%20closeup%20of%20two%20metal%20robot%20faces%20speaking%20to%20one%20another.png'
]


export default function App(){

  const [num,setNum] = useState(0)

  function next() {
    setNum((num+1)%3)
    console.log('next')
  }

  function previous() {
    if (num > 0)
          setNum(num-1)
    else
          setNum(2)
    console.log('previous')
  }

  return ( 
<ChakraProvider>
    <div className={styles.container} align="center">
      <Head>
        <title>Experience</title>
        <meta name="description" content="Some of my experience." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SiteHeader />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Experience
        </h1>

      <div className={styles.card}>
	  <HStack>
            <Image src={images[num]} width="300%" height="300%" alt='image' />
	    <VStack>
	      <Button onClick={next}>Next Image</Button>
	      <Button onClick={previous}>Previous Image</Button>
	    </VStack>
	  </HStack>
      </div>
      </main>
    </div>
</ChakraProvider>
  )
}
