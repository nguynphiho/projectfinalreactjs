export default function toCurrency(number) {
  if (number.toString().trim().length > 0) {
    if (number.toString() === '0') {
      return '0';
    }
    return Number(number).toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }
  return '';
}