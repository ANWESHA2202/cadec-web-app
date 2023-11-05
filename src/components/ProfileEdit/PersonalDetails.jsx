import { Input, Text, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import fetchApi from "../FetchApi/fetchApi";
import { decodeToken } from "react-jwt";
import { useToast } from "@chakra-ui/react";

const PersonalDetails = () => {
  const [entries, setEntries] = useState({});
  const toast = useToast();

  const fetchPersonalDetails = async () => {
    const token = decodeToken(localStorage?.getItem("token"));
    const res = await fetchApi(
      `user/students/${token["stu-id"]}`,
      "",
      false,
      "GET"
    );
    if (res.status === 200) {
      setEntries({
        name: res?.data?.name || "",
        email: res?.data?.email || "",
        alternate_email: res?.data?.alternate_email || "",
        mobile: res?.data?.mobile || "",
      });
    }
  };

  const handleChange = (e) => {
    setEntries((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUpdatePersonalDetails = async () => {
    const token = decodeToken(localStorage?.getItem("token"));
    const res = await fetchApi(
      `user/students/${token["stu-id"]}/partial-update`,
      entries,
      true,
      "post",
      "access"
    );

    if (res.status === 200) {
      toast({
        title: "Personal Details Updated",
        description: res.message,
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Some error has occurred",
        description: res.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    fetchPersonalDetails();
  }, []);
  return (
    <div className="w-1/2 h-full flex flex-col space-y-5">
      <div>
        <Text>Your Name:</Text>
        <Input
          name="name"
          value={entries?.name || ""}
          onChange={handleChange}
          placeholder="eg. xyz"
        />
      </div>
      <div>
        <Text>Your Phone Number:</Text>
        <Input
          name="mobile"
          placeholder="+91 9876543210"
          value={entries?.mobile || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <Text>Your Email ID:</Text>
        <Input
          name="email"
          placeholder="abc@pgdav.du.ac.in"
          value={entries?.email || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <Text>Your alternate Email ID:</Text>
        <Input
          name="alternate_email"
          placeholder="abc@gmail.com"
          value={entries?.alternate_email || ""}
          onChange={handleChange}
        />
      </div>
      <div className="text-right">
        <Button
          colorScheme="black"
          className="bg-black"
          onClick={handleUpdatePersonalDetails}
        >
          Update Personal Details
        </Button>
      </div>
    </div>
  );
};

export default PersonalDetails;
