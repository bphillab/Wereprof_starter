import {AutumnAton} from "libram"
import {
    availableAmount, buy,
    changeMcd, cliExecute,
    equip, equippedItem,
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

function handle_apriling(use_sax = true): void {
    cliExecute("aprilband effect nc");
    cliExecute("aprilband item tuba");
    if(use_sax)
        cliExecute("aprilband item saxophone");
    else
        cliExecute("aprilband item piccolo");
    return;
}

function get_catalog_items(): void {
    buy(toCoinmaster("Mr. Store 2002"), 1, toItem('"I survived Y2K" T-Shirt'));
    buy(toCoinmaster("Mr. Store 2002"), 1, toItem("Flash Liquidizer Ultra Dousing Accessory"));
    buy(toCoinmaster("Mr. Store 2002"), 1, toItem("pro skateboard"));
    return;
}

function kick_off_pvp(){
    visitUrl("peevpee.php?action=smashstone&pwd&confirm=on", true);
    visitUrl("peevpee.php?place=fight");
    use(toItem("Cursed Microwave"));
    use(toItem("cursed pony keg"));
    return;
}

function send_autumnaton():void {
    // First two excursions are 11 so need low underground by send 2
    // Mid indoor is haunted library which would also work
    // Therefore want to not send to noob cave first
    // Options haunted pantry:   1 Ale, +1 item
    //         Sleazy backalley: autumn leaf, +2 stat gain/turn
    // Not worrying about stats would point to pantry!
    //
    AutumnAton.sendTo(toLocation("haunted pantry"))
}

function mayday_package(use_pack=false): void {
    // Usually not since no need, but consider for optimal prof turns
    if(use_pack)
        use(toItem("MayDay™ supply package"))
    return
}

function lyle(visit=false, with_cc=false ): void {
    // Usually not since no need, but consider for optimal prof turns
    const old_weapon = equippedItem(toSlot("weapon"));
    if ( with_cc )
        equip(toItem("Candy cane sword cane"));
    if( visit )
        visitUrl("place.php?whichplace=monorail&action=monorail_lyle");
    equip(old_weapon);
    return;
}


export function prep_items(): void {
    get_muffin(toItem("Blueberry Muffin"));
    send_autumnaton();
    start_SIT_course();
    handle_apriling(false);
    mayday_package(true);
    lyle(true, true);
    get_catalog_items();
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
    useFamiliar(toFamiliar("Grey Goose"));
    equip(toItem("tiny stillsuit"));
    return;
}


