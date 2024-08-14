//access Robin’s inventory using dot notation syntax
//const adventurer = {
   // name: "Robin",
   // health: 10,
    //inventory: ["sword", "potion", "artifact"]
   // }
   // const target = adventurer.inventory[0]
   // console.log(target)
//
//access Robin’s inventory using square bracket syntax
/*const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"]
    }
    const target = adventurer["inventory"]
    console.log(target)*/

    // create loop that logs each item in Robin's inventory
    const adventurer = {
        name: "Robin",
        health: 10,
        inventory: ["sword", "potion", "artifact"]
        };

        const keys = Object.keys(adventurer);

        console.log(keys);