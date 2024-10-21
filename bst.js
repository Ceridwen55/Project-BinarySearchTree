import { Node } from "./node.js";

class tree {
    constructor(array){
        this.root = this.buildTree(array, 0, array.length-1);
    }


buildTree(array,start,end)
{
    if (start > end) 
        {
            return null;
        }

    let mid = Math.floor((start + end) / 2);
    let root = Node(array[mid]);

    root.left = this.buildTree(array,start,mid-1);
    root.right = this.buildTree(array,mid + 1, end);

    return root;
}
// insert another number into the bst
insert(value)
{
    if(this.root === null) 
    {
        this.root = Node(value)
        return;
    }
    let currentNode = this.root;
    let parentNode = null;

    while(currentNode !== null)
    {   parentNode = currentNode;

        if(value < currentNode.data)
        {
            currentNode = currentNode.left;
        }
        else if (value > currentNode.data)
        {
            currentNode = currentNode.right;
        }
        else
        {
            return;
        }


    }

    if(value < parentNode.data)
    {
        parentNode.left = Node(value);
    }
    else
    {
        parentNode.right = Node(value);
    }
    
}

deleteItem(value) 
{
    this.root = this.deleteNode(this.root, value);
}

deleteNode(node, value) 
{
    if (node === null) 
    {
        return node; 
    }

    if (value < node.data) 
    {
        node.left = this.deleteNode(node.left, value); 
    } else if (value > node.data) 
    {
        node.right = this.deleteNode(node.right, value); 
    } else 
    {
        

        
        if (node.left === null) 
        {
            return node.right; 
        } else if (node.right === null) 
        {
            return node.left; 
        }

        
        let successor = this.findMin(node.right);

        
        node.data = successor.data;

        
        node.right = this.deleteNode(node.right, successor.data);
    }

    return node; 
}

findMin(node) 
{
    while (node.left !== null) 
    {
        node = node.left; 
    }
    return node; 
}

// inputted value will be searched in the BST
search(value)
{
    //try to access the recent tree
let target = this.root;

if(value !== target)
{
    return null;
}
while (target !== null)
{
    if (value < target.data)
    {
        target = target.left;
        
    }
    else if (value > target.data)
    {   
        target = target.right;
        
    }
    else if ( value === target.data)
    {
        console.log("YEAH IT DOES EXIST HERE");
        return target;
    }
}
    console.log("VALUE NOT FOUND");
    return null;

}

levelOrder(callback)
{   let node = this.root;
    if (typeof callback !== 'function') 
    {
        throw new Error("A callback function is required");
    }

    // Helper function to get the height of the tree
    const height = (node) => 
    {
        if (node === null) return 0;
        return Math.max(height(node.left), height(node.right)) + 1;
    };

    // Helper function to process nodes at a given level
    const processLevel = (node, level) => 
    {
        if (node === null) return;
        if (level === 1) {
            callback(node);
        } else if (level > 1) {
            processLevel(node.left, level - 1);
            processLevel(node.right, level - 1);
        }
    };

    // Get the height of the tree and process nodes level by level
    let h = height(this.root);
    for (let i = 1; i <= h; i++) 
    {
        processLevel(this.root, i);
    }

}

inOrder(callback) 
{
    if (typeof callback !== 'function') 
    {
        throw new Error("A callback function is required");
    }

    const traverse = (node) => 
    {
        if (node === null) return;
        traverse(node.left);
        callback(node);
        traverse(node.right);
    };

    traverse(this.root);
}

// PreOrder traversal (Root, Left, Right)
preOrder(callback) {
    if (typeof callback !== 'function') 
    {
        throw new Error("A callback function is required");
    }

    const traverse = (node) => 
    {
        if (node === null) return;
        callback(node);
        traverse(node.left);
        traverse(node.right);
    };

    traverse(this.root);
}

// PostOrder traversal (Left, Right, Root)
postOrder(callback) {
    if (typeof callback !== 'function') 
    {
        throw new Error("A callback function is required");
    }

    const traverse = (node) => 
    {
        if (node === null) return;
        traverse(node.left);
        traverse(node.right);
        callback(node);
    };

    traverse(this.root);
}

// Returns the height of a given node
height(node) 
{
    if (node === null) return -1; // Height of null node is -1
    return Math.max(this.height(node.left), this.height(node.right)) + 1;
}

// Returns the depth of a given node from the root
depth(node, current = this.root, level = 0) 
{
    if (current === null) return -1;
    if (current === node) return level;

    let leftDepth = this.depth(node, current.left, level + 1);
    if (leftDepth !== -1) return leftDepth;

    return this.depth(node, current.right, level + 1);
}

// Checks if the tree is balanced
isBalanced() {
    const checkBalance = (node) => 
    {
        if (node === null) return true;

        let leftHeight = this.height(node.left);
        let rightHeight = this.height(node.right);

        if (Math.abs(leftHeight - rightHeight) > 1) return false;

        return checkBalance(node.left) && checkBalance(node.right);
    };

    return checkBalance(this.root);
}

// Rebalances the tree if it's unbalanced
rebalance() {
    const toArray = (node) => 
    {
        if (node === null) return [];
        return [...toArray(node.left), node.data, ...toArray(node.right)];
    };

    let sortedArray = toArray(this.root); // Get the sorted array from the tree
    this.root = this.buildTree(sortedArray, 0, sortedArray.length - 1); // Rebuild the tree
};

};














const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) 
    {
        return;
    }
    if (node.right !== null) 
    {
        prettyPrint(node.right, `${prefix}${isLeft ? "|   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "+-- " : "+-- "}${node.data}`);
    if (node.left !== null) 
    {
        prettyPrint(node.left, `${prefix}${isLeft ? "    " : "|   "}`, true);
    }
};

  const test = new tree([1,2,3,4,5,6,7,8,9,10]);
  test.insert(80);
  test.insert(7);
  prettyPrint(test.root);

 


    


