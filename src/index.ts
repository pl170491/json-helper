// Gotta learn more about types for this

type objectArrayType = (Record<string, unknown> | string | number)[];
export function jsonHelper(object: Record<string, unknown>, target: string[]) {
  let objectArray: objectArrayType = [object];
  for (const key of target) {
    objectArray = objectArray
      .map((object) => {
        // We assume that we are about to to key into an object.
        // Keying into a string or a number is meaningless, so we
        // return undefined if we encounter them.
        if (typeof object !== "string" && typeof object !== "number") {
          // We now have our object item. We check to see if it is any of
          // the valid options from 'objectArrayType.' Otherwise, we
          // return undefined.
          const objectItem = object[key];
          if (typeof objectItem === "string") {
            return objectItem as string;
          } else if (typeof objectItem === "number") {
            return objectItem as number;
          } else if (typeof objectItem === "object" && objectItem !== null) {
            if (Object.keys(object).length) {
              return objectItem as Record<string, unknown>;
            } else {
              return undefined;
            }
          } else {
            return undefined;
          }
        } else {
          return undefined;
        }
      })
      // We filter out all undefined, so we wind up with a valid
      // 'objectArrayType.'
      .filter((object) => {
        return object != undefined;
      })
      .flat() as objectArrayType;
  }
  return objectArray;
}
