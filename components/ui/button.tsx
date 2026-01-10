import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}

const buttonVariants = cva(
  "inline-flex items-center hover:cursor-pointer transition-all duration-300 ease-in-out justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive overflow-hidden relative",
  {
    variants: {
      variant: {
        default: "bg-orange-600 text-white hover:bg-orange-700",
        primary: "bg-blue-600 text-white hover:bg-blue-600/80",
        destructive:
          "bg-red-600 text-white hover:bg-red-600/90 focus-visible:ring-red-600/20 dark:focus-visible:ring-red-600/40 dark:bg-red-600/60",
        outline:
          "border border-orange-600 bg-white text-orange-600 hover:bg-white hover:text-orange-700",
        secondary: "bg-gray-200 text-blue-600 hover:bg-gray-200/80",
        ghost:
          "hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800/50",
        link: "text-blue-600 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size }), "group", className)}
      {...props}
    >
      <span className="relative block overflow-hidden">
        <span className="inline-block transition-transform duration-500 ease-out group-hover:-translate-y-full">
          {children}
        </span>
        <span className="absolute left-0 top-0 inline-block translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0">
          {children}
        </span>
      </span>
    </Comp>
  );
}

export { Button, buttonVariants };
