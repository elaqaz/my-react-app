// Home.js
import React from 'react';
import Header from '../Header/Header';
import ProfileSection from '../ProfileSection/ProfileSection';
import SkillsSection from '../components/SkillsSection/SkillsSection';
import ProjectsSection from '../ProjectsSection/ProjectsSection';
import ContactSection from '../ContactSection/ContactSection';
import Footer from '../Footer/Footer';
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
