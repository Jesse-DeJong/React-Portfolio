import Project from "../Project";

export default function Portfolio() {
  const repos = {
    a: {
      url: "https://github.com/Jesse-DeJong/react-portfolio",
      repoName: "React Portfolio"
    }
  }
  return (
    <div>
      <h1>Portfolio Page</h1>

      <Project url={repos.a.url} repoName={repos.a.repoName} />

    </div>
  );
}
