import React from 'react';

const CandidateDashboard = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
    <h2 className="text-3xl font-bold mb-8">Candidate Dashboard</h2>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-8">
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-xl font-bold mb-6">Active Assessments</h3>
          {[
            { role: "Senior Full Stack Engineer", company: "TechFlow", deadline: "2 days left" },
            { role: "Product Designer", company: "DesignGrid", deadline: "5 days left" }
          ].map((job, i) => (
            <div key={i} className="flex justify-between items-center p-6 bg-slate-50 rounded-xl mb-4">
              <div>
                <h4 className="font-bold text-lg">{job.role}</h4>
                <p className="text-slate-500">{job.company}</p>
              </div>
              <div className="text-right">
                <span className="block text-sm text-indigo-600 font-bold mb-2">{job.deadline}</span>
                <button className="btn-primary py-2 px-4 text-sm">Take Test</button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-xl font-bold mb-6">Recent Activity</h3>
          <div className="space-y-4">
            <p className="text-slate-600">✅ Completed "Javascript Advanced" skill test - Score: 92/100</p>
            <p className="text-slate-600">🎥 Submitted video interview for "Frontend Developer" at PixelCo</p>
          </div>
        </div>
      </div>
      
      <div className="space-y-8">
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center">
          <div className="w-20 h-20 rounded-full bg-slate-200 mx-auto mb-4"></div>
          <h3 className="text-xl font-bold">Alex Johnson</h3>
          <p className="text-slate-500 text-sm mb-6">Full Stack Developer</p>
          <div className="text-left space-y-4">
            <div className="flex justify-between text-sm">
              <span>Profile Strength</span>
              <span className="text-indigo-600 font-bold">85%</span>
            </div>
            <div className="h-2 bg-slate-100 rounded-full">
              <div className="w-[85%] h-full bg-indigo-600 rounded-full"></div>
            </div>
          </div>
          <button className="btn-secondary w-full mt-8">Edit Profile</button>
        </div>
      </div>
    </div>
  </div>
);

export default CandidateDashboard;
