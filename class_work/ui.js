const fruitsAnimalLists = document.querySelectorAll('.lists');
const placesList = document.querySelector('.places');

fruitsAnimalLists.forEach(list => {
    list.style.backgroundColor = 'gold';
    applyStylesToChildren(list, 'white');
});

placesList.style.backgroundColor = 'grey';

applyStylesToChildren(placesList, 'black');

function applyStylesToChildren(list, color) {
    const listItem = list.children;
    for (let a = 0; a < listItem.length; a++) {
        listItem[a].style.color = color;
    }
}