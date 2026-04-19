import { describe, it, expect } from 'vitest'
import setZeroes from './73'

describe('73. 矩阵置零', () => {
  it('示例 1: [[1,1,1],[1,0,1],[1,1,1]]', () => {
    const matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]]
    setZeroes(matrix)
    expect(matrix).toEqual([[1, 0, 1], [0, 0, 0], [1, 0, 1]])
  })

  it('示例 2: [[0,1,2,0],[3,4,5,2],[1,3,1,5]]', () => {
    const matrix = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]
    setZeroes(matrix)
    expect(matrix).toEqual([[0, 0, 0, 0], [0, 4, 5, 0], [0, 3, 1, 0]])
  })

  it('单个元素为 0', () => {
    const matrix = [[0]]
    setZeroes(matrix)
    expect(matrix).toEqual([[0]])
  })

  it('单个元素非 0', () => {
    const matrix = [[1]]
    setZeroes(matrix)
    expect(matrix).toEqual([[1]])
  })

  it('一行一列', () => {
    const matrix = [[1, 2, 3]]
    setZeroes(matrix)
    expect(matrix).toEqual([[1, 2, 3]])
  })

  it('第一行有 0', () => {
    const matrix = [[0, 2, 3], [4, 5, 6]]
    setZeroes(matrix)
    expect(matrix).toEqual([[0, 0, 0], [0, 5, 6]])
  })

  it('第一列有 0', () => {
    const matrix = [[1, 2], [0, 4], [5, 6]]
    setZeroes(matrix)
    expect(matrix).toEqual([[0, 2], [0, 0], [0, 6]])
  })

  it('多个 0', () => {
    const matrix = [[0, 1, 0], [1, 1, 1], [0, 1, 0]]
    setZeroes(matrix)
    expect(matrix).toEqual([[0, 0, 0], [0, 1, 0], [0, 0, 0]])
  })

  it('没有 0', () => {
    const matrix = [[1, 2], [3, 4]]
    setZeroes(matrix)
    expect(matrix).toEqual([[1, 2], [3, 4]])
  })

  it('全为 0', () => {
    const matrix = [[0, 0], [0, 0]]
    setZeroes(matrix)
    expect(matrix).toEqual([[0, 0], [0, 0]])
  })

  it('较大矩阵', () => {
    const matrix = [
      [1, 1, 1, 1],
      [1, 0, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 0]
    ]
    setZeroes(matrix)
    expect(matrix).toEqual([
      [1, 0, 1, 0],
      [0, 0, 0, 0],
      [1, 0, 1, 0],
      [0, 0, 0, 0]
    ])
  })

  it('原地修改验证', () => {
    const matrix = [[1, 0], [1, 1]]
    const originalRef = matrix
    setZeroes(matrix)
    expect(matrix).toBe(originalRef)
    expect(matrix).toEqual([[0, 0], [1, 0]])
  })
})
