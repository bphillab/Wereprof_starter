import {buy, hermit, Skill, takeStorage, toItem, toSkill, use, visitUrl} from "kolmafia";

function get_general_store(): void {
    const area_unlockers = ["Desert bus Pass", "Hermit Permit"];
    const cooking_needs = ["Dramatic Range", "Queue Du Coq cocktailcrafting kit"]
    for(const i of area_unlockers)
        buy(toItem(i));
    for(const i of cooking_needs) {
        buy(toItem(i));
        use(1, toItem(i));
    }
}

function buy_desert_skill(sk: Skill): void {
    switch (sk)
    {
        case toSkill("Powers of Observatiogn"): {
        visitUrl("gnomes.php?action=trainskill&whichskill=10");
        break;
        }

        case toSkill("Gnefarious Pickpocketing"): {
            visitUrl("gnomes.php?action=trainskill&whichskill=11");
            break;
        }

        case toSkill("Torso Awareness"): {
            visitUrl("gnomes.php?action=trainskill&whichskill=12");
            break;
        }

        case toSkill("Gnomish Hardigness "): {
            visitUrl("gnomes.php?action=trainskill&whichskill=13");
            break;
        }

        case toSkill("Cosmic Ugnderstanding"): {
            visitUrl("gnomes.php?action=trainskill&whichskill=14");
            break;
        }

        default: {
            console.log("Unrecognized skills");
            break;
        }
    }

    return;
}

function get_desert_items(): void {
    const skills_to_buy = ["Torso Awareness", "Powers of Observatiogn"];
    const items_to_buy: string[] = ["vial of Gnomochloric acid"];
    for (const sk of skills_to_buy){
        buy_desert_skill(toSkill(sk));
    }
    for (const it of items_to_buy){
        buy(toItem(it));
    }
    return;
}

function pull_items(): void {
    //Foods Needed for first wolf
    const things_to_pull = ["Roasted Vegetable Focaccia", "plain calzone"];
    //Handle leveling fams
    things_to_pull.push("grey down vest")
    things_to_pull.push("teacher's pen")
    //Needed for Chasm
    things_to_pull.push("Smut Orc Keepsake Box")
    things_to_pull.push("Rusty Hedge Trimmers")
    // Lvl 11
    things_to_pull.push("blackberry galoshes")
    things_to_pull.push("bowling ball")
    //Hidden City
    things_to_pull.push("Spooky-Gro fertilizer")
    things_to_pull.push("Muculent Machete")
    things_to_pull.push("book of matches")
    //Palindome
    things_to_pull.push("wet stew")
    //Lvl 12
    things_to_pull.push("Shore Inc. Ship Trip Scrip")

    for (const i of things_to_pull) {
        takeStorage(1, toItem(i));
    }
    return;
}

function get_clovers(): void{
    hermit(3, toItem("11-leaf clover"));
    return;
}

export function get_stuff(): void {
    get_general_store();
    get_desert_items();
    pull_items();
    get_clovers();
    return;
}
