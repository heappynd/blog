# 算法

## 什么是深度/广度优先遍历？

深度优先遍历：尽可能深的搜索树的分支。
广度优先遍历：先访问离根节点最近的节点。

### 深度优先遍历算法口诀

1. 访问根节点。
2. 对根节点的 children 挨个进行深度优先遍历。

```javascript
const dfs = (root) => {
  console.log(root);
  root.children.forEach(dfs);
};
```

### 广度优先遍历算法口诀

1. 新建一个队列，把根节点入队。
2. 把队头出队并访问。
3. 把队头的 children 挨个入队。
4. 重复第二、三步，直到队列为空。

```javascript
const bfs = (root) => {
  const q = [root];
  while (q.length > 0) {
    const n = q.shift();
    console.log(n.val);
    n.children.forEach((child) => {
      q.push(child);
    });
  }
};
```
