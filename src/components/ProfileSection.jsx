import React from 'react';
import styles from './ProfileSection.module.css';

function ProfileSection() {
  return (
    <div className={styles.profileSection}>
      <h1>Hello! 👋 I'm Elzbieta, but you can call me Ella.</h1>
      <h2>Front-end Developer</h2>
      <p>As a recent bootcamp graduate, I'm excited to embark on my journey in the world of web development. I've had the privilege of studying and living in various countries, including Malta and Georgia, which has broadened my horizons and given me a unique perspective on design and development.</p>
      <p>In addition to being a dedicated developer, I'm also a proud mother of three talented swimmers. When I'm not coding, I love to explore new destinations and savor a good cup of coffee.</p>
      <p>I'm passionate about creating intuitive and user-friendly web and mobile applications. My toolkit includes Figma, HTML5, CSS3, JavaScript, and React, and I'm constantly expanding my skill set to stay at the forefront of the industry.</p>
    </div>
  );
}

export default ProfileSection;
