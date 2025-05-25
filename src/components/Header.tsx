
import { Button } from '@/components/ui/button';
import { Users } from 'lucide-react';

interface HeaderProps {
  user?: any;
  onSignUp?: () => void;
  onLogin?: () => void;
  onLogout?: () => void;
}

const Header = ({ user, onSignUp, onLogin, onLogout }: HeaderProps) => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <Users className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Alum Spark Ventures</h1>
              <p className="text-xs text-gray-500">Alumni Business Network</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{user.name}</p>
                  <p className="text-xs text-gray-500 capitalize">
                    {user.type?.replace('_', ' ')}
                  </p>
                </div>
                <Button variant="outline" onClick={onLogout}>
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Button variant="ghost" onClick={onLogin}>
                  Login
                </Button>
                <Button onClick={onSignUp} className="bg-blue-600 hover:bg-blue-700">
                  Join Now
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
