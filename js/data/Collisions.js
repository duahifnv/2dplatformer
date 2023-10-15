const groundCollisions = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 1450, 1450, 1450, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 1450, 1450, 0, 0, 0, 1450, 0, 0, 1450, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 0, 0, 0, 0, 1450, 1450, 0, 0, 0, 0, 0,
    0, 0, 0, 1450, 0, 0, 1450, 1450, 1450, 0, 0, 0, 0, 0, 1450, 1450, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 0, 0, 0, 0, 0, 0, 0, 1450, 0, 0, 0, 0,
    0, 0, 1450, 0, 0, 0, 0, 0, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 0, 0, 0, 0, 0, 0, 0, 1450, 0, 0, 0, 0,
    0, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 1450, 0, 0, 0, 0, 1450, 1450, 0, 0, 0, 1450, 1450, 1450, 0, 0, 1450, 0, 0, 0, 0,
    1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 1450, 1450, 1450, 0, 0, 0, 0, 0, 0, 0, 1450, 0, 0, 0, 1450, 0, 0, 0,
    1450, 0, 0, 1450, 1450, 0, 0, 0, 0, 0, 0, 1450, 1450, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 1450, 0, 0,
    1450, 0, 0, 1450, 0, 0, 0, 1450, 1450, 1450, 1450, 0, 0, 0, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 0,
    1450, 0, 1450, 1450, 0, 0, 1450, 1450, 1450, 0, 0, 1450, 1450, 1450, 0, 1450, 1450, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 1450, 1450, 1450, 0, 0, 0, 0, 0, 0, 0, 1450,
    1450, 0, 1450, 0, 0, 0, 1450, 0, 0, 0, 0, 0, 0, 0, 1450, 0, 0, 0, 1450, 0, 0, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 0, 0, 1450, 1450, 0, 0, 0, 0, 0, 0, 1450,
    1450, 0, 0, 0, 0, 1450, 0, 1450, 0, 0, 0, 0, 0, 0, 0, 1450, 0, 0, 0, 1450, 1450, 0, 1450, 1450, 1450, 1450, 0, 0, 0, 0, 0, 0, 1450, 1450, 0, 0, 0, 0, 0, 1450,
    0, 0, 0, 0, 1450, 0, 1450, 0, 0, 1450, 1450, 1450, 1450, 0, 0, 1450, 0, 0, 0, 0, 0, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 0, 1450, 0, 0, 0, 0, 1450,
    0, 0, 0, 0, 1450, 0, 1450, 0, 0, 1450, 0, 0, 1450, 0, 0, 1450, 0, 0, 0, 0, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 1450, 0, 0, 0, 0, 1450,
    0, 1450, 1450, 1450, 0, 0, 1450, 0, 0, 0, 0, 0, 1450, 0, 0, 1450, 0, 0, 0, 0, 1450, 0, 0, 0, 0, 0, 0, 1450, 0, 0, 0, 0, 0, 1450, 0, 1450, 0, 0, 0, 1450,
    1450, 1450, 0, 1450, 0, 0, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 0, 0, 1450, 0, 0, 0, 0, 0, 1450, 1450, 1450, 0, 0, 0, 0, 0, 1450, 0, 1450, 0, 0, 0, 1450,
    1450, 0, 0, 0, 1450, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 0, 0, 1450, 0, 0, 0, 0, 1450, 1450, 0, 0, 0, 0, 0, 0, 1450, 0, 1450, 0, 0, 0, 1450, 0,
    1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 1450, 0, 0, 0, 0, 0, 1450, 1450, 0, 0, 0, 0, 1450, 0, 0, 0, 0, 0, 0, 1450, 1450, 0, 1450, 1450, 0, 0, 0, 1450, 0,
    1450, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 0, 0, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 1450, 0, 0, 0, 0, 0, 1450, 0, 1450, 1450, 0, 0, 0, 0, 0, 1450, 0,
    1450, 1450, 0, 0, 0, 0, 0, 0, 0, 1450, 0, 0, 1450, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 0, 0, 0, 0, 1450, 1450, 1450, 1450, 0, 0, 0, 0, 0, 0, 1450, 1450, 0,
    0, 1450, 0, 0, 0, 0, 0, 0, 1450, 1450, 0, 0, 0, 1450, 1450, 0, 0, 0, 0, 0, 0, 1450, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 1450, 0, 0,
    0, 1450, 1450, 0, 0, 1450, 1450, 1450, 1450, 0, 0, 0, 0, 0, 1450, 1450, 1450, 1450, 1450, 0, 0, 1450, 0, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 1450, 1450, 1450, 0, 0, 0,
    0, 0, 1450, 1450, 1450, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 1450, 1450, 1450, 0, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 0, 0, 0, 0, 0, 0, 0
]
