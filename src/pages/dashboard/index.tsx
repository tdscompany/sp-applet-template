import { logout } from "@/services/auth";
import { Button, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

const Dashboard: React.FC = () => {
  const router = useRouter();

  const handleLogout = async () => {
    router.push("/");
    await logout();
  };

  return (
    <>
      <Heading>Applet template</Heading>

      <Button onClick={handleLogout} colorScheme="pink">
        sair
      </Button>
    </>
  );
};

export default Dashboard;
