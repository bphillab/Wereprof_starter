import {AprilingBandHelmet, AutumnAton} from "libram"
import {
    availableAmount,
    changeMcd,
    equip,
    Item,
    runChoice,
    toFamiliar,
    toItem, toLocation,
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
    AprilingBandHelmet.changeSong("Patrol Beat")
    AprilingBandHelmet.joinSection("Apriling band saxophone")
    AprilingBandHelmet.joinSection("Apriling band tuba")
    return;
}

function kick_off_pvp(){
    visitUrl("peevpee.php?action=smashstone&pwd&confirm=on", true);
    visitUrl("peevpee.php?place=fight");
}

export function prep_items(): void {
    if (availableAmount(toItem('earthenware muffin tin')) >0)
        get_muffin(toItem("Blueberry Muffin"));
    AutumnAton.sendTo(toLocation("noob cave"))
    start_SIT_course();
    handle_apriling();
    start_melvin();
    changeMcd(5);
    kick_off_pvp();
    return;
}

export function equip_items(): void {
    equip(toItem("Apriling band helmet"));
    equip(toItem("Jurassic Parka"));
    equip(toItem("June Cleaver"));
    equip(toItem("Cursed magnifying glass"));
    equip(toSlot("acc1"), toItem("Everfull Dart Holster"));
    equip(toSlot("acc2"), toItem("astral belt"));
    equip(toSlot("acc3"), toItem("spring shoes"));
    useFamiliar(toFamiliar("Gelatinous Cubeling"));
    equip(toItem("tiny stillsuit"));
    return;
}


