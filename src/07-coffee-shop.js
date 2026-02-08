/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
  // Your code here
  if (size === "small") {
    if (type === "regular") {
      if (extras?.extraShot && extras.whippedCream) {
        return 3.75 + 0.50
      } else if (extras?.extraShot) {
        return 3.75
      } else if (extras.whippedCream) {
        return 3.50
      } else {
        return 3.00
      }
    } else if (type === "latte") {
      if (extras?.extraShot && extras.whippedCream) {
        return 4.75 + 0.50
      } else if (extras?.extraShot) {
        return 4.75
      } else if (extras.whippedCream) {
        return 4.50
      } else {
        return 4
      }
    } else if (type === "cappuccino") {
      if (extras?.extraShot && extras.whippedCream) {
        return 4.50 + 0.75 + 0.50
      } else if (extras.extraShot) {
        return 4.50 + 0.75
      } else if (extras.whippedCream) {
        return 5.00
      } else {
        return 4.50
      }
    } else if (type === "mocha") {
      if (extras?.extraShot && extras.whippedCream) {
        return 5.75 + 0.50
      } else if (extras.extraShot) {
        return 5.75
      } else if (extras.whippedCream) {
        return 5.50
      } else {
        return 5.00
      }
    } else {
      return -1
    }
  } else if (size === "medium") {
    if (type === "regular") {
      if (extras?.extraShot && extras.whippedCream) {
        return 4.75 + 0.50
      } else if (extras?.extraShot) {
        return 4.75
      } else if (extras.whippedCream) {
        return 4.50
      } else {
        return 4.00
      }
    } else if (type === "latte") {
      if (extras?.extraShot && extras.whippedCream) {
        return 5.75 + 0.50
      } else if (extras?.extraShot) {
        return 5.75
      } else if (extras.whippedCream) {
        return 5.50
      } else {
        return 5
      }
    } else if (type === "cappuccino") {
      if (extras?.extraShot && extras.whippedCream) {
        return 5.50 + 0.75 + 0.50
      } else if (extras.extraShot) {
        return 5.50 + 0.75
      } else if (extras.whippedCream) {
        return 6.00
      } else {
        return 5.50
      }
    } else if (type === "mocha") {
      if (extras?.extraShot && extras.whippedCream) {
        return 6.75 + 0.50
      } else if (extras.extraShot) {
        return 6.75
      } else if (extras.whippedCream) {
        return 6.50
      } else {
        return 6.00
      }
    } else {
      return -1
    }
  } else if (size === "large") {
    if (type === "regular") {
      if (extras?.extraShot && extras.whippedCream) {
        return 5.75 + 0.50
      } else if (extras?.extraShot) {
        return 5.75
      } else if (extras.whippedCream) {
        return 5.50
      } else {
        return 5.00
      }
    } else if (type === "latte") {
      if (extras?.extraShot && extras.whippedCream) {
        return 6.75 + 0.50
      } else if (extras?.extraShot) {
        return 6.75
      } else if (extras.whippedCream) {
        return 6.50
      } else {
        return 6
      }
    } else if (type === "cappuccino") {
      if (extras?.extraShot && extras.whippedCream) {
        return 6.50 + 0.75 + 0.50
      } else if (extras.extraShot) {
        return 6.50 + 0.75
      } else if (extras.whippedCream) {
        return 7.00
      } else {
        return 6.50
      }
    } else if (type === "mocha") {
      if (extras?.extraShot && extras?.whippedCream) {
        return 7.75 + 0.50
      } else if (extras.extraShot) {
        return 7.75
      } else if (extras.whippedCream) {
        return 7.50
      } else {
        return 7.00
      }
    } else {
      return -1
    }
  } else {
    return -1
  }
}
