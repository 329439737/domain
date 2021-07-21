const add = 'add'
const jj = 'jj'
export function addnum (count) {
  return { type: add, count }
}

export function addjj (count) {
  return { type: jj, count }
}
