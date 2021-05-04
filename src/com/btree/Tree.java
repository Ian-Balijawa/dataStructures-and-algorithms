package btree;

public class Tree<E> {
  private class Node<T> {
    private E value;
    private Node<T> leftChild;
    private Node<T> rightChild;

    public Node(E value) {
      this.value = value;
    }

    @Override
    public String toString() {
      return "Node= " + value;
    }

    @Override
    public boolean equals(Object obj) {
      // nodes are equal if they have the same data or value

      return (int) this.value == (int) obj ? true : false;
    }
  }

  private Node<E> root;

  public void insert(E value) {
    var node = new Node<E>(value);

    if (root == null) {
      root = node;
      return;
    }

    var current = root;
    while (true) {
      if (((Comparable<E>) current.value).compareTo(value) > 0) {
        if (current.leftChild == null) {
          current.leftChild = node;
          break;
        }

        current = current.leftChild;
      } else {
        if (current.rightChild == null) {
          current.rightChild = node;
          break;
        }

        current = current.rightChild;
      }
    }
  }

  public boolean find(E value) {
    var current = root;
    while (current != null) {

      if (((Comparable<E>) value).compareTo(current.value) < 0)
        current = current.leftChild;
      else if (((Comparable<E>) value).compareTo(current.value) > 0)
        current = current.rightChild;
      else
        return true;
    }

    return false;
  }

  public void traversePreOrder() {
    traversePreOrder(root);
  }

  private void traversePreOrder(Node<E> root) {
    if (root == null)
      return;
    System.out.println(root.value);
    traversePreOrder(root.leftChild);
    traversePreOrder(root.rightChild);
  }

  public void traversePostOrder() {
    traversePostOrder(root);
  }

  private void traversePostOrder(Node<E> root) {
    if (root == null)
      return;
    traversePreOrder(root.leftChild);
    traversePreOrder(root.rightChild);
    System.out.println(root.value);
  }

  public void traverseLevelOrder() {
    traverseLevelOrder(root);
  }

  private void traverseLevelOrder(Node<E> root) {
    if (root == null)
      return;

    traverseLevelOrder(root.leftChild);
    System.out.println(root.value);
    traverseLevelOrder(root.rightChild);

  }

  public void invertBinaryTree() {
    invertBinaryTree(root);
  }

  private void invertBinaryTree(Node<E> node) {
    if (node == null)
      return;
    Node<E> tmp = node.leftChild;
    node.leftChild = node.rightChild;
    node.rightChild = tmp;
    invertBinaryTree(node.leftChild);
    invertBinaryTree(node.rightChild);
  }
}
