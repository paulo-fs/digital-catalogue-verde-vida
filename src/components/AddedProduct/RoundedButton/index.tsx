import { ButtonHTMLAttributes } from 'react'

interface RoundedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

export function RoundedButton({ text, ...props }: RoundedButtonProps) {
  return(
    <button
      {...props}
      className="w-7 min-w-[20px] h-7 min-h-[20px] bg-green-500 hover:bg-green-700 transition grid place-content-center rounded-full text-white"
    >
      { text }
    </button>
  )
}
