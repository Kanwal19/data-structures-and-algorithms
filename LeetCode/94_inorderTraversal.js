

let inorderTraversal = function (root){
    let output = []

    let traversal = function(node){
               
        if (node === null){
            return
        }
        
        traversal(node.left)
        output.push(node.value)
        traversal(node.right)
        return
    
    }

    traversal(root)
    return output
}