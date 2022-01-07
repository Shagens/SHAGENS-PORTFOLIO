import React from "react"
function header (props) {
    console.log(props)
    return( 
        <div class="header">
        <h1>Shi<span class="kelia">kelia</span></h1>
        <nav>
            <ul>
                
                <li>
                    <a href="#" onClick={() => props.handlePageChange("Aboutme")}>About Me</a>
                </li>
                <li>
                    <a href="#" onClick={() => props.handlePageChange("Portfolio")}>Portfolio</a>
                </li>
                <li>
                    <a href="#" onClick={() => props.handlePageChange("Contactme")}>Contact Me</a>
                </li>
                <li>
                    <a href="#" onClick={() => props.handlePageChange("Resume")}>Resume</a>
                </li>
            </ul>
            </nav>
        </div>
    )
}

export default header;