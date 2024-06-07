# 节点创建
-  @babel/types
   - 构建新的节点 t.CallExpression
   - 构建新的节点 t.CallExpression(t.identifier('console'), [t.stringLiteral('Hello, world!')])
   - `判断节点` t.isCallExpression(path.node)

# 节点删除

- path.remove() 删除当前节点


# 节点修改
- path.node.name = "x";
- path.replaceWith(newNode) 替换节点
- <strong>path.insertBefore(newNode) </strong>在当前节点前插入节点
- path.insertAfter(newNode) 在当前节点后插入节点
- path.node.body.unshiftContainer  // 在函数体的开头插入新节点 


# 节点访问
- path.get ('property') 访问节点属性
- path.scope 访问当前作用域
- path.parent 访问父节点
- path.container 访问父节点的容器
- path.node 访问当前节点
- path.inList 判断当前节点是否在列表中
- if (t.isIdentifier(path.node.left, { name: "n" })) {
    // ...
  }
```
module.exports = function() {
  return {
    visitor: {
      Identifier(path) {
        const functionParent = path.findParent((parentPath) =>
          parentPath.isFunctionDeclaration()
        );
        console.log('最近的函数声明父节点:', functionParent);
      },
    },
  };
};

```


# babel.transform


