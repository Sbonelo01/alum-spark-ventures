
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Briefcase, Users, Search, Plus } from 'lucide-react';

interface ServiceProviderDashboardProps {
  user: any;
  businesses: any[];
}

const ServiceProviderDashboard = ({ user, businesses }: ServiceProviderDashboardProps) => {
  const getMatchingOpportunities = () => {
    if (!user.serviceOffered) return [];
    
    return businesses.filter(business => 
      business.services_needed.some(service => 
        service.toLowerCase().includes(user.serviceOffered.toLowerCase()) ||
        user.serviceOffered.toLowerCase().includes(service.toLowerCase())
      )
    );
  };

  const matchingOpportunities = getMatchingOpportunities();

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome back, {user.name}
        </h1>
        <p className="text-gray-600">Discover opportunities and grow your career</p>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
          <TabsTrigger value="businesses">All Businesses</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Your Service</CardTitle>
                <Briefcase className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{user.serviceOffered || 'Not Set'}</div>
                <p className="text-xs text-muted-foreground">
                  Primary service offering
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Matches</CardTitle>
                <Search className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{matchingOpportunities.length}</div>
                <p className="text-xs text-muted-foreground">
                  Opportunities matching your skills
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Network</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{businesses.length}</div>
                <p className="text-xs text-muted-foreground">
                  Alumni businesses to explore
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>
                Manage your profile and explore opportunities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-green-600 hover:bg-green-700">
                  <Search className="w-4 h-4 mr-2" />
                  Browse Opportunities
                </Button>
                <Button variant="outline">
                  <Users className="w-4 h-4 mr-2" />
                  Update Profile
                </Button>
                <Button variant="outline">
                  <Briefcase className="w-4 h-4 mr-2" />
                  View Applications
                </Button>
              </div>
            </CardContent>
          </Card>

          {user.serviceOffered && (
            <Card>
              <CardHeader>
                <CardTitle>Your Service Profile</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg">{user.serviceOffered}</h3>
                  <p className="text-gray-600">{user.experience}</p>
                </div>
                {user.skills && (
                  <div>
                    <p className="font-medium text-sm text-gray-700 mb-2">Skills:</p>
                    <p className="text-sm text-gray-600">{user.skills}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {matchingOpportunities.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Recommended Opportunities</CardTitle>
                <CardDescription>
                  Opportunities that match your service offering
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {matchingOpportunities.slice(0, 3).map((business) => (
                    <div key={business.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold">{business.name}</h4>
                        <Badge variant="secondary">{business.category}</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{business.description}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex flex-wrap gap-1">
                          {business.services_needed.map((service) => (
                            <Badge key={service} variant="outline" className="text-xs">
                              {service}
                            </Badge>
                          ))}
                        </div>
                        <Button size="sm">Apply</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="opportunities" className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Available Opportunities</h2>
            <p className="text-gray-600">Find positions that match your skills and interests</p>
          </div>

          <div className="space-y-4">
            {businesses.map((business) => (
              <Card key={business.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{business.name}</CardTitle>
                      <CardDescription>Founded by {business.owner}</CardDescription>
                    </div>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                      {business.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{business.description}</p>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Team Size:</span>
                      <span className="font-medium">{business.employees} people</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Funding Stage:</span>
                      <span className="font-medium">{business.funding_stage}</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-2">Looking for:</p>
                      <div className="flex flex-wrap gap-1">
                        {business.services_needed.map((service) => (
                          <Badge 
                            key={service} 
                            variant="outline" 
                            className={`text-xs ${
                              user.serviceOffered && 
                              (service.toLowerCase().includes(user.serviceOffered.toLowerCase()) ||
                               user.serviceOffered.toLowerCase().includes(service.toLowerCase()))
                                ? 'bg-green-100 text-green-700 border-green-300' 
                                : ''
                            }`}
                          >
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button className="flex-1 bg-green-600 hover:bg-green-700">
                      Apply Now
                    </Button>
                    <Button variant="outline">Learn More</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="businesses" className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Alumni Business Directory</h2>
            <p className="text-gray-600">Explore the entire network of alumni businesses</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businesses.map((business) => (
              <Card key={business.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{business.name}</CardTitle>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                      {business.funding_stage}
                    </Badge>
                  </div>
                  <CardDescription>Founded by {business.owner}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{business.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Category:</span>
                      <span className="font-medium">{business.category}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Team Size:</span>
                      <span className="font-medium">{business.employees} people</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-gray-500 mb-2">Looking for:</p>
                    <div className="flex flex-wrap gap-1">
                      {business.services_needed.map((service) => (
                        <Badge key={service} variant="outline" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ServiceProviderDashboard;
