import { useState } from "react";
import "../index.css";

const repositories = [
  { name: "design-system", access: "Public", languages: "React", size: "7320 KB", updates: "1" },
  { name: "codeant-ci-app", access: "Private", languages: "Javascript", size: "5871 KB", updates: "2" },
  { name: "analytics-dashboard", access: "Public", languages: "Python", size: "4521 KB", updates: "5" },
  { name: "mobile-app", access: "Private", languages: "Swift", size: "3096 KB", updates: "3" },
  { name: "e-commerce-website", access: "Private", languages: "Java", size: "6210 KB", updates: "6" },
  { name: "blog-website", access: "Public", languages: "HTML/CSS", size: "1876 KB", updates: "4" },
  { name: "social-network", access: "Private", languages: "PHP", size: "5432 KB", updates: "3" },
];

type Repositories = {
  name: string;
  access: string;
  languages: string;
  size: string;
  updates: string;
};

function Repositories() {
  const [searchTerm, setSearchTerm] = useState("");
  const [refreshKey, setRefreshKey] = useState(0); 

  const filteredRepos = repositories.filter((repo) =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRefresh = () => {
    setRefreshKey(prev => prev + 1); 
    alert("Data refreshed!");
  };

  return (
    <div className="bg-[#fafafa] w-full h-[100vh] md:overflow-scroll">
      <div className="md:ml-[2%] mr-[2%] mt-[2%] rounded-lg flex flex-col gap-1">
        <div className="bg-white pt-5 rounded-md flex flex-col w-full gap-4 md:pl-5 md:pb-5 pl-3 pb-3">
          <div className="flex flex-col gap-2 md:flex-row md:justify-between">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-semibold">Repositories</h1>
              <p className="text-gray-500">33 total repositories</p>
            </div>
            <div className="flex flex-row gap-4 text-md">
              <button onClick={handleRefresh} className="flex gap-3 items-center p-2 border-[2px] border-gray-300 rounded-lg">
                <img src="/refresh.png" alt="Refresh" />
                Refresh All
              </button>
              <button className="flex gap-2 items-center p-2 bg-[#1470ef] text-white rounded-lg">
                <img src="/plus.png" alt="Add" />
                Add Repository
              </button>
            </div>
          </div>
          <input
            type="text"
            placeholder="Search repositories"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-white w-[90%] md:w-[30%] p-2 border-[1px] border-gray-300 rounded-lg"
          />
        </div>

        <div className="flex flex-col gap-1" key={refreshKey}>
          {filteredRepos.map((repo, index) => (
            <div key={repo.name}>
              <RepositoryTab 
                name={repo.name}
                access={repo.access}
                languages={repo.languages}
                size={repo.size}
                updates={repo.updates} 
              />
              {index < filteredRepos.length - 1 && <hr className="border-gray-300 my-2" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

type RepositoryTabProps = {
  name: string;
  access: string;
  languages: string;
  size: string;
  updates: string;
};

function RepositoryTab({ name, access, languages, size, updates }: RepositoryTabProps) {
  return (
    <div className="flex flex-col gap-3 bg-white p-3 rounded-md hover:bg-[#f5f5f5] transition-all">
      <div className="flex items-center gap-3">
        <p className="text-[1.2rem]">{name}</p>
        <p className="border-[1.2px] border-[#bcd7fd] text-[.8rem] rounded-2xl px-[10px] bg-[#eff8ff] text-[#5c94e2]">
          {access}
        </p>
      </div>
      <div className="flex gap-5">
        <div className="flex items-center gap-2">
          <p className="text-gray-500 text-sm">{languages}</p>
          <div className="rounded-full bg-[#1470ef] w-2 h-2"></div>
        </div>
        <div className="flex gap-2 items-center">
          <img src="/database.png" alt="Size" />
          <p>{size}</p>
        </div>
        <p>Updated {updates} days ago</p>
      </div>
    </div>
  );
}

export default Repositories;
