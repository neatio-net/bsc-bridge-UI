import {useContext, createContext,useState,useEffect} from 'react';

import MetaMaskOnboarding from '@metamask/onboarding'
export const contextModel = {
    connectWallet:()=>{},
    checkMetamaskInstalled:()=>{},
    installMetamask:()=>{},
    etherium:{},
    accounts:[],
    switchnetwork:(val)=>{},
    disconnectwallet:()=>{},
    getNativeTokenBalance:()=>{},
    nativeTokenBalance:Number,
}

export const WalletContext = createContext(contextModel)
export default function WalletCtx({children}){
    const [accounts,setAccounts] = useState([])
    const [ethObj,setEthObj] = useState({})
    const [bnbBalance,setBnbBalance] = useState('')

    let onboarding 
    useEffect(()=>{
        onboarding = new MetaMaskOnboarding();

    },[])
    const disconnectwallet =()=>{
        setAccounts([]);
    }
    const switchnetwork =async(val)=>{
        const networks = {
            bnbtest:{
                chainid:'00x61',
                rpcUrls:['https://data-seed-prebsc-1-s1.binance.org:8545/'],
                chainName: 'Binance Test Network',
                nativeCurrency: { name: 'BNB', decimals: 18, symbol: 'BNB' },
                blockExplorerUrls: ['https://testnet.bscscan.com/'],
            },
            matictest:{
                chainid:'000x13881',
                rpcUrls:['https://rpc-mumbai.matic.today'],
                chainName: 'Goërli',
                nativeCurrency: { name: 'MATIC', decimals: 18, symbol: 'MATIC' },
                blockExplorerUrls: ['https://mumbai.polygonscan.com/'],
            },
            ftmtest:{
                chainid:'0xfa2',
                rpcUrls:['https://rpc.testnet.fantom.network/'],
                chainName: 'Fantom testnet',
                nativeCurrency: { name: 'FTM', decimals: 18, symbol: 'FTM' },
                blockExplorerUrls: ['https://testnet.fantom.network/'],
            },
        }
        try{
            const addnetwork = await window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [
                    networks[val]
                ],
              });
              console.log(addnetwork)  
            }catch(e){
                console.log(e.message)
            } 
        }
        const getNativeTokenBalance =async()=>{
        try{
            const ethAccounts =  await window.ethereum.request({ method: 'eth_requestAccounts' });
            const currentNet =  await window.ethereum.request({ method: 'net_version' });
            if(currentNet === '97'){
            const balance = await window.ethereum.request({
                method: 'eth_getBalance',
                params: [
                    ethAccounts[0],
                    'latest'
                ],
              });
              setBnbBalance((parseInt(balance)/10 ** 18).toFixed(4))
              console.log(parseInt(balance))
              console.log({currentNet})
            }else{
                setBnbBalance('Wrong network, Switch to')
            }
            }catch(e){
                console.log(e.message)
            } 

    }
    const connectWallet = async()=>{
        try {
          const ethAccounts =  await window.ethereum.request({ method: 'eth_requestAccounts' });
          setAccounts(ethAccounts)
          if(ethAccounts.length >0){

          }
          } catch (error) {
            console.error(error);
          }
  }
  const checkMetamaskInstalled = ()=>{
      const { ethereum } = window;
      setEthObj(ethereum)
  return Boolean(ethereum && ethereum.isMetaMask);
    }

//This will start the onboarding proccess
const onClickInstall = () => {
  //On this object we have startOnboarding which will start the onboarding process for our end user
  onboarding?.startOnboarding();
};
const walletStuff = {
    connectWallet:connectWallet,
    checkMetamaskInstalled:checkMetamaskInstalled,
    installMetamask:onClickInstall,
    etherium:ethObj,
    accounts:accounts,
    switchnetwork:switchnetwork,
    disconnectwallet:disconnectwallet,
    getNativeTokenBalance:getNativeTokenBalance,
    nativeTokenBalance:bnbBalance

}

    return <WalletContext.Provider value={walletStuff}>{children}</WalletContext.Provider>
}