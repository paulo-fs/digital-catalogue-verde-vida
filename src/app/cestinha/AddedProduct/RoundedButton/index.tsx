import { ButtonHTMLAttributes } from 'react'

interface RoundedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

export function RoundedButton({ text, ...props }: RoundedButtonProps) {
  return(
    <button
      {...props}
      className="w-7 h-7 bg-green-500 hover:bg-green-700 transition grid place-content-center rounded-full text-white"
    >
      { text }
    </button>
  )
}
