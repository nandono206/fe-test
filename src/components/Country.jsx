import React, { useState, useEffect } from 'react'
import {Image,
        Box,
        Flex,
        Button} from '@chakra-ui/react'
export default function Country() {

  const [activeCountries, setActiveCountries] = useState('');
  
  const [countryItems, initCountry] = useState([])
  const fetchData = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all')
    if (!response.ok) {
      throw new Error('Data coud not be fetched!')
    } else {
      return response.json()
    }
  }

  useEffect(() => {
    fetchData()
      .then((res) => {
        initCountry(res)
      })
      .catch((e) => {
        console.log(e.message)
      })
  }, [])
  return (
      <Box bg="lightcoral" pl="10px" pr="50px">
        <div className="row">
        <h2 className="mb-3">Countries of the  World</h2>
        {countryItems.map((item, idx) => {
            return (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-3" key={idx}>
                
                <Flex direction="column" bg="white"
                as='button' alignItems="center" w="15rem"
                
                onClick={() => setActiveCountries(item.name)}
                backgroundColor= {activeCountries === item.name ? '#03e8fc' : ''}
                _hover={
                    { fontWeight: 'semibold', 
                    backgroundColor :  "lightseagreen",
                    cursor: "pointer"}}>
                
                <Box h="10%">
                <Image
                        src={item.flags.svg}
                        maxH="60%"
                        w="100%"

                        alt={item.name.common}
                    />
                </Box>
                    {/* <img
                    src={item.flags.svg}
                    className="card-img-top"
                    alt={item.name.common}
                    /> */}
                    
                
                <div className="card-body">
                    <h5 className="card-title">{item.name.common}</h5>
                </div>
                <ul >
                    <li style={{listStyleType: "none"}}>
                    <strong>Capital:</strong> {item.capital}
                    </li>
                    <li style={{listStyleType: "none"}}>
                    <strong>Population:</strong> {item.population}
                    </li>
                    <li style={{listStyleType: "none"}}>
                    <strong>Region:</strong> {item.continents[0]}
                    </li>
                </ul>
                
                </Flex>
           
                
            </div>
            )
        })}
        </div>
      </Box>
    
  )
}