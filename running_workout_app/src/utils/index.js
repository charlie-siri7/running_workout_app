const standard_warmup = [
    { name: "Side leg swing", leg: "left", sets: 10 },
    { name: "Side leg swing", leg: "right", sets: 10 },
    { name: "Front leg swing", leg: "left", sets: 10 },
    { name: "Front leg swing", leg: "right", sets: 10 }
]
const standard_cooldown = [
    { name: "Hamstring stretch", leg: "left", seconds: 20 },
    { name: "Hamstring stretch", leg: "right", seconds: 20 },
    { name: "Butterfly stretch", seconds: 20 },
    { name: "Glute stretch", leg: "left", seconds: 20 },
    { name: "Glute stretch", leg: "right", seconds: 20 },
    { name: "Hip flexor stretch", leg: "left", seconds: 20 },
    { name: "Hip flexor stretch", leg: "right", seconds: 20 },
    { name: "Calf stretch", leg: "left", seconds: 20 },
    { name: "Calf stretch", leg: "right", seconds: 20 },
    { name: "Quad stretch", leg: "left", seconds: 20 },
    { name: "Quad stretch", leg: "right", seconds: 20 }
]

function workout_warmup(distance) {
    return [
        { name: "Side leg swing", leg: "left", sets: 10 },
        { name: "Side leg swing", leg: "right", sets: 10 },
        { name: "Front leg swing", leg: "left", sets: 10 },
        { name: "Front leg swing", leg: "right", sets: 10 },
        { name: "Heel walk", sets: 20 },
        { name: "Easy run", miles: distance },
        { name: "Lunge", leg: "left", sets: 10 },
        { name: "Lunge", leg: "right", sets: 10 },
        { name: "Side lunge", leg: "left", sets: 10 },
        { name: "Side lunge", leg: "right", sets: 10 },
        { name: "Walking calf stretch", leg: "left", sets: 10 },
        { name: "Walking calf stretch", leg: "right", sets: 10 },
        { name: "Walking quad stretch", leg: "left", sets: 10 },
        { name: "Walking quad stretch", leg: "right", sets: 10 },
        { name: "Walking hamstring sweep", leg: "left", sets: 10 },
        { name: "Walking hamstring sweep", leg: "right", sets: 10 }
    ]
}

function workout_cooldown(distance) {
    return [
        { name: "Easy run", miles: distance },
        { name: "Hamstring stretch", leg: "left", seconds: 20 },
        { name: "Hamstring stretch", leg: "right", seconds: 20 },
        { name: "Butterfly stretch", seconds: 20 },
        { name: "Glute stretch", leg: "left", seconds: 20 },
        { name: "Glute stretch", leg: "right", seconds: 20 },
        { name: "Hip flexor stretch", leg: "left", seconds: 20 },
        { name: "Hip flexor stretch", leg: "right", seconds: 20 },
        { name: "Calf stretch", leg: "left", seconds: 20 },
        { name: "Calf stretch", leg: "right", seconds: 20 },
        { name: "Quad stretch", leg: "left", seconds: 20 },
        { name: "Quad stretch", leg: "right", seconds: 20 }
    ]
}

function run(type, distance) {
    return {
        warmup: standard_warmup,
        run: [
            { name: type, miles: distance }
        ],
        cooldown: standard_cooldown
    }
}

function workout(type, distance, count) {
    return {
        warmup: workout_warmup(2),
        run: [
            { name: type, miles: distance, reps: count }
        ],
        cooldown: workout_cooldown(1)
    }
}

function tempo(type, duration) {
    return {
        warmup: workout_warmup(2),
        run: [
            { name: type, time: duration }
        ],
        cooldown: workout_cooldown(1)
    }
}

export const runningProgram = {
    0: run("Easy run", 3),
    1: run("Easy run", 4),
    2: run("Easy run", 5),
    3: run("Easy run", 6),
    4: run("Easy run", 7),
    5: run("Easy run", 8),
    6: run("Race pace run", 3),
    7: run("Race pace run", 4),
    8: run("Race pace run", 5),
    9: run("Race pace run", 6),
    10: run("Race pace run", 7),
    11: run("Race pace run", 8),
    12: run("Long run", 9),
    13: run("Long run", 10),
    14: run("Long run", 11),
    15: run("Long run", 12),
    16: run("Long run", 13),
    17: run("Long run", 14),
    18: run("Long run", 15),
    19: run("Long run", 16),
    20: run("Long run", 17),
    21: run("Long run", 18),
    22: workout("800 repeats", 0.5, 4),
    23: workout("800 repeats", 0.5, 5),
    24: workout("800 repeats", 0.5, 6),
    25: workout("800 repeats", 0.5, 7),
    26: workout("800 repeats", 0.5, 8),
    27: workout("Hill repeats", 0.25, 3),
    28: workout("Hill repeats", 0.25, 4),
    29: workout("Hill repeats", 0.25, 5),
    30: workout("Hill repeats", 0.25, 6),
    31: workout("Hill repeats", 0.25, 7),
    32: tempo("Tempo run", 30),
    33: tempo("Tempo run", 30),
    34: tempo("Tempo run", 30),
    35: tempo("Tempo run", 30),
    36: tempo("Tempo run", 30)
}