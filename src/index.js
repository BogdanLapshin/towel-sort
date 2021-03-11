// You should implement your task here.

module.exports = function towelSort(matrix) {
    try {
        let new_arr = [];
        for (let i = 0; i < matrix.length; i++) {

            if (i % 2 == 0) {
                for (let x = 0; x < matrix[i].length; x++) {
                    new_arr.push(matrix[i][x]);

                }

            } else {
                matrix[i] = matrix[i].reverse();
                for (let x = 0; x < matrix[i].length; x++) {
                    new_arr.push(matrix[i][x]);
                }
            }

        }

        return new_arr;
    } catch (TypeError) {
        return [];
    }
}