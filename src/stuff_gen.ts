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
    const food_to_pull = ["Calzone of Legend", "plain calzone"];
    const spleen_to_pull = ["dieting pill"];
    const other_to_pull = ["spice melange", "moss mantle"];
    const all_to_pull = [... food_to_pull, ...spleen_to_pull, ...other_to_pull]
    for (const i in all_to_pull) {
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
