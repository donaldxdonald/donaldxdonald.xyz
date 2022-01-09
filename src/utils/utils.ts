import dayjs from 'dayjs'
/**
 * @param backgroundColor 字符串 传入  #FFFBBC | FBC | FFBBCC 均可
 */
export function contrastTextColor(backgroundHexColor: string) {
  let hex = backgroundHexColor

  // 如果当前传入的参数以 # 开头,去除当前的
  if (hex.startsWith('#')) {
    hex = hex.substring(1)
  }

  // 如果当前传入的是 3 位小数值，直接转换为 6 位进行处理
  if (hex.length === 3) {
    hex = [hex[0], hex[0], hex[1], hex[1], hex[2], hex[2]].join('')
  }

  if (hex.length !== 6) {
    throw new Error(`Invalid background color.${backgroundHexColor}`)
  }

  const r = parseInt(hex.slice(0, 2), 16)
  const g = parseInt(hex.slice(2, 4), 16)
  const b = parseInt(hex.slice(4, 6), 16)

  if ([r, g, b].some(x => Number.isNaN(x))) {
    throw new Error(`Invalid background color.${backgroundHexColor}`)
  }

  const textColor = (r * 0.299 + g * 0.587 + b * 0.114) > 186 ? '#333' : '#eee'
  return textColor
}

export function formatDate(date: string | number | Date, format: string): string {
  const dateObj = dayjs(date)
  return dateObj.format(format)
}
