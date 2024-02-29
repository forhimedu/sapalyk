const firstrow = document.getElementById('firstrow');
const secondrow = document.getElementById('secondrow');
const thirdrow = document.getElementById('thirdrow');
const correctAns = document.getElementById('correctAnswers');
let returnValue = false;


function toSup(value){
    return value.sup();
}

function toSub(value){
    return value.sub()
}


const allData = [
    [`H${toSup("+")}`, "индикатор", "түс өзгереді"],
    [`Ag${toSup("+")}`,`Cl${toSup("-")}` , "ақ тұнба"],
    [`Cu${toSup("2+")}`,  `OH${toSup("-")}`, "көк тұнба"],
    [`Cu${toSup("2+")}`,  `S${toSup("-2")}`, "қара тұнба"],
    [`Fe${toSup("2+")}`, `OH${toSup("-")}`, "ақ мақта-тәрізді тұнба, ауада жасылданады"],
    [`Fe${toSup("3+")}`, `OH${toSup("-")}`, "қоңыр тұнба"],
    [`Zn${toSup("2+")}`, `OH${toSup("-")}`, "ақ тұнба, артық сілтіде ериді"],
    [`Zn${toSup("2+")}`, `S${toSup("2-")}`, "ақ тұнба"],
    [`Al${toSup("3+")}`, `OH${toSup("-")}`, "ақ(сұр) тұнба, артық сілтіде ериді"],
    [`NH${toSub("4")}${toSup("+")}`, `OH${toSup("-")}`, "өткір иісті газ"],
    [`Ba${toSup("2+")}`, `SO${toSub("4")}${toSup("2-")}`, "ақ тұнба(жалын түсі сары-жасыл)"],
    [`Ca${toSup("2+")}`, `CO${toSub("3")}${toSup("2-")}`, "ақ тұнба(жалын түсі кірпіш-қызыл)"],
    [`Cl${toSup("-")}`, `Ag${toSup("+")}`, "ақ тұнба"],
    [`Br${toSup("-")}`, `Ag${toSup("+")}`, "сарылау тұнба"],
    [`I${toSup("-")}`, `Ag${toSup("+")}`, "сары тұнба"],
    [`SO${toSub("3")}${toSup("2-")}`, `H${toSup("+")}`, "өткір иісті газ"],
    [`SO${toSub("4")}${toSup("2-")}`, `Ba${toSup("2+")}`, "ақ тұнба"],
    [`CO${toSub("3")}${toSup("-")}`, `H${toSup("+")}`, "түссіз-иіссіз газ, әк суын лайландырады"],
    [`NO${toSub("3")}${toSup("-")}`, `H${toSub("2")}SO${toSub("4")}(), Cu${toSup("-")}`, "қоңыр газ"],
    [`CH${toSub("3")}COO${toSup("-")}`,`H${toSub("2")}SO${toSub("4")}`, "сірке қышқылы иісі"],
    [`PO${toSub("4")}${toSup("-")}`, `Ag${toSup("+")}`, "сары тұнба"],

]




function checkArray(value1, value2, value3, arrayList) {
    returnValue = false;
    arrayList.forEach(element => {
        if (value1 == element[0] && value2 == element[1] && value3 == element[2]) {
            returnValue = true;
        }
    })
    return returnValue;
}



/**
 * ClassNameRemoved will be the one which will contain classes that should be removed
 * 
 * 
 */
function removeClassName(classNameRemoved, classNameType ) {
    const classRemove = document.querySelectorAll(`.${classNameType}`);
       
    classRemove.forEach(element => {
        if (element.classList.contains("selected")) {
            element.classList.remove("selected")
        }
    })
}

function clearVariables(val1, val2, val3) {
    val1 = null;
    val2 = null;
    val3 = null;
}


function shuffleArray(array) {
    let len = array.length,
        currentIndex;
    for (currentIndex = len - 1; currentIndex > 0; currentIndex--) {
        let randIndex = Math.floor(Math.random() * (currentIndex + 1) );
        var temp = array[currentIndex];
        array[currentIndex] = array[randIndex];
        array[randIndex] = temp;
    }
}

function App() {
    const shuffled = allData.sort(() => 0.5 - Math.random());
    let data = shuffled.slice(0, 5);
    /** 
     * Here, each element that is picked from each row will be stored here
     */
    let row1SelectedElement = null;
    let row2SelectedElement = null;
    let row3SelectedElement = null;
    const submitButton = document.getElementById('submitButton');
    const popupElements = document.getElementById('popup');

    data.forEach(element => {
        // first row related 
        const spanElement1 = document.createElement('span');
        spanElement1.innerHTML = element[0];
        spanElement1.classList.add('card', "rowOne");
        spanElement1.addEventListener('click', () => {
            removeClassName("selected","rowOne");
            spanElement1.classList.add('selected');
            row1SelectedElement = spanElement1.innerHTML;
        })
        firstrow.appendChild(spanElement1);
    })
    shuffleArray(data);
    data.forEach(element => {
        // second row related
        const spanElement2 = document.createElement('span');
        spanElement2.innerHTML = element[1];
        spanElement2.classList.add('card', 'rowTwo');
        spanElement2.addEventListener('click', () => {
            removeClassName('selected', 'rowTwo');
            spanElement2.classList.add('selected');
            row2SelectedElement = spanElement2.innerHTML;
        })
        secondrow.appendChild(spanElement2);
    })
    shuffleArray(data);
    data.forEach(element => {
        // third row related
        const spanElement3 = document.createElement('span');
        spanElement3.innerHTML = element[2];
        spanElement3.classList.add('card', 'rowThree');
        spanElement3.addEventListener('click', () => {
            removeClassName('selected','rowThree');
            spanElement3.classList.add('selected');
            row3SelectedElement = spanElement3.innerHTML;
        })
        thirdrow.appendChild(spanElement3);
    })

    submitButton.addEventListener('click', () => {
        if (checkArray(row1SelectedElement, row2SelectedElement, row3SelectedElement, data)) {
            const removeAllElems = document.querySelectorAll('.selected');
            removeAllElems.forEach(elem => {
                elem.remove();
            })
        let newDiv1 = document.createElement('span')
        let newDiv2 = document.createElement('span')
        let newDiv3 = document.createElement('span')
        newDiv1.innerHTML = row1SelectedElement;
        correctAns.appendChild(newDiv1);
        newDiv2.innerHTML = row2SelectedElement;
        correctAns.append(newDiv2);
        newDiv3.innerHTML = row3SelectedElement;
        correctAns.append(newDiv3);
        } else {
            const removeAllElems = document.querySelectorAll('.selected');
            removeAllElems.forEach(elem => {
              elem.classList.remove('selected');  
            })
        }
        row1SelectedElement = null;
        row2SelectedElement = null;
        row3SelectedElement = null;
        if (firstrow.hasChildNodes()) {
        } else {
            App();
        }
    })
    

}

App();
