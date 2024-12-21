import { createContext, useState, useEffect, useContext} from "react";
import { useNavigate } from "react-router-dom"
import { LoadingContext } from "./loading.store.jsx";

import instance from "../utils/axiosRequest.js";

export const UserInfo = createContext({});

const UserInfoProvide = ({ children }) => {
  const { setIsLoading} = useContext(LoadingContext)
  const [profile, setProfile] = useState()
  const [courseOfLearningProcess, setCourseOfLearningProcess] = useState([])
  const [missons, setMissons] = useState([])
  const [lessonsOfSummaryLesson, setLessonOfSummaryLesson] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    const getAllData = async () => {
      try {
        setIsLoading(true)
        const [userResponse, courseResponse, lessonResponse, missionResponse] = await Promise.all([
          instance.get('/users/profile'),
          instance.get('/learning_process'),
          instance.get('/summary_lesson'),
          instance.get('/user_missons', {
            onDownloadProgress: (progressEvent) => {
              const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
              if (+percentCompleted >= 100) {
                setIsLoading(false);
              }
            },
          })
        ])
        setProfile(userResponse?.data?.data?.user)
        setCourseOfLearningProcess(courseResponse?.data?.data?.courses);
        setLessonOfSummaryLesson(lessonResponse?.data?.data?.summaryLesson?.lessons);
        setMissons(missionResponse?.data?.data?.missons);
        if (courseResponse?.data?.data?.courses.length === 0) {
          navigate('/courses');
        } else {
          navigate('/learning');
        }
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };
    getAllData();
  }, []);
  return (
    <UserInfo.Provider value={{ profile, setProfile, courseOfLearningProcess, setCourseOfLearningProcess, missons, setMissons, lessonsOfSummaryLesson, setLessonOfSummaryLesson}}>
      {children}
    </UserInfo.Provider>
  );
};

export default UserInfoProvide;