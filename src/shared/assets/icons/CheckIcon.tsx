import { cn } from "@/shared/utils/twMerge"

type Props = {
  className?: string
}

export function CheckIcon({ className }: Props) {
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
        d="M5 13l4 4L19 7"
      />
    </svg>
  )
}
