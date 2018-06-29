import {STARTING_INDEX} from "../constants";

export const ArrangeTreeHandler = data => {
    let sortedTree = SortTreeHandler(data);
    let relatedTree = AddParentChildRelationHandler(sortedTree);
    let childrensTree = FindChildrensForFoldersHandler(relatedTree);
    console.log(childrensTree);

    return childrensTree;
};

export const SortTreeHandler = data => {
    let tempArray = (JSON.parse(JSON.stringify(data))).sort((a, b) => parseFloat(a.parentId) - parseFloat(b.parentId));
    // console.log(tempArray);
    let arrangedArray = [];
    for (let i=0; i<tempArray.length; i++) {
        if (+tempArray[i].parentId === STARTING_INDEX) {
            arrangedArray.push(tempArray[i]);
        } else {
            let index = arrangedArray.findIndex(x => {
                return +x.id===+tempArray[i].parentId}); // finds parent's index
            if (index) {
                arrangedArray.splice(index+STARTING_INDEX, 0, tempArray[i]); // adds current element next to parent
            } else {
                console.log('====element=was=not=added====:', tempArray[i]);
            }
        }
    }
    console.log(arrangedArray.length);
    return arrangedArray;
};

export const AddParentChildRelationHandler = data => {
    let tempArray = JSON.parse(JSON.stringify(data));
    tempArray.forEach(child => child['deep']=0);

    tempArray.forEach((child, i, items) => {
        if (child.parentId) {
            child.deep = +child.parentId===STARTING_INDEX ? 0
                : (+((items.find(parent => +parent.id === +child.parentId))['deep']) + 1);
        }
    });
    return JSON.parse(JSON.stringify(tempArray));
};

export const FindChildrensForFoldersHandler = data => {
    let tempArray = JSON.parse(JSON.stringify(data));
    let isFound = false;
    tempArray.forEach(child => child['childrens']=[]);

    tempArray.forEach(folder => {
        let childrenId = FindChildrenId(folder.id, tempArray);
        isFound = +folder.id === childrenId;
        folder.childrens.push(childrenId);
        // while (isFound) {
        //     childrenId = FindChildrenId(folder.id, tempArray);
        //     isFound = +folder.id === childrenId;
        //     folder.childrens.push(childrenId);
        // }
    });
    return JSON.parse(JSON.stringify(tempArray));
};

export const FindChildrenId = (id, data) => {
    let tempArray = JSON.parse(JSON.stringify(data));
    let childrenId = +id;

    tempArray.forEach(folder => {
        if (+folder.parentId === +id) { childrenId = +folder.id; }
    });
    return childrenId;
};
