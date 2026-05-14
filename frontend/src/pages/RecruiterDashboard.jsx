import React from 'react';

const RecruiterDashboard = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
    <div className="flex justify-between items-center mb-12">
      <h2 className="text-3xl font-bold">Recruiter Command Center</h2>
      <button className="btn-primary">+ Create New Job</button>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
      {[
        { label: "Active Jobs", val: "12", color: "border-indigo-600" },
        { label: "Total Candidates", val: "1,240", color: "border-green-500" },
        { label: "AI Screened", val: "945", color: "border-blue-500" },
        { label: "Flagged (Risk)", val: "24", color: "border-red-500" }
      ].map((stat, i) => (
        <div key={i} className={`bg-white p-6 rounded-xl border-l-4 ${stat.color} shadow-sm border border-slate-200`}>
          <p className="text-sm text-slate-500 mb-1">{stat.label}</p>
          <p className="text-2xl font-bold text-slate-900">{stat.val}</p>
        </div>
      ))}
    </div>

    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <h3 className="text-xl font-bold mb-8">Top Candidates - Senior React Dev</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="pb-4 font-bold text-slate-500 text-sm">Candidate</th>
              <th className="pb-4 font-bold text-slate-500 text-sm">AI Score</th>
              <th className="pb-4 font-bold text-slate-500 text-sm">Sentiment</th>
              <th className="pb-4 font-bold text-slate-500 text-sm">Risk Level</th>
              <th className="pb-4 font-bold text-slate-500 text-sm">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {[
              { name: "John Doe", score: 94, sentiment: "Highly Positive", risk: "Low", riskColor: "text-green-500" },
              { name: "Sarah Smith", score: 88, sentiment: "Neutral", risk: "Medium", riskColor: "text-amber-500" },
              { name: "Mike Ross", score: 91, sentiment: "Positive", risk: "Low", riskColor: "text-green-500" }
            ].map((c, i) => (
              <tr key={i}>
                <td className="py-4 font-bold text-slate-900">{c.name}</td>
                <td className="py-4">
                  <span className="bg-slate-100 text-indigo-600 px-3 py-1 rounded-full font-bold text-sm">{c.score}%</span>
                </td>
                <td className="py-4 text-slate-600 text-sm">{c.sentiment}</td>
                <td className="py-4">
                  <span className={`font-bold text-sm ${c.riskColor}`}>● {c.risk}</span>
                </td>
                <td className="py-4">
                  <button className="text-indigo-600 font-bold text-sm hover:underline">View Profile</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default RecruiterDashboard;
