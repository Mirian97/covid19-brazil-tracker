'use client'
import { Title } from '@/components/title'
import { Input } from '@/components/ui/input'
import useCountryReport from '@/hooks/useCountryReport'
import { Search } from 'lucide-react'
import { CountryList } from './_components/country-list'

export default function PerCountriesPage() {
  const { countries, isLoading, search, setSearch } = useCountryReport()
  return (
    <>
      <Title
        title='Dados por Países'
        description='Visualize os dados da COVID-19 em diferentes países do mundo.'
      />
      <div className='relative max-w-md'>
        <Search className='text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform' />
        <Input
          placeholder='Buscar país...'
          className='pl-10'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className='flex max-w-7xl flex-1 flex-col'>
        <CountryList countries={countries} isLoading={isLoading} />
      </div>
    </>
  )
}
