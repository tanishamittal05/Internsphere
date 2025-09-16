import React, { useState, useEffect } from "react";
import { Button } from "../../frontend/src/components/Button";
import { Card, CardContent, CardHeader, CardTitle } from "../../frontend/src/components/Card";
import { Sparkles, TrendingUp, ArrowRight, Target } from "lucide-react";
import { Link } from "react-router-dom";

// ✅ Temporary placeholders for missing components
const WelcomeHero = ({ user }) => (
  <div className="p-6 bg-white rounded-2xl shadow">
    <h2 className="text-xl font-bold text-slate-800">Welcome, {user?.full_name || "Guest"} 🎉</h2>
    <p className="text-slate-600">Complete your profile to get recommendations.</p>
  </div>
);

const StatsOverview = () => (
  <div className="grid md:grid-cols-3 gap-6">
    <div className="p-6 bg-white rounded-xl shadow">📊 Stats</div>
    <div className="p-6 bg-white rounded-xl shadow">✅ Applications</div>
    <div className="p-6 bg-white rounded-xl shadow">⭐ Matches</div>
  </div>
);

const QuickActions = () => (
  <div className="p-6 bg-white rounded-xl shadow flex gap-4">
    <Button>Update Profile</Button>
    <Button>Browse Internships</Button>
  </div>
);

const RecommendationCard = ({ internship }) => (
  <div className="p-6 bg-white rounded-xl shadow">
    <h3 className="font-semibold text-slate-800">{internship.title}</h3>
    <p className="text-slate-500 text-sm">{internship.company_name}</p>
  </div>
);

export default function Dashboard() {
  const [user, setUser] = useState({ full_name: "Tanisha Mittal" });
  const [recommendations, setRecommendations] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);

  // Simulate recommendations loading
  useEffect(() => {
    setTimeout(() => {
      setRecommendations([
        { id: 1, title: "Frontend Developer Intern", company_name: "TechCorp" },
        { id: 2, title: "AI Research Intern", company_name: "AI Labs" },
      ]);
    }, 1500);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* ✅ Welcome Section */}
        <WelcomeHero user={user} />

        {/* ✅ Stats */}
        <StatsOverview />

        {/* ✅ Quick Actions */}
        <QuickActions />

        {/* ✅ Recommendations */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl text-slate-800">
                    AI-Powered Recommendations
                  </CardTitle>
                  <p className="text-sm text-slate-500 mt-1">
                    Personalized matches based on your profile
                  </p>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsGenerating(true)}
                disabled={isGenerating}
                className="text-blue-600 border-blue-200 hover:bg-blue-50"
              >
                {isGenerating ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
                    Analyzing...
                  </>
                ) : (
                  <>
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Refresh
                  </>
                )}
              </Button>
            </div>
          </CardHeader>

          <CardContent>
            {isGenerating ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-slate-600">AI is analyzing perfect matches for you...</p>
              </div>
            ) : recommendations.length > 0 ? (
              <div className="grid gap-6">
                {recommendations.map((internship) => (
                  <RecommendationCard key={internship.id} internship={internship} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Target className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-700 mb-2">
                  No recommendations yet
                </h3>
                <p className="text-slate-500 mb-6">
                  Complete your profile to get AI-powered internship recommendations
                </p>
                <Link to="/profile">
                  <Button className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600">
                    Complete Profile
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


