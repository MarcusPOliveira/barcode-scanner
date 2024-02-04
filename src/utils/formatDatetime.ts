export const formatDatetime = (datetime: string) => {
  const dateObject = new Date(datetime)

  const date = dateObject.toLocaleDateString(undefined, {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
  })
  const time = dateObject.toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
  })

  return { date, time }
}
