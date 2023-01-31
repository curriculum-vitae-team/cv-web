import { useQuery } from '@apollo/client'
import { IPosition } from '../interfaces/position.interface'
import { POSITIONS } from '../graphql/positions'
import { PositionsResult } from '../graphql/positions/positions.types'

export const usePositions = (): [IPosition[], boolean] => {
  const { data, loading } = useQuery<PositionsResult>(POSITIONS)

  return [data?.positions || [], loading]
}
