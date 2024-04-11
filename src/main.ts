import {equip_items, prep_items} from "./break_chores"
import {get_meat} from "./meat_gen"
import {spend_research} from "./skill_path"
import {get_stuff} from "./stuff_gen"


export function main(): void {
  get_meat();
  get_stuff();
  equip_items();
  prep_items();
  spend_research();
}
