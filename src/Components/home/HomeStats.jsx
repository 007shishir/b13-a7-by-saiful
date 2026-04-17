

const HomeStats = () => {
    const stats = [
    {
      label: 'Total Friends',
      value: '10',
    },
    {
      label: 'On Track',
      value: '3',
    },
    {
      label: 'Need Attention',
      value: '6',
    },
    {
      label: 'Interactions This Month',
      value: '12',
    },
  ];
    return (
        <div className="w-full py-16">
      <div className="mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center transition-hover hover:shadow-md"
            >
              <span className="text-3xl font-bold text-slate-800 mb-1">
                {stat.value}
              </span>
              <p className="text-sm font-medium text-slate-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        
        {/* Decorative Divider from the image */}
        <div className="mt-12 border-t border-slate-200 w-full" />
      </div>
    </div>
    );
};

export default HomeStats;