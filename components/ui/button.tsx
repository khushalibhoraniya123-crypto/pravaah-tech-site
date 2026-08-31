import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-bold tracking-tight transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer overflow-hidden select-none active:scale-[0.97] will-change-transform",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-[#1769E0] via-[#4D3EE0] to-[#6638E8] bg-[length:200%_auto] hover:bg-right text-white shadow-soft hover:shadow-[0_8px_25px_rgba(23,105,224,0.38)] hover:scale-[1.025] border border-white/20",
        primary:
          "bg-gradient-to-r from-[#1769E0] via-[#4D3EE0] to-[#6638E8] bg-[length:200%_auto] hover:bg-right text-white shadow-soft hover:shadow-[0_8px_25px_rgba(23,105,224,0.38)] hover:scale-[1.025] border border-white/20",
        secondary:
          "bg-white/95 backdrop-blur-sm border border-[#D2DEEE] text-[#081A3A] hover:bg-white hover:border-[#1769E0]/50 hover:text-[#1769E0] hover:shadow-[0_6px_20px_rgba(23,105,224,0.14)] hover:scale-[1.025]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm hover:scale-[1.02]",
        outline:
          "border border-[#D2DEEE] bg-transparent text-[#081A3A] hover:bg-white hover:border-[#1769E0] hover:text-[#1769E0] hover:shadow-soft hover:scale-[1.02]",
        ghost:
          "hover:bg-[#1769E0]/10 hover:text-[#1769E0] text-[#334155] active:scale-[0.97]",
        link:
          "text-[#1769E0] underline-offset-4 hover:underline",
        cyanGlow:
          "bg-gradient-to-r from-[#00D2FF] to-[#1769E0] text-[#06132D] font-extrabold shadow-soft hover:shadow-[0_8px_25px_rgba(0,210,255,0.45)] hover:scale-[1.03] border border-white/30",
        dark:
          "bg-[#06132D] text-white border border-white/20 hover:border-cyan-400 hover:shadow-[0_8px_25px_rgba(0,210,255,0.3)] hover:scale-[1.025]"
      },
      size: {
        default: "h-11 px-5 py-2.5",
        sm: "h-9 rounded-lg px-3.5 text-xs",
        md: "h-11 px-5.5 py-2.5 text-sm",
        lg: "h-13 rounded-2xl px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  withArrow?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, withArrow = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {/* Subtle Light Sweep Shimmer Effect on Hover */}
        <span 
          aria-hidden="true" 
          className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
        />

        <span className="relative z-10 inline-flex items-center gap-2">
          {children}
          {withArrow && (
            <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1.5 shrink-0" />
          )}
        </span>
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
