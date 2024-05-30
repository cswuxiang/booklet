- 解析（Parsing）：

 `将源代码转换为 AST。Babel 使用 @babel/parser 来解析 JavaScript 代码并生成 AST。
遍历（Traversing）：

- 使用 @babel/traverse 来递归遍历 AST 的每个节点。这允许开发者访问和操作 AST 中的每个元素。
访问（Visiting）：

- 在遍历过程中，可以访问每个节点，并根据节点的类型执行特定的操作。
替换（Replacing）：

- 使用 @babel/types 中的 replaceWith 方法来替换 AST 中的节点。
插入（Inserting）：

- 使用 insertBefore 或 insertAfter 方法来在现有节点前后插入新节点。
移除（Removing）：

- 使用 remove 方法来移除 AST 中的节点。
构建（Building）：

- 使用 @babel/types 提供的构建器函数来创建新的 AST 节点。
生成（Generating）：

- 在对 AST 完成操作后，使用 @babel/generator 将 AST 转换回 JavaScript 代码。