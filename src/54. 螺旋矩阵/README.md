# 题后总结

## 知识点
模拟遍历 + 边界收缩

## 思路
1. **核心思想**：用方向变量 `des` 控制移动方向，遇到角落时转向并收缩边界
2. **四个方向**：`right` → `down` → `left` → `up`，循环切换
3. **转向条件**：到达当前方向的角落时，收缩对应边界并改变方向
4. **终止条件**：行列坐标超出边界范围

## 核心逻辑
```typescript
let left = 0, top = 0;
let right = matrix[0].length - 1, bottom = matrix.length - 1;
let col = 0, row = 0;
let des: 'right' | 'down' | 'left' | 'up' = 'right';

while (col <= right && col >= left && row <= bottom && row >= top) {
    result.push(matrix[row][col]);

    // 判断是否需要修改方向（到达角落）
    if (col === right && row === top && des === 'right') {
        top++; des = 'down';      // 右上角，收缩上边界
    } else if (col === right && row === bottom && des === 'down') {
        right--; des = 'left';    // 右下角，收缩右边界
    } else if (col === left && row === bottom && des === 'left') {
        bottom--; des = 'up';     // 左下角，收缩下边界
    } else if (col === left && row === top && des === 'up') {
        left++; des = 'right';    // 左上角，收缩左边界
    }

    // 根据方向移动坐标
    if (des === 'right') col++;
    else if (des === 'down') row++;
    else if (des === 'left') col--;
    else if (des === 'up') row--;
}
```

## 关键点
1. **方向状态机**：用 `des` 变量记录当前移动方向，避免重复判断
2. **角落检测**：每个方向有特定的角落作为转向点
   - `right` → 右上角 `(right, top)`
   - `down` → 右下角 `(right, bottom)`
   - `left` → 左下角 `(left, bottom)`
   - `up` → 左上角 `(left, top)`
3. **边界收缩**：转向时同时收缩对应边界
4. **循环条件**：确保行列坐标在有效范围内

## 易错点
1. **方向与角落的对应**：每个方向只在特定角落转向，需要同时检查位置和方向
2. **边界收缩时机**：必须在转向时收缩，过早或过晚都会导致错误
3. **空矩阵处理**：需要先检查 `matrix.length === 0`
4. **坐标移动顺序**：先 push 当前元素，再判断转向，最后移动坐标

## 复杂度
- 时间复杂度：O(m × n)，每个元素访问一次
- 空间复杂度：O(1)（不计输出数组）

## 示例演示
以 `matrix = [[1,2,3],[4,5,6],[7,8,9]]` 为例：

初始：`left=0, top=0, right=2, bottom=2, col=0, row=0, des='right'`

| 步骤 | (row,col) | 值 | 方向 | 操作 | 边界变化 |
|------|-----------|----|------|------|---------|
| 1 | (0,0) | 1 | right | 移动 | - |
| 2 | (0,1) | 2 | right | 移动 | - |
| 3 | (0,2) | 3 | right→down | 右上角，top++ | top=1 |
| 4 | (1,2) | 6 | down | 移动 | - |
| 5 | (2,2) | 9 | down→left | 右下角，right-- | right=1 |
| 6 | (2,1) | 8 | left | 移动 | - |
| 7 | (2,0) | 7 | left→up | 左下角，bottom-- | bottom=1 |
| 8 | (1,0) | 4 | up→right | 左上角，left++ | left=1 |
| 9 | (1,1) | 5 | right | 移动后越界，退出 | - |

最终结果：`[1,2,3,6,9,8,7,4,5]` ✓

## 算法对比

### 当前解法（方向状态机）
- 优点：逻辑清晰，易于理解
- 缺点：代码较长，需要维护方向和位置状态

### 另一种常见解法（分层遍历）
```typescript
while (top <= bottom && left <= right) {
    // 从左到右
    for (let i = left; i <= right; i++) result.push(matrix[top][i]);
    top++;
    
    // 从上到下
    for (let i = top; i <= bottom; i++) result.push(matrix[i][right]);
    right--;
    
    // 从右到左（检查是否还有行）
    if (top <= bottom) {
        for (let i = right; i >= left; i--) result.push(matrix[bottom][i]);
        bottom--;
    }
    
    // 从下到上（检查是否还有列）
    if (left <= right) {
        for (let i = bottom; i >= top; i--) result.push(matrix[i][left]);
        left++;
    }
}
```
- 优点：代码更简洁，按层处理
- 缺点：需要额外的边界检查

## 扩展思考
- 相关题目：**59. 螺旋矩阵 II**（生成螺旋矩阵）、**885. 螺旋矩阵 III**
