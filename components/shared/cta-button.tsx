import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {ArrowRight} from "lucide-react";

interface Props {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  icon?: boolean;
  iconComponent?: React.ReactNode;
}
export default function CtaButton (
  {
    label,
    onClick,
    type = "button",
    className,
    icon = false,
    iconComponent = <ArrowRight/>,
  }: Props
)  {
  return(
    <Button
      className={cn(" h-11 transition-transform ease-in-out duration-300 hover:scale-105", className)}
      onClick={onClick && onClick}
      type={type}
    >
      {label} {icon && <span>{iconComponent}</span> }
    </Button>
  )
}