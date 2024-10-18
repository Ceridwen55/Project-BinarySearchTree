import { Node } from "./node.js";

function tree (array)
{   
    return { buildTree(array,0,array.length-1) }

}
buildTree(array,start,end)
{
    if (start > end) return null;

    let mid = Math.floor((start + end) / 2);
    let root = new Node(arr[mid]);

    root.left = buildTree(array,start,mid-1);
    root.right = buildTree(array,mid + 1, end);

    return root;
}


    


