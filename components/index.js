import React from 'react'
import {Box,Text} from '@chakra-ui/react'
import Choosecoins from '../lightboxes/choosecoins'


function Bodycomponent() {
  return (
    <Box border='1px solid primary' w='100vw' h=' 90vh'  display='flex' alignItems='center' justifyContent='center'>
        {/* <Choosecoins /> */}
        <Box boxShadow='inset 5px 5px 10px #c8c8c8,inset -5px -5px 10px #c8c8c8' display='flex'pt='10' justifyContent='space-evenly' pb='10s' flexDirection='column' border='1px solid #f0fffb0 ' borderRadius='10px' w='60%' h='80%'>
            <Box w='90%' h='25%' boxShadow='5px 5px 10px #c8c8c8,-5px -5px 10px #c8c8c8' borderRadius='10px' alignSelf='center'></Box>
            <Box h='20% ' display='flex' alignItems='center' justifyContent='center'>
                <Box boxShadow='inset 5px 5px 10px #c8c8c8,inset -5px -5px 10px #c8c8c8' borderRadius='50%' h='50px' w='50px'></Box>
            </Box>
            <Box w='90%' h='25%' boxShadow='5px 5px 10px #c8c8c8,-5px -5px 10px #c8c8c8' borderRadius='10px' alignSelf='center'></Box>
        </Box>
    </Box>
  )
}

export default Bodycomponent