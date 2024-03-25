import { getCollection } from 'astro:content'

const collection = await getCollection('work')

collection.sort(
  (a, b) =>
    new Date(b.data.dateStart).getTime() - new Date(a.data.dateStart).getTime()
)

export const works = await Promise.all(
  collection.map(async (item) => {
    const { Content } = await item.render()
    return { ...item, Content }
  })
)

export function formatWorkDate (input: Date | string) {
  if (typeof input === 'string') return input

  const month = input.toLocaleDateString('es-ES', {
    month: 'short'
  })

  const year = new Date(input).getFullYear()
  return `${month} ${year}`
}
