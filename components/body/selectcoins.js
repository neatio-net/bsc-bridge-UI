import React from 'react'
import {
    Menu, MenuButton,MenuList,MenuItem,
    MenuItemOption, MenuGroup,MenuOptionGroup,
    MenuDivider,Text, Button,Box
  } from '@chakra-ui/react'
  import {ChevronDownIcon } from '@chakra-ui/icons'
  import Image from 'next/image'
  import bnblogo from '../../assets/bnblogo.png'
  import ftmlogo from '../../assets/ftmlogo.png'
  import maticlogo from '../../assets/maticlogo.png'
  import celologo from '../../assets/celologo.png'
function Selectcoins() {
  return (
    <Box w='50%' h='70%' p={['2']} borderRadius='10px' boxShadow=' 5px 5px 10px #c8c8c8, -5px -5px 10px #c8c8c8' display='flex' alignItems='center' 
    justifyContent='center' gap={['3','5']}>
    <Image src={bnblogo} height='30px' width='30px'/>
<Menu>
    <MenuButton as={Button} fontWeight='bold' fontSize={['0.7em','0.9em','0.8em','1.5em']} color='#000' 
    // rightIcon={<ChevronDownIcon />}
    >
        BNB to NeatBNB
    </MenuButton>
    {/* <MenuList bg='#c5c5c5' borderRadius='10px' minW='200px' w='300px' pl='5'>
    <MenuItem minH='48px' display='flex' gap='5'justifyContent='flex-start' pl='5'>
      <Image src={bnblogo}  height='30px' width='30px'/>
      <Text  color='#000'>BNB to NeatBNB</Text>
    </MenuItem>
    <MenuItem minH='40px' display='flex' gap='5' justifyContent='flex-start' pl='5'>
      <Image src={maticlogo}  height='30px' width='30px'/>
      <Text>MATIC to NeatMATIC</Text>
    </MenuItem>
    <MenuItem minH='40px' display='flex' gap='5' justifyContent='flex-start' pl='5'>
      <Image src={ftmlogo}  height='30px' width='30px'/>
      <Text>FTM to NeatFTM</Text>
    </MenuItem> */}
    {/* <MenuItem minH='40px' display='flex' gap='5' justifyContent='flex-start' pl='5'>
      <Image src={celologo}  height='30px' width='30px'/>
      <Text>CELO to NeatCelo</Text>
    </MenuItem> */}
  {/* </MenuList> */}

</Menu>
</Box>
  )
}

export default Selectcoins