import React, { useContext, useEffect, useRef, useState } from 'react'
import {Box,Button,IconButton,Input,Text,useToast} from '@chakra-ui/react'
import Choosecoins from '../lightboxes/choosecoins'
import {ArrowDownIcon, CopyIcon} from '@chakra-ui/icons'
import Selectcoins from './selectcoins'
import Addwallet from './addwallet'
import Web3 from 'web3'
import { bridgeAbi } from '../utils/abi'
import  { WalletContext } from '../../contexts/walletCtx'

function Bodycomponent() {
  let stopUseEffect = useRef(false)
  const toast = useToast()
  const walletctx = useContext(WalletContext)
  const bscbridgeCA = '0x353E881C3Ad4827B883a8290DCab032514f180a8';
  const [amountTOBridge,setAmountToBridge] = useState(0);
 
  const copyContractAddress = ()=>{
    navigator.clipboard.writeText('0xF4E0f2B46Ef9AecF74d97039F9d84bbd55eDF955');
  }
  const bridgeToken = async()=>{
    if(walletctx.accounts.length === 0){
      walletctx.connectWallet()
    }else{
    if(amountTOBridge != null && amountTOBridge != 0 && amountTOBridge != undefined){
    try{
      walletctx.switchnetwork('bnbtest')
    const amount = (parseFloat(amountTOBridge) * 10 ** 18).toString();
    const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545/')
    const bridge = new web3.eth.Contract(bridgeAbi,bscbridgeCA);
    console.log(walletctx.accounts)
    const transferCt = await bridge.methods.recieve().encodeABI();
    const sendTx =  await window.ethereum.request({ method: 'eth_sendTransaction', params:[{
      'from':walletctx.accounts[0],
      'to':bscbridgeCA,
      'value':Number(amount).toString(16),
      data:transferCt
    }]});
    walletctx.getNativeTokenBalance()
    console.log(sendTx)
  }catch(e){
    console.log(e.message)
  }
}
} 
  }
  useEffect(()=>{
    if(stopUseEffect.current === false){
      walletctx.getNativeTokenBalance()
    }
    stopUseEffect.current = true;
  },[])
  return (
    <Box bg='#f5f5f5' border='1px solid primary' w='100vw' h=' 90vh'  display='flex' flexDirection='column' gap='5' alignItems='center' justifyContent='center'>
        <Box display='flex' gap='10' alignItems='center' justifyContent='center' boxShadow='inset 5px 5px 10px #c8c8c8,inset -5px -5px 10px #c8c8c8'
         borderRadius='10px' w={['95%','85%','75%','60%']} h='10vh'>
        <Selectcoins />
        <Addwallet />
        </Box>
        <Box boxShadow='inset 5px 5px 10px #c8c8c8,inset -5px -5px 10px #c8c8c8' display='flex'pt='10' justifyContent='space-evenly' pb='10s'
         flexDirection='column' border='1px solid #f0fffb0 ' borderRadius='10px' w={['95%','85%','75%','60%']} h='80%'>
            <Box w='90%' h='25%' boxShadow='5px 5px 10px #c8c8c8,-5px -5px 10px #c8c8c8' display='flex' flexDirection='column' 
            justifyContent='center' alignItems='center' borderRadius='10px' alignSelf='center'>
              <Input  boxShadow='inset 5px 5px 10px #c8c8c8,inset -5px -5px 10px #c8c8c8' type='number'
              placeholder='Input the amount to bridge' borderColor='#000' borderWidth='1px' textAlign='center'
              w={['95%','85%','75%','60%']} h='40%' borderRadius='10px'
              onChange={(e)=>setAmountToBridge(e.target.value)} />
              <Text fontSize={['0.6em','0.8em','1em','1.2em']} fontWeight='bold'>Balance: {walletctx.nativeTokenBalance +' BNB'}</Text>
            </Box>
            <Box h='10% ' display='flex' alignItems='center' justifyContent='center'>
                <Box boxShadow='inset 5px 5px 10px #c8c8c8,inset -5px -5px 10px #c8c8c8' borderRadius='50%' h='50px' w='50px'>
                  <ArrowDownIcon h='3em' w='3em' color='primary'/>
                </Box>
            </Box>
            <Box w='90%' display='flex' flexDirection='column' justifyContent='center' alignItems='center' h='25%' boxShadow='5px 5px 10px #c8c8c8,-5px -5px 10px #c8c8c8' borderRadius='10px' alignSelf='center'>
              <Text fontSize={['0.6em','0.8em','1em','1.2em']} fontWeight='bold'>EXPECTING: {amountTOBridge && amountTOBridge + ' NeatBNB'}</Text>
              {/* <Text fontSize='1.2em' fontWeight='bold'>Balance:</Text> */}
              <Box display='flex' gap={['0','3','4','5']} pl={['2','3','4','5']} pr={['2','3','4','5']}>
                <Text fontSize={['0.5em','0.6em','1em','1.2em']} fontWeight='medium'>Contract Address: 0xF4E0f2B46Ef9AecF74d97039F9d84bbd55eDF955</Text>
                <IconButton onClick={copyContractAddress} icon={<CopyIcon />}/>
              </Box>
            </Box>
            <Button onClick={bridgeToken} fontWeight='bold' color='#fff' borderRadius='10px' bgGradient='radial( 300, primary, secondary, 100, 200)' 
            fontSize='1.5em' _hover={{bgGradient:'linear(to-b, 300, primary, secondary, 100, 200)'}} boxShadow='5px 5px 10px #c8c8c8,-5px -5px 10px #c8c8c8' w='200px' alignSelf='center' h='50px' >
              {walletctx.accounts.length === 0 ?'CONNECT':'BRIDGE'}
              </Button>
        </Box>
    </Box>
  )
}

export default Bodycomponent