// Import React
import React, { useState, useHook, Link } from 'react';

const Header = () => {
    return (
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">#Dev Name</a>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Leave this or bootstrap will ruin the positioning*/}
            <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>

        {/* Fix these to not be anchor tags */}
        <div class="d-flex">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">About Me</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Portfolio</a>
                </li>        <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Contact</a>
                </li>        <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Resume</a>
                </li>
            </ul>
        
        </div>
        </div>
    </div>
</nav>
    )
};

export default Header;