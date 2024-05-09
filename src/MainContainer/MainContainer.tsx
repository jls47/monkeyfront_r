import { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import AdminBar from '../AdminBar/AdminBar'
import Modal from '../Modal/Modal'
import Results from '../Results/Results'
import Search from '../Search/Search'
import Upcoming from '../Upcoming/Upcoming'
import './MainContainer.css'

import { Song, Request } from '../types/types';

function MainContainer() {
    let s1 : Song = {key: "0", value: "1"};
    let r1 : Request = {key: "0", value: "1"};
    console.log("RS");
    console.log(s1);
    console.log(r1);

  return (
    <>
    <Navbar></Navbar>
    <AdminBar></AdminBar>
    <Modal type={"login"}></Modal>
    <h3>MainContainer</h3>
    <Search></Search>
    <Results></Results>
    <Upcoming></Upcoming>
    </>
  )
}

export default MainContainer
