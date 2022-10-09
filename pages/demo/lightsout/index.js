import Head from 'next/head'
import styles from '../../../styles/Home.module.css'
import LightsOut from '../../../components/lightsout'
import {
  ChakraProvider,
  Center,
  Flex,
  Spacer,
  VStack,
} from '@chakra-ui/react'
import SiteHeader from '../../header'

export default function App() {
  return ( 
<ChakraProvider>
    <div className={styles.container}>
      <Head>
        <title>Lights Out</title>
        <meta name="description" content="Lights Out game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SiteHeader />
	<main className={styles.lightsout}>
          <LightsOut />
        </main>
    </div>
</ChakraProvider>
  )
}
