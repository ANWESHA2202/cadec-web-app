import Select from "react-select";
import { Text, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useToast } from "@chakra-ui/react";
import fetchApi from "../FetchApi/fetchApi";
import { decodeToken } from "react-jwt";

const Subjects = () => {
  const [options, setOptions] = useState({
    dscOptions: [],
    dseOptions: [],
    geOptions: [],
    aeccOptions: [],
    vacOptions: [],
    secOptions: [],
  });
  const [entries, setEntries] = useState({});
  const toast = useToast();

  const getAllSubjects = async () => {
    const token = decodeToken(localStorage.getItem("token"));
    const res = await fetchApi(
      `academic/subjects/subjects_by_course/?course_id=${parseInt(
        token?.course_id
      )}`,
      "",
      false,
      "get"
    );

    let dscOptions = [];
    let dseOptions = [];
    let geOptions = [];
    let vacOptions = [];
    let aeccOptions = [];
    let secOptions = [];
    res?.data?.data?.subjects?.forEach((sub) => {
      switch (sub?.type) {
        case "DSC": {
          let obj = {
            value: sub?.subid,
            label: sub?.name,
          };
          dscOptions.push(obj);
          break;
        }
        case "DSE": {
          let obj = {
            value: sub?.subid,
            label: sub?.name,
          };
          dseOptions.push(obj);
          break;
        }
        case "GE": {
          let obj = {
            value: sub?.subid,
            label: sub?.name,
          };
          geOptions.push(obj);
          break;
        }
        case "VAC": {
          let obj = {
            value: sub?.subid,
            label: sub?.name,
          };
          vacOptions.push(obj);
          break;
        }
        case "AECC": {
          let obj = {
            value: sub?.subid,
            label: sub?.name,
          };
          aeccOptions.push(obj);
          break;
        }
        case "SEC": {
          let obj = {
            value: sub?.subid,
            label: sub?.name,
          };
          secOptions.push(obj);
          break;
        }
      }
    });

    setOptions({
      dscOptions,
      dseOptions,
      geOptions,
      vacOptions,
      aeccOptions,
      secOptions,
    });
  };

  const fetchSubjectDetails = async () => {
    let token = decodeToken(localStorage?.getItem("accessToken"));
    const res = await fetchApi(
      `user/students/${token["stu-id"]}`,
      "",
      false,
      "get"
    );
    if (res.status === 200) {
      setEntries((prev) => ({
        ...prev,
        dsc_choices: res?.data?.dsc_choices || [],
        dse_choices: res?.data?.dse_choices || [],
        ge_choice: res?.data?.ge_choice || "",
        sec_choice: res?.data?.sec_choice || "",
        vac_choice: res?.data?.vac_choice || "",
        aecc_choice: res?.data?.aecc_choice || "",
      }));
    }
  };

  const handleSelectChange = (e, field) => {
    if (Array.isArray(e)) {
      setEntries((prevEntries) => ({
        ...prevEntries,
        [field]: e.map((item) => item.value),
      }));
    } else {
      setEntries((prevEntries) => ({ ...prevEntries, [field]: e.value }));
    }
  };

  const handleUpdateSubjectDetails = async () => {
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
        title: "Subject Details Updated",
        description: res.data?.message || res?.message,
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Some error has occurred",
        description: res.data?.message || res?.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    getAllSubjects();
    fetchSubjectDetails();
  }, []);

  return (
    <div className="w-1/2 h-full flex flex-col space-y-5">
      <div>
        <Text className="font-semibold text-gray-700">
          DSC Subjects<span className="text-red-500">*</span>
        </Text>
        <Select
          options={options.dscOptions}
          isSearchable
          isMulti
          onChange={(e) => handleSelectChange(e, "dsc_choices")}
        />
      </div>
      <div>
        <Text className="font-semibold text-gray-700">
          DSE Subjects<span className="text-red-500">*</span>
        </Text>
        <Select
          options={options?.dseOptions}
          isSearchable
          isMulti
          onChange={(e) => handleSelectChange(e, "dse_choices")}
        />
      </div>
      <div>
        <Text className="font-semibold text-gray-700">
          GE Subjects<span className="text-red-500">*</span>
        </Text>
        <Select
          options={options.geOptions}
          isSearchable
          onChange={(e) => handleSelectChange(e, "ge_choice")}
        />
      </div>
      <div>
        <Text className="font-semibold text-gray-700">
          VAC Subjects<span className="text-red-500">*</span>
        </Text>
        <Select
          options={options.vacOptions}
          isSearchable
          onChange={(e) => handleSelectChange(e, "vac_choice")}
        />
      </div>
      <div>
        <Text className="font-semibold text-gray-700">
          AECC Subjects<span className="text-red-500">*</span>
        </Text>
        <Select
          options={options.aeccOptions}
          isSearchable
          onChange={(e) => handleSelectChange(e, "aecc_choice")}
        />
      </div>
      <div>
        <Text className="font-semibold text-gray-700">
          SEC Subjects<span className="text-red-500">*</span>
        </Text>
        <Select
          options={options.secOptions}
          isSearchable
          onChange={(e) => handleSelectChange(e, "sec_choice")}
        />
      </div>
      <div className="text-right">
        <Button
          colorScheme="black"
          className="bg-black"
          onClick={handleUpdateSubjectDetails}
        >
          Update Subjects
        </Button>
      </div>
    </div>
  );
};

export default Subjects;
