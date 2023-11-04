// /**
//  * Написать программу, которая выводит дубликаты букв в алфавитном порядке,
//  * а потом заглавные буквы тоже в алфавитном порядке.
//  */
// export const sortAsc = (input: string): string => {
//   const characters = input.split("")
//   const charactersMap: Record<string, number> = {}
//   const charactersLen = characters.length
//   for (let i = 0; i < charactersLen; i += 1) {
//     const character = characters[i]
//     if (character in charactersMap) {
//       charactersMap[character] += 1
//     }
//   }
//   const sortedCharacters = sort(charactersMap)
//   return sortedCharacters.join("")
// }

// export const sort = (characterMap: Record<string, number>): string[] => {
//   const nonUniqueCharacters = []
//   const uniqueCharacters = []
//   const characterMapLen = Object.keys(characterMap).length
//   let x = 0
//   while (x < characterMapLen) {
//     for (const key in characterMap) {
//       const value = characterMap[key]
//       if (value > 1) {
//         if (key >= nonUniqueCharacters[nonUniqueCharacters.length - 1]) {
//           nonUniqueCharacters.push(key)
//         } else if (key < nonUniqueCharacters[0]) {
//           nonUniqueCharacters.unshift(key)
//         } else {
//           x -= 1
//         }
//       } else {

//       }
//     }
//     x += 1
//   }
//   return []
// }

// export const findLargestCharacter = (
//   character: string,
//   characterQuantity: number,
//   characters: string[]
// ): string => {
//   const nonUniqueCharacters = []
//   const uniqueCharacters = []
//   const charactersLen = characters.length
//   for (let i = 0; i < charactersLen; i += 1) {
//     const character = characters[i]
//     if (characterQuantity > 1) { nonUniqueCharacters.push(character) } else { uniqueCharacters.push(character) }
//   }
// }
