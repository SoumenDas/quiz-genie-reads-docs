
import { Book } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Book className="h-8 w-8 text-blue-600" />
            <h1 className="ml-3 text-2xl font-bold text-gray-900">QuizCraft</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Home</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Features</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Pricing</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Support</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
