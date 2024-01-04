import { MutationFunction, useMutation, useQuery } from '@apollo/client'
import { Position } from 'cv-graphql'
import { CREATE_POSITION, DELETE_POSITION, POSITIONS, UPDATE_POSITION } from 'graphql/positions'
import {
  CreatePositionResult,
  PositionsResult,
  UpdatePositionResult
} from 'graphql/positions/positions.types'

export const usePositions = (): [Position[], boolean] => {
  const { data, loading } = useQuery<PositionsResult>(POSITIONS)

  return [data?.positions || [], loading]
}

export const usePositionCreate = (): [MutationFunction<CreatePositionResult>, boolean] => {
  const [createPosition, { loading }] = useMutation<CreatePositionResult>(CREATE_POSITION, {
    refetchQueries: [POSITIONS]
  })
  return [createPosition, loading]
}

export const usePositionUpdate = (): [MutationFunction<UpdatePositionResult>, boolean] => {
  const [updatePosition, { loading }] = useMutation<UpdatePositionResult>(UPDATE_POSITION)
  return [updatePosition, loading]
}

export const usePositionDelete = (item: Position) => {
  const [deletePosition] = useMutation(DELETE_POSITION, {
    variables: {
      id: item.id
    },
    update(cache) {
      const id = cache.identify({ id: item.id, __typename: 'Position' })
      cache.evict({ id })
      cache.gc()
    }
  })
  return [deletePosition]
}
