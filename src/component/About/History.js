

'use client';

const HistorySection = ({ history }) => {
    return (
        <section className="mb-16 sm:mb-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    Our Journey
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto"></div>
            </div>
            
            <div className="relative max-w-4xl mx-auto">
                <div className="absolute left-5 sm:left-1/2 h-full w-0.5 bg-gradient-to-b from-blue-200 to-blue-500"></div>
                
                <div className="space-y-12">
                    {history.map((item, index) => (
                        <div key={index} className="relative pl-10 sm:pl-0">
                            <div className={`flex flex-col sm:flex-row ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'} items-center gap-8`}>
                                <div className="absolute -left-1 sm:left-1/2 w-4 h-4 -ml-2 rounded-full bg-blue-600 border-4 border-blue-100"></div>
                                <div className={`flex-1 ${index % 2 === 0 ? 'sm:pr-8 sm:text-right' : 'sm:pl-8 sm:text-left'} order-2 sm:order-none`}>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.year}</h3>
                                    <p className="text-lg text-gray-700">{item.content}</p>
                                </div>
                                <div className={`flex-1 ${index % 2 === 0 ? 'sm:order-first' : 'sm:order-last'}`}>
                                    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 h-full">
                                        <div className="text-5xl text-blue-600 mb-4 me-4">
                                            {index === 0 && '🚀'}
                                            {index === 1 && '🌎'}
                                            {index === 2 && '💡'}
                                            {index === 3 && '🏆'}
                                        </div>
                                        <h4 className="text-xl font-semibold text-gray-800 mb-2">
                                            {index === 0 && 'Foundation'}
                                            {index === 1 && 'Expansion'}
                                            {index === 2 && 'Innovation'}
                                            {index === 3 && 'Leadership'}
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HistorySection;