import * as React from "react"

import { cn } from "@/lib/utils"
import { Input } from "./input"
import { EyeIcon, EyeOffIcon } from "lucide-react"

export interface PasswordInputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
    ({ className, ...props }, ref) => {
        const [showPassword, setShowPassword] = React.useState(false)
        return (
            <Input 
                {...props} 
                type={showPassword ? 'text' : 'password'} 
                ref={ref} 
                suffix={showPassword ? <EyeIcon className="cursor-pointer select-none" onClick={() => setShowPassword(!showPassword)} /> : <EyeOffIcon className="cursor-pointer select-none" onClick={() => setShowPassword(!showPassword)} />} 
                className={className} 
            />
        )
    }
)
PasswordInput.displayName = "PasswordInput"

export { PasswordInput }
