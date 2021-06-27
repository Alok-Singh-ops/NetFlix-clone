import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <div class="content">
        <div class="left box">
          <div class="upper">
            <div class="topic">About us</div>
            <p>Netflix clone is a replica of Netflix and Free Movies streaming site with zero ads. Also,This site currently supports only Hollywood Movies. It is made purely from acadmeics point of view and all the content provided are powered by third party website. Made with Love! Happy Netflixing! </p>
            </div>
            <div class="lower">
         <div class="topic">
         <a href="https://forms.gle/VQqAwNgTVjRAiNGm7" target = "_blank" rel = "noopener noreferrer" className = 'banner-button btn-foot'>Rate</a>
        </div>
       </div>
     </div>
     {/* <div class="middle box">
       <div class="topic">Our Services</div>
       
     </div> */}
     <div class="right box">
         <div class="media-icons">
           <a href="https://www.facebook.com/aloksshiv" target = "_blank"><i class="fab fa-facebook-f"></i></a>
           <a href="https://www.instagram.com/aloksingh_7/" target = "_blank"><i class="fab fa-instagram"></i></a>
           <a href="https://www.linkedin.com/in/alok-singh-85571aa8" target = "_blank"><i class="fab fa-linkedin-in"></i></a>
         </div>
     </div>
   </div>
   <div class="bottom">
     <p>Copyright © 2020. All rights reserved</p>
   </div>
 </footer>
  )
}

export default Footer
