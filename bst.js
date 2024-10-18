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
  prettyPrint(test.root);

 


    


