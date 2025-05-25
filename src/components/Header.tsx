
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
    <header className="bg-black shadow-sm border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
              <Users className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Alum Spark Ventures</h1>
              <p className="text-xs text-orange-400">Alumni Business Network</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-sm font-medium text-white">{user.name}</p>
                  <p className="text-xs text-orange-400 capitalize">
                    {user.type?.replace('_', ' ')}
                  </p>
                </div>
                <Button variant="outline" onClick={onLogout} className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black">
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Button variant="ghost" onClick={onLogin} className="text-orange-400 hover:bg-orange-400 hover:text-black">
                  Login
                </Button>
                <Button onClick={onSignUp} className="bg-purple-600 hover:bg-purple-700 text-white">
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
