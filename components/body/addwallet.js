import React, { useContext, useEffect, useRef, useState } from 'react'
import {Box,Button} from '@chakra-ui/react'
import { WalletContext } from '../../contexts/walletCtx'
function Addwallet() {
    let stopUseEffect = useRef(false)
    const [accounts,setAccounts] = useState([])
    const walletctx = useContext(WalletContext)
    useEffect(()=>{
            if(walletctx.accounts.length > 0){
                setAccounts(walletctx.accounts)
            }
        
    },[walletctx.accounts])
    const addNeatioToMetamask =async()=> {
        try{
        const addnetwork = await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: '0x203',
                rpcUrls: ['https://rpc.neatio.net'],
                chainName: 'NEATIO',
                nativeCurrency: { name: 'NEAT', decimals: 18, symbol: 'NEAT' },
                blockExplorerUrls: ['https://scan.neatio.net/'],
              },
            ],
          });
          console.log(addnetwork)  
        }catch(e){
            console.log(e.message)
        }
        }
  return (<>
    {walletctx.accounts.length > 0 &&<Button onClick={addNeatioToMetamask} fontWeight={['medium','medium','bold']} fontSize={['0.4em','0.5em','0.6em','0.7em','0.8em']} color='#fff' bg='primary' _hover={{bg:'100'}}
    boxShadow=' 5px 5px 10px #c8c8c8, -5px -5px 10px #c8c8c8' padding={['3','5','10']} borderRadius='10px' >ADD NEATIO TO METAMASK</Button>}
  </>
  )
}

export default Addwallet