/**
 * Implementation of a binary tree with left and right children.
 */
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * Inorder traversal of binary tree
 */
function traverse(root) {
  console.log(root.val);
  if (root.left) traverse(root.left);
  if (root.right) traverse(root.right);
}

/**
 * Checks if the tree is a valid BST.
 * The conditions for a valid BST are as follows:
 * - The leftside children of a node must be less in value
 * - The rightside children of a node must be greater in value
 */
function isValid(root, min = -Infinity, max = Infinity) {
  if (!root) return true;
  if (root.val <= min || root.val >= max) return false;
  const left = isValid(root.left, min, root.val);
  const right = isValid(root.right, root.val, max);
  return left && right;
}

/**
 * Pretty-print tree
 */
function printTree(root, n = 0) {
  if (root) {
    printTree(root.right, n + 1);
    console.log(" ".repeat(4 * n) + "-> " + root.val);
    printTree(root.left, n + 1);
  }
}

const tree = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(3)),
  new TreeNode(4, undefined, new TreeNode(5, new TreeNode(6)))
);
printTree(tree);
console.log("tree.validBST() should expect false:", isValid(tree));
const tree2 = new TreeNode(2, new TreeNode(1), new TreeNode(3));
printTree(tree2);
console.log("tree2.validBST() should expect true:", isValid(tree2));
