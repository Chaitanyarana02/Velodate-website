const Safety = () => {
  return (
    <>
      <div className="flex gap-8 flex-col items-center w-full my-8">
        <div className="flex gap-2 flex-col items-center justify-center">
          <p className="text-[#D8A409] text-sm font-medium text-center">
            Safety
          </p>
          <h1 className="text-[#FFFFFF] font-bold text-4xl text-center">
            Security, built in
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 md:px-[198px] px-2 py-[2rem]">
          <div className="flex gap-2 flex-col items-center w-[100%] ">
            <img src="/assets/footer/lockIcon.svg" alt="lockIcon" />
            <p className="text-[#FFFFFF] font-medium text-center">
              Your data is safe
            </p>
            <p className="text-[#F6F6F6] font-normal text-base text-center px-3 ">
              Utilizing advanced SSL encryption,<br className="hidden sm:hidden md:block " /> we ensure that your personal<br className="hidden sm:hidden md:block " />
              information and communications <br className="hidden sm:hidden md:block " />are protected from unauthorized <br className="hidden sm:hidden md:block " />
              access at all times.
            </p>
          </div>

          <div className="flex gap-2 flex-col items-center w-[100%] ">
            <img src="/assets/footer/messageIcon.svg" alt="messageIcon" />
            <p className="text-[#FFFFFF] font-medium text-center">
              Secure Communication
            </p>
            <p className="text-[#F6F6F6] font-normal text-base text-center px-3 ">
              Our encrypted messaging system <br className="hidden sm:hidden md:block " /> keeps your conversations private<br className="hidden sm:hidden md:block " />
              and secure, so you can share <br className="hidden sm:hidden md:block " /> freely without worry.
            </p>
          </div>

          <div className="flex gap-2 flex-col items-center w-[100%] ">
            <img src="/assets/footer/computerIcon.svg" alt="computerIcon" />
            <p className="text-[#FFFFFF] font-medium text-center">
              Continuous Monitoring
            </p>
            <p className="text-[#F6F6F6] font-normal text-base text-center  px-3 ">
              Our systems actively monitor for <br className="hidden sm:hidden md:block " /> suspicious activity, helping to <br className="hidden sm:hidden md:block " />
              prevent fraud and ensuring a safe  environment for all users.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Safety;
