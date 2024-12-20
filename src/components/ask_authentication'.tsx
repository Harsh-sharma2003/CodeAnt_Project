import { Outlet, NavLink } from "react-router-dom";

const data = [
  { img: "/github.png", text: "Sign in with Github" },
  { img: "/bitbucket.png", text: "Sign in with Bitbucket" },
  { img: "/azure.png", text: "Sign in with Azure DevOps" },
  { img: "/gitlab.png", text: "Sign in with Gitlab" },
];

function Option({ img, text }: { img: string; text: string }) {
  return (
    <NavLink
      to="/app/repositories"
      className="flex items-center font-semibold border-[1px] w-[20rem] md:w-[25rem] border-[#e5e4e4] gap-4 p-2 rounded-lg justify-center"
    >
      <img src={img} alt={text} className="w-8 h-8" />
      <p>{text}</p>
    </NavLink>
  );
}

function OptionsList({ data }: { data: { img: string; text: string }[] }) {
  return (
    <div className="flex flex-col items-center w-full gap-5 md:pl-4 md:pr-4 md:pb-4">
      {data.map((item) => (
        <Option key={item.text} img={item.img} text={item.text} />
      ))}
    </div>
  );
}

export function Self() {
  return (
    <OptionsList
      data={[
        { img: "/gitlab.png", text: "Self Hosted Gitlab" },
        { img: "/key.png", text: "Sign in with SSO" },
      ]}
    />
  );
}

export function SAAS() {
  return <OptionsList data={data} />;
}

function AuthTabs() {
  const tabs = [
    { label: "SAAS", to: "/auth/saas" },
    { label: "Self Hosted", to: "self-hosted" },
  ];

  return (
    <div className="flex gap-2">
      {tabs.map((tab) => (
        <NavLink
          key={tab.label}
          to={tab.to}
          className={({ isActive }) =>
            isActive
              ? "bg-[#1470ef] text-white text-center text-2xl p-3 rounded-md w-[150px]"
              : "bg-[#fafafa] text-black text-center text-2xl p-3 rounded-md w-[150px]"
          }
        >
          {tab.label}
        </NavLink>
      ))}
    </div>
  );
}

function LogoHeader() {
  return (
    <div className="flex items-center text-3xl font-light gap-2">
      <img src="/Group 37110.png" alt="" />
      <p>CodeAnt AI</p>
    </div>
  );
}

function StatisticsCard() {
  return (
    <div className="bg-white w-[15rem] shadow-xl p-5 rounded-2xl mt-4 flex flex-col gap-2 border-[1px] border-[#f3f2f2] relative left-[120px] top-[-20px]">
      <div className="flex justify-between items-center">
        <img src="/signin.png" alt="" />
        <div className="text-[#0049c6]">
          <div className="flex items-center gap-1">
            <img src="./arrow.png" alt="" />
            <p>14%</p>
          </div>
          <p className="text-gray-600 text-sm">This week</p>
        </div>
      </div>
      <p>Issues Fixed</p>
      <p className="text-3xl font-semibold">500K+</p>
    </div>
  );
}

function InfoCard() {
  return (
    <div className="flex flex-col bg-white rounded-xl shadow-xl relative p-4">
      <div className="flex flex-row items-center gap-2 font-semibold text-lg">
        <img src="./Group 37110.png" alt="" />
        <p>AI to Detect & Autofix Bad Code</p>
      </div>
      <hr className="h-[1px] w-full bg-[#f3f2f2] my-2" />
      <div className="flex flex-row gap-6">
        {[{ label: "Language Support", value: "30+" }, { label: "Developers", value: "10K+" }, { label: "Hours Saved", value: "100K+" }].map((stat) => (
          <div key={stat.label} className="flex flex-col items-center">
            <p className="font-semibold">{stat.value}</p>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Auth() {
  return (
    <div className="bg-[#fafafa] md:flex md:justify-center md:items-center h-[100vh] border-[1px] border-[#f3f2f2]">
      <div className="hidden md:flex flex-col items-center justify-center w-[50%] bg-[#ffffff] h-[100vh]">
        <InfoCard />
        <StatisticsCard />
        <img src="/Subtract.png" alt="" className="absolute bottom-0 left-0" />
      </div>

      <div className="flex flex-col items-center justify-center h-[100vh] w-full md:w-[50%] gap-2">
        <div className="bg-white rounded-md border-[1px] border-[#f3f2f2] flex flex-col items-center gap-5 w-[22rem] md:w-max h-[32rem] md:h-[35rem] pt-4">
          <LogoHeader />
          <h1 className="font-semibold text-3xl">Welcome to CodeAnt AI</h1>
          <AuthTabs />
          <br />
          <hr className="h-[1px] w-full bg-[#f3f2f2]" />
          <Outlet />
        </div>
        <p>
          By signing up you agree to the{" "}
          <span className="font-semibold">Privacy Policy.</span>
        </p>
      </div>
    </div>
  );
}
