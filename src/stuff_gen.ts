import {buy, takeStorage, toItem, toSkill, use} from "kolmafia";

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

function buy_desert_skill(sk:string): void {
    skill_to_buy = toSkill(sk);
    //buy(skill_to_buy);
    return;
}

function get_desert_items(): void {
    const skills_to_buy = ["torso awareness", "Powers of Observatiogn"];
    //const items_to_buy = [];
    for (const sk of skills_to_buy) {
        buy_desert_skill(sk);
    }
    /*
    for (it of items_to_buy){
        buy(toItem(it));
    }
    */
    return
}

function pull_items(): void {
    const food_to_pull = ["Calzone of Legend", "plain calzone", "dieting pill"];
    for (const i in food_to_pull){
        takeStorage(1, toItem(i));
    }
}

function get_clovers(): void{
    // get clover from hermit
}

export function get_stuff(): void {
    get_general_store();
    get_desert_items();
    pull_items();
    get_clovers();
    return;
}
