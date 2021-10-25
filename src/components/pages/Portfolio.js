import Project from "../Project";

export default function Portfolio() {
  
  const repos = {
    a: {
      url: "https://github.com/Jesse-DeJong/react-portfolio",
      repoName: "React Portfolio",
      img: ""
    },
    b: {
      url: "https://github.com/Jesse-DeJong/indexedDB-budget-tracker",
      repoName: "On/Off-line Budget Tracker",
      img: ""
    },
    c: {
      url: "https://github.com/Jesse-DeJong/workout-tracker",
      repoName: "Workout Tracker",
      img: ""
    },
    d: {
      url: "https://github.com/Jesse-DeJong/tech_blog",
      repoName: "Tech Blog",
      img: ""
    },
    e: {
      url: "https://gist.github.com/Jesse-DeJong/ea5a2f6193dd1d9c36fda59a1dd8c2ff",
      repoName: "Reg-exPLAINED",
      img: ""
    },
    f: {
      url: "https://github.com/Jesse-DeJong/Weather-App",
      repoName: "Weather Dashboard",
      img: ""
    }
  }

  return (
    <div>
      <h1>Portfolio Page</h1>

      <Project 
        url={repos.a.url}
        repoName={repos.a.repoName} 
        img={repos.a.img}
      />
  
    </div>
  );
}
