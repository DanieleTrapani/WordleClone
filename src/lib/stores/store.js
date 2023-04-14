import { readable, writable } from 'svelte/store'

export const word = readable('Hello', () => {
  return function stop() { }
})

export const rows = writable(Array(6).fill(Array(5).fill("")));
