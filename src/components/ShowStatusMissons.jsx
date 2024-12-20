
const ShowStatusMissons = ({
  listMisson,
  isShowInfoMisson,
  setIsShowInfoMisson,
}) => {
  return (
    isShowInfoMisson && listMisson && listMisson.length !== 0 && <div className="fixed z-30 mx-auto my-auto flex h-screen w-full items-center justify-center bg-[#e8e8e8]">
      <div className="w-[95%]">
        <div className="flex w-full items-center justify-center">
          <div className="ml-2 w-[90%] md:w-[70%] rounded-xl bg-white p-4 font-noto">
            <p className="text-center font-semibold uppercase text-xs md:text-md">
              Trạng thái hiện tại của các nhiệm vụ
            </p>
            {/* Danh sách nhiệm vụ */}
            <ul className="mt-4 space-y-3 max-h-[70vh] overflow-scroll scrollbar-none">
              {listMisson.map((misson, index) => (
                <li
                  key={index}
                  className={` w-full ${misson.completed ? "bg-[#87ed50] text-white" : ""} rounded-xl border-[1px] border-[#e5e5e5] p-4`}
                >
                  <div className="flex">
                    <ul className="flex-grow items-start">
                      <li className="pl-2 tracking-wider">
                        {misson.missonId.misson}
                      </li>
                      <li className="relative ml-1 mt-2 h-6 w-full rounded-xl bg-[#e5e5e5]">
                        <div
                          style={{
                            width: `${+misson.currentProgress <= +misson.missonId.numberOfRequirements ? (+misson.currentProgress / +misson.missonId.numberOfRequirements) * 100 : 100}%`,
                          }}
                          className={`absolute top-[1.3px] h-[1.3rem] rounded-xl bg-[#58cc02] transition-all duration-500 ease-linear`}
                        ></div>
                        <p className="absolute left-[40%] top-0 font-noto font-semibold text-white">
                          {misson.currentProgress} /{" "}
                          {misson.missonId.numberOfRequirements}
                        </p>
                      </li>
                    </ul>
                    <div className="relative ml-4 flex items-center justify-center">
                      <img
                        src="/images/logo/misson-gift.svg"
                        className="lazyload h-9 w-9"
                      />
                      {misson.completed && (
                        <p className="absolute right-[-6px] top-[0.3rem] flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-full">
                          <i className="fa-solid fa-check text-[3.5rem] font-bold text-white"></i>
                        </p>
                      )}
                    </div>
                  </div>
                  {misson.completed && (
                    <>
                      <p className="text-center font-noto mt-3 text-white">
                        Bạn đã nhận được:{" "}
                      </p>
                      <ul className="mx-auto flex w-[90%] justify-around text-left text-xl font-bold sm:w-[60%]">
                        <li className="flex items-center">
                          {misson.missonId.gems}
                          <img
                            src="/images/logo/coins.png"
                            className="lazyload ml-1 h-4"
                          />
                        </li>
                        <li className="flex items-center">
                          {misson.missonId.experiences}
                          <img
                            src="/images/logo/explogo.jfif"
                            className="lazyload ml-1 h-4"
                          />
                        </li>
                        <li className="flex items-center">
                          <span>{misson.missonId.hearts}</span>
                          <img
                            src="/images/logo/heart.webp"
                            className="lazyload ml-1 h-4"
                          />
                        </li>
                      </ul>
                    </>
                  )}
                </li>
              ))}
            </ul>
            <div
              onClick={() => setIsShowInfoMisson(false)}
              className="mx-auto mb-4 mt-5 w-[9rem] cursor-pointer rounded-lg border-2 border-[#b7dceb] bg-[#d3e9f8] text-center shadow-xl hover:border-[#dfe1e2] hover:text-white"
            >
              Đóng
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowStatusMissons;
