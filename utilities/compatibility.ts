/* eslint-disable camelcase */

import {
  map,
} from './transform'

/**
 * Converts data API from 1.0.0 to 2.0.0
 * @param content The content object
 * @returns Mapped content object
 */
export const compability__1_0_0__2_0_0 = (content: any) => {
  return map(content, (c: any) => {
    if (c.img !== undefined || c.content !== undefined) {
      return c
    } else if (c.subsections !== undefined) {
      return {
        id: c.id,
        content: c.subsections,
      }
    } else {
      return c
    }
  })
}
