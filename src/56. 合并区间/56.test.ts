import { describe, it, expect } from 'vitest'
import merge from './56'

describe('56. 合并区间', () => {
  it('示例 1: [[1,3],[2,6],[8,10],[15,18]]', () => {
    expect(merge([[1, 3], [2, 6], [8, 10], [15, 18]])).toEqual([[1, 6], [8, 10], [15, 18]])
  })

  it('示例 2: [[1,4],[4,5]]', () => {
    expect(merge([[1, 4], [4, 5]])).toEqual([[1, 5]])
  })

  it('单个区间', () => {
    expect(merge([[1, 4]])).toEqual([[1, 4]])
  })

  it('没有重叠区间', () => {
    expect(merge([[1, 2], [4, 5], [7, 8]])).toEqual([[1, 2], [4, 5], [7, 8]])
  })

  it('所有区间都重叠', () => {
    expect(merge([[1, 4], [2, 5], [3, 6]])).toEqual([[1, 6]])
  })

  it('空数组', () => {
    expect(merge([])).toEqual([])
  })

  it('区间完全包含', () => {
    expect(merge([[1, 10], [2, 5], [3, 4]])).toEqual([[1, 10]])
  })

  it('部分重叠', () => {
    expect(merge([[1, 3], [2, 4], [5, 7], [6, 8]])).toEqual([[1, 4], [5, 8]])
  })

  it('连续重叠', () => {
    expect(merge([[1, 2], [2, 3], [3, 4], [4, 5]])).toEqual([[1, 5]])
  })

  it('乱序区间', () => {
    expect(merge([[5, 6], [1, 3], [2, 4], [7, 8]])).toEqual([[1, 4], [5, 6], [7, 8]])
  })

  it('起点相同', () => {
    expect(merge([[1, 4], [1, 5]])).toEqual([[1, 5]])
  })

  it('复杂情况', () => {
    expect(merge([[1, 4], [0, 4]])).toEqual([[0, 4]])
  })
})
