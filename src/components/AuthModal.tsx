
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Users } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSignUp: (userData: any) => void;
}

const AuthModal = ({ isOpen, onClose, onSignUp }: AuthModalProps) => {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState('');
  const [formData, setFormData] = useState({
    // Personal details
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    
    // Business owner specific
    businessName: '',
    businessDescription: '',
    businessCategory: '',
    servicesNeeded: '',
    
    // Service provider specific
    skills: '',
    serviceOffered: '',
    experience: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step === 1 && userType) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    }
  };

  const handleSubmit = () => {
    const userData = {
      ...formData,
      type: userType,
      name: `${formData.firstName} ${formData.lastName}`
    };
    onSignUp(userData);
    setStep(1);
    setUserType('');
    setFormData({
      firstName: '', lastName: '', email: '', phone: '',
      businessName: '', businessDescription: '', businessCategory: '', servicesNeeded: '',
      skills: '', serviceOffered: '', experience: ''
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Join Alum Spark Ventures
          </DialogTitle>
        </DialogHeader>

        {step === 1 && (
          <div className="space-y-6">
            <p className="text-center text-gray-600">
              Choose how you want to participate in our alumni network
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Card 
                className={`cursor-pointer transition-all duration-200 ${
                  userType === 'business_owner' 
                    ? 'ring-2 ring-blue-600 bg-blue-50' 
                    : 'hover:shadow-md'
                }`}
                onClick={() => setUserType('business_owner')}
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle>Business Owner</CardTitle>
                  <CardDescription>
                    Start or grow your business with our network
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Access funding opportunities</li>
                    <li>• Find skilled team members</li>
                    <li>• Connect with other entrepreneurs</li>
                    <li>• Showcase your business</li>
                  </ul>
                </CardContent>
              </Card>

              <Card 
                className={`cursor-pointer transition-all duration-200 ${
                  userType === 'service_provider' 
                    ? 'ring-2 ring-green-600 bg-green-50' 
                    : 'hover:shadow-md'
                }`}
                onClick={() => setUserType('service_provider')}
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle>Service Provider</CardTitle>
                  <CardDescription>
                    Offer your skills to alumni businesses
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Find exciting job opportunities</li>
                    <li>• Work with innovative startups</li>
                    <li>• Build your professional network</li>
                    <li>• Showcase your expertise</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-end">
              <Button 
                onClick={handleNext}
                disabled={!userType}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Continue
              </Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Personal Information</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="Enter your phone number"
              />
            </div>

            <div className="flex justify-between">
              <Button variant="outline" onClick={() => setStep(1)}>
                Back
              </Button>
              <Button 
                onClick={handleNext}
                disabled={!formData.firstName || !formData.lastName || !formData.email}
              >
                Continue
              </Button>
            </div>
          </div>
        )}

        {step === 3 && userType === 'business_owner' && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Business Information</h3>
            
            <div>
              <Label htmlFor="businessName">Business Name</Label>
              <Input
                id="businessName"
                value={formData.businessName}
                onChange={(e) => handleInputChange('businessName', e.target.value)}
                placeholder="Enter your business name"
              />
            </div>

            <div>
              <Label htmlFor="businessDescription">Business Description</Label>
              <Textarea
                id="businessDescription"
                value={formData.businessDescription}
                onChange={(e) => handleInputChange('businessDescription', e.target.value)}
                placeholder="Describe what your business does"
                rows={3}
              />
            </div>

            <div>
              <Label htmlFor="businessCategory">Business Category</Label>
              <Input
                id="businessCategory"
                value={formData.businessCategory}
                onChange={(e) => handleInputChange('businessCategory', e.target.value)}
                placeholder="e.g., Technology, Consulting, Design"
              />
            </div>

            <div>
              <Label htmlFor="servicesNeeded">Services/Skills You're Looking For</Label>
              <Textarea
                id="servicesNeeded"
                value={formData.servicesNeeded}
                onChange={(e) => handleInputChange('servicesNeeded', e.target.value)}
                placeholder="List the services or skills you need (e.g., Web Developer, Marketing Specialist)"
                rows={3}
              />
            </div>

            <div className="flex justify-between">
              <Button variant="outline" onClick={() => setStep(2)}>
                Back
              </Button>
              <Button 
                onClick={handleSubmit}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Complete Registration
              </Button>
            </div>
          </div>
        )}

        {step === 3 && userType === 'service_provider' && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Service Provider Information</h3>
            
            <div>
              <Label htmlFor="skills">Your Skills</Label>
              <Textarea
                id="skills"
                value={formData.skills}
                onChange={(e) => handleInputChange('skills', e.target.value)}
                placeholder="List your key skills (e.g., React, Digital Marketing, Graphic Design)"
                rows={3}
              />
            </div>

            <div>
              <Label htmlFor="serviceOffered">Service You Offer</Label>
              <Input
                id="serviceOffered"
                value={formData.serviceOffered}
                onChange={(e) => handleInputChange('serviceOffered', e.target.value)}
                placeholder="e.g., Frontend Development, Content Writing, Business Analysis"
              />
            </div>

            <div>
              <Label htmlFor="experience">Experience Level</Label>
              <Textarea
                id="experience"
                value={formData.experience}
                onChange={(e) => handleInputChange('experience', e.target.value)}
                placeholder="Briefly describe your experience and background"
                rows={3}
              />
            </div>

            <div className="flex justify-between">
              <Button variant="outline" onClick={() => setStep(2)}>
                Back
              </Button>
              <Button 
                onClick={handleSubmit}
                className="bg-green-600 hover:bg-green-700"
              >
                Complete Registration
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
