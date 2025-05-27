
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
            {/* <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center"> */}
              {/* <Users className="h-6 w-6 text-white" /> */}
              <img src="data:image/png;base64,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" alt="logo" />
            {/* </div> */}
            <div>
              <h1 className="text-xl font-bold text-white">Umuzi</h1>
              <p className="text-xs text-orange-400">StartUp</p>
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
                <Button onClick={onSignUp} className="bg-orange-500 hover:bg-orange-600 text-white">
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
