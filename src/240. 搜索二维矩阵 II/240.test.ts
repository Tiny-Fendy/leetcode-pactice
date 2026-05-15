import { describe, it, expect } from 'vitest'
import searchMatrix from './240'

describe('240. 搜索二维矩阵 II', () => {
  it('示例 1: 找到目标值 5', () => {
    const matrix = [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30]
    ]
    expect(searchMatrix(matrix, 5)).toBe(true)
  })

  it('示例 2: 未找到目标值 20', () => {
    const matrix = [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30]
    ]
    expect(searchMatrix(matrix, 20)).toBe(false)
  })

  it('1x1 矩阵 - 找到目标', () => {
    const matrix = [[1]]
    expect(searchMatrix(matrix, 1)).toBe(true)
  })

  it('1x1 矩阵 - 未找到目标', () => {
    const matrix = [[1]]
    expect(searchMatrix(matrix, 2)).toBe(false)
  })

  it('单行矩阵 - 找到目标', () => {
    const matrix = [[1, 3, 5, 7, 9]]
    expect(searchMatrix(matrix, 5)).toBe(true)
  })

  it('单行矩阵 - 未找到目标', () => {
    const matrix = [[1, 3, 5, 7, 9]]
    expect(searchMatrix(matrix, 6)).toBe(false)
  })

  it('单列矩阵 - 找到目标', () => {
    const matrix = [[1], [3], [5], [7], [9]]
    expect(searchMatrix(matrix, 5)).toBe(true)
  })

  it('单列矩阵 - 未找到目标', () => {
    const matrix = [[1], [3], [5], [7], [9]]
    expect(searchMatrix(matrix, 6)).toBe(false)
  })

  it('目标值在左上角', () => {
    const matrix = [
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9]
    ]
    expect(searchMatrix(matrix, 1)).toBe(true)
  })

  it('目标值在右下角', () => {
    const matrix = [
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9]
    ]
    expect(searchMatrix(matrix, 9)).toBe(true)
  })

  it('目标值小于最小值', () => {
    const matrix = [
      [5, 10, 15],
      [8, 13, 18],
      [11, 16, 21]
    ]
    expect(searchMatrix(matrix, 1)).toBe(false)
  })

  it('目标值大于最大值', () => {
    const matrix = [
      [5, 10, 15],
      [8, 13, 18],
      [11, 16, 21]
    ]
    expect(searchMatrix(matrix, 25)).toBe(false)
  })

  it('空矩阵', () => {
    const matrix: number[][] = []
    expect(searchMatrix(matrix, 1)).toBe(false)
  })

  it('包含负数', () => {
    const matrix = [
      [-5, -3, -1],
      [-2, 0, 2],
      [1, 3, 5]
    ]
    expect(searchMatrix(matrix, -2)).toBe(true)
  })

  it('较大矩阵 - 找到目标', () => {
    const matrix = [
      [1, 4, 7, 11, 15, 20],
      [2, 5, 8, 12, 19, 25],
      [3, 6, 9, 16, 22, 30],
      [10, 13, 14, 17, 24, 35],
      [18, 21, 23, 26, 30, 40]
    ]
    expect(searchMatrix(matrix, 17)).toBe(true)
  })

  it('较大矩阵 - 未找到目标', () => {
    const matrix = [
      [1, 4, 7, 11, 15, 20],
      [2, 5, 8, 12, 19, 25],
      [3, 6, 9, 16, 22, 30],
      [10, 13, 14, 17, 24, 35],
      [18, 21, 23, 26, 30, 40]
    ]
    expect(searchMatrix(matrix, 27)).toBe(false)
  })
})
