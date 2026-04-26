---
name: leetcode-create
description: 创建 LeetCode 新题目。用于初始化题目目录、解答模板和测试用例。当用户要求"创建第 X 题"时使用此 skill。
---

# LeetCode 创建题目 Skill

## 核心原则
1. **解答留白**：只创建模板，不写答案
2. **测试完整**：至少 8-12 个测试用例
3. **目录规范**：`src/[题号].[题目名称]/`，保留空格

## 工作流程

### 1. 创建目录
```bash
mkdir -p "src/[题号].[题目名称]"
```

### 2. 创建 `[题号].ts`
```typescript
/**
 * [题号]. [题目名称]
 * https://leetcode.cn/problems/[英文slug]/
 * 
 * [题目描述和示例]
 */

function [函数名](参数): 返回类型 {
    // TODO: 实现你的算法
    return 默认值;
}

export default [函数名];
```

### 3. 创建 `[题号].test.ts`
```typescript
import { describe, it, expect } from 'vitest'
import [函数名] from './[题号]'

describe('[题号]. [题目名称]', () => {
  it('示例 1', () => {
    expect([函数名]([参数])).toBe(期望值)
  })
  // 补充 8-12 个测试用例
})
```

**测试覆盖**：官方示例、边界情况、特殊情况

### 4. 验证测试
```bash
npm test -- src/[题号]* --run
```

### 5. 自动 git add
```bash
git add "src/[题号].*/"
```
**只 add，不 commit/push**

## 注意事项
- 目录名保留空格：`76. 最小覆盖子串`
- 函数名与 LeetCode 官方一致
- 使用 `export default`
