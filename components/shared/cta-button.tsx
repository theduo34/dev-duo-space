import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {ArrowRight} from "lucide-react";

interface Props {
  label: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  icon?: boolean;
  disabled?: boolean;
  iconComponent?: React.ReactNode;
  children?: React.ReactNode;
}
export default function CtaButton (
  {
    label,
    onClick,
    type = "button",
    className,
    icon = false,
    iconComponent = <ArrowRight/>,
    children,
    disabled = false,
  }: Props
)  {
  return(
    <Button
      className={cn(" h-11 transition-transform ease-in-out duration-300 hover:scale-105", className)}
      onClick={onClick && onClick}
      type={type}
      disabled={disabled}
    >
      {children ? (
        <span>{children}</span>
      ): (
        <span className={"flex gap-2"}>
          {label} {icon && <span>{iconComponent}</span> }
        </span>
      )}
    </Button>
  )
}