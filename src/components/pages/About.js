import React from 'react';

export default function About() {
  const headshot = "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F609946db7c398a0de6c94893%2FMid-Adult-Female-Entrepreneur-With-Arms-Crossed-%2F960x0.jpg%3Ffit%3Dscale";
  
  const styles = {
    p: {
      
    },
    img: {
      
    }
  } 
  return (
    <div>
      <h1>Who am I?</h1>
        <div className="container-fluid d-flex">
          <img src={headshot} style={styles.img} alt="dev headshot"></img>
          <div className="container-fluid d-flex" style={styles.card}>
            <p style={styles.p}>
              Short Bio:
              <hr />
              Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
              Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
              mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
              lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
              imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
              in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
            </p>
          </div>
        </div>
    </div>
  );
}
