



'use client';
import { useState } from 'react';
import { ABOUT_CONTENT, MISSION_VISION, HISTORY, COUNTRIES, FAQS } from '@/constant/About.const';
import HeroSection from '@/component/About/Main';
import MissionSection from '@/component/About/Mission';
import VisionSection from '@/component/About/Vision';
import HistorySection from '@/component/About/History';
import StatsSection from '@/component/About/State';
import CountriesSection from '@/component/About/Contries';
import FAQSection from '@/component/About/FAQ';

const AboutPage = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
            <HeroSection content={ABOUT_CONTENT} />
            <MissionSection mission={MISSION_VISION.mission} />
            <VisionSection vision={MISSION_VISION.vision} />
            <HistorySection history={HISTORY} />
            <StatsSection stats={ABOUT_CONTENT.stats} />
            <CountriesSection countries={COUNTRIES} />
            <FAQSection 
                faqs={FAQS} 
                activeFaq={activeFaq} 
                toggleFaq={toggleFaq} 
            />
        </div>
    );
};

export default AboutPage;