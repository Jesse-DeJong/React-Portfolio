import React from 'react';

export default function Resume() {
  return (
    <div className="container-fluid">
      <h1>Resume Page</h1>
      <h3>Proficiencies:</h3>
      <li>HTML</li>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
        velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisi
        ac dui fermentum, sed luctus urna tincidunt. 
      </p>
      <li>CSS</li>
      <p>
        Etiam ut feugiat ex. Cras
        non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdiet
        ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras
        rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in
        tristique ex. Donec nec ornare elit.
      </p>
      <li>JS</li>
      <p>
        Donec blandit est sed risus feugiat
        porttitor. Vestibulum molestie hendrerit massa non consequat. Vestibulum
        vitae lorem tortor. In elementum ultricies tempus. Interdum et malesuada
        fames ac ante ipsum primis in faucibus.
      </p>
      <div className="navRight">
        <a className="navButton btn btn-success" href="./assets/Resume APS Bl.pdf" alt="resume download link" download="">Resume</a>
      </div>  
    </div>
  );
}
