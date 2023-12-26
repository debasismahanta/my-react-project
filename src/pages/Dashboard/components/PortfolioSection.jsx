import { Button, HStack, Icon, Stack, Tag, Text } from '@chakra-ui/react';
import React from 'react';
import { IoIosInformationCircleOutline } from "react-icons/io";
import { GoArrowDown } from "react-icons/go";

const PortfolioSection = () => {
  return (
    <HStack justify="space-between" bg="white" borderRadius="xl" p="6"
      align={{
        base: "flex-start",
        xl: "center",
      }}
      flexDir={{
        base: "column",
        xl: "row",
      }}
      spacing={{
        base: "4",
        xl: "0"
      }}
    >
      <HStack spacing={{
        base: "0",
        xl: "16",
      }}
        align={{
          base: "flex-start",
          xl: "center",
        }}
        flexDir={{
          base: "column",
          xl: "row",
        }}
      >
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Total Portfolio Value</Text>
            <Icon as={IoIosInformationCircleOutline} />
          </HStack>
          <Text textStyle="h2">₹ 112,312.24</Text>
        </Stack>

        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Wallet Balances</Text>
            <Icon as={IoIosInformationCircleOutline} />
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
              <Text fontSize="24px" fontWeight="">₹ 22.39401000</Text><Tag colorScheme="gray" fontWeight="medium">BTC</Tag>
            </HStack>
            <HStack>
              <Text fontSize="24px" fontWeight="">₹ 1,300.00</Text><Tag colorScheme="gray" fontWeight="medium">INR</Tag>
            </HStack>
          </HStack>
        </Stack>
      </HStack>

      <HStack>
        <Button leftIcon={<Icon as={GoArrowDown} />}>Deposit</Button>
        <Button leftIcon={<Icon as={GoArrowDown} />}>Withdraw</Button>
      </HStack>
    </HStack>
  );
};

export default PortfolioSection;