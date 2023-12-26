import { Box, Button, Container, HStack, Heading, Icon, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { FaBars, FaUserCircle } from "react-icons/fa";

const Topnav = ({ title, onOpen }) => {
    return (
        <Box px="4" bg="white">
            <HStack maxW="70rem" h="16" justify="space-between" px="32" mx="auto">
                <Icon as={FaBars} onClick={onOpen} display={{
                    base: "block",
                    lg: "none",
                }} />
                <Heading fontWeight="medium" fontSize="28px">
                    {title}
                </Heading>

                <Menu>
                    <MenuButton>
                        <Icon as={FaUserCircle} fontSize="24px" />
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Logout</MenuItem>
                        <MenuItem>Support</MenuItem>
                    </MenuList>
                </Menu>

            </HStack>
        </Box>
    )
};

export default Topnav;