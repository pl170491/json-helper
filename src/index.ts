// Gotta learn more about types for this
// export default function jsonHelper(object: any, target: string[]) {
//   let objectArray: any[] = [];
//   if (!Array.isArray(object)) {
//     objectArray = [object];
//   } else {
//     objectArray = object;
//   }

//   for (const key of target) {
//     objectArray = objectArray
//       .map((object) => {
//         if (!object[key]) {
//           return undefined;
//         } else {
//           return object[key];
//         }
//       })
//       .filter((object) => {
//         return object != undefined;
//       })
//       .flat();
//   }
//   return objectArray;
// }

export function sum(a: number, b: number) {
  return a + b;
}
