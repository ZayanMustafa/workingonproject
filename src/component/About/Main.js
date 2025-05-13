

'use client';

const HeroSection = ({ content }) => {
    return (
        <section className="mt-10 text-center mb-16 sm:mb-20">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {content.title}
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                {content.description}
            </p>
        </section>
    );
};

export default HeroSection;