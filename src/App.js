import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Country from './components/Country.jsx'
import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
} from '@chakra-ui/react';
export default function App() {
  return (
    <div  style={{backgroundColor : "red", width: "100vw"}}>
      <Country />
    </div>
  )
}