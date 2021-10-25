import Project from "../Project";

export default function Portfolio() {
  const tempImg = "https://picsum.photos/200";

  const repos = {
    a: {
      repoUrl: "https://github.com/Jesse-DeJong/react-portfolio",
      deployedUrl: "",
      repoName: "React Portfolio",
      img: tempImg
    },
    b: {
      repoUrl: "https://github.com/Jesse-DeJong/indexedDB-budget-tracker",
      deployedUrl: "",
      repoName: "On/Off-line Budget Tracker",
      img: tempImg
    },
    c: {
      repoUrl: "https://github.com/Jesse-DeJong/workout-tracker",
      deployedUrl: "",
      repoName: "Workout Tracker",
      img: tempImg
    },
    d: {
      repoUrl: "https://github.com/Jesse-DeJong/tech_blog",
      deployedUrl: "",
      repoName: "Tech Blog",
      img: tempImg
    },
    e: {
      repoUrl: "https://gist.github.com/Jesse-DeJong/ea5a2f6193dd1d9c36fda59a1dd8c2ff",
      deployedUrl: "",
      repoName: "Reg-exPLAINED",
      img: tempImg
    },
    f: {
      repoUrl: "https://github.com/Jesse-DeJong/Weather-App",
      deployedUrl: "",
      repoName: "Weather Dashboard",
      img: tempImg
    }
  }

  return (
    <div>
      <h1>Portfolio Page</h1>

    <div className="container-fluid d-flex justify-content-evenly">
      <Project 
        repoUrl={repos.a.repoUrl}
        deployedUrl={repos.a.deployedUrl}
        repoName={repos.a.repoName} 
        img={repos.a.img}
      />
      <Project 
        repoUrl={repos.b.repoUrl}
        deployedUrl={repos.b.deployedUrl}
        repoName={repos.b.repoName} 
        img={repos.b.img}
      />
      <Project 
        repoUrl={repos.c.repoUrl}
        deployedUrl={repos.c.deployedUrl}
        repoName={repos.c.repoName} 
        img={repos.c.img}
      />
    </div>
    <div className="container-fluid d-flex justify-content-evenly">
      <Project 
        repoUrl={repos.d.repoUrl}
        deployedUrl={repos.d.deployedUrl}
        repoName={repos.d.repoName} 
        img={repos.d.img}
      />
      <Project 
        repoUrl={repos.e.repoUrl}
        deployedUrl={repos.e.deployedUrl}
        repoName={repos.e.repoName} 
        img={repos.e.img}
      />
      <Project 
        repoUrl={repos.f.repoUrl}
        deployedUrl={repos.f.deployedUrl}
        repoName={repos.f.repoName} 
        img={repos.f.img}
      />
    </div>
  
    </div>
  );
}
