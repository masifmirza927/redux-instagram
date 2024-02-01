import React from 'react'
import SideWidget from "../components/SideWidget/SideWidget";

const Home = () => {
  const image = "https://fastly.picsum.photos/id/64/4326/2884.jpg?hmac=9_SzX666YRpR_fOyYStXpfSiJ_edO3ghlSRnH2w09Kg";
  return (
    <div className='row'>
      <div className='col-md-4'>

        <SideWidget name="John Doe" bio="I am a professional photographer" image={image}  />
      </div>
    </div>
  )
}

export default Home