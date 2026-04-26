import { describe, it, expect } from 'vitest'
import rotate from './48'

describe('48. 旋转图像', () => {
  it('示例 1: 3x3 矩阵', () => {
    const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    rotate(matrix)
    expect(matrix).toEqual([[7, 4, 1], [8, 5, 2], [9, 6, 3]])
  })

  it('示例 2: 4x4 矩阵', () => {
    const matrix = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]
    rotate(matrix)
    expect(matrix).toEqual([[15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11]])
  })

  it('1x1 矩阵', () => {
    const matrix = [[1]]
    rotate(matrix)
    expect(matrix).toEqual([[1]])
  })

  it('2x2 矩阵', () => {
    const matrix = [[1, 2], [3, 4]]
    rotate(matrix)
    expect(matrix).toEqual([[3, 1], [4, 2]])
  })

  it('5x5 矩阵', () => {
    const matrix = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25]
    ]
    rotate(matrix)
    expect(matrix).toEqual([
      [21, 16, 11, 6, 1],
      [22, 17, 12, 7, 2],
      [23, 18, 13, 8, 3],
      [24, 19, 14, 9, 4],
      [25, 20, 15, 10, 5]
    ])
  })

  it('包含负数', () => {
    const matrix = [[-1, -2], [-3, -4]]
    rotate(matrix)
    expect(matrix).toEqual([[-3, -1], [-4, -2]])
  })

  it('包含零', () => {
    const matrix = [[0, 1], [2, 0]]
    rotate(matrix)
    expect(matrix).toEqual([[2, 0], [0, 1]])
  })

  it('原地修改验证', () => {
    const matrix = [[1, 2], [3, 4]]
    const originalRef = matrix
    rotate(matrix)
    expect(matrix).toBe(originalRef)
  })
})
