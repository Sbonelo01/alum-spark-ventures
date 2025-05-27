import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Briefcase, Search, Plus } from 'lucide-react';
import Header from '@/components/Header';
import AuthModal from '@/components/AuthModal';
import BusinessOwnerDashboard from '@/components/BusinessOwnerDashboard';
import ServiceProviderDashboard from '@/components/ServiceProviderDashboard';

const Index = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [businesses] = useState([
    {
      id: 1,
      name: "TechStart Solutions",
      owner: "Tsepo Mbatha",
      description: "AI-powered business automation platform",
      category: "Technology",
      services_needed: ["Frontend Developer", "Digital Marketing"],
      funding_stage: "Seed",
      employees: 5
    },
    {
      id: 2,
      name: "EcoGreen Consulting",
      owner: "Senzo Mchunu",
      description: "Sustainable business consulting for small enterprises",
      category: "Consulting",
      services_needed: ["Business Analyst", "Content Writer"],
      funding_stage: "Series A",
      employees: 12
    },
    {
      id: 3,
      name: "DesignCraft Studio",
      owner: "Emma Smith",
      description: "Creative design agency specializing in brand identity",
      category: "Design",
      services_needed: ["UX Designer", "Project Manager"],
      funding_stage: "Bootstrap",
      employees: 8
    }
  ]);

  const handleSignUp = (userData) => {
    setCurrentUser(userData);
    setShowAuthModal(false);
  };

  const handleLogin = () => {
    // Demo login - in real app this would authenticate
    setCurrentUser({ 
      name: "Demo User", 
      type: "business_owner",
      email: "demo@example.com"
    });
    setShowAuthModal(false);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  if (currentUser) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header user={currentUser} onLogout={handleLogout} />
        {currentUser.type === 'business_owner' ? (
          <BusinessOwnerDashboard user={currentUser} businesses={businesses} />
        ) : (
          <ServiceProviderDashboard user={currentUser} businesses={businesses} />
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-orange-900">
      <Header onSignUp={() => setShowAuthModal(true)} onLogin={handleLogin} />
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
            Connect. Fund. Grow.
            <span className="block text-orange-400">Your LearnerPreneur Journey</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join Umuzi - the premier platform where learners and alumni 
            start businesses, access funding, and collaborate with peers to build the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg"
              onClick={() => setShowAuthModal(true)}
            >
              Start Your Journey
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black px-8 py-3 text-lg"
              onClick={handleLogin}
            >
              Explore Platform
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Whether you're starting a business or offering your skills, 
            our platform provides the tools and connections you need.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-800 border-gray-700">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-black" />
              </div>
              <CardTitle className="text-xl text-white">Start Your Business</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-gray-300 leading-relaxed">
                Register as a business owner, showcase your venture, and connect with 
                potential employees and funding opportunities.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-800 border-gray-700">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl text-white">Offer Your Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-gray-300 leading-relaxed">
                Join as a service provider, showcase your expertise, and apply to 
                exciting opportunities with alumni-founded businesses.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-800 border-gray-700">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl text-white">Access Funding</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-gray-300 leading-relaxed">
                Apply for funding opportunities and connect with investors who 
                believe in supporting alumni entrepreneurship.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Business Showcase */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Featured Alumni Businesses
            </h2>
            <p className="text-lg text-gray-300">
              Discover innovative companies started by our community
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {businesses.map((business) => (
              <Card key={business.id} className="hover:shadow-lg transition-shadow duration-300 bg-gray-800 border-gray-700">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg text-white">{business.name}</CardTitle>
                    <Badge variant="secondary" className="bg-orange-500 text-white">
                      {business.funding_stage}
                    </Badge>
                  </div>
                  <CardDescription className="text-sm text-orange-400">
                    Founded by {business.owner}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{business.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Category:</span>
                      <span className="font-medium text-white">{business.category}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Team Size:</span>
                      <span className="font-medium text-white">{business.employees} people</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-gray-400 mb-2">Looking for:</p>
                    <div className="flex flex-wrap gap-1">
                      {business.services_needed.map((service) => (
                        <Badge key={service} variant="outline" className="text-xs border-orange-400 text-orange-400">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)}
        onSignUp={handleSignUp}
      />
    </div>
  );
};

export default Index;
