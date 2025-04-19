
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

interface LanguageSelectionProps {
  onLanguageSelect: (lang: string) => void;
}

const LanguageSelection: React.FC<LanguageSelectionProps> = ({ onLanguageSelect }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-[#9b87f5] to-[#7E69AB] p-4">
      <Card className="w-full max-w-md animate-fade-in">
        <CardContent className="p-6 space-y-6">
          <div className="text-center space-y-4">
            <Globe className="w-12 h-12 mx-auto text-[#9b87f5]" />
            <h2 className="text-2xl font-bold text-gray-800">Choose Your Language</h2>
            <p className="text-gray-600">اختر لغتك المفضلة</p>
            <p className="text-gray-600">Choisissez votre langue</p>
            <p className="text-gray-600">Elige tu idioma</p>
          </div>
          
          <div className="grid gap-3">
            <Button
              onClick={() => onLanguageSelect('ar')}
              className="w-full bg-white text-[#9b87f5] hover:bg-gray-50 border border-gray-200"
            >
              العربية
            </Button>
            <Button
              onClick={() => onLanguageSelect('en')}
              className="w-full bg-white text-[#9b87f5] hover:bg-gray-50 border border-gray-200"
            >
              English
            </Button>
            <Button
              onClick={() => onLanguageSelect('fr')}
              className="w-full bg-white text-[#9b87f5] hover:bg-gray-50 border border-gray-200"
            >
              Français
            </Button>
            <Button
              onClick={() => onLanguageSelect('es')}
              className="w-full bg-white text-[#9b87f5] hover:bg-gray-50 border border-gray-200"
            >
              Español
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LanguageSelection;
