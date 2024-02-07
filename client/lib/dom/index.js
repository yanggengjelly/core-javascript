//re-export 다시 내보내기 (구문)

//? 이름 내보내기
export * from './getNode.js';
export * from './insert.js';
export * from './clear.js';

//? 기본 내보내기
//? export {default as learContents} form './clear.js'

//!

//! 이름 내보내기

// export function clearContents(node) {
//   if (typeof node === 'string') node = getNode(node);

//   if (node.tagName === 'INPUT' || node.tagName === 'TEXTAREA') {
//     node.value = '';
//     return;
//   }
//   node.textContent = '';
// }

//! 기본 내보내기
//  아래 구문도 가능
// export default clearContents;
