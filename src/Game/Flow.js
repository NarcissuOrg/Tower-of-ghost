


const fightFlow = function* () {
    

}

const gameFlow = function* () {
    let game = yield 'Start';

    let CardInit = yield 'CardInit';
    let random = 0;
    while (true) {
        random = yield 'RandomEvent';

        if (random > 60) {
            let boss = yield 'Fight';
            if (boss) {
                yield 'BossFight';
                return 'GameEnd';
            }
            else {
                yield 'NormalFight';
            }

        }
        else { random -= 15; }
        if (random > 15) {
            yield 'Box';


        }
        else { random -= 15; }
        if (random > 15) {
            yield 'Trader';


        }
        else { random -= 10; }
        if (random > 10) {
            yield 'Sleep';


        }

    }

}