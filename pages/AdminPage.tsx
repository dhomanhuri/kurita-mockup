import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isAddProjectModalOpen, setIsAddProjectModalOpen] = useState(false);
  
  // Projects State
  const [projects, setProjects] = useState([
    { id: 1, title: 'Cikarang Plant Expansion', client: 'PT. Unilever Indonesia', status: 'On Track', progress: 75, date: 'Due: Mar 30, 2024', members: 5, budget: '$1.2M', image: 'https://images.unsplash.com/photo-1565514020125-6905a5a3a246?auto=format&fit=crop&q=80&w=400' },
    { id: 2, title: 'Wastewater Treatment Upgrade', client: 'Mayora Indah Tbk', status: 'At Risk', progress: 45, date: 'Due: Apr 15, 2024', members: 3, budget: '$850k', image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=400' },
    { id: 3, title: 'Cooling System Maintenance', client: 'Indofood CBP', status: 'Completed', progress: 100, date: 'Finished: Feb 10, 2024', members: 4, budget: '$120k', image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=400' },
    { id: 4, title: 'RO System Installation', client: 'Kalbe Farma', status: 'On Track', progress: 30, date: 'Due: May 20, 2024', members: 6, budget: '$2.4M', image: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&q=80&w=400' },
    { id: 5, title: 'Chemical Supply Contract', client: 'Semen Indonesia', status: 'On Track', progress: 60, date: 'Due: Jun 01, 2024', members: 2, budget: '$500k', image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=400' },
    { id: 6, title: 'Water Quality Analysis', client: 'Danone Aqua', status: 'Delayed', progress: 15, date: 'Due: Mar 05, 2024', members: 3, budget: '$50k', image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=400' },
  ]);

  const [newProject, setNewProject] = useState({
    title: '',
    client: '',
    status: 'On Track',
    progress: 0,
    date: '',
    budget: '',
    image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=400' // Default image
  });

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    const project = {
      id: projects.length + 1,
      ...newProject,
      members: Math.floor(Math.random() * 5) + 2, // Random members
      date: `Due: ${newProject.date}`
    };
    setProjects([...projects, project]);
    setIsAddProjectModalOpen(false);
    setNewProject({
      title: '',
      client: '',
      status: 'On Track',
      progress: 0,
      date: '',
      budget: '',
      image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=400'
    });
  };

  // Mock data for dashboard
  const stats = [
    { title: 'Total Inquiries', value: '1,245', change: '+12%', icon: 'fa-envelope', color: 'bg-blue-500' },
    { title: 'Active Projects', value: '48', change: '+5%', icon: 'fa-project-diagram', color: 'bg-green-500' },
    { title: 'New Users', value: '320', change: '+18%', icon: 'fa-users', color: 'bg-purple-500' },
    { title: 'System Status', value: 'Healthy', change: '99.9%', icon: 'fa-server', color: 'bg-orange-500' },
  ];

  const inquiries = [
    { id: 1, name: 'PT Indofood CBP', subject: 'Water Treatment Inquiry', date: '2024-02-14', status: 'Pending' },
    { id: 2, name: 'Unilever Indonesia', subject: 'Cooling Tower Maintenance', date: '2024-02-13', status: 'In Progress' },
    { id: 3, name: 'Mayora Indah', subject: 'Wastewater Consultation', date: '2024-02-12', status: 'Completed' },
    { id: 4, name: 'Kalbe Farma', subject: 'Ultrapure Water System', date: '2024-02-11', status: 'Pending' },
    { id: 5, name: 'Semen Indonesia', subject: 'Boiler Water Chemicals', date: '2024-02-10', status: 'In Progress' },
  ];

  const news = [
    { id: 1, title: 'Kurita Expands in Southeast Asia', date: '2024-02-05', status: 'Published' },
    { id: 2, title: 'New AI Technology Launch', date: '2024-01-28', status: 'Draft' },
    { id: 3, title: 'Sustainability Report 2023', date: '2024-01-15', status: 'Published' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans text-slate-900">
      {/* Sidebar */}
      <aside 
        className={`bg-slate-900 text-white transition-all duration-300 flex flex-col fixed h-full z-20 ${
          sidebarOpen ? 'w-64' : 'w-20'
        }`}
      >
        <div className="h-20 flex items-center justify-center border-b border-slate-800">
          {sidebarOpen ? (
            <div className="flex items-center gap-2">
               <img 
                src="https://www.kurita-water.com/assets/images/common/logo_kurita2_1.svg" 
                alt="Kurita Logo" 
                className="h-8 w-auto brightness-0 invert"
              />
            </div>
          ) : (
             <img 
                src="https://www.kurita-water.com/assets/images/common/logo_kurita2_1.svg" 
                alt="Kurita Logo" 
                className="h-6 w-auto brightness-0 invert"
              />
          )}
        </div>

        <nav className="flex-1 py-6 px-3 space-y-2">
          {[
            { id: 'dashboard', label: 'Dashboard', icon: 'fa-chart-line' },
            { id: 'inquiries', label: 'Inquiries', icon: 'fa-envelope-open-text' },
            { id: 'projects', label: 'Projects', icon: 'fa-briefcase' },
            { id: 'news', label: 'News & Updates', icon: 'fa-newspaper' },
            { id: 'users', label: 'User Management', icon: 'fa-users-cog' },
            { id: 'settings', label: 'Settings', icon: 'fa-cog' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center p-3 rounded-xl transition-colors ${
                activeTab === item.id 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50' 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <div className="w-6 flex justify-center">
                <i className={`fas ${item.icon} text-lg`}></i>
              </div>
              {sidebarOpen && <span className="ml-3 font-medium">{item.label}</span>}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <button 
            onClick={() => navigate('/')}
            className={`w-full flex items-center p-3 rounded-xl text-red-400 hover:bg-slate-800 hover:text-red-300 transition-colors`}
          >
            <div className="w-6 flex justify-center">
              <i className="fas fa-sign-out-alt text-lg"></i>
            </div>
            {sidebarOpen && <span className="ml-3 font-medium">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-20'}`}>
        {/* Header */}
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-10">
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-slate-500 hover:text-blue-600 transition-colors"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>

          <div className="flex items-center gap-6">
            <div className="relative">
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              <i className="fas fa-bell text-slate-400 text-xl cursor-pointer hover:text-slate-600"></i>
            </div>
            <div className="flex items-center gap-3 pl-6 border-l border-slate-200">
              <div className="text-right hidden md:block">
                <div className="text-sm font-bold text-slate-900">Admin User</div>
                <div className="text-xs text-slate-500">System Administrator</div>
              </div>
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold border-2 border-white shadow-sm">
                AD
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-8">
          {activeTab === 'dashboard' && (
            <div className="space-y-8">
              <div className="flex justify-between items-end">
                <div>
                  <h2 className="text-3xl font-black text-slate-900 mb-2">Dashboard Overview</h2>
                  <p className="text-slate-500">Welcome back, here's what's happening today.</p>
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50">
                    <i className="fas fa-download mr-2"></i> Export Report
                  </button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 shadow-lg shadow-blue-200">
                    <i className="fas fa-plus mr-2"></i> New Project
                  </button>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <div className={`w-12 h-12 rounded-xl ${stat.color} text-white flex items-center justify-center shadow-lg shadow-blue-500/20`}>
                        <i className={`fas ${stat.icon} text-xl`}></i>
                      </div>
                      <span className="text-xs font-bold text-green-500 bg-green-50 px-2 py-1 rounded-full">
                        {stat.change}
                      </span>
                    </div>
                    <h3 className="text-slate-500 text-sm font-medium mb-1">{stat.title}</h3>
                    <p className="text-3xl font-black text-slate-900">{stat.value}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Inquiries */}
                <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                  <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                    <h3 className="font-bold text-lg text-slate-900">Recent Inquiries</h3>
                    <button className="text-blue-600 text-sm font-medium hover:underline">View All</button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-slate-50 text-xs uppercase text-slate-500 font-semibold">
                        <tr>
                          <th className="px-6 py-4 text-left">Company</th>
                          <th className="px-6 py-4 text-left">Subject</th>
                          <th className="px-6 py-4 text-left">Date</th>
                          <th className="px-6 py-4 text-left">Status</th>
                          <th className="px-6 py-4 text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {inquiries.map((inquiry) => (
                          <tr key={inquiry.id} className="hover:bg-slate-50/50 transition-colors">
                            <td className="px-6 py-4 font-medium text-slate-900">{inquiry.name}</td>
                            <td className="px-6 py-4 text-slate-600">{inquiry.subject}</td>
                            <td className="px-6 py-4 text-slate-500 text-sm">{inquiry.date}</td>
                            <td className="px-6 py-4">
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                inquiry.status === 'Completed' ? 'bg-green-100 text-green-800' :
                                inquiry.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                                'bg-yellow-100 text-yellow-800'
                              }`}>
                                {inquiry.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-right">
                              <button className="text-slate-400 hover:text-blue-600">
                                <i className="fas fa-ellipsis-h"></i>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* News Updates */}
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-lg text-slate-900">Latest News</h3>
                    <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-50 text-slate-400">
                      <i className="fas fa-plus"></i>
                    </button>
                  </div>
                  <div className="space-y-6">
                    {news.map((item) => (
                      <div key={item.id} className="group cursor-pointer">
                        <div className="flex justify-between items-start mb-2">
                          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md ${
                            item.status === 'Published' ? 'bg-green-50 text-green-600' : 'bg-slate-100 text-slate-500'
                          }`}>
                            {item.status}
                          </span>
                          <span className="text-xs text-slate-400">{item.date}</span>
                        </div>
                        <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-1">
                          {item.title}
                        </h4>
                        <div className="w-full bg-slate-100 h-1 rounded-full mt-3 overflow-hidden">
                          <div className="bg-blue-500 h-full w-2/3"></div>
                        </div>
                        <p className="text-xs text-slate-400 mt-1">2.4k views</p>
                      </div>
                    ))}
                  </div>
                  <button className="w-full mt-6 py-3 border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-colors">
                    Manage All Posts
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'inquiries' && (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h2 className="text-3xl font-black text-slate-900 mb-2">Inquiries Management</h2>
                  <p className="text-slate-500">Track and respond to customer inquiries.</p>
                </div>
                <div className="flex gap-3 w-full md:w-auto">
                  <div className="relative flex-1 md:w-64">
                    <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"></i>
                    <input 
                      type="text" 
                      placeholder="Search inquiries..." 
                      className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50">
                    <i className="fas fa-filter"></i>
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-slate-50 text-xs uppercase text-slate-500 font-semibold border-b border-slate-100">
                      <tr>
                        <th className="px-6 py-4 text-left">
                          <input type="checkbox" className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                        </th>
                        <th className="px-6 py-4 text-left">Customer</th>
                        <th className="px-6 py-4 text-left">Subject</th>
                        <th className="px-6 py-4 text-left">Date Received</th>
                        <th className="px-6 py-4 text-left">Priority</th>
                        <th className="px-6 py-4 text-left">Status</th>
                        <th className="px-6 py-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {[
                        { id: 1, name: 'PT Indofood CBP', email: 'contact@indofood.com', subject: 'Water Treatment Inquiry', date: 'Feb 14, 2024', priority: 'High', status: 'New' },
                        { id: 2, name: 'Unilever Indonesia', email: 'procurement@unilever.co.id', subject: 'Cooling Tower Maintenance', date: 'Feb 13, 2024', priority: 'Medium', status: 'In Progress' },
                        { id: 3, name: 'Mayora Indah', email: 'facility@mayora.com', subject: 'Wastewater Consultation', date: 'Feb 12, 2024', priority: 'Low', status: 'Resolved' },
                        { id: 4, name: 'Kalbe Farma', email: 'purchasing@kalbe.co.id', subject: 'Ultrapure Water System', date: 'Feb 11, 2024', priority: 'High', status: 'New' },
                        { id: 5, name: 'Semen Indonesia', email: 'info@semenindonesia.com', subject: 'Boiler Water Chemicals', date: 'Feb 10, 2024', priority: 'Medium', status: 'In Progress' },
                        { id: 6, name: 'Pertamina RU IV', email: 'maintenance@pertamina.com', subject: 'Desalination Plant Upgrade', date: 'Feb 09, 2024', priority: 'High', status: 'New' },
                        { id: 7, name: 'Wilmar International', email: 'plant.mgr@wilmar.com', subject: 'Filtration System Quote', date: 'Feb 08, 2024', priority: 'Low', status: 'Resolved' },
                      ].map((inquiry) => (
                        <tr key={inquiry.id} className="group hover:bg-slate-50/80 transition-colors cursor-pointer">
                          <td className="px-6 py-4">
                            <input type="checkbox" className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center text-xs font-bold mr-3 shadow-sm">
                                {inquiry.name.substring(0, 2).toUpperCase()}
                              </div>
                              <div>
                                <div className="font-bold text-slate-900 text-sm">{inquiry.name}</div>
                                <div className="text-xs text-slate-400">{inquiry.email}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-sm font-medium text-slate-700">{inquiry.subject}</span>
                          </td>
                          <td className="px-6 py-4 text-sm text-slate-500">{inquiry.date}</td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${
                              inquiry.priority === 'High' ? 'bg-red-50 text-red-600 border border-red-100' :
                              inquiry.priority === 'Medium' ? 'bg-orange-50 text-orange-600 border border-orange-100' :
                              'bg-green-50 text-green-600 border border-green-100'
                            }`}>
                              {inquiry.priority}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${
                              inquiry.status === 'New' ? 'bg-blue-50 text-blue-700 border-blue-100' :
                              inquiry.status === 'In Progress' ? 'bg-purple-50 text-purple-700 border-purple-100' :
                              'bg-slate-100 text-slate-600 border-slate-200'
                            }`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${
                                inquiry.status === 'New' ? 'bg-blue-500' :
                                inquiry.status === 'In Progress' ? 'bg-purple-500' :
                                'bg-slate-500'
                              }`}></span>
                              {inquiry.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                              <button className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-slate-400 hover:text-blue-600 hover:border-blue-200 flex items-center justify-center transition-all">
                                <i className="fas fa-eye"></i>
                              </button>
                              <button className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-slate-400 hover:text-green-600 hover:border-green-200 flex items-center justify-center transition-all">
                                <i className="fas fa-check"></i>
                              </button>
                              <button className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-slate-400 hover:text-red-600 hover:border-red-200 flex items-center justify-center transition-all">
                                <i className="fas fa-trash-alt"></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                {/* Pagination */}
                <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-sm text-slate-500">
                    Showing <span className="font-bold text-slate-900">1-7</span> of <span className="font-bold text-slate-900">24</span> inquiries
                  </div>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 text-sm border border-slate-200 rounded-lg text-slate-500 hover:bg-slate-50 disabled:opacity-50" disabled>Previous</button>
                    <button className="px-3 py-1 text-sm border border-slate-200 rounded-lg text-slate-500 hover:bg-slate-50">Next</button>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Projects Module */}
          {activeTab === 'projects' && (
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h2 className="text-3xl font-black text-slate-900 mb-2">Projects Management</h2>
                  <p className="text-slate-500">Monitor active projects and their progress.</p>
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50">
                    <i className="fas fa-filter mr-2"></i> Filter
                  </button>
                  <button 
                    onClick={() => setIsAddProjectModalOpen(true)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 shadow-lg shadow-blue-200"
                  >
                    <i className="fas fa-plus mr-2"></i> New Project
                  </button>
                </div>
              </div>

              {/* Project Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <div key={project.id} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-md transition-all group">
                    <div className="h-40 overflow-hidden relative">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm ${
                          project.status === 'On Track' ? 'bg-green-500 text-white' :
                          project.status === 'At Risk' ? 'bg-orange-500 text-white' :
                          project.status === 'Delayed' ? 'bg-red-500 text-white' :
                          'bg-blue-500 text-white'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="mb-4">
                        <h3 className="font-bold text-lg text-slate-900 mb-1 line-clamp-1">{project.title}</h3>
                        <p className="text-sm text-slate-500">{project.client}</p>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-xs font-bold text-slate-500 mb-2">
                            <span>Progress</span>
                            <span>{project.progress}%</span>
                          </div>
                          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                            <div 
                              className={`h-full rounded-full ${
                                project.status === 'On Track' || project.status === 'Completed' ? 'bg-green-500' :
                                project.status === 'At Risk' ? 'bg-orange-500' : 'bg-red-500'
                              }`} 
                              style={{ width: `${project.progress}%` }}
                            ></div>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                          <div className="flex -space-x-2">
                            {[...Array(project.members)].map((_, i) => (
                              <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500">
                                {String.fromCharCode(65 + i)}
                              </div>
                            ))}
                          </div>
                          <div className="text-right">
                            <div className="text-xs text-slate-400">Budget</div>
                            <div className="font-bold text-slate-900">{project.budget}</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between text-xs text-slate-400 pt-2">
                          <span><i className="far fa-calendar-alt mr-1"></i> {project.date}</span>
                          <button className="text-blue-600 font-bold hover:underline">Details</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Add New Project Card */}
                <button 
                  onClick={() => setIsAddProjectModalOpen(true)}
                  className="border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center p-6 text-slate-400 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all min-h-[400px]"
                >
                  <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                    <i className="fas fa-plus text-2xl"></i>
                  </div>
                  <span className="font-bold">Create New Project</span>
                </button>
              </div>
            </div>
          )}

          {/* Add Project Modal */}
          {isAddProjectModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
              <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-fade-in-up">
                <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                  <h3 className="font-bold text-lg text-slate-900">Add New Project</h3>
                  <button onClick={() => setIsAddProjectModalOpen(false)} className="text-slate-400 hover:text-red-500">
                    <i className="fas fa-times"></i>
                  </button>
                </div>
                <form onSubmit={handleAddProject} className="p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Project Title</label>
                    <input 
                      type="text" 
                      required
                      value={newProject.title}
                      onChange={(e) => setNewProject({...newProject, title: e.target.value})}
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                      placeholder="e.g. Water Treatment Upgrade"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Client Name</label>
                    <input 
                      type="text" 
                      required
                      value={newProject.client}
                      onChange={(e) => setNewProject({...newProject, client: e.target.value})}
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                      placeholder="e.g. PT Indofood CBP"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1">Due Date</label>
                      <input 
                        type="date" 
                        required
                        value={newProject.date}
                        onChange={(e) => setNewProject({...newProject, date: e.target.value})}
                        className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1">Budget</label>
                      <input 
                        type="text" 
                        required
                        value={newProject.budget}
                        onChange={(e) => setNewProject({...newProject, budget: e.target.value})}
                        className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="e.g. $500k"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1">Status</label>
                      <select 
                        value={newProject.status}
                        onChange={(e) => setNewProject({...newProject, status: e.target.value})}
                        className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                      >
                        <option>On Track</option>
                        <option>At Risk</option>
                        <option>Delayed</option>
                        <option>Completed</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1">Progress (%)</label>
                      <input 
                        type="number" 
                        min="0"
                        max="100"
                        value={newProject.progress}
                        onChange={(e) => setNewProject({...newProject, progress: parseInt(e.target.value)})}
                        className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                      />
                    </div>
                  </div>
                  <div className="pt-4 flex justify-end gap-3">
                    <button 
                      type="button"
                      onClick={() => setIsAddProjectModalOpen(false)}
                      className="px-4 py-2 text-slate-600 font-bold hover:bg-slate-50 rounded-lg"
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit"
                      className="px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 shadow-lg shadow-blue-200"
                    >
                      Create Project
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* News Module Placeholder */}
          {['news', 'users', 'settings'].includes(activeTab) && (
             <div className="text-center py-20">
              <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
                <i className="fas fa-tools text-4xl"></i>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Module</h2>
              <p className="text-slate-500">This section is currently being built.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminPage;
