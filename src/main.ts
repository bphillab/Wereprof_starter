import {equip_items, prep_items} from "./break_chores"
import {get_meat} from "./meat_gen"
import {spend_research} from "./skill_path"
import {get_stuff} from "./stuff_gen"


export function main(): void {
  // Thoughts: 1) Should we put in checks to make re-entrant?
  //           2) Should we put in a final check?
  //           3) Spend turns if final check passes?
  //           4) Should we spend early wolf turns?
  //           5) Should we automate/suggest pathing?
  get_meat();
  get_stuff();
  equip_items();
  prep_items();
  spend_research();
}
