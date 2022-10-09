import {
  Component,
  React
} from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import {
  Box,
  ChakraProvider,
  Image,
} from '@chakra-ui/react'

import {
  CheckIcon,
} from '@chakra-ui/icons'

import SiteHeader from './header'

{/*export default function App() {*/}
class App extends Component {

  async componentDidMount() {
    try {
      const res = await fetch('https://od7z3ttylbr3tqj7rnxjcz74xe0tfgfs.lambda-url.us-east-1.on.aws/');
      const data = await res.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return ( 
<ChakraProvider>
    <div className={styles.container} align="center">
      <Head>
        <title>Welcome to wiest.world</title>
        <meta name="description" content="wiest.world React website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SiteHeader/>
      <main className={styles.main}>
	<Box boxSize="60%"><Image src="https://wiest.world/images/DALL%C2%B7E%202022-09-14%2011.22.39%20-%20a%20photo%20of%20the%20planet%20earth%20viewed%20from%20space%20and%20floating%20in%20the%20void.png" alt="wiest.world" /></Box>
      </main>
    </div>
</ChakraProvider>
  )
  }
}
export default App
