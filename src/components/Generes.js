import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Action from './Action'
import Comedy from "./Comedy"
import Thriller from "./Thriler"
import Anime from "./Anime"
import "../styles/Generes.css"
import Horror from './Horror'
//import { Crime } from './Crime'
import Crime from "./Crime"
import Drama from "./Drama"



const Generes = ({ data }) => {

  return (<>
    <p className='text-center mt-14 font-bold text-2xl heading relative top-4'>CHOOSE FROM VARIOUS GENERES</p>
    <Tabs variant='soft-rounded'>
      <TabList className='mt-28 flex flex-row gap-20 relative tabLis' >
        <Tab className='indi-tab'>ACTION</Tab>
        <Tab className='indi-tab'>ADVENTURE</Tab>
        <Tab className='indi-tab'>THRILLER</Tab>
        <Tab className='indi-tab'>ANIME</Tab>
        <Tab className='indi-tab'>HORROR</Tab>
        <Tab className='indi-tab'>CRIME</Tab>
        <Tab className='indi-tab'>DRAMA</Tab>

      </TabList>

      <TabPanels>


        <TabPanel className='item-holder'>
          <Action />
        </TabPanel>


        <TabPanel className='item-holder' >
          <Comedy />
        </TabPanel>


        <TabPanel className='item-holder'>
          <Thriller />
        </TabPanel>


        <TabPanel className='item-holder'>
          <Anime />
        </TabPanel>


        <TabPanel className='item-holder'>
          <Horror />
        </TabPanel>

        <TabPanel className='item-holder'>
          <Crime />
        </TabPanel>

        <TabPanel className='item-holder'>
          <Drama />
        </TabPanel>


      </TabPanels>
    </Tabs>

  </>
  )
}

export default Generes