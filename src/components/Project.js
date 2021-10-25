const Project = ({
    repoUrl,
    deployedUrl,
    repoName,
    img
}) => {
    const styles = {
        card: {
            width: "18rem",
            margin: "10px"
        },
        button: {
            margin: "4px"
        }
    }
    return (
<>
    <div className="card" style={styles.card}>
        <img src={img} className="card-img-top" alt={repoName}></img>
        <div className="card-body">
            <h5 className="card-title">{repoName}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href={repoUrl} className="btn btn-primary" style={styles.button} target="_blank">View Repo</a>
            <a href={deployedUrl} className="btn btn-info" style={styles.button} target="_blank">View Deployed</a>
        </div>
    </div>
</>
    );
}

export default Project;