import { Footer } from "./Footer"
import { Hero } from "./Hero"
import { HomeCategories } from "./HomeCategories"
import { HowItWorks } from "./HowItWorks"

export default function Home() {
   return (
      <>
         <div className="px-28 font-body text-gray-900 flex flex-col gap-14">
            <Hero />
            <HowItWorks />
            <HomeCategories />
         </div>
         <Footer />
      </>
   )
}
