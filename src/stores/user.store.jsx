import { createContext, useState, useEffect} from "react";
import instance from "../utils/axiosRequest.js";

export const UserInfo = createContext({});

const UserInfoProvide = ({ children }) => {
  const [profile, setProfile] = useState()
  const [fetchProfile, setFetchProfile] = useState([]);
  const [courseOfLearningProcess, setCourseOfLearningProcess] = useState([])
  const [missons, setMissons] = useState([])
  const [fetchMisson, setFetchMisson] = useState()
  const [fetchCourseOfLearningProcess, setFetchCourseOfLearningProcess] = useState([])
  const [lessonsOfSummaryLesson, setLessonOfSummaryLesson] = useState([])
  const [fetchLessonsOfSummaryLesson, setFetchLessonsOfSummaryLesson] = useState([])
  useEffect(() =>{
    const getUser = async() =>{
        await instance.get('/users/profile')
        .then((res) => {
          setProfile(res?.data?.data?.user)
        })
        .catch(err => err)
    }
    getUser()
  }, [fetchProfile])
  useEffect(() =>{
    const getListCourse = async() =>{
        await instance.get('/learning_process')
        .then((res) => {
          setCourseOfLearningProcess(res?.data?.data?.courses)
        })
        .catch(err => err)
    }
    getListCourse()
  }, [fetchCourseOfLearningProcess])
  useEffect(() =>{
    const getListLesson = async() =>{
        await instance.get('/summary_lesson')
        .then((res) => {
          setLessonOfSummaryLesson(res?.data?.data?.summaryLesson?.lessons)
        })
        .catch(err => err)
    }
    getListLesson()
  }, [fetchLessonsOfSummaryLesson])
  useEffect(() =>{
    const getMissons = async() =>{
        await instance.get('/user_missons')
        .then((res) => {
          setMissons(res.data.data.missons)
        })
        .catch(err => err)
    }
    getMissons()
  }, [])
  return (
    <UserInfo.Provider value={{ profile, setProfile, setFetchProfile, courseOfLearningProcess, missons, setMissons, setFetchCourseOfLearningProcess, lessonsOfSummaryLesson, setFetchLessonsOfSummaryLesson}}>
      {children}
    </UserInfo.Provider>
  );
};

export default UserInfoProvide;