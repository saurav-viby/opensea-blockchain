import '../styles/globals.css'
import {ThirdwebWeb3Provider} from '@3rdweb/hooks'

/**
 * chain ID represe Rinkby n/W
 * the injected connector is web3 connection used by meta mask
 */

const supportedChainIds=[4]
const connectors={
  injected:{},
}
function MyApp({ Component, pageProps }) {
return (
<ThirdwebWeb3Provider 
supportedChainIds={supportedChainIds}
connectors={connectors}
>

<Component {...pageProps} />


</ThirdwebWeb3Provider>




)
}   

export default MyApp
