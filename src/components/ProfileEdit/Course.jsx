import { useEffect, useState } from "react";
import { Text, Button, useToast } from "@chakra-ui/react";
import Select from "react-select";
import fetchApi from "../FetchApi/fetchApi";
import { decodeToken } from "react-jwt";

const sem = [
  { value: 1, label: "I" },
  { value: 2, label: "II" },
  { value: 3, label: "III" },
  { value: 4, label: "IV" },
  { value: 5, label: "V" },
  { value: 6, label: "VI" },
  { value: 7, label: "VII" },
  { value: 8, label: "VIII" },
];

const Course = () => {
  const toast = useToast();
  const [passingyears, setPassingyears] = useState([]);
  const [entries, setEntries] = useState({});
  const [coursesOption, setCoursesOption] = useState([
    { label: "", value: "" },
  ]);

  const getAllCourses = async () => {
    const res = await fetchApi("academic/courses", "", false, "GET");
    if (res.status === 200) {
      let options = [];
      res?.data?.data?.courses?.forEach((course) => {
        let obj = {};
        obj.value = course.course_id;
        obj.label = `${course.course_name} ${course.type}`;

        options.push(obj);
      });

      setCoursesOption(options);
    }
  };

  const fetchCourseDetails = async () => {
    const token = decodeToken(localStorage?.getItem("token"));
    const res = await fetchApi(
      `user/students/${token["stu-id"]}`,
      "",
      false,
      "GET"
    );
    if (res.status === 200) {
      setEntries({
        course: res?.data?.course || "",
        sem: res?.data?.sem || "",
        pass_year: res?.data?.pass_year || "",
      });
    }
  };

  useEffect(() => {
    getAllCourses();
    fetchCourseDetails();
    const currentYear = new Date().getFullYear();
    let years = [];
    for (let i = 0; i < 4; i++) {
      let year = currentYear + i;
      years.push({ value: year, label: year.toString() });
    }
    setPassingyears(years);
  }, []);

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

  const handleUpdateCourseDetails = async () => {
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
        title: "Course Details Updated",
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

  return (
    <div className="w-1/2 h-full flex flex-col space-y-5">
      <div>
        <Text>Select Your Course</Text>
        <Select
          options={coursesOption}
          isSearchable
          value={
            coursesOption[
              coursesOption.findIndex(
                (option) => option.value === entries.course
              )
            ] || ""
          }
          onChange={(e) => handleSelectChange(e, "course")}
        />
      </div>
      <div>
        <Text>Your Current Semester:</Text>
        <Select
          options={sem}
          isSearchable
          value={
            sem[sem.findIndex((option) => option.value === entries.sem)] || ""
          }
          onChange={(e) => handleSelectChange(e, "sem")}
        />
      </div>
      <div>
        <Text>Your Passing Year:</Text>
        <Select
          options={passingyears}
          isSearchable
          value={
            passingyears[
              passingyears.findIndex(
                (option) => option.value === entries.pass_year
              )
            ] || ""
          }
          onChange={(e) => handleSelectChange(e, "pass_year")}
        />
      </div>
      <div className="text-right">
        <Button
          colorScheme="black"
          className="bg-black"
          onClick={handleUpdateCourseDetails}
        >
          Update Course Details
        </Button>
      </div>
    </div>
  );
};

export default Course;
