import { Hero, HomeCategories, HowItWorks } from '@/components'

export default function Home() {
  return (
    <div className="px-6 sm:px-12 md:px-28 mt-36 font-body text-gray-900 flex flex-col gap-14">
      <Hero />
      <HowItWorks />
      <HomeCategories />
    </div>
  )
}
