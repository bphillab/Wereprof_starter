import { AutumnAton} from "libram"
import {
    changeMcd,
    cliExecute,
    equip,
    Item,
    runChoice,
    toFamiliar,
    toItem,
    toLocation,
    toSlot,
    use, useFamiliar,
    visitUrl
} from "kolmafia";

function get_muffin(muffin:Item): void{
    visitUrl("place.php?whichplace=monorail&action=monorail_downtown");
    runChoice(7); // Go Downtown
    switch(muffin){
        case toItem("Blueberry Muffin"): {
            runChoice(1);
            break;
        }

        case toItem("Bran Muffin"): {
            runChoice(2);
            break;
        }

        case toItem("chocolate chip muffin"): {
            runChoice(3);
            break;
        }

        default:
            console.log("Unrecognized Muffin");
    }
    runChoice(1); //Return to prior screen
    runChoice(8); //Nevermind
    return;
}

function start_SIT_course(): void {
    use(toItem("S.I.T. Course Completion Certificate"), 1)
    runChoice(2)
    return
}

function start_melvin(): void {
    equip(toItem("Jurassic Parka"));
    use(toItem("Letter for Melvign the Gnome"));
    return;
}

function handle_apriling(): void {
    cliExecute("aprilband effect nc");
    cliExecute("aprilband item tuba");
    cliExecute("aprilband item saxophone");
}

export function prep_items(): void {
    AutumnAton.sendTo(toLocation("Haunted Pantry"), true);
    get_muffin(toItem("Blueberry Muffin"));
    start_SIT_course();
    handle_apriling();
    start_melvin();
    changeMcd(5);
    return;
}

export function equip_items(): void {
    equip(toItem("Apriling band helmet"));
    equip(toItem("moss mantle"));
    equip(toItem("Jurassic Parka"));
    equip(toItem("June Cleaver"));
    equip(toItem("Cursed magnifying glass"));
    equip(toSlot("acc1"), toItem("Everfull"));
    equip(toSlot("acc2"), toItem("astral belt"));
    equip(toSlot("acc3"), toItem("spring shoes"));
    useFamiliar(toFamiliar("Gelatinous Cubeling"));
    equip(toItem("tiny still suit"));
    return;
}


