import { forwardRef } from "react"

const Button = forwardRef(
  ({ className = "", variant = "default", size = "default", asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? "span" : "button"

    const baseStyles =
      "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background"

    const variants = {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      outline: "border border-input hover:bg-accent hover:text-accent-foreground",
      ghost: "hover:bg-accent hover:text-accent-foreground",
    }

    const sizes = {
      default: "h-10 py-2 px-4",
      sm: "h-9 px-3 rounded-md",
      lg: "h-11 px-8 rounded-md",
      icon: "h-10 w-10",
    }

    const variantStyle = variants[variant] || variants.default
    const sizeStyle = sizes[size] || sizes.default

    const classes = `${baseStyles} ${variantStyle} ${sizeStyle} ${className}`

    return (
      <Comp className={classes} ref={ref} {...props}>
        {children}
      </Comp>
    )
  },
)

Button.displayName = "Button"

export default Button

