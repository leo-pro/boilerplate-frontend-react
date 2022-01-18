import create from 'zustand'

type User = {
  name: string
  age: number
  site?: string
}

export const userUserData = create<User>(() => ({
  name: 'Roberto',
  age: 22,
}))
