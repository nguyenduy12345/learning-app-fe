import { createContext, useState, useEffect, useContext} from "react";

import { LoadingContext } from "./loading.store.jsx";

import instance from "../utils/axiosRequest.js";

export const UserInfo = createContext({});

const UserInfoProvide = ({ children }) => {
  const { setIsLoading} = useContext(LoadingContext)
  const [profile, setProfile] = useState()
  const [fetchProfile, setFetchProfile] = useState([]);
  const [courseOfLearningProcess, setCourseOfLearningProcess] = useState([])
  const [missons, setMissons] = useState([])
  const [fetchCourseOfLearningProcess, setFetchCourseOfLearningProcess] = useState([])
  const [lessonsOfSummaryLesson, setLessonOfSummaryLesson] = useState([])
  useEffect(() =>{
    const getUser = async() =>{
      setIsLoading(true)
        await instance.get('/users/profile',{
          onDownloadProgress: (progressEvent) => {
            const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
            if(+percentCompleted >= 100){
              setIsLoading(false)
            };
          }
        })
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
          res.data.data.courses.length === 0 ? navigate('/courses') : navigate('/learning')
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
  }, [])
  useEffect(() =>{
    const getMissons = async() =>{
        setIsLoading(true)
        await instance.get('/user_missons',{
          onDownloadProgress: (progressEvent) => {
            const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
            if(+percentCompleted >= 100){
              setIsLoading(false)
            };
          }
        })
        .then((res) => {
          setMissons(res.data.data.missons)
        })
        .catch(err => err)
    }
    getMissons()
  }, [])
  return (
    <UserInfo.Provider value={{ profile, setProfile, setFetchProfile, courseOfLearningProcess, setCourseOfLearningProcess, missons, setMissons, setFetchCourseOfLearningProcess, lessonsOfSummaryLesson, setLessonOfSummaryLesson}}>
      {children}
    </UserInfo.Provider>
  );
};

export default UserInfoProvide;