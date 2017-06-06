function BinaryTree() {
  this.root = null;
}

BinaryTree.prototype.getRoot = function() {
  return this.root;
}

BinaryTree.prototype.setRoot = function(r) {
  var temp = this.root;
  this.root = r;
  return temp;
}

BinaryTree.prototype.populate = function(i, arr) {
  if (i <= 0) {
    console.log("BinaryTree populate had a size argument of 0 or less.\n");
    return;
  }
  this.root = new Node(undefined, arr[0],undefined);
  if (arr.length <= 1) {
    return;
  }
  for (var i = 1; i < arr.length; i++) {
    this.add(arr[i]);
  }
  return this;
};



BinaryTree.prototype.checkAdd = function (from, func, funcSet, newNode) {
  var n = from[func]();
  if (n)
    return n;
  from[funcSet](newNode);
}

BinaryTree.prototype.add = function(toAdd) {
  var n = this.root;
  var e = new Node (undefined, toAdd, undefined);
  if (!n){      //null root case
    this.root = e;
    return;
  }
  while (n) {
    if (toAdd < n.getData()) {     //less than
        n = this.checkAdd (n, "getLeft", "setLeft", e);
    }
    else if (toAdd > n.getData()) {                    //greater than
        n = this.checkAdd (n, "getRight", "setRight", e);
    }
    else if (toAdd === n.getData()) {                     //equal to (it's a set, don't do spit)
      return false;
    }
  }
}

BinaryTree.prototype.splice = function(u) {
  var p, s;
  if (u.getLeft()) {           //figuring out which node we need to splice into parent. S is the node being spliced, and is the child of the node we're splicing out
    s = u.getLeft();
  }
  else {
    s = u.getRight();
  }

  if (u === this.getRoot()) {      //if we're splicing out the root
    this.setRoot(s);
    p = null;             //parent is null
  }
  else {
    p = u.getParent();           //actually splicing out the node
    if (p.getLeft() === u) {
      p.setLeft(s);
    }
    else {
      p.setRight(s);
    }
  }
  if (s) {
    s.setParent(p);
  }
}

BinaryTree.prototype.remove = function(toRemove) {
  if (!toRemove.getLeft() || !toRemove.getRight())        //if you can splice it and it's the simple case
  {
    this.splice(toRemove);
  }
  else                                                    //if you have to swap and do the complex case
  {
    var w = u.getRight();
    while (w.getLeft())
    {
        w = w.getLeft();
    }
    toRemove.setData(w.getData());
    this.splice(w);
  }
}
