/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  // Your code here
  function upperCase(params) {
    return /[A-Z]/.test(params)
  }
  function lowerCase(params) {
    return /[a-z]/.test(params)
  }
  function numberCase(params) {
    return /\d/.test(params)
  }
  function specialCharCase(params) {
    const specialChars = /[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/;

    // The test() method returns true if a match is found, otherwise false
    return specialChars.test(params);

  }

  let score = 0

  if (password?.length === 0 || typeof password !== "string") {
    return "weak"
  }
  if (password.length >= 8) score++;
  if (upperCase(password)) score++;
  if (lowerCase(password)) score++;
  if (numberCase(password)) score++;
  if (specialCharCase(password)) score++;
  if (password.length >= 8 && upperCase(password) && lowerCase(password) && numberCase(password) && specialCharCase(password)) {
    return "very strong"
  } else if (score <= 1) {
    return "weak"
  } else if (score <= 3) {
    return "medium"
  } else if (score <= 4) {
    return "strong"
  }
}
