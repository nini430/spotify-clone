'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, disabled, type = 'button', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        {...props}
        className={twMerge(
          'bg-green-500 px-3 py-3 disabeld:cursor-not-allowed disabled:opacity-50 rounded-xl text-black font-bold hover:bg-opacity-75 transition',
          className
        )}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
