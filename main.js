//////////////////////////////////////////////////////////
//  Conditionals, Arrays, Functions, Loops, and Inputs  //
//////////////////////////////////////////////////////////

//We are going to build a basic CRUD app (Create, Read, Update, Delete). 

//Step 1: Build something to store our data
const crud = {
    data: {},
    //Step 2: Build Modifiers and Accessors
    // ******* Implement Create Feature *******
    counter: 0,
    create: (info) => {
        crud.data[`Index ${crud.counter}`] = info;
        crud.counter += 1;
    },
    // ******* Implement Read Feature *******
    read: (int) => {
        let result;
        int === '' ? result = Object.entries(crud.data) : result = crud.data[`Index ${int}`];
        return result;
    },
    // ******* Implement Update Feature *******
    update: (int, val) => {
        crud.data[`Index ${int}`] = val
    },
    // ******* Implement Delete Feature *******
    delete: (int) => {
        delete crud.data[`Index ${int}`]
    },

    indexReset: () => {
        crud.counter = 0;
        const dataKeys = Object.keys(crud.data);
        dataKeys.forEach((val) => {
            if (val.charAt(val.length - 1) !== '' + crud.counter) {
                //need to know how to change object keys at this line, currently changes index.
                crud.data[`Index ${crud.counter}`] = crud.data[`${val}`];
                delete crud.data[`${val}`];
                crud.counter += 1;
            } else {
                crud.counter += 1
            }
        });
    }
}

// Step 3: Build A Way to Interact With Our Data
function runCrud() {

    // ******* Implement Ask For Command Feature *******
    let choice = prompt("Would you like to 'c'reate,  'r'ead,  'u'pdate, 'd'elete, 'i'ndex reset, or 'e'xit?");

    // ******* Implement Ask For Item Modification Feature *******
    switch (choice) {
        case 'c':
            let num = prompt('How many items would you like to add?')
            if (num === '') { num = 1 }
            for (x = num; x > 0; x--) {
                let c = prompt('What would you like to add?');
                c = ` ${c}   `
                crud.create(c);
            }
            runCrud();
            break;

        case 'r':
            let r = prompt("What would you like to read? You may specify an index or press enter for all info");
            if (r === 'a') {
                alert(crud.read(''));
            } else if (r >= 0) {
                alert(crud.read(r));
            }
            runCrud();
            break;

        case 'u':
            let i = prompt('Please specify an index to update.');
            let u = prompt(`Please specify what information you would like to add at index ${i}`);
            crud.update(i, u);
            alert(crud.read(''));
            runCrud();
            break;

        case 'd':
            let d = prompt('Please specify the index of the item to be deleted.');
            crud.delete(d);
            alert(crud.read(''));
            runCrud();
            break;

        case null:
            alert("To exit program please select 'e'xit in the main menu.")
            runCrud();
            break;

        case 'e':
            alert('Have a great day!')
            break;

        case 'i':
            crud.indexReset();
            alert(crud.read(''));
            runCrud();
            break;

        default:
            alert('Please select an option.')
            runCrud();

    }
}
//Step 4: Run this program
runCrud();

/*
    Stretch Goal:

    Congrats on building a CRUD app! Right now it may or may not be very useful.
    Make this CRUD app's intention more clear by making it specific. For example,
    make it a To-do app (customize the prompts more) or a Recipe storage app
    (what are some useful data types you can store in your current data storage?).
*/
