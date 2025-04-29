
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Briefcase, GraduationCap, Calendar, Gift } from "lucide-react";

interface ProfileInfoProps {
  city?: string;
  education?: string;
  birthDate?: string;
  work?: string;
}

const ProfileInfo = ({ city, education, birthDate, work }: ProfileInfoProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-medium">Информация</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {city && (
          <div className="flex items-center gap-2 text-gray-700">
            <MapPin className="h-4 w-4 text-gray-500" />
            <span>Город: {city}</span>
          </div>
        )}
        
        {education && (
          <div className="flex items-center gap-2 text-gray-700">
            <GraduationCap className="h-4 w-4 text-gray-500" />
            <span>Образование: {education}</span>
          </div>
        )}
        
        {work && (
          <div className="flex items-center gap-2 text-gray-700">
            <Briefcase className="h-4 w-4 text-gray-500" />
            <span>Место работы: {work}</span>
          </div>
        )}
        
        {birthDate && (
          <div className="flex items-center gap-2 text-gray-700">
            <Gift className="h-4 w-4 text-gray-500" />
            <span>День рождения: {birthDate}</span>
          </div>
        )}
        
        <button className="text-[#5181b8] text-sm font-medium mt-2 hover:underline">
          Показать подробную информацию
        </button>
      </CardContent>
    </Card>
  );
};

export default ProfileInfo;
