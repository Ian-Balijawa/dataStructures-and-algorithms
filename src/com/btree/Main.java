package btree;

public class Main {
    public static void main(String[] args) {
        Tree<String> tree = new Tree<String>();

        tree.insert("foo");
        tree.insert("bar");
        tree.insert("fooBar");
        tree.insert("john");
        tree.insert("doe");
        tree.insert("ian");
        tree.insert("balijawa");
        // tree.traversePreOrder();
        // tree.traversePostOrder();
        tree.traverseLevelOrder();

        tree.invertBinaryTree();
        tree.traverseLevelOrder();
        tree.invertBinaryTree();
        tree.traverseLevelOrder();
        tree.invertBinaryTree();
        tree.traverseLevelOrder();
        tree.invertBinaryTree();
        tree.traverseLevelOrder();
        tree.invertBinaryTree();
        tree.traverseLevelOrder();
        tree.invertBinaryTree();
        tree.traverseLevelOrder();
        tree.invertBinaryTree();
        tree.traverseLevelOrder();
        tree.invertBinaryTree();
        tree.traverseLevelOrder();
        tree.invertBinaryTree();
        tree.traverseLevelOrder();

    }
}
