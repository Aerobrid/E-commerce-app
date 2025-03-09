import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className='logo-icon'>
        <svg fill="#000000" height="64px" width="64px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 299.011 299.011" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M157.006,104.575v-3.151c0-4.143-3.357-7.5-7.5-7.5c-4.143,0-7.5,3.357-7.5,7.5v3.342 c-10.967,3.346-18.975,13.611-18.975,25.729c0,12.114,8.008,22.378,18.975,25.723v22.166c-3.879-2.366-7.585-5.792-9.754-8.334 c-2.673-3.163-7.405-3.559-10.569-0.884c-3.163,2.675-3.559,7.406-0.884,10.569c1.161,1.373,9.995,11.478,21.207,15.095v3.475 c0,4.143,3.357,7.5,7.5,7.5c4.143,0,7.5-3.357,7.5-7.5v-3.207c11.208-3.193,19.447-13.572,19.447-25.857 c0-12.282-8.239-22.658-19.447-25.851V120.48c4.527,2.113,8.486,5.477,10.09,7.123c2.873,2.971,7.61,3.059,10.59,0.19 c2.985-2.871,3.077-7.619,0.206-10.604C176.783,116.037,168.249,107.476,157.006,104.575z M138.031,130.494 c0-3.542,1.544-6.719,3.975-8.898v17.791C139.575,137.21,138.031,134.035,138.031,130.494z M161.453,169.24 c0,3.765-1.742,7.12-4.447,9.297v-18.589C159.711,162.124,161.453,165.477,161.453,169.24z"></path> <path d="M297.368,144.82c-0.668-0.834-16.643-20.666-42.701-40.716c-34.87-26.831-71.234-41.013-105.161-41.013 c-33.928,0-70.292,14.182-105.162,41.013c-26.058,20.05-42.033,39.882-42.701,40.716c-2.19,2.739-2.19,6.63,0,9.369 c0.668,0.834,16.644,20.666,42.701,40.717c34.87,26.831,71.234,41.013,105.162,41.013c33.927,0,70.291-14.182,105.161-41.013 c26.058-20.051,42.033-39.883,42.701-40.717C299.559,151.45,299.559,147.56,297.368,144.82z M149.506,213.029 c-35.016,0-63.503-28.496-63.503-63.523c0-35.026,28.487-63.522,63.503-63.522s63.503,28.496,63.503,63.522 C213.009,184.532,184.522,213.029,149.506,213.029z M17.399,149.505c10.769-12.028,42.086-44.178,82.66-60.931 c-17.713,14.409-29.056,36.366-29.056,60.931c0,24.565,11.343,46.523,29.058,60.933C59.482,193.684,28.163,161.529,17.399,149.505z M198.887,210.488c17.751-14.408,29.122-36.389,29.122-60.983c0-24.564-11.343-46.521-29.056-60.931 c40.582,16.757,71.902,48.914,82.664,60.936C270.859,161.551,239.541,193.751,198.887,210.488z"></path> </g> </g></svg>
      </div>
      <div className={styles.MenuSection}>
          <div className='shopping-cart-icon'>
            <svg width="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          </div>
          <div className='hamburger-icon'>
            <svg width='40' viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Menu</title> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Menu"> <rect id="Rectangle" fill-rule="nonzero" x="0" y="0" width="24" height="24"> </rect> <line x1="5" y1="7" x2="19" y2="7" id="Path" stroke="#0C0310" stroke-width="2" stroke-linecap="round"> </line> <line x1="5" y1="17" x2="19" y2="17" id="Path" stroke="#0C0310" stroke-width="2" stroke-linecap="round"> </line> <line x1="5" y1="12" x2="19" y2="12" id="Path" stroke="#0C0310" stroke-width="2" stroke-linecap="round"> </line> </g> </g> </g></svg>
          </div>
        </div>
    </div>
  )
}

export default Footer
