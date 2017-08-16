function BinaryTree() {
  this.root (null);
}

BinaryTree.prototype = new Properties ();

BinaryTree.prototype.root = function () {
	return this.prop.apply (this, arguments);
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

BinaryTree.prototype.check = function (node, typ, newNode) {
	if (!node || !typ) return;

	if (!node[typ]) return;
	var hasChild = node [typ] ();

	if (!hasChild) {
		node[typ] (newNode);
		newNode.setParent (node);
	};

	return hasChild;
};

BinaryTree.prototype.add = function(toAdd) {
  var n = this.root();
  var e = new Node (toAdd);
  if (!n){      //null root case
    this.root(e);
    return;
  }
  while (n) {
    if (toAdd < n.data()) {     //less than
        n = this.check (n, "left", e);
    }
    else if (toAdd > n.data()) {                    //greater than
        n = this.check (n, "right", e);
    }
    else if (toAdd === n.data()) {                     //equal to (it's a set, don't do spit)
      return false;
    }
  }
}

BinaryTree.prototype.splice = function(u) {
  var p, s;
  if (u.left()) {           //figuring out which node we need to splice into parent. S is the node being spliced, and is the child of the node we're splicing out
    s = u.left();
  }
  else {
    s = u.right();
  }

  if (u === this.root()) {      //if we're splicing out the root
    this.root(s);
    p = null;             //parent is null
  }
  else {
    p = u.parent();           //actually splicing out the node
    if (p){                      //note: this shouldn't happen, but it could ... so check to be sure
      if (p.left() === u) {
        p.left(s);
      }
      else {
        p.right(s);
      }
    }
  }
  if (s) {
    s.parent(p);
  }
}

BinaryTree.prototype.remove = function(toRemove) {
  if (!toRemove.left() || !toRemove.right())        //if you can splice it and it's the simple case
  {
    this.splice(toRemove);
  }
  else                                                    //if you have to swap and do the complex case
  {
    var w = u.right();
    var p;
    while (w)
    {
	p = w;
        w = w.left();
    }
    toRemove.data(p.data());
    this.splice(p);
  }
}

BinaryTree.prototype.toString = function () {
	var nodes = [ ];
	new Traversal(this).inOrder(function (node) {
		nodes.push (node);
	});
};
