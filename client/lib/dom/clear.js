import { getNode } from './getNode.js';

export function clearContents(node) {
  if (typeof node === 'string') node = getNode(node);

  if (node.tagName === 'INPUT' || node.tagName === 'TEXTAREA') {
    node.value = '';
    return;
  }
  node.textContent = '';
}

//  아래 구문도 가능
// export default clearContents;
