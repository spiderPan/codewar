var spiralize = function(size) {
    var path = []
      , pointer = [0, 0]
      , direction = 'right'
      , result = [];

    for (var i = 0; i < size; i++) {
        var row = []
        for (var j = 0; j < size; j++) {
            row.push(0);
        }
        result.push(row);
    }

    result = findPath(pointer, direction, result);

    return result;
}
var directions = ['up', 'left', 'right', 'down'];

function findPath(pointer, direction, result) {

    do {
        var x = pointer[0]
          , y = pointer[1]
          , nextPoint = movePointer(pointer, direction);

        result[x][y] = 1;

        if (!isWithinRule(nextPoint, result)) {
            var newdirections = directions.filter(function(dir) {
                var newPointer = movePointer(pointer, dir);
                return isWithinRule(newPointer, result);
            });

            if (newdirections.length == 1) {
                direction = newdirections[0];
                pointer = movePointer(pointer, direction);
            }

        } else {
            pointer = nextPoint;
        }

    } while (isWithinRule(pointer, result));return result;

}

function isWithinRule(pointer, result) {
    var x = pointer[0]
      , y = pointer[1]
      , count = 0;

    for (var i = x - 1; i <= x + 1; i++) {
        if (typeof result[i] == 'undefined') {
            continue;
        }

        for (var j = y - 1; j <= y + 1; j++) {
            if (typeof result[i][j] == 'undefined') {
                continue;
            }
            count += result[i][j];
        }
    }

    return typeof result[x] != 'undefined' && result[x][y] === 0 && count < 3;

}

function movePointer(startPoint, direction) {
    var x = startPoint[0]
      , y = startPoint[1];

    switch (direction) {
    case 'left':
        y--;
        break;

    case 'right':
        y++;
        break;

    case 'up':
        x--;
        break;

    case 'down':
        x++;
        break;
    }

    return [x, y];

}
