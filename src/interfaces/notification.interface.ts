export interface INotification {
  id: number
  type: 'error' | 'info' | 'success'
  message: string
}
