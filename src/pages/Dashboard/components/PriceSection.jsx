import { Button, Flex, HStack, Icon, Stack, Text, Image, TabList, Tab, Tabs, TabPanels, TabPanel } from '@chakra-ui/react';
import { CustomCard } from '../../../chakra/CustomCard';
import { BsArrowUpRight } from "react-icons/bs";
import { FaPlusCircle } from "react-icons/fa";
import { FaCircleMinus } from "react-icons/fa6";


const PriceSection = () => {

    const timestamps = ["7:15 PM", "7:55 PM", "8:55 PM", "10:55 PM"]

    return (
        <CustomCard>
            <Flex justify="space-between" align="start">
                <Stack>
                    <HStack color="black.80">
                        <Text fontSize="sm">Wallet Balances</Text>

                    </HStack>
                    <HStack spacing={2}
                        align={{
                            base: "flex-start",
                            sm: "center",
                        }}
                        flexDir={{
                            base: "column",
                            sm: "row",
                        }}
                    >

                        <HStack>
                            <Text fontSize="23px" fontWeight="">₹ 26,670.25</Text>
                            <HStack fontWeight="medium" color="green.500">
                                <Icon as={BsArrowUpRight} />
                                <Text fontSize="sm" fontWeight="medium">0.04%</Text>
                            </HStack>
                        </HStack>
                    </HStack>
                </Stack>

                <HStack>
                    <Button leftIcon={<Icon as={FaPlusCircle} />}>Deposit</Button>
                    <Button leftIcon={<Icon as={FaCircleMinus} />}>Withdraw</Button>
                </HStack>
            </Flex>

            <Tabs variant="soft-rounded" >
                <Flex justify="end" >
                <TabList bg="black.5" p="3px">
                    {
                        ["1H","1D","1W","1M"].map((tab)=>(
                            <Tab _selected={{
                                bg:"white",
                            }} 
                            key={tab} fontSize="sm" p="6px" borderRadius="4">
                                {tab}
                            </Tab>
                        ))}
                </TabList>
                </Flex>
                <TabPanels>
                    <TabPanel>
                        <Image w="100%" src="/Graph.png" mt="3rem" />
                        <HStack justify="space-between">
                            {timestamps.map((timestamps) => (
                                <Text key={timestamps} fontSize="sm" color="black.80">
                                    {timestamps}
                                </Text>
                            ))}
                        </HStack>
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>

        </CustomCard>
    );
};

export default PriceSection;