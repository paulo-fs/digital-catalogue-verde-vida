import { Hero, HomeCategories, HowItWorks } from '@/components'

export default function Home() {
  return (
    <div className="px-28 mt-36 font-body text-gray-900 flex flex-col gap-14 max-w-7xl mx-auto">
      <Hero />
      <HowItWorks />
      <HomeCategories />
    </div>
  )
}
