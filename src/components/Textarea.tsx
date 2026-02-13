"use client";

import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cx, focusInput, hasErrorInput } from "@/lib/utils";

const textareaStyles = tv({
    base: [
        // base
        "relative block w-full appearance-none rounded-md border px-2.5 py-2 shadow-sm outline-none transition sm:text-sm",
        // border color
        "border-gray-300",
        // text color
        "text-gray-900",
        // placeholder color
        "placeholder-gray-400",
        // background color
        "bg-white",
        // disabled
        "disabled:border-gray-300 disabled:bg-gray-100 disabled:text-gray-400",
        // focus
        focusInput,
    ],
    variants: {
        hasError: {
            true: hasErrorInput,
        },
    },
});

interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaStyles> {
    textareaClassName?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, textareaClassName, hasError, ...props }, forwardedRef) => {
        return (
            <textarea
                ref={forwardedRef}
                className={cx(
                    textareaStyles({ hasError }),
                    "resize-y min-h-[80px]",
                    className,
                    textareaClassName,
                )}
                {...props}
            />
        );
    },
);

Textarea.displayName = "Textarea";

export { Textarea, textareaStyles, type TextareaProps };
