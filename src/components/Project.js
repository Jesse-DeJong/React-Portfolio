const Project = ({
    url,
    repoName
}) => {
    return (
<>
    <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="..."></img>
        <div class="card-body">
            <h5 class="card-title">{repoName}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href={url} class="btn btn-primary">View Repo</a>
        </div>
    </div>
</>
    );
}

export default Project;