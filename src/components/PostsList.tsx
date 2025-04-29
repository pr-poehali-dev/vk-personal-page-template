
import { Card } from "@/components/ui/card";
import { Heart, MessageCircle, Share2, Eye, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface Post {
  id: string;
  author: string;
  avatar: string;
  date: string;
  content: string;
  likes: number;
  comments: number;
  reposts: number;
  views: number;
  images?: string[];
}

interface PostsListProps {
  posts: Post[];
}

const PostsList = ({ posts }: PostsListProps) => {
  return (
    <div className="space-y-4">
      <div className="bg-white rounded-lg p-4 mb-4">
        <textarea 
          placeholder="Что у вас нового?" 
          className="w-full p-2 rounded-md border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-[#5181b8] focus:border-transparent"
          rows={2}
        />
        <div className="flex justify-between mt-2">
          <div className="flex space-x-2">
            {/* Иконки прикрепления файлов */}
          </div>
          <Button className="bg-[#5181b8] hover:bg-[#4a76a8]">
            Опубликовать
          </Button>
        </div>
      </div>

      {posts.map((post) => (
        <Card key={post.id} className="p-4">
          <div className="flex items-start justify-between">
            <div className="flex space-x-3">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img 
                  src={post.avatar} 
                  alt={post.author} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-medium text-[#2a5885] hover:underline cursor-pointer">
                  {post.author}
                </h3>
                <p className="text-sm text-gray-500">{post.date}</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-600">
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </div>

          <div className="mt-3">
            <p className="text-gray-800 whitespace-pre-line">{post.content}</p>
            
            {post.images && post.images.length > 0 && (
              <div className={`mt-3 grid gap-2 ${post.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                {post.images.map((image, index) => (
                  <div key={index} className="rounded-lg overflow-hidden">
                    <img 
                      src={image} 
                      alt={`Изображение ${index + 1}`} 
                      className="w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="mt-4 pt-2">
            <div className="flex justify-between text-gray-500">
              <div className="flex space-x-4">
                <button className="flex items-center space-x-1 hover:text-[#5181b8]">
                  <Heart className="h-5 w-5" />
                  <span>{post.likes}</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-[#5181b8]">
                  <MessageCircle className="h-5 w-5" />
                  <span>{post.comments}</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-[#5181b8]">
                  <Share2 className="h-5 w-5" />
                  <span>{post.reposts}</span>
                </button>
              </div>
              <div className="flex items-center space-x-1 text-gray-400">
                <Eye className="h-5 w-5" />
                <span>{post.views}</span>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default PostsList;
