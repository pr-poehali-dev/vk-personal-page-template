
import { useState } from "react";
import ProfileHeader from "@/components/ProfileHeader";
import ProfileInfo from "@/components/ProfileInfo";
import PhotoGrid from "@/components/PhotoGrid";
import VkTopBar from "@/components/VkTopBar";
import PostsList from "@/components/PostsList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  // Пример данных пользователя
  const user = {
    name: "Иван Петров",
    avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    status: "Живу настоящим, мечтаю о будущем",
    isOnline: true,
    city: "Москва",
    education: "МГУ им. Ломоносова",
    birthDate: "15 марта",
    work: "Frontend Developer в IT Corp"
  };

  // Пример данных фотографий
  const photos = [
    { id: "1", url: "https://images.unsplash.com/photo-1617369120004-4fc70312c5e6?w=300&h=300&q=80", alt: "Фото 1" },
    { id: "2", url: "https://images.unsplash.com/photo-1604537466608-109fa2f16c3b?w=300&h=300&q=80", alt: "Фото 2" },
    { id: "3", url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=300&h=300&q=80", alt: "Фото 3" },
    { id: "4", url: "https://images.unsplash.com/photo-1548013146-72479768bada?w=300&h=300&q=80", alt: "Фото 4" },
    { id: "5", url: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=300&h=300&q=80", alt: "Фото 5" },
    { id: "6", url: "https://images.unsplash.com/photo-1563089145-599997674d42?w=300&h=300&q=80", alt: "Фото 6" }
  ];

  // Пример постов
  const posts = [
    {
      id: "1",
      author: user.name,
      avatar: user.avatarUrl,
      date: "сегодня в 15:42",
      content: "Сегодня отличный день для новых свершений! Работаю над интересным проектом и готовлюсь к выходным.",
      likes: 42,
      comments: 8,
      reposts: 3,
      views: 256,
      images: [photos[0].url, photos[1].url]
    },
    {
      id: "2",
      author: user.name,
      avatar: user.avatarUrl,
      date: "вчера в 10:15",
      content: "«Совершенство - это не когда нечего добавить, а когда нечего убрать» - Антуан де Сент-Экзюпери",
      likes: 67,
      comments: 12,
      reposts: 5,
      views: 341
    }
  ];

  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="min-h-screen bg-gray-100">
      <VkTopBar />
      
      <div className="container mx-auto px-4 py-4">
        <ProfileHeader 
          name={user.name} 
          avatarUrl={user.avatarUrl} 
          status={user.status} 
          isOnline={user.isOnline}
        />
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">
          <TabsList className="bg-white rounded-lg mb-4 border w-full justify-start">
            <TabsTrigger value="profile">Профиль</TabsTrigger>
            <TabsTrigger value="friends">Друзья</TabsTrigger>
            <TabsTrigger value="photos">Фотографии</TabsTrigger>
            <TabsTrigger value="videos">Видео</TabsTrigger>
            <TabsTrigger value="music">Музыка</TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-1 space-y-4">
                <ProfileInfo 
                  city={user.city}
                  education={user.education}
                  birthDate={user.birthDate}
                  work={user.work}
                />
                <PhotoGrid photos={photos} />
              </div>
              
              <div className="md:col-span-2">
                <PostsList posts={posts} />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="friends">
            <div className="bg-white p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Друзья</h2>
              <p className="text-gray-500">Здесь будет список друзей</p>
            </div>
          </TabsContent>
          
          <TabsContent value="photos">
            <div className="bg-white p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Фотографии</h2>
              <p className="text-gray-500">Здесь будут все фотографии</p>
            </div>
          </TabsContent>
          
          <TabsContent value="videos">
            <div className="bg-white p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Видео</h2>
              <p className="text-gray-500">Здесь будут видео</p>
            </div>
          </TabsContent>
          
          <TabsContent value="music">
            <div className="bg-white p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Музыка</h2>
              <p className="text-gray-500">Здесь будет музыка</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
