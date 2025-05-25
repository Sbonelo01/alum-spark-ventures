
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';

interface FundingApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FundingApplicationModal = ({ isOpen, onClose }: FundingApplicationModalProps) => {
  const [formData, setFormData] = useState({
    fundingProgram: '',
    requestedAmount: '',
    businessStage: '',
    useOfFunds: '',
    businessPlan: '',
    marketAnalysis: '',
    financialProjections: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    // Simulate form submission
    toast({
      title: "Application Submitted!",
      description: "Your funding application has been successfully submitted. We'll review it and get back to you within 5-7 business days.",
    });
    
    // Reset form
    setFormData({
      fundingProgram: '',
      requestedAmount: '',
      businessStage: '',
      useOfFunds: '',
      businessPlan: '',
      marketAnalysis: '',
      financialProjections: ''
    });
    
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-gray-900 border-gray-700">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">
            Funding Application
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div>
            <Label htmlFor="fundingProgram" className="text-orange-400">Funding Program</Label>
            <Select value={formData.fundingProgram} onValueChange={(value) => handleInputChange('fundingProgram', value)}>
              <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                <SelectValue placeholder="Select a funding program" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-600">
                <SelectItem value="alumni-seed" className="text-white hover:bg-gray-700">Alumni Seed Fund ($10K - $50K)</SelectItem>
                <SelectItem value="growth-accelerator" className="text-white hover:bg-gray-700">Growth Accelerator ($50K - $200K)</SelectItem>
                <SelectItem value="innovation-grant" className="text-white hover:bg-gray-700">Innovation Grant ($5K - $25K)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="requestedAmount" className="text-orange-400">Requested Amount</Label>
            <Input
              id="requestedAmount"
              type="number"
              value={formData.requestedAmount}
              onChange={(e) => handleInputChange('requestedAmount', e.target.value)}
              placeholder="Enter the amount you're requesting"
              className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
            />
          </div>

          <div>
            <Label htmlFor="businessStage" className="text-orange-400">Current Business Stage</Label>
            <Select value={formData.businessStage} onValueChange={(value) => handleInputChange('businessStage', value)}>
              <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                <SelectValue placeholder="Select your business stage" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-600">
                <SelectItem value="idea" className="text-white hover:bg-gray-700">Idea Stage</SelectItem>
                <SelectItem value="prototype" className="text-white hover:bg-gray-700">Prototype/MVP</SelectItem>
                <SelectItem value="early-revenue" className="text-white hover:bg-gray-700">Early Revenue</SelectItem>
                <SelectItem value="growth" className="text-white hover:bg-gray-700">Growth Stage</SelectItem>
                <SelectItem value="scale" className="text-white hover:bg-gray-700">Scale Stage</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="useOfFunds" className="text-orange-400">Use of Funds</Label>
            <Textarea
              id="useOfFunds"
              value={formData.useOfFunds}
              onChange={(e) => handleInputChange('useOfFunds', e.target.value)}
              placeholder="Describe how you plan to use the funding"
              rows={3}
              className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
            />
          </div>

          <div>
            <Label htmlFor="businessPlan" className="text-orange-400">Business Plan Summary</Label>
            <Textarea
              id="businessPlan"
              value={formData.businessPlan}
              onChange={(e) => handleInputChange('businessPlan', e.target.value)}
              placeholder="Provide a brief summary of your business plan"
              rows={4}
              className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
            />
          </div>

          <div>
            <Label htmlFor="marketAnalysis" className="text-orange-400">Market Analysis</Label>
            <Textarea
              id="marketAnalysis"
              value={formData.marketAnalysis}
              onChange={(e) => handleInputChange('marketAnalysis', e.target.value)}
              placeholder="Describe your target market and competitive landscape"
              rows={3}
              className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
            />
          </div>

          <div>
            <Label htmlFor="financialProjections" className="text-orange-400">Financial Projections</Label>
            <Textarea
              id="financialProjections"
              value={formData.financialProjections}
              onChange={(e) => handleInputChange('financialProjections', e.target.value)}
              placeholder="Provide your financial projections for the next 2-3 years"
              rows={3}
              className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
            />
          </div>

          <div className="flex justify-end gap-3">
            <Button variant="outline" onClick={onClose} className="border-gray-600 text-gray-300 hover:bg-gray-800">
              Cancel
            </Button>
            <Button 
              onClick={handleSubmit}
              disabled={!formData.fundingProgram || !formData.requestedAmount || !formData.businessStage}
              className="bg-orange-500 hover:bg-orange-600 text-white"
            >
              Submit Application
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FundingApplicationModal;
