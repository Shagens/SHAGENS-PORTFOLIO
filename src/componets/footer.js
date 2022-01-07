import React from "react"
// function footer () {
//     return( 
//         <div id="Contact-Me" class="Contact-Me">
//             <h5>See you soon!</h5>
//             {/* <ul> */}
//                 <li>
//                     <a href="https://www.linkedin.com/in/shikelia-hagens-34616a217/">LinkedIn</a>
//                 </li>
//                 <li>
//                     <a href="https://github.com/Shagens">GitHub</a>
//                 </li>
//                 <li>
//                     Email: Hagensshik@gmail.com 
//                 </li>
//                 <li>
//                     Phone: 980.288.2527 
//                 </li>
//                 {/* </ul> */}
//             </div>
//     )
// }

function Footer() {   
    return (
    <div className="page-footer" id="footer">
        <a href="https://github.com/shagens"><img src="https://img.icons8.com/ios/80/000000/github.png" alt="github-logo" class="icon"/></a>
        <a href="https://www.linkedin.com/in/shikelia-hagens-34616a217/"><img src="https://img.icons8.com/fluent/80/000000/linkedin-circled.png" alt="linkedin-logo" class="icon"/></a>
    </div>
    )
}

export default Footer;
