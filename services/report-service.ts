import { api } from '@/config/api'
import { CountryStats, ResponseData, StateStats } from '@/types/stats-type'
import { toast } from '@/utils/toast'

export class ReportService {
  async getAllStates(): Promise<ResponseData<StateStats>> {
    try {
      const response = await api.get<ResponseData<StateStats>>('/')
      return response.data
    } catch (error) {
      toast({
        icon: 'error',
        title: 'Erro',
        text: 'Não foi possível carregar dados por estados'
      })
      console.error('Error fetching states data:', error)
      throw error
    }
  }

  async getOneState(uf: string): Promise<StateStats> {
    try {
      const response = await api.get<StateStats>(`/brazil/uf/${uf}`)
      return response.data
    } catch (error) {
      toast({
        icon: 'error',
        title: 'Erro',
        text: 'Não foi possível carregar dados por UF de estado'
      })
      console.error('Error fetching state data by UF:', error)
      throw error
    }
  }

  async getStatesByDate(date: string): Promise<ResponseData<StateStats>> {
    try {
      const response = await api.get<ResponseData<StateStats>>(`/brazil/${date}`)
      return response.data
    } catch (error) {
      toast({
        icon: 'error',
        title: 'Erro',
        text: 'Não foi possível carregar dados dos estados pela data'
      })
      console.error('Error fetching states data by date:', error)
      throw error
    }
  }

  async getAllCountries(country?: string): Promise<ResponseData<CountryStats>> {
    try {
      const response = await api.get<ResponseData<CountryStats>>(`/countries/${country}`)
      return response.data
    } catch (error) {
      toast({
        icon: 'error',
        title: 'Erro',
        text: 'Não foi possível carregar dados por país'
      })
      console.error('Error fetching countries data:', error)
      throw error
    }
  }
}

export const reportService = new ReportService()
