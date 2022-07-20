import React,{useContext, useEffect, useRef, useState} from "react";
import { contextModel,WalletContext } from "../../contexts/walletCtx";
import {Box,Button,Text} from '@chakra-ui/react';
import neatiologo from '../../assets/neatiologo.svg';
import Image from 'next/image'


export default function HeaderComponent(props) {
    const stopUseEffect = useRef(false)
    const [metamaskInstalled,setMetamaskInstalled] = useState(false)
    const walletCtx = useContext(WalletContext)
    const connectMetamask = ()=>{
        if(!metamaskInstalled){
            walletCtx.installMetamask()
        }else{
            walletCtx.connectWallet()
        }
    }
    useEffect(()=>{
        if(stopUseEffect.current === false){
            const isMemamaskInstalled = walletCtx?.checkMetamaskInstalled()
            console.log(isMemamaskInstalled)
            setMetamaskInstalled(isMemamaskInstalled)
        }
        console.log(window.ethereum)
        stopUseEffect.current = true;
   },[])
   return( <Box bg='rgba(0,0,0,1)' w='100vw' h='10vh' pl={['2','3','10']} display='flex' alignItems='center' justifyContent='space-between' pr={['2','3','10']}>
        <Box display='flex' alignItems='center'h='max-content' w='max-content'>
        <Image src={neatiologo} height='50px' width='50px' />
        <Text bgGradient='linear(to-b, 300, primary, secondary, 100, 200)' 
        bgClip='text'  fontSize={['0.8em','1em','1.4em','2em']} fontWeight='bold' >NEATIO</Text>
        </Box>
        <Text textAlign='center' flex='1' bgGradient='linear(to-t, 300, primary, secondary, 100, 200)' 
        bgClip='text'  fontSize={['0.8em','1em','1.4em','2em']} fontWeight='bold' >ASSETS BRIDGE</Text>
        {walletCtx.accounts.length === 0 && <Button  h='70%' color='#fff' padding={['2','3','5',]} _hover={{boxShadow:'inset 0px 0px 10px #fff' }}
         fontSize='0.8em' fontWeight='bold' boxShadow='0px 0px 10px #fff' onClick={connectMetamask} borderRadius='10px' size='md'>
            {metamaskInstalled ?'CONNECT WALLET' :'DOWNLOAD WALLET'}
         </Button>}
        {walletCtx.accounts.length > 0 && <Button  h='70%' color='#fff' padding='5' _hover={{boxShadow:'inset 0px 0px 10px #fff' }}
         fontSize='0.8em' fontWeight='bold' boxShadow='0px 0px 10px #fff' onClick={walletCtx.disconnectwallet} borderRadius='10px' size='md'>
            DISCONNECT WALLET
         </Button>}
    </Box>)
}