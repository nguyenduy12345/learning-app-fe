import { useState, useEffect, useContext, useRef } from "react";

import { UserInfo } from "../stores/user.store.jsx";

import instance from "../utils/axiosRequest.js";

import QuestionTypeChoose from "../components/QuestionTypeChoose.jsx";
import QuestionTypeMatch from "../components/QuestionTypeMatch.jsx";
import QuestionTypeFill from "../components/QuestionTypeFill.jsx";
import QuestionTypeRearrange from "../components/QuestionTypeRearrange.jsx";
import Congratulation from "../components/Congratulation.jsx";
import ShowStatusMissons from "../components/ShowStatusMissons.jsx";
const Lesson = ({
  courseId,
  sectionId,
  milestoneId,
  setIsLesson,
  lessons,
  currentLesson,
  setCurrentLesson,
}) => {
  const {
    profile,
    missons,
    setMissons,
    setFetchProfile,
    setFetchCourseOfLearningProcess,
    lessonsOfSummaryLesson,
    setFetchLessonsOfSummaryLesson,
  } = useContext(UserInfo);

  const [indexQuestion, setIndexQuestion] = useState(9);
  const [indexLesson, setIndexLesson] = useState(currentLesson || 1);
  const [questions, setQuestions] = useState(
    lessons[indexLesson - 1] && lessons[indexLesson - 1]?.questions,
  );
  const [lessonId, setLessonId] = useState(
    lessons[indexLesson - 1] && lessons[indexLesson - 1]._id,
  );
  const colorDiv = useRef(null);
  const calledOnce = useRef(false);
  const [countRequest, setCountRequest] = useState(0);
  const [isCongratulation, setIsCongratulation] = useState(false);
  const [listMisson, setListMisson] = useState([]);
  const [isShowInfoMisson, setIsShowInfoMisson] = useState(false);
  const [questionsCorrect, setQuestionsCorrect] = useState(0);
  useEffect(() => {
    if (lessons.length === 0) {
      setIsLesson(false);
    }
  }, [lessons]);
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const result = await instance.get(
          `lessons/${lessons[indexLesson - 1]._id}`,
        );
        setQuestions(result?.data?.data?.lesson?.questions);
      } catch (error) {
        return error;
      }
    };
    fetchQuestions();
    setLessonId(lessons[indexLesson - 1] && lessons[indexLesson - 1]._id);
  }, [indexLesson, currentLesson]);
  const listMissonUpdate = missons.map((misson, index) => {
    if (misson.completed === false){
      return { index, misson }
    }
  }).filter(item => item !== undefined);
  useEffect(() => {
    // check and save status misson type questions
    listMissonUpdate?.map(async (misson) => {
      if (
        misson?.misson?.missonId?.type === "questions" &&
        +questionsCorrect === +misson?.misson?.missonId?.numberOfRequirements
      ) {
        try {
          await instance.patch(
            `user_missons/update?missonId=${misson.misson.missonId._id}`,
            {
              currentProgress: questionsCorrect,
              status: true,
            },
          );
          await instance.patch("users/update_asset", {
            experiences: misson.misson.missonId.experiences,
            gems: misson.misson.missonId.gems,
            turns: misson.misson.missonId.hearts,
          });
          setMissons((prevMissons) => {
            const updateMissons = [...prevMissons];
            updateMissons[misson.index].currentProgress = questionsCorrect;
            updateMissons[misson.index].completed = true;
            return updateMissons;
          });
        } catch (error) {}
      }
    });
  }, [questionsCorrect]);
  const handleNextQuestion = async () => {
    if (countRequest === 1) return;
    setCountRequest(1);
    setIndexQuestion(indexQuestion + 1);
    if (indexQuestion + 1 > questions?.length - 1) {
      // update status milestone when complete all lessons
      if (indexLesson + 1 > lessons.length) {
        try {
          await instance.patch("learning_process/update_milestone", {
            courseId,
            sectionId,
            milestoneId,
            currentLesson,
            totalLessonDone: currentLesson,
            status: 2,
          });
          await instance.patch(`learning_process/update_section`, {
            courseId,
            sectionId,
            totalMilestoneDone: indexLesson,
          });
          await instance.patch("users/update_asset", {
            experiences: +lessons[indexLesson - 1].experiences,
            gems: +lessons[indexLesson - 1].gems,
            turns: 5,
            dayStreak: Math.random(),
          });
          setCurrentLesson(indexLesson + 1);
          setIsCongratulation(true);
          setFetchProfile({ status: "-1 heart", numb: Math.random() });
          setFetchCourseOfLearningProcess({
            type: "update status lesson",
            numb: Math.random(),
          });
        } catch (error) {}
        return;
      }

      // save asset user, increase current lesson, update currentProgress misson
      try {
        await instance.patch("users/update_asset", {
          experiences: +lessons[indexLesson - 1].experiences,
          gems: +lessons[indexLesson - 1].gems,
          turns: 5,
          dayStreak: Math.random(),
        });
        await instance.patch("learning_process/update_milestone", {
          courseId,
          sectionId,
          milestoneId,
          currentLesson,
          totalLessonDone: currentLesson,
        });
        const updateMissonPromises = listMissonUpdate.map(async (misson) => {
          switch (misson?.misson?.missonId?.type) {
            case "gems":
              await instance.patch(
                `user_missons/update?missonId=${misson.misson.missonId._id}`,
                {
                  currentProgress: +lessons[indexLesson - 1].gems,
                  status:
                    +missons[misson.index].currentProgress +
                      +lessons[indexLesson - 1].gems >=
                    +missons[misson.index].missonId.numberOfRequirements,
                },
              );
              if (
                +missons[misson.index].currentProgress +
                  +lessons[indexLesson - 1].gems >=
                +missons[misson.index].missonId.numberOfRequirements
              ) {
                await instance.patch("users/update_asset", {
                  experiences: misson.misson.missonId.experiences,
                  gems: misson.misson.missonId.gems,
                  turns: misson.misson.missonId.hearts,
                });
              }
              setMissons((prevMissons) => {
                const updateMissons = [...prevMissons];
                updateMissons[misson.index].currentProgress =
                  +updateMissons[misson.index].currentProgress +
                  +lessons[indexLesson - 1].gems;
                updateMissons[misson.index].completed =
                  +missons[misson.index].currentProgress +
                    +lessons[indexLesson - 1].gems >=
                  +missons[misson.index].missonId.numberOfRequirements;
                return updateMissons;
              })
              break;
            case "experiences":
              await instance.patch(
                `user_missons/update?missonId=${misson.misson.missonId._id}`,
                {
                  currentProgress: +lessons[indexLesson - 1].experiences,
                  status:
                    +missons[misson.index].currentProgress +
                      +lessons[indexLesson - 1].experiences >=
                    +missons[misson.index].missonId.numberOfRequirements,
                },
              )
              if (
                +missons[misson.index].currentProgress +
                  +lessons[indexLesson - 1].experiences >=
                +missons[misson.index].missonId.numberOfRequirements
              ) {
                await instance.patch("users/update_asset", {
                  experiences: misson.misson.missonId.experiences,
                  gems: misson.misson.missonId.gems,
                  turns: misson.misson.missonId.hearts,
                });
              }
              setMissons((prevMissons) => {
                const updateMissons = [...prevMissons];
                updateMissons[misson.index].currentProgress =
                  +updateMissons[misson.index].currentProgress +
                  +lessons[indexLesson - 1].experiences;
                updateMissons[misson.index].completed =
                  +missons[misson.index].currentProgress +
                    +lessons[indexLesson - 1].experiences >=
                  +missons[misson.index].missonId.numberOfRequirements;
                return updateMissons;
              });
              break;
            case "days":
            case "lessons":
              await instance.patch(
                `user_missons/update?missonId=${misson.misson.missonId._id}`,
                {
                  currentProgress: 1,
                  status:
                    +missons[misson.index].currentProgress + 1 >=
                    +missons[misson.index].missonId.numberOfRequirements,
                },
              );
              if (
                +missons[misson.index].currentProgress + 1 >=
                +missons[misson.index].missonId.numberOfRequirements
              ) {
                await instance.patch("users/update_asset", {
                  experiences: misson.misson.missonId.experiences,
                  gems: misson.misson.missonId.gems,
                  turns: misson.misson.missonId.hearts,
                });
              }
              setMissons((prevMissons) => {
                const updateMissons = [...prevMissons];
                updateMissons[misson.index].currentProgress =
                  +updateMissons[misson.index].currentProgress + 1;
                updateMissons[misson.index].completed =
                  +missons[misson.index].currentProgress + 1 >=
                  +missons[misson.index].missonId.numberOfRequirements;
                return updateMissons;
              });
              break;
            default:
          }
        });
        updateMissonPromises.length !== 0 && await Promise.all(updateMissonPromises);
        setIsCongratulation(true);
        setIsShowInfoMisson(true);
        setCurrentLesson(indexLesson + 1);
        const updateMisson = listMissonUpdate.map((misson) => misson.misson)
        setListMisson(prev => [...prev, ...updateMisson]);
        setFetchProfile({ status: "-1 heart", numb: Math.random() });
        setFetchCourseOfLearningProcess({
          type: "update current lesson",
          numb: Math.random(),
        });
        setCountRequest(0);
      } catch (error) {
        console.log(error)
        setCountRequest(0);
      }
    }
    setCountRequest(0);
  };
  const handleBackToMilestonePage = () => {
    setIsLesson(false);
  };
  useEffect(() => {
    colorDiv.current.style.width =
      (indexQuestion / questions?.length) * 100 + "%";
  }, [questions, indexQuestion]);
  useEffect(() => {
    const addLessonToSummaryLesson = async () => {
      try {
        const findIndexLesson = lessonsOfSummaryLesson.findIndex(
          (lesson) => lesson.lesson._id.toString() === lessonId.toString(),
        );
        if (findIndexLesson > -1) return;
        if (!calledOnce.current) {
          await instance.patch("summary_lesson/add_lesson", { lessonId });
          setFetchLessonsOfSummaryLesson({
            lessonId,
            numb: Math.random(),
          });
          calledOnce.current = true;
        }
      } catch (error) {}
      return () => {
        calledOnce.current = false;
      };
    };
    if (lessonId) {
      addLessonToSummaryLesson();
    }
  }, [lessonId]);
  return (
    <>
      {isCongratulation && (
        <Congratulation
          lessons={lessons}
          currentLesson={currentLesson}
          setIsCongratulation={setIsCongratulation}
          setIsLesson={setIsLesson}
        />
      )}
      <ShowStatusMissons
        listMisson={listMisson}
        isShowInfoMisson={isShowInfoMisson}
        setIsShowInfoMisson={setIsShowInfoMisson}
      />
      <div className="relative h-screen w-full py-6">
        <ul className="mx-auto flex w-[90%] items-center justify-center md:w-[75%]">
          <li>
            <i
              onClick={handleBackToMilestonePage}
              className="fa-solid fa-arrow-left cursor-pointer text-2xl md:text-3xl"
            ></i>
          </li>
          <li className="mx-3 h-4 w-full rounded-md bg-[#e5e5e5]">
            <div
              ref={colorDiv}
              className="ml-[2px] mt-[2px] h-[0.8rem] w-[0%] rounded-md bg-red-600 transition ease-linear"
            ></div>
          </li>
          <li className="flex items-center justify-center">
            <img src="/images/logo/heart.webp" className="h-7 w-7" />
            <p className="lazyload ml-1 flex items-center justify-center font-noto text-2xl font-medium text-red-600 md:text-3xl">
              {profile?.hearts ? profile?.hearts : 0}
            </p>
          </li>
        </ul>
        {questions && questions[indexQuestion]?.question?.type === "choose" ? (
          <QuestionTypeChoose
            question={questions[indexQuestion]?.question}
            lessonId={lessonId}
            handleNextQuestion={handleNextQuestion}
            setQuestionsCorrect={setQuestionsCorrect}
          />
        ) : questions &&
          questions[indexQuestion]?.question?.type === "match" ? (
          <QuestionTypeMatch
            question={questions[indexQuestion]?.question}
            lessonId={lessonId}
            handleNextQuestion={handleNextQuestion}
            setQuestionsCorrect={setQuestionsCorrect}
          />
        ) : questions && questions[indexQuestion]?.question?.type === "fill" ? (
          <QuestionTypeFill
            question={questions[indexQuestion]?.question}
            lessonId={lessonId}
            handleNextQuestion={handleNextQuestion}
            setQuestionsCorrect={setQuestionsCorrect}
          />
        ) : questions &&
          questions[indexQuestion]?.question?.type === "rearrange" ? (
          <QuestionTypeRearrange
            question={questions[indexQuestion]?.question}
            lessonId={lessonId}
            handleNextQuestion={handleNextQuestion}
            setQuestionsCorrect={setQuestionsCorrect}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Lesson;
