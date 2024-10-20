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

 


    


