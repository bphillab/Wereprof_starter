import {autosell, itemAmount, takeStorage, toItem} from "kolmafia";

export function autosell_for_meat(): void {
    const pull_to_sell = ["Facsimile Dictionary"];
    const items_to_sell = ["Facsimile Dictionary", "Baconstone", "Hamethyst"];
    for(const it of pull_to_sell)
        takeStorage(1, toItem(it));
    for(const it of items_to_sell){
        const its = toItem(it);
        const nbr = itemAmount(its);
        autosell(nbr, its);
    }
    return;
}

export function get_meat(): void {
    autosell_for_meat();
    return;
}
