// Importa componentes UI personalizados
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ReactNode } from "react";

// Define as propriedades aceitas pelo PricingCard
interface PricingCardProps {
  title: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  savings?: number;
  image: ReactNode;
  isRecommended?: boolean;
  features?: string[];
  badgeText?: string;
  imageStyle?: React.CSSProperties;
}

// Componente de card de preço
export const PricingCard = ({
  title,
  subtitle,
  price,
  originalPrice,
  savings,
  image,
  isRecommended = false,
  features = [],
  badgeText = "60-DAYS GUARANTEE",
  imageStyle
}: PricingCardProps) => {
  return (
    // Container principal do card
    <div className="relative">
      {/* Card visual com borda e sombra */}
      <Card 
        className={`
          relative overflow-hidden transition-all duration-300 hover:shadow-2xl
          ${isRecommended ? 'border-2 border-pink-600' : 'border-2 border-pink-500'}
          bg-white shadow-xl p-0
        `}
      >
        {/* Banner do topo com título e subtítulo */}
        <div className={`${isRecommended ? 'bg-pink-600' : 'bg-pink-500'} text-white text-center py-3 px-4`}>
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-sm">{subtitle}</p>
        </div>

        {/* Conteúdo do card */}
        <div className="p-4 flex flex-col items-center space-y-4">
          {/* Imagem do produto */}
          <div className="w-32 h-32 flex items-center justify-center">
            {image}
          </div>

          {/* Preço */}
          <div className="text-center">
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-5xl font-bold text-gray-900">${price}</span>
              <div className="text-sm text-gray-500">
                <div>Per</div>
                <div>Bottle</div>
              </div>
            </div>
            {savings && (
              <p className="text-pink-500 font-semibold text-sm mt-2">
                YOU SAVE ${savings}!
              </p>
            )}
          </div>
         
          {/* Badge de garantia */}
          <Badge variant="outline" className="border-gray-900 text-gray-900 bg-white font-semibold px-3 py-1">
            {badgeText}
          </Badge>

          {/* Lista de features (benefícios) */}
          {features.length > 0 && (
            <div className="w-full space-y-2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <div className="w-4 h-4 bg-green-500 rounded flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-900">{feature}</span>
                </div>
              ))}
            </div>
          )}

          {/* Botão de pedido */}
          <Button 
            className="w-full bg-yellow-600 hover:bg-yellow-700 text-gray-900 font-bold py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            aria-label="Order Now"
          >
            🛒 Order Now
            <div className="text-xs font-normal ml-2">Great Offer!</div>
          </Button>

          {/* Ícones de pagamento */}
          <div className="flex items-center gap-2 justify-center flex-wrap">
            <div className="w-8 h-6 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold" aria-label="Pay with VISA">VISA</div>
            <div className="w-8 h-6 bg-red-600 rounded flex items-center justify-center text-white text-xs font-bold" aria-label="Pay with MasterCard">MC</div>
            <div className="w-8 h-6 bg-blue-400 rounded flex items-center justify-center text-white text-xs font-bold" aria-label="Pay with American Express">AE</div>
            <div className="w-8 h-6 bg-orange-500 rounded flex items-center justify-center text-white text-xs font-bold" aria-label="Pay with Discover">DC</div>
          </div>

          {/* Total e frete */}
          <div className="text-center text-sm">
            <p className="text-gray-600">
              TOTAL: {originalPrice && <span className="line-through mr-1">${originalPrice}</span>}
              <span className="font-bold text-gray-900">${price}</span>
            </p>
            <p className="text-pink-500 font-semibold mt-1">+ FREE US SHIPPING</p>
          </div>
        </div>
      </Card>
    </div>
  );
};
