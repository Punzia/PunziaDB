// eslint-disable-next-line
import { React, Switch, Router, Route } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHome } from '@fortawesome/free-solid-svg-icons'
// eslint-disable-next-line
import {
  Box,
  Flex,
  Button,
  Spacer,
  Avatar,
  Drawer,
  DrawerOverlay,
  DrawerHeader,
  DrawerBody,
  DrawerContent
} from "@chakra-ui/react";


import { useDisclosure } from '@chakra-ui/react'


// eslint-disable-next-line
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'



/*
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      bg="black.500"
      color="white"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          PunziaDB
        </Heading>
      </Flex>
      <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
      >
        <Text><a href='/profile'>Docs</a></Text>
        <Text><a href='/profile'>Profile</a></Text>
      </Stack>

      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <Button
          variant="outline"
          _hover={{ bg: "teal.700", borderColor: "teal.700" }}
        >
          Login / Sign Up
        </Button>
      </Box>
    </Flex>

        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href='/profile'>Profile</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href='#'>Contact</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Heading size='md'>PunziaDB</Heading>
*/
//https://codesandbox.io/embed/peaceful-bird-kd74j

const Header = (props) => {
  //const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (



    <Flex
      w="100%"
      px={5}
      py={4}
      justifyContent="space-between"
      alignItems="center"
    >
      <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>Menu</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Box>
        <Avatar src='https://pauldavidbaker.files.wordpress.com/2019/10/pdb-branding-thumbnail.png' />
      </Box>
      <Box>

        <Button
          href="/"
          as="a"
          variant="ghost"
          arai-label="Home"
          my={4}
        ><FontAwesomeIcon icon={faHome} />&nbsp;HOME</Button>


        <Button
          href="/profile "
          as="a"
          variant="ghost"
          arai-label="Profile"
          my={4}
        ><FontAwesomeIcon icon={faUser} />&nbsp;PROFILE</Button>

      </Box>


      <Spacer />
      <Box>
        <Button onClick={onOpen} colorScheme='teal'> Log in</Button>
      </Box>
    </Flex>
  );
};

export default Header;
