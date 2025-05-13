'use client';

const MissionSection = ({ mission }) => {
    return (
        <section className="bg-white p-8 sm:p-10 rounded-2xl shadow-md border border-gray-100 mb-16 sm:mb-20">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
                    <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                        {mission.title}
                    </span>
                </h2>
                <div className="space-y-6">
                    {mission.content.map((paragraph, index) => (
                        <p key={index} className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MissionSection;