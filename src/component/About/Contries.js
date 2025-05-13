


'use client';

const CountriesSection = ({ countries }) => {
    return (
        <section className="mb-16 sm:mb-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    Global Coverage
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Asset Central Report provides comprehensive asset verification across multiple jurisdictions
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {countries.map((country, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 group">
                        <div className="flex items-start mb-4">
                            <span className="text-4xl mr-4">{country.icon}</span>
                            <div>
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                    {country.name}
                                </h3>
                                <div className="w-12 h-1 bg-blue-500 mt-2"></div>
                            </div>
                        </div>
                        <p className="text-gray-600">
                            {country.description}
                        </p>
                        <div className="mt-4 pt-4 border-t border-gray-100">
                            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
                                {index % 3 === 0 && 'Full Coverage'}
                                {index % 3 === 1 && 'Government Verified'}
                                {index % 3 === 2 && 'Real-time Data'}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CountriesSection;