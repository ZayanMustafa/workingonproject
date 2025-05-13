

'use client';

const StatsSection = ({ stats }) => {
    return (
        <section className="mb-16 sm:mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-gradient-to-br from-white to-blue-50 p-6 sm:p-8 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300">
                        <p className="text-4xl sm:text-5xl font-bold text-blue-600 mb-3 text-center ms-4">
                            {stat.value}
                        </p>
                        <p className="text-lg sm:text-xl text-gray-700 font-medium text-center">
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StatsSection;