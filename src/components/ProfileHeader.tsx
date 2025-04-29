
import { Button } from "@/components/ui/button";
import { MessageCircle, UserRound, Edit, MoreHorizontal, Users } from "lucide-react";

interface ProfileHeaderProps {
  name: string;
  avatarUrl: string;
  status?: string;
  isOnline?: boolean;
}

const ProfileHeader = ({ name, avatarUrl, status, isOnline = true }: ProfileHeaderProps) => {
  return (
    <div className="w-full bg-white rounded-lg p-5 shadow-sm">
      <div className="flex flex-col md:flex-row gap-5">
        {/* Аватар */}
        <div className="relative">
          <img 
            src={avatarUrl || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"} 
            alt={`${name} фото`} 
            className="w-40 h-40 rounded-full object-cover border-4 border-white shadow"
          />
          {isOnline && (
            <div className="absolute bottom-3 right-3 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
          )}
        </div>

        {/* Информация */}
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-semibold">{name}</h1>
              {status && <p className="text-gray-500 mt-1">{status}</p>}
              {isOnline && <p className="text-sm text-green-600 mt-2">онлайн</p>}
            </div>
            
            <div className="flex gap-2">
              <Button variant="default" className="bg-[#5181b8] hover:bg-[#4a76a8]">
                <MessageCircle className="mr-2 h-4 w-4" />
                Сообщение
              </Button>
              <Button variant="outline">
                <Users className="h-4 w-4" />
              </Button>
              <Button variant="outline">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Статистика */}
          <div className="flex gap-4 mt-5">
            <div className="text-center">
              <span className="text-lg font-semibold">245</span>
              <p className="text-gray-500 text-sm">друзей</p>
            </div>
            <div className="text-center">
              <span className="text-lg font-semibold">87</span>
              <p className="text-gray-500 text-sm">подписчиков</p>
            </div>
            <div className="text-center">
              <span className="text-lg font-semibold">523</span>
              <p className="text-gray-500 text-sm">фотографий</p>
            </div>
            <div className="text-center">
              <span className="text-lg font-semibold">18</span>
              <p className="text-gray-500 text-sm">видео</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
