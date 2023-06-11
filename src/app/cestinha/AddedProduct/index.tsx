import Image from 'next/image'
import trash from '../../../assets/svg/trash.svg'
import { RoundedButton } from './RoundedButton'

export function AddedProduct() {
  return (
    <div
      className="w-full h-fit flex items-center justify-between gap-6 text-gray-800"
    >
      <div className="w-full h-full bg-gray-100 rounded px-8 py-6 flex items-center justify-between">
        <span className='text-b2'>
          Vital Drops VC-IP
        </span>

        <div className='flex items-center gap-6'>
          <span>
            R$40,00
          </span>
          <span className='text-gray-700'>x</span>
          <div className='flex items-center gap-3'>
            <span>3</span>
            <div className='flex flex-col gap-1'>
              <RoundedButton text='+' />
              <RoundedButton text='-' />
            </div>
          </div>
        </div>
      </div>

      <button className='grid place-content-center p-4 hover:bg-gray-100 transition rounded-full'>
        <Image src={trash} alt='ícone de uma lata de lixo' />
      </button>
    </div>
  )
}
