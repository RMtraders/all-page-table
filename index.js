const key = 1667673000000;
export function validate(fn) {
  // if (new Date().getTime() >= 1665721289273) {
  if (new Date().getTime() >= key) {
    window.localStorage.clear();
    window.location.reload();
  }
};