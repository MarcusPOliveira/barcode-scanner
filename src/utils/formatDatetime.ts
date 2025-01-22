import { format } from 'date-fns'

export const formatDatetime = (datetime: string) => {
  const dateObject = new Date(datetime)

  const date = format(dateObject, 'dd/MM/yy') 
  const time = format(dateObject, 'HH:mm') 

  return { date, time }
}