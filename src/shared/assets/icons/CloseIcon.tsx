import { cn } from "@/shared/utils/twMerge"

type Props = {
  className?: string
}

export function CloseIcon({ className }: Props) {
  return (
    <svg
      className={cn("h-3.5 w-3.5", className)}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  )
}
