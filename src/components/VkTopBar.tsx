
import { Search, Bell, MessageCircle, Menu, Home, Users, PlayCircle, Newspaper, UserRound } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const VkTopBar = () => {
  return (
    <div className="bg-[#5181b8] text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Левая часть (логотип и навигация) */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <img 
                src="https://cdn.poehali.dev/files/349d8ff3-41b7-4b68-b97a-47fff8ebc922.png" 
                alt="ВК логотип" 
                className="h-8 w-8"
              />
            </div>
            
            <div className="hidden md:flex space-x-1">
              <Button variant="ghost" className="text-white hover:bg-[#4a76a8]">
                <Home className="h-5 w-5 mr-1" />
                <span>Главная</span>
              </Button>
              <Button variant="ghost" className="text-white hover:bg-[#4a76a8]">
                <Users className="h-5 w-5 mr-1" />
                <span>Друзья</span>
              </Button>
              <Button variant="ghost" className="text-white hover:bg-[#4a76a8]">
                <MessageCircle className="h-5 w-5 mr-1" />
                <span>Сообщения</span>
              </Button>
            </div>
          </div>
          
          {/* Центральная часть (поиск) */}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Input 
                type="search" 
                placeholder="Поиск" 
                className="pl-10 bg-[#4276b1] text-white placeholder:text-gray-300 border-none"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-300" />
            </div>
          </div>
          
          {/* Правая часть (уведомления и профиль) */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="text-white hover:bg-[#4a76a8] rounded-full">
              <Bell className="h-5 w-5" />
            </Button>
            
            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200" 
                alt="Аватар пользователя" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <Button variant="ghost" size="icon" className="text-white hover:bg-[#4a76a8] rounded-full md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VkTopBar;
