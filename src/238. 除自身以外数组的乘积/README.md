# 题后总结

## 知识点
前缀后缀乘积 + 空间优化

## 思路
1. **第一遍（从右往左）**：计算每个位置右边的乘积，存入 result 数组
   - 从末尾开始，`result[0]` 始终为 1（最后一个元素右边没有元素）
   - 其他位置：`result.unshift(nums[i + 1] * result[0])`
2. **第二遍（从左往右）**：用变量 `lNum` 累乘左边元素，与右边乘积相乘
   - `result[i] = lNum * result[i]`（左边乘积 × 右边乘积）
   - 更新 `lNum *= nums[i]`
3. **处理 -0**：使用 `Math.abs()` 确保结果为 0 而非 -0

## 核心逻辑
```typescript
// 第一遍：计算右边乘积
for (let i = nums.length - 1; i >= 0; i--) {
    if (i === nums.length - 1) {
        result.unshift(1);
    } else {
        result.unshift(nums[i + 1] * result[0]);
    }
}

// 第二遍：合并左边乘积
let lNum = 1;
for (let i = 0; i < nums.length; i++) {
    result[i] = lNum * result[i];
    lNum *= nums[i];
}
```

## 关键点
1. **unshift 操作**：从右往左遍历时，用 `unshift` 将结果插入数组头部，保证索引对应
2. **左右分离**：先算右边乘积存到 result，再用 lNum 累乘左边
3. **空间优化**：直接用 result 数组存储中间结果，避免额外的 left/right 数组
4. **-0 处理**：JavaScript 中 `0 * 负数 = -0`，需要用 `Math.abs()` 修正

## 易错点
1. **unshift 的性能**：`unshift` 时间复杂度 O(n)，整体仍是 O(n) 但常数较大
2. **索引对应**：`result[0]` 在每次 unshift 后都是新插入的值，需要正确引用
3. **-0 问题**：JavaScript 特有的浮点数行为，`-0 === 0` 为 true，但显示不同
4. **初始值**：最后一个元素的右边乘积为 1（空乘积）

## 复杂度
- 时间复杂度：O(n²)，因为 `unshift` 操作是 O(n)，执行 n 次
- 空间复杂度：O(1)（不计输出数组）

## 示例演示
以 `nums = [1,2,3,4]` 为例：

**第一遍（从右往左，计算右边乘积）**：

| i | nums[i+1] | result[0] | unshift 值 | result |
|---|-----------|-----------|-----------|--------|
| 3 | -         | -         | 1         | [1] |
| 2 | 4         | 1         | 4         | [4,1] |
| 1 | 3         | 4         | 12        | [12,4,1] |
| 0 | 2         | 12        | 24        | [24,12,4,1] |

**第二遍（从左往右，合并左边乘积）**：

| i | lNum | result[i] | 新 result[i] | 更新后 lNum |
|---|------|-----------|--------------|-------------|
| 0 | 1    | 24        | 1×24=24      | 1×1=1       |
| 1 | 1    | 12        | 1×12=12      | 1×2=2       |
| 2 | 2    | 4         | 2×4=8        | 2×3=6       |
| 3 | 6    | 1         | 6×1=6        | 6×4=24      |

最终结果：`[24,12,8,6]` ✓

## 优化方向

### 当前解法的问题
- 使用 `unshift` 导致时间复杂度实际为 O(n²)
- `unshift` 每次都要移动数组元素

### 更优解法（正向遍历）
```typescript
const result = new Array(nums.length).fill(1);

// 左边乘积
let left = 1;
for (let i = 0; i < nums.length; i++) {
    result[i] = left;
    left *= nums[i];
}

// 右边乘积
let right = 1;
for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= right;
    right *= nums[i];
}
```
- 时间复杂度：O(n) ✓
- 空间复杂度：O(1)（不计输出）
- 避免 `unshift` 操作

## 扩展思考
- 相关题目：**42. 接雨水**（类似的前缀后缀思想）
- 如果可以使用除法，可以直接计算总乘积再除以当前元素（注意处理 0）
