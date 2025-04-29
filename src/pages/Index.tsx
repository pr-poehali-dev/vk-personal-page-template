
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
    name: "Иван IV Грозный",
    avatarUrl: "https://images.unsplash.com/photo-1681149126884-c93abd8364fe?q=80&w=200&auto=format",
    status: "Государь, Царь и Великий Князь всея Руси",
    isOnline: true,
    city: "Москва",
    education: "Домашнее образование при дворе",
    birthDate: "25 августа 1530 г.",
    work: "Царь всея Руси (1547-1584)"
  };

  // Пример данных фотографий
  const photos = [
    { id: "1", url: "https://images.unsplash.com/photo-1610546198573-e6f3bca64dac?w=300&h=300&q=80", alt: "Успенский собор" },
    { id: "2", url: "https://images.unsplash.com/photo-1565105336789-d5d961692f53?w=300&h=300&q=80", alt: "Кремль" },
    { id: "3", url: "https://images.unsplash.com/photo-1512495039889-52a3b799c9bc?w=300&h=300&q=80", alt: "Москва 16 век" },
    { id: "4", url: "https://images.unsplash.com/photo-1594393628629-5c718d3dae6d?w=300&h=300&q=80", alt: "Трон" },
    { id: "5", url: "https://images.unsplash.com/photo-1638202993928-7d5df5f838be?w=300&h=300&q=80", alt: "Корона" },
    { id: "6", url: "https://images.unsplash.com/photo-1590176645609-fe94ad46d94a?w=300&h=300&q=80", alt: "Собор" }
  ];

  // Пример постов
  const posts = [
    {
      id: "1",
      author: user.name,
      avatar: user.avatarUrl,
      date: "сегодня в 15:42",
      content: "Повелеваю созвать Земский собор! Надобно обсудить вопросы государевы и меры по укреплению державы нашей.",
      likes: 1547,
      comments: 84,
      reposts: 30,
      views: 2560,
      images: [photos[0].url, photos[1].url]
    },
    {
      id: "2",
      author: user.name,
      avatar: user.avatarUrl,
      date: "вчера в 10:15",
      content: "«Не тот велик, кто велик пред людьми, но тот, кто велик пред Богом в душе своей». Указ о создании стрелецкого войска подписан. Отныне безопасность государства российского будет крепче!",
      likes: 1567,
      comments: 126,
      reposts: 50,
      views: 3441
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
              <p className="text-gray-500">Здесь будет список придворных и бояр</p>
            </div>
          </TabsContent>
          
          <TabsContent value="photos">
            <div className="bg-white p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Фотографии</h2>
              <p className="text-gray-500">Здесь будут царские портреты и картины</p>
            </div>
          </TabsContent>
          
          <TabsContent value="videos">
            <div className="bg-white p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Видео</h2>
              <p className="text-gray-500">Здесь будут видеозаписи царских выступлений</p>
            </div>
          </TabsContent>
          
          <TabsContent value="music">
            <div className="bg-white p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Музыка</h2>
              <p className="text-gray-500">Здесь будут церковные песнопения и придворная музыка</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
