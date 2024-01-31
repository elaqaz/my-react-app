// Home.js
import React from 'react';
import Header from './Header';
import ProfileSection from './ProfileSection';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';
import Footer from './footer';
import styles from './Home.module.css'; // Assuming you have some styles for the Home page

const Home = () => {
    return (
        <div className={styles.home}>
            <Header />
            <main>
                <ProfileSection />
                <SkillsSection />
                <ProjectsSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
}

export default Home;
