import { MdMail } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import DashboardLayout from "../../Components/DashboardLayout";
import ContactCard from "./ContactCard";
import SupportCard from "./components/SupportCard";
import InfoCard from "../Dashboard/components/InfoCard";
import { Stack } from "@chakra-ui/react";

const Support = () => {
  return (
    <DashboardLayout>
      <Stack spacing="5rem">
        <SupportCard
          icon={MdMail}
          leftComponent={<ContactCard />}
          title="Contact Us"
          text="Have a question or just want to know more? Fell free to reach out to us."
        />
        <SupportCard
          icon={AiFillMessage}
          leftComponent={
            <InfoCard
              inverted={true}
              tagText="Contact"
              imgUrl="/image/Visual.png"
            />
          }
          title="Live Chat"
          text="Have a question or just want to know more? Fell free to reach out to us."
        />
      </Stack>
    </DashboardLayout>
  );
};

export default Support;