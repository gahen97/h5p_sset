/*
	For SkiplistList, every node has an index. We should show these indices.
*/
function Index (node, opts) {
	this.node = node;

	if (!opts || opts.hidden !== false)
		this.show (opts);
};

Index.prototype.calcPos = function () {
	var index  = this.index;
	var node   = this.node;
	if (!index || !node) return;

	// get data
	var iWidth = index.width ();
	var iHeight = index.height ();
	var nWidth  = node.elemWidth ();
	var nHeight = node.elemHeight ();
	var nPos    = node.getPosition ();

	// if the node doesn't have any data, we want to center it on the pointer
	if (node.isDataHidden ()){
		nWidth      = nWidth/2;
		nPos.left  += nWidth;
	}

	// here ... we basically want to find a position that makes it look centered
	// should be below the element, centered width-wise
	return {
		left: (nWidth - iWidth)/2 + nPos.left,
		top:  nHeight + nPos.top
	};
};

Index.prototype.show = function (opts) {
	if (!opts) opts = { };

	var node = this.node;
	if (!node) return false;

	var index = opts.index;
	if (!index && index !== 0)
		index = node.index();

	var newIndex = $(DOM.newIndex ()).appendTo (DOM.question ())
					 .text (index);
	this.index   = newIndex;

	var pos      = this.calcPos (node, newIndex);

	newIndex.css (pos).text (index);
};

Index.prototype.remove = function () {
	if (!this.index) return;
	this.index.remove ();
}

Index.prototype.update = function (text) {
	var elem = this.index;
	if (!elem)
		this.show ({index: text});
	else
		$(elem).text (text);
}

