import axios from 'axios'

export default defineEventHandler(async (event) => {
  const { day, month, year } = getQuery(event)
  if (!day || !month || !year) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid query params'
    })
  }

  const config = useRuntimeConfig()

  const { data } = await axios.get(`${config.public.baseURL}/liturgia?day=${day}&month=${month}&year=${year}`)

  return data
})