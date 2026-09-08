import DataTable from '../DataTable';

const PERIODS = 7;
const TRENDING_ROWS = 6;

export const CoinOverviewFallback = () => {
  return (
    <div id='coin-overview-fallback'>
      <div className='header pt-2'>
        <div className='header-image skeleton' />
        <div className='info'>
          <div className='header-line-sm skeleton' />
          <div className='header-line-lg skeleton' />
        </div>
      </div>

      <div className='flex gap-1 xl:gap-2 items-center mb-3'>
        {Array.from({ length: PERIODS }, (_, i) => (
          <div key={i} className='period-button-skeleton skeleton' />
        ))}
      </div>

      <div className='chart'>
        <div className='chart-skeleton skeleton' />
      </div>
    </div>
  )
}

const fallbackColumns: DataTableColumn<number>[] = [
  {
    header: 'Name',
    cellClassName: 'name-cell',
    cell: () => (
      <div className='name-link'>
        <div className='name-image skeleton' />
        <div className='name-line skeleton' />
      </div>
    )
  },
  {
    header: '24h Change',
    cellClassName: 'change-cell',
    cell: () => (
      <div className='price-change'>
        <div className='change-icon skeleton' />
        <div className='change-line skeleton' />
      </div>
    )
  },
  {
    header: 'Price',
    cellClassName: 'price-cell',
    cell: () => <div className='price-line skeleton' />
  },
]

export const TrendingCoinFallback = () => {
  return (
    <div id='trending-coins-fallback'>
      <h4>Trending Coin</h4>
      <DataTable
        data={Array.from({ length: TRENDING_ROWS }, (_, i) => i)}
        columns={fallbackColumns}
        rowKey={(row) => row}
        tableClassName='trending-coins-table'
        headerCellClassName='py-3!'
        bodyCellClassName='py-2!'
      />
    </div>
  )
}
