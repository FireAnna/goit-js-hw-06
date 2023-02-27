const ulList = document.querySelector('#categories');
const ulListItem = ulList.querySelectorAll('.item');

console.log(`Number of categories: ${ulListItem.length}`);

for (const item of ulListItem) {
  console.log('Category:', item.querySelector('h2').textContent);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
}
