import Head from 'next/head'
import styles from '../../../styles/Home.module.css'
import {
  Button,
  ChakraProvider,
  Center,
  Checkbox,
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
        <title>Form Demo</title>
        <meta name="description" content="Form Demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SiteHeader />
	<main className={styles.lightsout}>
          This is a form!
	  <Button>Button</Button>
	  <Checkbox>Checkbox</Checkbox>
        </main>
    </div>
</ChakraProvider>
  )
}
