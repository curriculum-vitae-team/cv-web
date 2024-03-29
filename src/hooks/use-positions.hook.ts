import { useMutation, useQuery } from '@apollo/client'
import { CreatePositionInput, UpdatePositionInput, DeletePositionInput } from 'cv-graphql'
import { CREATE_POSITION, DELETE_POSITION, POSITIONS, UPDATE_POSITION } from 'graphql/positions'
import {
  CreatePositionResult,
  PositionsResult,
  UpdatePositionResult
} from 'graphql/positions/positions.types'

export const usePositions = () => {
  const query = useQuery<PositionsResult>(POSITIONS)

  return { positions: query.data?.positions || [], ...query }
}

export const usePositionCreate = () => {
  return useMutation<CreatePositionResult, { position: CreatePositionInput }>(CREATE_POSITION, {
    refetchQueries: [POSITIONS]
  })
}

export const usePositionUpdate = () => {
  return useMutation<UpdatePositionResult, { position: UpdatePositionInput }>(UPDATE_POSITION)
}

export const usePositionDelete = (positionId: string) => {
  const [deletePosition] = useMutation<null, { position: DeletePositionInput }>(DELETE_POSITION, {
    variables: {
      position: { positionId }
    },
    update(cache) {
      const id = cache.identify({ id: positionId, __typename: 'Position' })
      cache.evict({ id })
      cache.gc()
    }
  })
  return [deletePosition]
}
