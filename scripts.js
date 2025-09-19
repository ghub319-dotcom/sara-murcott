// Reusable helper functions for multiple pages
function validateEmail(email){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
// Expose validate to global for inline use
window.validateEmail = validateEmail;
