import React, { useEffect, useState } from 'react';
import axios from './axios';
// import requests from './requests'

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData(){

    }
    fetchData()
  }, []);

  return (
    <header>{/*  <<< Background Image */}
        {/* Title */}
        {/* Div > 2buttons - play and my list */}
        {/* Description */}
    </header>
  )
}

export default Banner