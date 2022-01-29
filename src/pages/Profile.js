import React from 'react';
//import { Fade, ScaleFade, Slide, SlideFade } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faComment, faFilm, faHome, faBug } from '@fortawesome/free-solid-svg-icons'

import './css/style.css';
import './css/xp_style.css';
import './css/settings.css';
import './css/phone-styling.css'

import Boxes from './Boxes';

//import avatar from './FFxjXA6XoAQpzro.jpg';
//import background from './static-assets-upload17141707197114762008.jpg';
import './css/navbar.css'
import { ChakraProvider } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel,Box } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button
} from '@chakra-ui/react'


let userDB = [
    {
        name: "Mira",
        avatar: '',
        background: '',
        motto: "✿♥‿♥✿"

    },
    {
        name: "h3x_w1tch",
        avatar: "https://i.pinimg.com/564x/42/f6/76/42f676e9bbce4ada4a531a239f6ef1c7.jpg",
        //background: "https://pbs.twimg.com/media/FFzWLksWYAQWsqF?format=jpg&name=large",
        background: "https://cdn.donmai.us/sample/b3/24/__qiyana_league_of_legends_drawn_by_carcass_artist__sample-b324e1933a22a28f22dac28e0933ba31.jpg",
        motto: "✿♥‿♥✿",
        settings: {
            blur: "8px"
        }
        

    },
    {
        name: "Mikasa",
        avatar: "https://i.pinimg.com/564x/1e/d1/74/1ed1744fe04dc6b168c191644d8598df.jpg",
        background: '',
        motto: "✿♥‿♥✿"

    }, 
    {
        name: "Rinna",
        avatar: "https://i.pinimg.com/564x/1a/d7/84/1ad7848f3cba302a68b29b61f8da7ce4.jpg",
        background: '',
        motto: "✿♥‿♥✿"
    },
    {
        name: "Aayla",
        avatar: "asdasdas",
        background: "",
        motto: "✿♥‿♥✿"
    }


];

let uid = 3;
let username = userDB[uid].name;
console.log(username);
/*
            <header>
                <nav id="panel">
                    <div className="wrapper1">
                        <ul className="sidenav__menu">
                            <li><a href="https://db.punzia.tech">
                                <FontAwesomeIcon icon={faHome} />aa
                            </a></li>
                            <li><a href="https://db.punzia.tech">
                                <FontAwesomeIcon icon={faDatabase} /> Databases
                            </a></li>
                            <li><a href="#post-feed"><FontAwesomeIcon icon={faStar} /> Upgrades</a></li>
                        </ul>
                    </div>

                </nav>
            </header>
                                                <ul>
                                        <li><a href="https://db.punzia.tech">
                                            
                                        </a></li>
                                        <li><a href="#post-feed"></a></li>
                                        <li><a href="#movies_feed"></a></li>
                                        <li><a href="#anime_feed">ANIMELIST</a></li>
                                        <li style={{ float: 'right' }}><a href="#settings"></a></li>
                                    </ul>



*/


const Profile = () => {
    //const { isOpen, onToggle } = useDisclosure()
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <ChakraProvider>
            <div className="puWrapper">


                <div className="content">
                    <div className="profile_user_container">
                        <div className="header">
                            <img src={userDB[uid].background} alt="background"></img>
                        </div>
                        <div className="profile_container">
                            <div className="wrapper">

                                <div className="img_profile">
                                    <img src={userDB[uid].avatar} alt="avatar"></img>
                                </div>

                                <div className="name_profile">
                                    <span>{userDB[uid].name}</span>
                                </div>


                                <div className="profile_xp">
                                    <div className="xp-border">
                                        <div className="xp-experience"></div>
                                    </div>
                                    <span>LEVEL <span id="level-color">1</span>,
                                        <span className="p_exp">2 XP</span>
                                    </span>
                                </div>
                                <div className="profile_username">
                                    <div className="profile_motto">
                                        <p className="motto">"{userDB[uid].motto}"</p>
                                    </div>
                                    <div className="social_wrapper">
                                        <div>hii</div>


                                    </div>
                                    <div className="p_navbar">
                                        <Modal isOpen={isOpen} onClose={onClose}>
                                            <ModalOverlay />
                                            <ModalContent>
                                                <ModalHeader>Modal Title</ModalHeader>
                                                <ModalCloseButton />
                                                <ModalBody>
                                                    <p><FontAwesomeIcon icon={faBug} /> Bee is a sweetheart</p>
                                                </ModalBody>

                                                <ModalFooter>
                                                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                                                        Close
                                                    </Button>
                                                    <Button variant='ghost'>Secondary Action</Button>
                                                </ModalFooter>
                                            </ModalContent>
                                        </Modal>


                                        <Tabs>
                                            <TabList fontSize='32'>
                                                <Tab><FontAwesomeIcon icon={faHome} /></Tab>
                                                <Tab><FontAwesomeIcon icon={faComment} /></Tab>
                                                <Tab><FontAwesomeIcon icon={faFilm} /></Tab>
                                                <Tab>Animelist</Tab>
                                                <Tab onClick={onOpen}><FontAwesomeIcon icon={faCog} /></Tab>
                                            </TabList>

                                            <TabPanels>
                                                <TabPanel>
                                                    <p>one!</p>
                                                    <Boxes/>
                                                </TabPanel>
                                                <TabPanel>
                                                    <p>POSTS</p>
                                                    <Box bg='tomato' w='100%' p={4} color='white'>
                                                        This is the Box
                                                    </Box>
                                                </TabPanel>
                                                <TabPanel>
                                                    <p>Movies</p>
                                                </TabPanel>
                                                <TabPanel>
                                                    <p>Animelist</p>
                                                </TabPanel>
                                            </TabPanels>
                                        </Tabs>

                                    </div>

                                </div>


                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </ChakraProvider>
    );

};

export default Profile;

