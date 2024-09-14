'use server'

import { cookies } from 'next/headers'

export const getCookies = () => {
  return cookies()
}

export const getToken = () => {
  return cookies().get('token')?.value
}
