import { useState, useEffect } from "react";
import { decodeToken } from "react-jwt";
import Tabs from "../components/layout/Tabs";
import ShowPdfs from "../components/ShowPdfs/ShowPdfs";
import fetchApi from "../components/FetchApi/fetchApi";

const StudyMaterials = () => {
  const [mostViewedNotes, setMostViewedNotes] = useState([]);
  const [mostViewedPyqs, setMostViewedPyqs] = useState([]);
  const [mostViewedSyllabuses, setMostViewedSyllabuses] = useState([]);

  const fetchMostViewedNotes = async () => {
    const res = await fetchApi(
      `material/notes/most_viewed_for_user`,
      "",
      true,
      "get",
      "access"
    );
    if (res.status === 200) {
      let notes = [];
      res?.data?.data?.notes?.forEach((note) => {
        let noteObj = {};
        noteObj.file = `../backend/public${note.pdf_file}`;
        noteObj.title = note?.title;
        noteObj.visitCount = note?.visit_count;

        notes.push(noteObj);
      });
      console.log(notes)
      setMostViewedNotes(notes);
    }
  };

  const fetchMostViewedPyq = async () => {
    const res = await fetchApi(
        `material/pyqs/get_pyq_for_user`,
        "",
        true,
        "get",
        "access"
      );
      if (res.status === 200) {
        let notes = [];
        res?.data?.data?.pyq?.forEach((note) => {
          let noteObj = {};
          noteObj.file = `../backend/public${note.pdf_file}`;
          noteObj.title = note?.title;
          noteObj.visitCount = note?.visit_count;
  
          notes.push(noteObj);
        });
        setMostViewedPyqs(notes);
      }
  };

  const fetchMostViewedSyllabus = async () => {
    const res = await fetchApi(
        `material/syllabus/get_syllabus_for_user`,
        "",
        true,
        "get",
        "access"
      );
      if (res.status === 200) {
        let notes = [];
        res?.data?.data?.syllabus?.forEach((note) => {
          let noteObj = {};
          noteObj.file = `../backend/public${note.pdf_file}`;
          noteObj.title = note?.title;
          noteObj.visitCount = note?.visit_count;
  
          notes.push(noteObj);
        });
        setMostViewedSyllabuses(notes);
      }
  };

  useEffect(() => {
    fetchMostViewedNotes();
    fetchMostViewedPyq();
    fetchMostViewedSyllabus();
  }, []);

  return (
    <div>
      <div className="w-full">
        <Tabs />
      </div>
      <div className="m-16 mt-10">
        <h1 className="text-2xl font-bold text-blue-950">Most Viewed Notes</h1>
        <ShowPdfs mostViewed={mostViewedNotes} />
      </div>
      <div className="m-16 mt-10">
        <h1 className="text-2xl font-bold text-blue-950">Most Viewed Previous Years Questions</h1>
        <ShowPdfs mostViewed={mostViewedPyqs} />
      </div>
      <div className="m-16 mt-10">
        <h1 className="text-2xl font-bold text-blue-950">Most Viewed Syllabuses</h1>
        <ShowPdfs mostViewed={mostViewedSyllabuses} />
      </div>
    </div>
  );
};

export default StudyMaterials;
