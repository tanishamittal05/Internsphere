import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, User, Search, FileText, Building2, Sparkles } from "lucide-react";

const navigationItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
    description: "Your personalized recommendations",
  },
  {
    title: "Profile",
    url: "/profile",
    icon: User,
    description: "Complete your profile",
  },
  {
    title: "Browse Internships",
    url: "/browse",
    icon: Search,
    description: "Explore all opportunities",
  },
  {
    title: "My Applications",
    url: "/applications",
    icon: FileText,
    description: "Track your applications",
  },
  {
    title: "Companies",
    url: "/companies",
    icon: Building2,
    description: "Manage internship postings",
  },
];

export default function Layout({ children }) {
  const location = useLocation();

  return (
    <div className="min-h-screen flex w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Sidebar */}
      <aside className="w-72 bg-white shadow-lg hidden md:flex flex-col">
        {/* Header */}
        <div className="border-b border-slate-200 p-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="font-bold text-slate-800 text-lg">PM InternsAI</h2>
            <p className="text-xs text-slate-500">Smart Career Matching</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          {navigationItems.map((item) => {
            const isActive = location.pathname === item.url;
            return (
              <Link
                key={item.title}
                to={item.url}
                className={`flex items-start gap-3 p-3 rounded-xl mb-2 transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg"
                    : "text-slate-600 hover:bg-blue-50 hover:text-blue-700"
                }`}
              >
                <item.icon className="w-5 h-5 mt-1" />
                <div>
                  <div className="font-medium">{item.title}</div>
                  <div
                    className={`text-xs ${
                      isActive ? "text-blue-100" : "text-slate-400"
                    }`}
                  >
                    {item.description}
                  </div>
                </div>
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="border-t border-slate-200 p-4">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-slate-700">
                AI-Powered Matching
              </span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Get personalized internship recommendations based on your profile
              and skills.
            </p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Mobile Header */}
        <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 px-6 py-4 md:hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-slate-800">PM InternsAI</span>
            </div>
          </div>
        </header>

        {/* Main Area */}
        <div className="flex-1 overflow-auto p-6">{children}</div>
      </main>
    </div>
  );
}
