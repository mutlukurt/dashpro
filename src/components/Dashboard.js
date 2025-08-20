import React, { useState, useEffect } from 'react';
import { 
  Home, BarChart3, Users, Settings, Bell, Search, Menu, X, 
  TrendingUp, TrendingDown, DollarSign, ShoppingCart, Eye, Calendar,
  Filter, ChevronDown, MoreHorizontal, ExternalLink, Plus, Download
} from 'lucide-react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell, Area, AreaChart
} from 'recharts';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeMenuItem, setActiveMenuItem] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortField, setSortField] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc');
  const [selectedTimeRange, setSelectedTimeRange] = useState('7d');
  const [showNotifications, setShowNotifications] = useState(false);

  // Mock data
  const metrics = [
    { id: 1, title: 'Total Revenue', value: '$847,392', change: '+12.5%', trend: 'up', color: 'from-blue-500 to-cyan-400' },
    { id: 2, title: 'Active Users', value: '24,891', change: '+8.2%', trend: 'up', color: 'from-emerald-500 to-teal-400' },
    { id: 3, title: 'Conversion Rate', value: '3.84%', change: '-2.1%', trend: 'down', color: 'from-purple-500 to-violet-400' },
    { id: 4, title: 'Avg Order Value', value: '$156.32', change: '+5.7%', trend: 'up', color: 'from-orange-500 to-red-400' },
  ];

  const chartData = [
    { name: 'Jan', revenue: 4000, users: 2400, orders: 240 },
    { name: 'Feb', revenue: 3000, users: 1398, orders: 221 },
    { name: 'Mar', revenue: 2000, users: 9800, orders: 229 },
    { name: 'Apr', revenue: 2780, users: 3908, orders: 200 },
    { name: 'May', revenue: 1890, users: 4800, orders: 218 },
    { name: 'Jun', revenue: 2390, users: 3800, orders: 250 },
    { name: 'Jul', revenue: 3490, users: 4300, orders: 210 },
  ];

  const pieData = [
    { name: 'Desktop', value: 45, color: '#3B82F6' },
    { name: 'Mobile', value: 35, color: '#10B981' },
    { name: 'Tablet', value: 20, color: '#F59E0B' },
  ];

  const tableData = [
    { id: 1, name: 'Sarah Johnson', email: 'sarah@example.com', role: 'Admin', status: 'Active', lastActive: '2 hours ago' },
    { id: 2, name: 'Mike Chen', email: 'mike@example.com', role: 'Editor', status: 'Active', lastActive: '1 hour ago' },
    { id: 3, name: 'Emma Davis', email: 'emma@example.com', role: 'Viewer', status: 'Inactive', lastActive: '2 days ago' },
    { id: 4, name: 'Alex Rodriguez', email: 'alex@example.com', role: 'Admin', status: 'Active', lastActive: '30 minutes ago' },
  ];

  const recentActivity = [
    { id: 1, action: 'New user registered', user: 'John Doe', time: '2 minutes ago', type: 'user' },
    { id: 2, action: 'Order #1234 completed', user: 'Jane Smith', time: '15 minutes ago', type: 'order' },
    { id: 3, action: 'Revenue goal achieved', user: 'System', time: '1 hour ago', type: 'achievement' },
    { id: 4, action: 'New feature deployed', user: 'Dev Team', time: '2 hours ago', type: 'system' },
  ];

  const notifications = [
    { id: 1, title: 'New user signup', message: '5 new users joined today', time: '10 min ago', unread: true },
    { id: 2, title: 'Revenue milestone', message: 'Monthly target achieved', time: '1 hour ago', unread: true },
    { id: 3, title: 'System update', message: 'Dashboard updated successfully', time: '2 hours ago', unread: false },
  ];

  const menuItems = [
    { id: 'dashboard', icon: Home, label: 'Dashboard' },
    { id: 'analytics', icon: BarChart3, label: 'Analytics' },
    { id: 'users', icon: Users, label: 'Users' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  const filteredTableData = tableData.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.email.toLowerCase().includes(searchQuery.toLowerCase())
  ).sort((a, b) => {
    if (sortDirection === 'asc') {
      return a[sortField] > b[sortField] ? 1 : -1;
    }
    return a[sortField] < b[sortField] ? 1 : -1;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full bg-slate-900/80 backdrop-blur-xl border-r border-slate-700/50 transition-all duration-300 z-50 ${
        sidebarOpen ? 'w-64' : 'w-20'
      }`}>
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center">
              <BarChart3 className="text-white" size={20} />
            </div>
            {sidebarOpen && (
              <div>
                <h1 className="text-xl font-bold text-white">DashPro</h1>
                <p className="text-xs text-slate-400">Enterprise Suite</p>
              </div>
            )}
          </div>

          <nav className="space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveMenuItem(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  activeMenuItem === item.id
                    ? 'bg-gradient-to-r from-blue-500/20 to-cyan-400/20 border border-blue-500/30 text-blue-300'
                    : 'text-slate-300 hover:bg-slate-800/50 hover:text-white'
                }`}
              >
                <item.icon size={20} />
                {sidebarOpen && <span className="font-medium">{item.label}</span>}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className={`transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-20'}`}>
        {/* Header */}
        <header className="bg-slate-800/50 backdrop-blur-xl border-b border-slate-700/50 px-6 py-4 relative z-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors"
              >
                <Menu className="text-slate-300" size={20} />
              </button>
              
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
                <input
                  type="text"
                  placeholder="Search anything..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50 focus:bg-slate-700 transition-all w-80"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="p-2 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors relative"
                >
                  <Bell className="text-slate-300" size={20} />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                </button>

                {showNotifications && (
                  <div className="absolute right-0 top-12 w-80 bg-slate-800/95 backdrop-blur-xl border border-slate-700/50 rounded-xl shadow-2xl z-[100]">
                    <div className="p-4 border-b border-slate-700/50">
                      <h3 className="font-semibold text-white">Notifications</h3>
                    </div>
                    <div className="max-h-80 overflow-y-auto">
                      {notifications.map((notification) => (
                        <div key={notification.id} className={`p-4 border-b border-slate-700/30 hover:bg-slate-700/30 transition-colors ${notification.unread ? 'bg-blue-500/5' : ''}`}>
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className={`font-medium ${notification.unread ? 'text-white' : 'text-slate-300'}`}>
                                {notification.title}
                              </h4>
                              <p className="text-sm text-slate-400 mt-1">{notification.message}</p>
                            </div>
                            {notification.unread && <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>}
                          </div>
                          <p className="text-xs text-slate-500 mt-2">{notification.time}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <p className="text-sm font-medium text-white">Alex Johnson</p>
                  <p className="text-xs text-slate-400">Administrator</p>
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold">
                  AJ
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6 space-y-6">
          {/* Welcome Section */}
          <div className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border border-blue-500/20 rounded-2xl p-6 backdrop-blur-sm">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Welcome back, Alex! 👋</h2>
                <p className="text-slate-300">Here's what's happening with your business today.</p>
              </div>
              <div className="flex space-x-3">
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center space-x-2">
                  <Plus size={16} />
                  <span>New Report</span>
                </button>
                <button className="px-4 py-2 bg-slate-700/50 hover:bg-slate-700 text-white rounded-lg transition-colors flex items-center space-x-2">
                  <Download size={16} />
                  <span>Export</span>
                </button>
              </div>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric) => (
              <div key={metric.id} className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${metric.color} flex items-center justify-center`}>
                    <DollarSign className="text-white" size={20} />
                  </div>
                  {metric.trend === 'up' ? (
                    <TrendingUp className="text-emerald-400" size={20} />
                  ) : (
                    <TrendingDown className="text-red-400" size={20} />
                  )}
                </div>
                <h3 className="text-slate-400 text-sm font-medium mb-2">{metric.title}</h3>
                <div className="flex items-baseline space-x-2">
                  <p className="text-2xl font-bold text-white">{metric.value}</p>
                  <span className={`text-sm font-medium ${metric.trend === 'up' ? 'text-emerald-400' : 'text-red-400'}`}>
                    {metric.change}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Revenue Chart */}
            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-white">Revenue Overview</h3>
                <select
                  value={selectedTimeRange}
                  onChange={(e) => setSelectedTimeRange(e.target.value)}
                  className="bg-slate-700/50 border border-slate-600/50 rounded-lg px-3 py-1 text-sm text-white focus:outline-none focus:border-blue-500/50"
                >
                  <option value="7d">7 Days</option>
                  <option value="30d">30 Days</option>
                  <option value="90d">90 Days</option>
                </select>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Area type="monotone" dataKey="revenue" stroke="#3B82F6" fillOpacity={1} fill="url(#colorRevenue)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* User Activity Chart */}
            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white mb-6">User Activity</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Bar dataKey="users" fill="#10B981" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Data Table and Activity Feed */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Users Table */}
            <div className="lg:col-span-2 bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-white">Recent Users</h3>
                <div className="flex space-x-2">
                  <button className="p-2 bg-slate-700/50 hover:bg-slate-700 rounded-lg transition-colors">
                    <Filter className="text-slate-300" size={16} />
                  </button>
                  <button className="p-2 bg-slate-700/50 hover:bg-slate-700 rounded-lg transition-colors">
                    <MoreHorizontal className="text-slate-300" size={16} />
                  </button>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-700/50">
                      <th className="text-left py-3 px-4 text-slate-300 font-medium cursor-pointer hover:text-white transition-colors"
                          onClick={() => {
                            setSortField('name');
                            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
                          }}>
                        Name
                      </th>
                      <th className="text-left py-3 px-4 text-slate-300 font-medium">Role</th>
                      <th className="text-left py-3 px-4 text-slate-300 font-medium">Status</th>
                      <th className="text-left py-3 px-4 text-slate-300 font-medium">Last Active</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredTableData.map((user) => (
                      <tr key={user.id} className="border-b border-slate-700/30 hover:bg-slate-700/20 transition-colors">
                        <td className="py-3 px-4">
                          <div>
                            <p className="text-white font-medium">{user.name}</p>
                            <p className="text-slate-400 text-sm">{user.email}</p>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">
                            {user.role}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            user.status === 'Active' 
                              ? 'bg-emerald-500/20 text-emerald-300' 
                              : 'bg-slate-500/20 text-slate-300'
                          }`}>
                            {user.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-slate-300 text-sm">{user.lastActive}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white mb-6">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-700/30 transition-colors">
                    <div className={`w-3 h-3 rounded-full mt-2 ${
                      activity.type === 'user' ? 'bg-blue-500' :
                      activity.type === 'order' ? 'bg-emerald-500' :
                      activity.type === 'achievement' ? 'bg-yellow-500' : 'bg-purple-500'
                    }`}></div>
                    <div className="flex-1">
                      <p className="text-white text-sm">{activity.action}</p>
                      <p className="text-slate-400 text-xs">by {activity.user}</p>
                      <p className="text-slate-500 text-xs mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Device Analytics */}
          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white mb-6">Device Analytics</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="flex justify-center">
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                {pieData.map((item) => (
                  <div key={item.name} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full`} style={{ backgroundColor: item.color }}></div>
                      <span className="text-slate-300">{item.name}</span>
                    </div>
                    <span className="text-white font-semibold">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
