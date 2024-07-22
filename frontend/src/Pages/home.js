import React, { useEffect } from "react";
import {
  Container,
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) navigate("/chats");
  }, [navigate]);

  return (
    <Container maxW="xl" centerContent>
      {/* <Box
        d="flex"
        justifyContent="center"
        textAlign="center"
        p={3}
        border="2px"
        bg="#161616"
        borderColor="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="3xl"
        borderWidth="0.1px"
      >
        <Text fontSize="4xl" fontFamily="Work sans" textColor={"white"}>
          Nexus
        </Text>
      </Box> */}
      <Box
        bg="#161616"
        borderColor="white"
        w="100%"
        p={4}
        borderRadius="3xl"
        textColor="white"
        borderWidth="0.1px"
        marginTop={"120px"}
      >
        <Tabs isFitted variant="soft-rounded" colorScheme="yellow">
          <TabList mb="1em">
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Home;
