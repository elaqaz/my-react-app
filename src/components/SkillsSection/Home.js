// Home.js
import React from 'react';
import Header from '../components/Header/Header';
import ProfileSection from '../components/ProfileSection/ProfileSection';
import SkillsSection from '../components/SkillsSection/SkillsSection';
import ProjectsSection from '../components/ProjectsSection/ProjectsSection';
import ContactSection from '../components/ContactSection/ContactSection';
import Footer from '../components/Footer/Footer';
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
