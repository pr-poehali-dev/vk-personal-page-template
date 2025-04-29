
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Photo {
  id: string;
  url: string;
  alt: string;
}

interface PhotoGridProps {
  photos: Photo[];
}

const PhotoGrid = ({ photos }: PhotoGridProps) => {
  const displayPhotos = photos.slice(0, 6);
  
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-medium">Фотографии</CardTitle>
        <button className="text-[#5181b8] text-sm font-medium hover:underline">
          Показать все
        </button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-2">
          {displayPhotos.map((photo) => (
            <div key={photo.id} className="relative aspect-square overflow-hidden rounded-md">
              <img 
                src={photo.url} 
                alt={photo.alt} 
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PhotoGrid;
