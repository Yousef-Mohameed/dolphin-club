type Props = { size?: number; className?: string }

// Clean leaping-dolphin mark, drawn for Dolphin Swimming Pool Benha.
export default function DolphinIcon({ size = 26, className }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M5.5 39.2c4.8-9.6 15.4-18 27.6-19.4 1.3-3.9 4.4-7.4 9.4-9.6-1.2 3-1.6 5.6-1.3 8.2 6.4 2.2 11.2 7 13.5 13.2.6 1.6-.2 3.1-1.8 3.5-1.2.3-2.4-.2-3-1.3-3.2 5-8.7 8.6-15.6 9.6-6.4.9-12-.3-16.4-2.6l-7.3 6.4c-1.5 1.3-3.7-.2-3-2l3.4-6.3c-2.3-.1-4.2-.2-5.5-.7z"
      />
      <circle cx="47.5" cy="25.5" r="1.7" fill="var(--color-bg, #04121f)" />
      <path
        fill="currentColor"
        opacity="0.45"
        d="M14.5 49.5c2.6-1.4 5-1.5 7.4-.4-2.5 1.3-4.9 1.5-7.4.4zM25 52.6c2.6-1.4 5-1.5 7.4-.4-2.5 1.3-4.9 1.5-7.4.4z"
      />
    </svg>
  )
}
