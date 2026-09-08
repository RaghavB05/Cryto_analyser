import CoinOverview from '@/components/home/CoinOverview';
import { CoinOverviewFallback, TrendingCoinFallback } from '@/components/home/fallback';
import TrendingCoins from '@/components/home/TrendingCoins';
import { Suspense } from 'react';



const page = async () => {

  


  return <main className="main-container">
      <section className='home-grid'>
        <Suspense fallback={<CoinOverviewFallback />}>
          <CoinOverview />
        </Suspense>

        <Suspense fallback={<TrendingCoinFallback />}>
          <TrendingCoins />
        </Suspense>
      </section>

      <section className='w-full space-y-4 mt-7'>
        <p>Categories</p>
      </section>
    </ main>
}

export default page