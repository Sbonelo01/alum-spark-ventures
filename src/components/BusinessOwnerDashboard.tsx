
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, Briefcase, Users, Search } from 'lucide-react';
import FundingApplicationModal from '@/components/FundingApplicationModal';

interface BusinessOwnerDashboardProps {
  user: any;
  businesses: any[];
}

const BusinessOwnerDashboard = ({ user, businesses }: BusinessOwnerDashboardProps) => {
  const [showFundingModal, setShowFundingModal] = useState(false);

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome back, {user.name}
        </h1>
        <p className="text-gray-600">Manage your business and explore opportunities</p>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="funding">Funding</TabsTrigger>
          <TabsTrigger value="businesses">All Businesses</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Your Business</CardTitle>
                <Briefcase className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{user.businessName || 'Not Set'}</div>
                <p className="text-xs text-muted-foreground">
                  {user.businessCategory || 'Category not specified'}
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
                  Alumni businesses in network
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Opportunities</CardTitle>
                <Search className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">
                  Available funding programs
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>
                Manage your business and explore opportunities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <Button 
                  onClick={() => setShowFundingModal(true)}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Apply for Funding
                </Button>
                <Button variant="outline">
                  <Users className="w-4 h-4 mr-2" />
                  View Service Providers
                </Button>
                <Button variant="outline">
                  <Briefcase className="w-4 h-4 mr-2" />
                  Update Business Profile
                </Button>
              </div>
            </CardContent>
          </Card>

          {user.businessName && (
            <Card>
              <CardHeader>
                <CardTitle>Your Business Profile</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg">{user.businessName}</h3>
                  <p className="text-gray-600">{user.businessDescription}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">{user.businessCategory}</Badge>
                </div>
                {user.servicesNeeded && (
                  <div>
                    <p className="font-medium text-sm text-gray-700 mb-2">Looking for:</p>
                    <p className="text-sm text-gray-600">{user.servicesNeeded}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="funding" className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Funding Opportunities</h2>
              <p className="text-gray-600">Apply for funding to grow your business</p>
            </div>
            <Button 
              onClick={() => setShowFundingModal(true)}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Plus className="w-4 h-4 mr-2" />
              Apply for Funding
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Alumni Seed Fund</CardTitle>
                <CardDescription>Early-stage funding for alumni startups</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Amount:</span>
                    <span className="font-medium">$10K - $50K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Stage:</span>
                    <span className="font-medium">Seed</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Applications:</span>
                    <span className="font-medium">Open</span>
                  </div>
                </div>
                <Button className="w-full mt-4" variant="outline">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Growth Accelerator</CardTitle>
                <CardDescription>Scaling support for established businesses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Amount:</span>
                    <span className="font-medium">$50K - $200K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Stage:</span>
                    <span className="font-medium">Series A</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Applications:</span>
                    <span className="font-medium">Open</span>
                  </div>
                </div>
                <Button className="w-full mt-4" variant="outline">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="businesses" className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Alumni Business Directory</h2>
            <p className="text-gray-600">Connect with fellow alumni entrepreneurs</p>
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
                    Connect
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <FundingApplicationModal 
        isOpen={showFundingModal}
        onClose={() => setShowFundingModal(false)}
      />
    </div>
  );
};

export default BusinessOwnerDashboard;
