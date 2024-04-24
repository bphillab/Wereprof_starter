import {AutumnAton} from "libram"
import {
    availableAmount, buy,
    changeMcd, cliExecute,
    equip,
    Item,
    runChoice, toCoinmaster,
    toFamiliar,
    toItem, toLocation,
    toSlot,
    use, useFamiliar,
    visitUrl
} from "kolmafia";

function get_muffin(muffin:Item): void{
    visitUrl("place.php?whichplace=monorail&action=monorail_downtown");
    runChoice(7); // Go Downtown
    if (availableAmount(toItem("Earthenware Muffin Tin") ) > 0) {
        switch (muffin) {
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
    return;
}

function get_catalog_items(): void {
    buy(toCoinmaster("Mr. Store 2002"), 1, toItem("Loathing Idol Microphone"));
    buy(toCoinmaster("Mr. Store 2002"), 1, toItem("Flash Liquidizer Ultra Dousing Accessory"));
    buy(toCoinmaster("Mr. Store 2002"), 1, toItem("pro skateboard"));
}

function kick_off_pvp(){
    visitUrl("peevpee.php?action=smashstone&pwd&confirm=on", true);
    visitUrl("peevpee.php?place=fight");
}

export function prep_items(): void {
    get_muffin(toItem("Blueberry Muffin"));
    AutumnAton.sendTo(toLocation("noob cave"))
    start_SIT_course();
    handle_apriling();
    get_catalog_items();
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


