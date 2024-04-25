import {cliExecute} from "kolmafia";

function map_research_goal(goal:string): string[]{
    const parent_nodes: { [key: string]: string } = {
        "mus":"", "rend":"mus", "hp":"mus", "skin":"hp", "stomach":"hp",
        "myst":"", "bite":"myst", "res":"myst","items":"res","ml":"res",
        "mox":"", "kick":"mox","init":"mox","meat":"init", "liver":"init"
    }
    const caps: { [key: string]: string } = {
        "slaughter": "rend", "skinheal": "skin", "feed": "stomach",
        "howl":"bite", "hunt":"items", "feasting":"ml",
        "punt":"kick", "perfecthair":"meat", "pureblood":"liver"
    }
    const numlevels = 3
    const big_path:string[] = []
    if (goal in caps) {
        big_path.unshift(goal)
        for (let i = 0; i < numlevels; i++)
            big_path.unshift(caps[goal].concat((numlevels-i).toString()))

    }
    else {
        big_path.unshift(goal)
        for (let i= parseInt(goal.slice(-1))-1; i >= 1; i--)
            big_path.unshift(goal.slice(0,-1).concat(i.toString()));
    }
    while (big_path[0].slice(0,-1) !== ""){
        const new_node = parent_nodes[big_path[0].slice(0, -1)]
        for (let i = 0; i < numlevels; i++)
            big_path.unshift(new_node.concat((numlevels-i).toString()))

    }

    return big_path.slice(3)
}

export function spend_research(): void{
    // Go for stomach/liver for early food. Need plain calzone + dieting pill Legend = 6
    //                               drink.
    //10, 20, 30, 20, 30, 40, 40, 50, 60 -> 300 x 2 = 600
    let goals = ['stomach3', 'liver3']
    // Go for experience [mys -> ML; mox -> init, meat -> flat exp]
    // 10,20,30,20,30,40,40,50,60 -> 300
    // 40,50,60 -> 90 + 150 = 150 + 300 = 450
    goals = goals.concat(['ml3', 'skin3'])
    // Go for survivability [get kick, rend (upgrade?), Damage Res]
    //20 + 30 -> 50 x 2 = 100
    goals = goals.concat(['kick2', 'claw2'])
    // 600 + 450 + 100 = 1150
    // Consider whether buffing item/meat drop is worth the difficulty?
    for (const i of goals ){
        for (const j of map_research_goal(i)) {
            cliExecute("wereprofessor research ".concat(j));
        }
    }
    return
}
