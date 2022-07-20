import React from 'react'
import {Box,Text} from '@chakra-ui/react';
import Image from 'next/image'


function Choosecoins() {
  return (
    <Box position='absolute' w='100vw' h='100vh' inset='0' bg='rgba(0,0,0,0.5)' display='flex' alignItems='center' justifyContent='center'>
        <Box w='30%' h='80%' border='1px solid #fff' mt='40' bg='#fff' borderRadius='10px'></Box>
    </Box>
  )
}

export default Choosecoins