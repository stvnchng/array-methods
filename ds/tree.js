class TreeNode {
  constructor(val, left = undefined, right = undefined) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  traverse() {
    console.log(this.val);
    if (this.left) this.left.traverse();
    if (this.right) this.right.traverse();
  }
}

const tree = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(3)),
  new TreeNode(4, undefined, new TreeNode(5, new TreeNode(6)))
);
tree.traverse();
