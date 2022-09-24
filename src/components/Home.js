import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import Accessories from "../assets/accessories.jpg";
import ModelS from "../assets/model-s.jpg";
import Model3 from "../assets/model-3.jpg";
import ModelX from "../assets/model-x.jpg";
import ModelY from "../assets/model-y.jpg";
import SolarPanels from "../assets/solar-panel.jpg";
import SolarRoof from "../assets/solar-roof.jpg";

function Home() {
  return (
    <Container>
      <Section
      title='Model S'
      description='Order Online for Touchless Deliver'
      backgroundImg={ModelS}
      leftButtonText='custom order'
      rightButtonText='Existing inventory'/>
      <Section
       title='Model 3'
       description='Order Online for Touchless Deliver'
       backgroundImg={Model3}
       leftButtonText='custom order'
       rightButtonText='Existing inventory'/>
      <Section
       title='Model X'
       description='Order Online for Touchless Deliver'
       backgroundImg={ModelX}
       leftButtonText='custom order'
       rightButtonText='Existing inventory'/>
      <Section
       title='Model Y'
       description='Order Online for Touchless Deliver'
       backgroundImg={ModelY}
       leftButtonText='custom order'
       rightButtonText='Existing inventory'/>
      <Section
       title='Lowest Cost Solar Panels in America'
       description='Money-back guarantee'
       backgroundImg={SolarPanels}
       leftButtonText='order now'
       rightButtonText='Learn More '/>
      <Section
       title='Solar for New Roofs'
       description='Solar Roofs costs Less Than a New Roof Plus Solar Panels'
       backgroundImg={SolarRoof}
       leftButtonText='order now'
       rightButtonText='Learn More '/>
      <Section
       title='Accessories'
       description=''
       backgroundImg={Accessories}
       leftButtonText='Shop now'/>
    </Container>
  )
}

export default Home

const Container = styled.div`
  height: 100vh;
`