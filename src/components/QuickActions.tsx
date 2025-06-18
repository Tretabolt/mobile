
import { Calendar, Pill, Heart, Phone, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface QuickActionsProps {
  onAction: (action: string) => void;
}

const QuickActions = ({ onAction }: QuickActionsProps) => {
  const actions = [
    {
      icon: Calendar,
      label: "Agendar Consulta",
      color: "bg-blue-500 hover:bg-blue-600",
      action: "Agendamento de consulta"
    },
    {
      icon: Pill,
      label: "Lembrete Remédio",
      color: "bg-green-500 hover:bg-green-600",
      action: "Lembrete de medicamento"
    },
    {
      icon: Heart,
      label: "Check-up",
      color: "bg-red-500 hover:bg-red-600",
      action: "Agendamento de check-up"
    },
    {
      icon: Phone,
      label: "Telemedicina",
      color: "bg-purple-500 hover:bg-purple-600",
      action: "Consulta por telemedicina"
    },
    {
      icon: Clock,
      label: "Urgência",
      color: "bg-orange-500 hover:bg-orange-600",
      action: "Agendamento urgente"
    },
    {
      icon: Users,
      label: "Família",
      color: "bg-teal-500 hover:bg-teal-600",
      action: "Agendamento familiar"
    }
  ];

  return (
    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold text-blue-900 mb-4">
          Ações Rápidas
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {actions.map((action, index) => (
            <Button
              key={index}
              onClick={() => onAction(action.action)}
              className={`${action.color} text-white flex flex-col items-center gap-2 h-auto py-4 px-3 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-105`}
            >
              <action.icon className="h-6 w-6" />
              <span className="text-xs font-medium text-center leading-tight">
                {action.label}
              </span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;
