function getAttr(node, prop) {
  if (typeof node === 'string') node = getNode(node);
  if (typeof prop !== 'string')
    throw new Error('getAttr 함수의 두 번째 인수는 문자 타입 이어야 합니다.');

  return node.getAttribute(prop);
}

function setAttr(node, prop, value) {
  if (typeof node === 'string') node = getNode(node);
  if (typeof prop !== 'string' || typeof value !== 'string')
    throw new TypeError(
      'setAttr함수의 두 번째와 세 번째 인수는 문자 타입 이어야 합니다.'
    );
  if (!value) throw new Error('setAttr함수 세 번째 인수는 필수 입력값 입니다.');

  return node.setAttribute(prop, value);
}

function attr(node, prop, value) {
  if (!value) {
    return getAttr(node, prop);
  }
  setAttr(node, prop, value);
}
