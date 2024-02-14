import { getNode } from './getNode.js';
import { isString } from '../utils/typeOf.js';

export function clearContents(node) {
  if (isString(node)) node = getNode(node);
  if (typeof node === 'string') node = getNode(node);

  if (node.tagName === 'INPUT' || node.tagName === 'TEXTAREA') {
    node.value = '';
    return;
  }
  node.textContent = '';
}

// export default clearContents
