import {Button} from "@/components/ui/button";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export const MyButton = ({label, onClick}: ButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className={'relative inline-flex w-full overflow-hidden focus:outline-none w-fit p-1 group h-10 rounded-full'}>
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]">
      </span>
      <span className="flex w-full cursor-pointer items-center justify-center  px-4 py-2 rounded-full  font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80 backdrop-blur-3xl gap-2 shadow-md transition-colors duration-300">
        {label}
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 448 512"
          className="group-hover:translate-x-1 transition-all duration-300"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"></path>
        </svg>
      </span>
    </Button>
  )
}

export const FadeButton = ({label, onClick}: ButtonProps) => {
  return (
    <Button
      className="relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none"
      onClick={onClick}>
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
        bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]">
      </span>
      <span className="inline-flex h-full w-full items-center justify-center
        whitespace-nowrap rounded-full bg-background px-8 py-2 text-lg font-medium text-foreground backdrop-blur-2xl hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
        {label}
      </span>
    </Button>
  );
};