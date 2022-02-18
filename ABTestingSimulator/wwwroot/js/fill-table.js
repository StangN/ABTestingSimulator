var dates = []
var items1 = []
var items2 = []
var totalImpact = 1;
var totalProfitA = 0;
var totalProfitB = 0;
var daysPassed = 0;
var repeatsCount = 100;
var urlString;
var requestFinished = false;
var impactArrays = [[-12, 10, 2, -7, -19, 5, 14, 5, 12, -19, 14, 2, 17, 15, -7, -10, -12, 1, -11, 11, 16, 9, 8, -3, 14, -6, 16, -8, -1, -12, -1], [-14, 2, -3, 12, -17, 7, -9, 4, 8, 0, -14, 9, 11, 4, -11, 7, -18, -5, 10, -19, 14, -9, 19, -16, -1, 12, -11, -12, -10, 15, 16], [11, 18, 1, 6, -15, -8, -14, -2, 2, 3, -11, -7, 19, -19, -16, -15, 15, -3, 9, 2, -11, -10, 15, 13, -12, 18, 14, -11, -1, -3, -12], [2, -14, -20, 4, -11, 13, 14, 0, -5, -11, 0, -2, -14, -10, 17, -6, 7, -3, -16, 7, -19, 14, -5, -20, 16, -18, -14, 15, -10, 17, 5], [-15, 16, -5, -1, 3, 12, -10, 1, 2, 13, -6, 17, 13, -18, -18, 3, -12, 6, 13, 4, -8, 0, 0, -16, -19, -7, 8, -15, -17, 5, -4], [-9, -5, -17, -2, -13, 15, -16, 15, 3, 15, 4, -18, -6, -19, -13, -1, 0, -10, 8, -17, 14, 16, 7, 4, -5, -7, -15, 14, 9, 5, 3], [-12, 4, -16, -2, 0, 4, -1, -15, -8, 7, -9, 13, -19, 18, 2, -14, -7, -5, -19, 17, 9, 4, -16, -4, -5, -19, -8, 3, -19, 16, 0], [-20, -16, -8, -20, 13, 2, 12, 7, -7, -16, 19, -5, 10, -2, 9, 10, 10, 17, 4, -1, 14, -18, 5, 3, -8, 19, -4, 0, 1, -7, -18], [5, -20, -14, -15, 2, 3, 2, 1, 12, -8, 15, -19, -4, -17, -18, 14, 8, 17, -4, 2, -3, 6, -12, 3, -1, -10, 15, 3, -11, 3, 8], [-4, -5, 1, 5, 18, 2, 11, -3, 13, -16, -2, -19, 13, 10, -5, 15, 14, 18, -20, -17, 5, 7, 15, -14, 19, 16, 0, 17, -7, -7, -2], [-17, 14, -20, -2, 15, -4, -9, -6, 18, -2, 11, 5, 7, 13, 4, 4, -20, 14, -8, -20, 8, 12, -3, -12, 0, -10, -18, 17, 10, -1, 14], [-18, 0, 1, -5, 1, 14, -13, -16, -1, 7, -11, 3, -2, 3, 16, 5, 3, 10, 1, -13, -20, 10, -14, 7, 5, -1, -12, -3, -2, -11, -17], [-10, -5, 13, -19, 4, 14, -7, -3, -16, -7, 15, -9, 12, -2, -15, 0, 18, 16, 6, 7, 19, 11, 4, -4, -13, -8, 7, -4, 1, 16, -7], [11, -11, -17, 19, 18, 2, 14, 3, -11, 4, 3, -10, 13, 7, 3, 17, -17, -2, 16, -8, -19, -12, 11, 8, 19, -16, 7, 17, 3, -11, -12], [-7, -16, 12, 12, 8, -7, 18, 9, 15, 14, -15, 4, 0, -7, 4, 2, 3, 3, -19, -9, -1, -12, 16, -17, 14, 15, -5, -9, 11, -13, -18], [-12, -6, 4, 3, 13, 1, 6, -16, 16, -15, 19, -7, -6, 1, -7, -18, 1, -17, 11, 0, -4, -13, 17, 4, -10, 10, -17, -17, 6, -2, 11], [8, 18, -9, 2, -8, 19, -9, -16, 18, -15, 8, -6, 16, 5, 2, 7, -8, 18, -11, 19, 9, 0, 19, -8, -9, 18, 16, 14, 1, 0, 15], [6, -8, -9, 15, 2, 13, 13, -19, 3, 7, -16, 15, -15, 14, -16, 6, 11, -18, 11, -7, -7, 17, -2, 6, -16, 8, 15, 10, -15, 14, -7], [-2, 12, -5, 11, -7, -10, -19, 19, 0, -20, 0, 13, -6, -4, -9, 19, 3, -16, -16, 14, -13, -20, 9, 13, -10, 19, -12, -3, -19, 17, 12], [4, -18, -8, 15, 1, 8, 18, 9, 13, 16, 12, -1, -8, -17, -3, 15, 18, 3, 10, 1, 14, -8, -7, 14, -7, -18, 13, 8, 15, -4, -5], [10, -14, 18, 12, -10, -2, -12, -15, -8, -11, -4, -12, 11, 6, 8, 5, -20, -2, 13, -4, -20, -11, -14, 7, 9, 10, 10, -9, 2, 2, 11], [0, 9, -4, -17, -4, 2, 0, 10, -11, -9, -11, 8, -13, -9, 2, -8, 12, -20, -2, 2, 9, -20, 13, 7, 8, -11, -4, 18, 10, 12, 12], [14, 12, -12, 2, -18, 6, -15, -2, 14, -14, 14, -1, 19, -20, 17, 12, 1, -10, -17, -4, 6, -20, 14, -19, 19, 12, -5, 4, -16, -2, 14], [-19, -20, -5, -6, 8, -19, 6, 18, -19, 7, 16, 10, 4, 15, 19, 2, 13, -1, -6, 5, 5, 6, 18, -10, 4, 9, -18, 8, 3, 18, -17], [-16, -10, -11, -20, 11, -10, 8, 2, -14, 11, 9, 15, 8, 4, -2, -11, 11, -7, -9, 8, 10, -1, -7, 15, -3, -16, 2, -13, -4, 10, -3], [-10, 17, -6, -19, 6, 0, -12, -1, -12, 15, 14, 16, 11, 6, -12, 7, 14, 6, 10, 0, 15, 10, 1, 19, -19, 11, 4, 0, 7, -14, -5], [-20, 6, 13, -13, -12, -16, 1, 7, 13, -12, 15, 9, 9, -11, 10, -9, -1, -8, 9, 0, -15, -7, 1, -17, -12, -15, 4, -14, 16, -2, 5], [-10, -17, -8, 14, -17, -18, 4, -4, 4, -12, 2, 15, 11, -8, 7, -8, 16, 7, -3, -9, -1, -13, -6, 18, -2, 17, 11, -3, 5, 13, -8], [-3, 0, -19, 11, -14, 16, 3, 5, 0, -4, 17, 12, 4, 16, 12, 18, 18, 15, -17, 4, -17, 12, -5, -17, -10, 8, -7, 4, 16, 0, 8], [-7, -9, 0, 12, -1, 19, -16, 5, -10, 19, -20, 10, -5, 2, 10, 15, -12, 8, 0, 7, 17, -11, 5, 1, 16, 6, 0, 1, 4, -4, 6], [11, 15, -16, 4, -2, -8, 11, 2, -5, -15, -9, 15, 17, -4, -11, -7, 14, -7, -18, -2, -19, 10, 3, 7, -17, 9, 2, 0, 8, 11, -17], [11, 6, -16, 17, 13, 14, 13, 14, 12, 18, 2, -9, 8, -4, 6, -17, -6, -7, -6, 17, -6, 5, 17, -15, -7, -13, 0, 4, 1, 15, -9], [-1, -12, -15, 14, -19, -14, 18, 12, 9, -3, -8, -1, 1, -17, 14, -15, -14, 10, -19, -10, 9, 16, 9, 8, -2, 3, 3, 9, -12, -5, 10], [-9, -18, 18, 13, 17, 3, -4, -4, -9, 17, -19, 8, 8, -16, -5, -8, -16, -16, -19, 0, 1, -20, -8, 5, -17, -20, 12, 18, -17, 8, -5], [-12, -7, -14, 8, 19, 18, 16, -11, -18, 0, -18, 4, -19, 4, -7, 15, 5, 1, -10, -1, 15, -18, -6, 14, -17, 0, 10, 5, -14, -12, -19], [-20, -6, 5, 4, 11, -2, -7, 16, 10, 4, -13, -14, 0, -12, -16, -6, 8, -3, 13, -19, 0, 5, -2, -1, -4, -10, 0, -4, -1, 12, -8], [19, -14, 8, -12, -7, -3, 12, 15, 8, 17, -14, 4, -1, -7, -17, 2, -6, -3, -10, 10, 15, -14, 6, 14, 16, -9, 12, 8, -15, 11, -20], [-9, 2, 2, 12, -2, -18, 7, -15, 5, -8, 11, 3, 14, -18, 1, -16, 11, -14, 1, -4, 1, -11, 1, 15, 3, 12, -18, 2, -6, -19, -8], [4, -17, -11, 8, -6, -17, 19, 3, -17, -12, 7, 11, 3, -20, 6, -14, -18, -14, -1, 14, -2, 10, -1, -10, 1, 6, 18, 15, 18, 13, 4], [15, -19, 5, -8, -11, -12, 16, -3, -18, 2, -11, 8, -19, 19, 12, -14, -18, -12, -9, 10, -19, -11, 16, 3, 5, 16, -18, 15, 2, 19, -10], [17, 3, 7, -2, 2, -9, -13, 6, -3, -12, -15, 19, -3, -11, 2, -14, -15, 4, -20, -16, 13, -14, -16, -5, 7, -6, 5, -13, 8, 17, 1], [-19, -12, -20, 14, -3, 3, 17, -4, -5, 1, -19, -5, -15, -12, -5, 6, -18, 8, -9, -4, 12, 13, 4, 6, 11, -12, 14, -11, -10, 14, -8], [-5, 12, 18, -6, -6, 1, -6, -9, 5, 0, 3, 19, -16, -12, -3, 14, 4, 16, -19, 4, 2, -8, 0, 8, 3, 9, -20, 17, -9, -1, -12], [-9, 8, 1, 6, -12, 3, -3, 5, -6, 19, 1, 4, -5, 9, 9, -16, -12, -15, 16, 4, -20, 14, -11, -17, -12, 2, 16, 2, -17, 19, -16], [1, -9, 18, -3, 2, -17, -17, 12, 9, -1, 8, -9, -7, -7, -4, 13, -16, 15, 2, -6, 16, 4, -15, -9, 16, 0, 14, 6, 4, -16, 16], [7, -18, -9, 19, -14, 13, -8, -10, 7, 0, 7, 4, 16, 18, -15, 0, -1, -2, 14, -10, -13, 0, -10, 1, -9, 12, -16, -16, 14, 5, 5], [13, -2, -18, -17, -7, -16, -4, 11, -3, 11, 16, -6, -14, 4, -16, 5, 7, 12, 10, 16, -10, 7, 0, 11, 8, -19, 4, -20, -4, -11, 11], [-6, -10, -13, 11, 14, 6, 8, -17, 12, 10, 17, -2, 3, 19, -1, 10, -3, 7, 11, 14, -20, -8, 16, -6, 17, 2, -5, 8, 8, 13, 14], [-4, 8, 14, -3, 2, 11, 7, -5, 3, -19, -12, 11, 19, -4, 8, 7, 13, 15, 19, -3, -3, 1, -3, 5, 5, -9, -1, -10, 4, -10, -9], [-9, 17, -11, 4, -19, -19, -20, -13, -3, -5, -14, 10, 11, 19, -15, -4, -17, 5, -18, 12, -5, 18, 17, 0, -4, 16, -19, -13, 11, -15, 17], [17, 8, -9, 2, -2, -9, -9, 9, 12, 1, -5, -16, 12, -2, -20, -12, 11, -17, -13, -11, 1, -5, -17, -14, -4, 6, -20, 15, -11, 5, -1], [-6, 4, 14, 5, 11, -15, 6, 19, -16, 3, 16, -13, -6, -14, 15, 4, -15, 11, 19, 6, -15, -4, -15, 19, 18, -7, -8, 6, 10, 16, 14], [6, 7, 19, -18, 13, 2, 5, -16, 14, -18, -3, -6, 10, 16, -14, 1, 10, -20, 7, 12, 4, -17, 16, -12, 11, 1, 14, -1, 4, -15, -2], [0, 12, -20, 8, 8, -20, 19, 13, 3, -9, -8, 18, 6, 2, -15, -11, -3, -8, 4, -6, -4, 6, -12, 4, -17, -11, -2, -6, -6, 13, 17], [5, 2, -14, -16, -13, 9, -13, -16, -14, 18, -10, -8, -4, -1, 14, -8, -2, -7, -9, -20, 19, 16, -11, 9, 15, 6, 5, -18, -13, 1, 16], [-4, -13, -9, -16, -4, 11, 11, -10, 0, 7, 1, -9, -7, -16, -17, -17, -11, 12, -7, 3, 12, -12, 4, -20, 6, -12, 0, -16, 1, 12, 6], [-18, -16, -1, -15, 1, -6, 18, 9, 2, -9, 9, -18, -11, -16, 13, -8, -17, 18, 8, 12, 12, -20, -3, 15, -1, 17, 15, 4, -8, 6, -3], [-6, -1, -12, -9, -10, -20, -17, -7, -17, 14, -20, -20, 4, 18, 11, -3, 10, 6, 8, 7, -10, 16, 6, -6, -18, -4, -15, 19, 16, 2, 15], [17, -11, -3, 19, -11, -3, -14, -9, -1, 6, 8, 9, 3, 19, 16, 13, -1, 14, -6, -14, 4, 18, -3, -17, -6, -17, -2, 17, 7, -8, 0], [11, 13, -9, 2, -10, 18, 12, 12, -16, -4, -1, -17, -17, 7, 19, 12, 13, 8, 2, 8, 18, 2, -19, -6, 18, -14, 2, 8, -14, 10, 2], [7, 14, -8, -18, 9, 12, -10, 4, 2, 1, -10, 17, -13, 4, -2, -19, -20, 6, 17, -14, 10, -17, 7, -18, 16, 6, -12, 12, -20, -14, -8], [-15, -8, 1, -19, 15, -10, 17, -8, 2, 4, -5, -9, -6, 6, 8, 9, -8, -8, -5, 19, -1, 3, -6, 5, -8, -9, -7, 3, -15, 5, 8], [1, 6, 14, 18, -20, 12, 10, 18, -10, -16, -12, -18, -17, 11, -7, -6, 10, 11, -16, -13, 11, -20, -9, -17, -15, -6, -2, 8, 16, -5, 13], [-12, -20, -4, 14, -10, 4, -6, -5, -17, 0, 6, 17, -19, 14, 1, -12, -4, -8, 16, 0, -6, 16, 16, -8, -7, 18, -13, -14, -14, 19, -10], [17, -2, -16, -8, -5, -9, 16, -16, -3, -17, -15, 3, -1, 17, -18, 5, 3, 17, 0, 18, 2, -4, 9, 4, 11, 4, 3, 12, 4, -20, 0], [-4, -14, -2, -14, 0, 14, 18, 12, -12, 18, 19, -12, -13, 18, 9, -6, 19, -3, -3, -10, 4, -20, -10, -10, 5, 19, -10, -2, -7, 18, 19], [-16, 10, -9, 1, -1, -16, -8, -20, 13, 10, -7, 10, 15, 12, -18, -2, -1, -15, -8, 8, -18, -5, -4, -9, -4, 4, -17, 1, -18, -14, -11], [6, 11, 4, -1, -17, -11, 7, 3, -3, 4, -13, 15, 11, 19, 12, 12, 0, 13, 16, 1, -2, 14, 4, 19, -10, 14, 6, 0, 4, 17, -10], [16, -12, -12, 17, 3, -17, 1, 19, -15, -2, -5, -13, -19, 18, -14, 12, 12, 2, 14, -10, -6, -1, 18, -19, 17, 14, 0, -7, 19, -4, 6], [3, -2, 15, 18, -13, -18, 0, 14, 18, -8, 16, 7, 0, 11, 8, 0, 14, 6, -17, 14, 6, -6, -12, 4, 8, 19, 14, -16, 19, 4, -13], [17, -15, -12, -7, 4, -7, 4, 0, -8, -5, 8, 5, 1, -12, 10, -3, 19, 10, 10, -1, -5, -15, 13, -12, -15, -14, 14, -5, -16, -4, 10], [6, 9, 9, -2, -5, 4, 18, -18, 2, -16, -3, 19, -20, 12, 2, 12, 2, -10, -20, 12, 14, -3, -8, -13, 17, -14, -19, -12, 4, 9, -5], [2, 11, 11, -19, -20, -4, 16, -15, -11, 15, 19, 9, -5, -4, -1, -10, -3, -3, -8, -7, 13, -18, 19, -17, -7, -15, 6, 17, -14, -13, -3], [-20, 6, 13, -17, 15, -8, -4, 14, 16, -6, -13, -3, -19, -16, 6, -18, -14, 4, 8, -15, 11, -8, -18, 9, -7, 8, -9, 10, 13, 9, 8], [-4, -6, -15, -17, -14, 3, -4, 8, 19, 14, -15, -17, -13, 17, 3, 9, 16, -10, -19, -7, 15, 5, -15, 3, -12, 5, 8, -5, -6, -9, 17], [-13, -18, 1, -10, 14, -2, 0, 19, 13, -5, 1, -7, 3, -18, 9, -6, 2, 15, 4, 5, -13, -14, 3, -20, 2, -18, -19, 11, 11, 19, 3], [-8, 10, 4, 4, -19, -19, -12, 9, -6, -16, 6, -14, 5, 5, 7, 4, -3, -3, -17, 6, -4, -16, -2, -7, -6, -2, -4, 4, -20, -7, -3], [-15, 16, 2, -18, -4, -7, -16, -15, -17, 7, 19, -10, -19, 0, 19, 17, 19, -19, 6, 10, 11, -3, 6, -11, 3, -11, 17, 16, 8, -11, -14], [0, -16, 18, 9, 5, -12, 5, 14, 7, -2, -8, 10, 1, 16, -13, -6, -18, 18, 16, 12, 4, -1, -6, -7, -19, -11, 13, 6, 10, -10, 6], [16, 17, 4, 14, 15, -2, 18, -11, -6, 19, 5, -7, 15, 10, 16, 8, 11, 14, 3, 12, -9, 11, -2, -20, 17, 15, -18, 8, 1, -17, -7], [-16, -3, -16, 7, -17, -17, 18, 10, -11, -9, 3, -15, 9, -14, -9, -13, -1, 1, 19, -11, 6, 14, 13, 9, -6, 12, -20, -10, 8, 2, 4], [0, -12, -17, -16, 12, -2, 0, 16, 9, -9, 13, 0, 2, -15, 5, -10, -13, 1, -6, -14, 9, -15, 0, 5, -10, 19, -13, -7, -5, 12, -11], [-20, -6, -1, 13, 8, 2, 1, -13, 9, -19, -4, 13, -17, 15, -11, -16, -20, -2, 0, -2, -1, 6, -16, -7, 2, 13, -18, -2, -15, 16, 15], [17, -3, -2, -17, -3, 19, 17, -19, 8, -16, -12, 13, 5, -16, 7, -9, -17, -18, -9, 18, -7, -13, -9, -19, 2, -9, 13, -15, 16, -8, -14], [-10, 11, 17, -3, -20, -1, -19, -1, -15, -9, 7, -4, 19, -13, -5, 10, 0, 4, 18, -16, 10, -20, -18, -19, 4, 0, -4, -7, -19, -10, -2], [-16, -20, -15, -12, -16, -1, -20, 11, 7, -1, -7, 3, 19, -7, 14, 11, -3, 19, -7, 14, -15, -6, 13, 15, 8, 16, -8, 7, -4, -18, -1], [-12, -19, 12, -14, 2, -9, -17, -8, 10, -7, -1, -1, 0, -11, -10, -16, 14, -5, -5, -17, 4, 17, 8, -14, 15, 19, -18, -13, -8, -10, -11], [-4, -9, -12, -16, -16, 1, 12, 16, 1, 9, -2, 8, 5, 12, -14, -6, 4, -6, 2, -2, 13, -4, 10, -8, 6, -6, -14, -2, -17, -10, 6], [5, -20, 2, 8, 8, 15, -5, 7, 19, 18, 2, -5, -15, 3, 10, -19, 9, -13, 19, 3, -15, -19, -11, -5, -2, 10, 8, 17, 3, 19, -20], [-15, -12, 3, -5, -1, 17, -12, 3, -10, 14, 16, -18, 12, -2, 10, -14, -5, -12, -5, 19, -3, 10, 12, 6, -19, -11, -1, -17, 16, 15, -12], [4, 4, 15, -1, 0, 12, 4, 13, -4, 11, 15, 3, -8, -13, -10, -7, 15, 12, 6, 5, 5, -9, -13, 6, -8, -3, -14, -7, 14, -6, -8], [-1, -13, 14, 8, -14, 5, 0, 14, 15, 8, 14, 2, -7, -18, 9, 0, -9, 0, -18, 5, -18, -16, -8, -18, 10, 17, 0, -12, -1, 15, 7], [8, 4, 4, -10, -20, -20, -7, 9, -14, -10, -18, -7, 3, -3, 1, -15, 2, 3, 12, 12, 16, 3, -8, 17, 1, 16, -15, -18, 3, 0, -16], [-13, 5, 6, 16, 5, -17, -13, 4, -1, 3, -5, -8, -1, -4, 12, -13, 19, -10, -10, -13, -20, 13, 15, 5, 19, 2, 10, 0, 8, -12, 17], [-2, -5, 14, 5, 0, -7, 14, 0, -7, 4, 1, -17, -6, -4, 9, -9, -18, -7, 18, 19, -8, 11, -13, -10, 13, 16, -2, 9, 12, -6, 9], [2, -8, 19, 17, -3, 6, -1, 15, -20, 12, 7, 17, 15, -7, -13, 9, -4, -20, -5, -13, -12, 6, 15, 1, 7, 13, -20, 17, -3, 1, 9], [-2, -20, 17, -16, 10, 19, -20, -7, 5, 2, 9, -13, 19, 7, -15, 16, 12, 12, 16, 15, 0, -1, 14, -18, 14, -13, 1, 6, 0, 18, -1], [-1, 5, -10, 12, -2, 18, 9, 7, -8, 18, -10, 8, -16, -20, -18, -16, -6, 13, -9, -16, 3, -7, 1, 4, -14, -19, -1, -13, 19, 0, -6], [-16, -14, -10, -16, 14, 19, -15, -13, 5, 3, -17, -4, 7, -17, 11, -12, -15, -4, 9, 12, -13, -14, -20, -6, -14, 16, -12, 18, -19, 18, -7], [1, 5, 5, -16, -1, -15, 11, 5, -9, -12, 9, 2, -16, -16, 19, -8, 0, -12, -11, -9, -9, -16, -11, -10, -16, 4, 2, 1, 5, 13, -13], [4, 19, -8, -15, 17, 18, -11, 2, -1, -19, 9, -15, 19, 19, 18, -14, -13, 9, -17, 8, 0, -3, 9, -12, 14, 9, 10, -8, -10, 6, -6]];
var responseFromOptimizer;
var percentOfUsersToPass = 0;
var targetCredebility = 0.95;
var allProfits = [];

$(function () {
    var alpha = 0.05;
    var beta = 0.80;
    var min_effect = 0.1;
    var conversion_rate = 0.5;
    var impact = 0.05;
    var usersPerDay = 900;
    
    $("input").keyup(function () {
        calculate();
    });
    function getSampleSize() {
        var p = conversion_rate > 0.50 ? (1.0 - conversion_rate) : conversion_rate;
        var delta = conversion_rate * min_effect;
        var t_alpha2 = ppnd(1.0 - alpha / 2);
        var t_beta = ppnd(beta);

        var sd1 = Math.sqrt(2 * p * (1.0 - p));
        var sd2 = Math.sqrt(p * (1.0 - p) + (p + delta) * (1.0 - p - delta));

        return Math.round((t_alpha2 * sd1 + t_beta * sd2) * (t_alpha2 * sd1 + t_beta * sd2) / (delta * delta));
    }

    function calculate() {
        var sampleSize = getSampleSize();
        if (jQuery.isNumeric(sampleSize) && document.getElementById("custom-user-amount").checked === false) {
            $('#result_count').val(sampleSize);
        } 
    }

    $('#minimal-detectable-effect').val(min_effect * 100);
    $('#baseline-conversion').val(conversion_rate * 100);
    $('#impact').val(impact * 100);
    $('#users-per-day').val(usersPerDay);
    $('#target-credebility').val(targetCredebility);
    $('#percent-to-pass').val(percentOfUsersToPass);
    calculate();

    $('#baseline-conversion, #minimal-detectable-effect, #impact, #users-per-day, #target-credibility, #percent-to-pass').keyup(function () {
        min_effect = $('#minimal-detectable-effect').val() / 100;
        conversion_rate = $('#baseline-conversion').val() / 100;
        impact = $('#impact').val() / 100;
        usersPerDay = $('#users-per-day').val();
        targetCredebility = $('#target-credebility').val();
        percentOfUsersToPass = $('#percent-to-pass').val();
        calculate();
    });

    function simulate(yearsPassed,testsCompleted) {
        //if ($('random-impact').checked === false) {
        impact = impactArrays[yearsPassed][testsCompleted];
        urlString = $("#calculation-url").val() + "?users=" + $("#result_count").val() + "&impact=" +
            impact + "&testAmount=" + $("#test-amount").val() + "&convertion=" +
            ($("#baseline-conversion").val() / 100) + "&credebility=" + $("#target-credebility").val() + "&pass=" + $("#percent-to-pass").val();
        //}
        //else {
        //    urlString = $("#calculation-url").val() + "?users=" + $("#result_count").val() + "&impact=" +
        //        (Math.floor((Math.random() - 0.5) * 40)).toString() + "&testAmount=" + $("#test-amount").val() + "&convertion=" + ($("#baseline-conversion").val() / 100)
        //}
        $.ajax({

            url: urlString,
            type: "GET",
            success: function (result) {
                var tableBody = document.createElement("tbody");
                var counter = 0;
                for (i of (result)) {
                    let pValue = 0;
                    var tableRow = tableBody.insertRow();

                    if (i.isATest === true) {
                        totalProfitB += (i.totalProfit) * 15;
                        pValue = getPValue(i, result[counter - 1], 6);
                        var testTypeCell = tableRow.insertCell();
                        testTypeCell.appendChild(document.createTextNode("B"));

                        var visibleImpactCell = tableRow.insertCell();
                        visibleImpactCell.appendChild(document.createTextNode(roundPercentage((((i.totalProfit / result[counter - 1].totalProfit) - 1) * 100), 3)));
                    }
                    else if (i.isATest === false) {
                        totalProfitA += (i.totalProfit) * 15;
                        pValue = null
                        var testTypeCell = tableRow.insertCell();
                        testTypeCell.appendChild(document.createTextNode("A"));

                        var visibleImpactCell = tableRow.insertCell();
                        visibleImpactCell.appendChild(document.createTextNode("-"));
                    }



                    var conversionAmountCell = tableRow.insertCell();
                    conversionAmountCell.appendChild(document.createTextNode(((i.totalProfit) / 10).toString()));

                    var impactCell = tableRow.insertCell();
                    impactCell.appendChild(document.createTextNode(i.impact.toString()));

                    var outcomeCell = tableRow.insertCell();
                    if (i.testState == 1) {
                        totalImpact = totalImpact * ((i.impact / 100) + 1)
                        outcomeCell.appendChild(document.createTextNode("Passed"));
                    }
                    else {
                        outcomeCell.appendChild(document.createTextNode("Failed"));
                    }
                    var credibilityCell = tableRow.insertCell();
                    if (i.isATest === false) {
                        credibilityCell.appendChild(document.createTextNode("-"))
                    }
                    else {
                        credibilityCell.appendChild(document.createTextNode((roundPercentage((1 - pValue) * 100) + "%")));
                    }

                    var significanceCell = tableRow.insertCell();
                    significanceCell.appendChild(document.createTextNode(roundPercentage(pValue * 1)));

                    var profitCell = tableRow.insertCell();
                    profitCell.appendChild(document.createTextNode(i.totalProfit * 15));

                    let days = parseFloat(roundPercentage(i.userAmount / usersPerDay, 2))
                    daysPassed += days;
                    var daysPassedCell = tableRow.insertCell();
                    daysPassedCell.appendChild(document.createTextNode(days));

                    var totalUsersCell = tableRow.insertCell();
                    totalUsersCell.appendChild(document.createTextNode(i.userAmount.toString()))

                    var totalDaysCell = tableRow.insertCell();
                    totalDaysCell.appendChild(document.createTextNode(roundPercentage(daysPassed, 2)));
                    counter++;
                }
                if (daysPassed < 365) {
                    testsCompleted++
                    simulate(yearsPassed, testsCompleted);
                }
                else {
                    var resultsRow = tableBody.insertRow();
                    resultsRow.insertCell().appendChild(document.createTextNode("total impact:"))
                    resultsRow.insertCell().appendChild(document.createTextNode(roundPercentage(totalImpact, 2)));
                    resultsRow.insertCell().appendChild(document.createTextNode("total profit A:"))
                    resultsRow.insertCell().appendChild(document.createTextNode(totalProfitA.toString()));
                    resultsRow.insertCell().appendChild(document.createTextNode("total profit B:"))
                    resultsRow.insertCell().appendChild(document.createTextNode(totalProfitB.toString()));
                    resultsRow.insertCell().appendChild(document.createTextNode("total profit:"))
                    resultsRow.insertCell().appendChild(document.createTextNode((totalProfitA + totalProfitB).toString()));
                    resultsRow.insertCell().appendChild(document.createTextNode("total profit difference:"))
                    resultsRow.insertCell().appendChild(document.createTextNode((totalProfitB - totalProfitA).toString()));
                    resultsRow.insertCell().appendChild(document.createTextNode("profit next year:"))
                    let profitNextYear = Math.round((totalProfitA / daysPassed) * 365 * 2 * totalImpact);
                    resultsRow.insertCell().appendChild(document.createTextNode(profitNextYear.toString()));
                    resultsRow.insertCell().appendChild(document.createTextNode("profit next year without tests:"));
                    resultsRow.insertCell().appendChild(document.createTextNode(roundPercentage(((totalProfitA / daysPassed) * 365 * 2), 2)));
                    allProfits.push(profitNextYear);
                    requestFinished = true;
                    daysPassed = 0;
                    totalImpact = 1;
                    totalProfitA = 0;
                    totalProfitB = 0;
                }
                $("#num-statistics-table").append(tableBody);
            }
        });
    }
    
    $("a.btn-find").click(async function () {
        for (var a = 0; a < 6; a++) {
            requestFinished = true;
            for (var i = 0; i < repeatsCount; i++) {
                simulate(i, 0);
                requestFinished = false;
                while (!requestFinished) {
                    await sleep(5000);
                }
            }
            averageProfit = allProfits.reduce(add, 0) / allProfits.length;
            sendRequestToOptimizer(percentOfUsersToPass, targetCredebility, averageProfit, a);
            var arr = a + 1;
            exportToExcel();
            await sleep(10000);
            percentOfUsersToPass = responseFromOptimizer[arr].values[0];
            targetCredebility = responseFromOptimizer[arr].values[1];
            $('#target-credebility').val(targetCredebility);
            $('#percent-to-pass').val(percentOfUsersToPass);
            $('#num-statistics-table').empty();
        }
        responseFromOptimizer = [];
    })
});

function add(accumulator, a) {
    return accumulator + a;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getPValue(test, initial) {
    usersA = test.userAmount;
    usersB = initial.userAmount;
    conversionsA = test.totalProfit / 10;
    conversionsB = initial.totalProfit / 10;
    crA = conversionsA / usersA;
    crB = conversionsB / usersB;
    crUplift = (crB - crA) / crA;
    seA = Math.sqrt((crA * (1 - crA)) / usersA);
    seB = Math.sqrt((crB * (1 - crB)) / usersB);
    seDiff = Math.sqrt(Math.pow(seA, 2) + Math.pow(seB, 2));
    zScore = (crB - crA) / seDiff;
    pValue = 1 - normDist(zScore, 0, 1, true);
    if (pValue > 0.5) pValue = 1 - pValue;
    return pValue
}

function normDist(x, mean, sd, cumulative) {
    if (isNaN(x) || isNaN(mean) || isNaN(sd)) return '#VALUE!';
    if (sd <= 0) return '#NUM!';
    return (cumulative) ? jStat.normal.cdf(x, mean, sd) : jStat.normal.pdf(x, mean, sd);
}

function roundPercentage(value, chars) {
    return value.toLocaleString("en-US", { maximumFractionDigits: chars, minimumFractionDigits: chars });
}

function exportToExcel() {
    var table = document.getElementById('num-statistics-table');
    var html = table.outerHTML;
    var uri = 'data:application/vnd.ms-excel,' + encodeURIComponent(html);
    var downloadLink = document.createElement("a");
    downloadLink.href = uri;
    downloadLink.download = "dataForTargetCredebility" + $("#target-credebility").val() + "AndPercentToPass" + $("#percent-to-pass").val() + ".xls";

    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}

function sendRequestToOptimizer(percentOfUsers, targetCredibility, profitNextYear, iteration) {
    let nextIteration = iteration + 1;

    if (responseFromOptimizer == null) {
        responseFromOptimizer = Array.apply(null, Array(10))
        responseFromOptimizer[0] = { "values": [percentOfUsers, targetCredebility, profitNextYear], "src": "A" };
    }
    else {
        responseFromOptimizer[iteration].values[0] = percentOfUsers;
        responseFromOptimizer[iteration].values[1] = targetCredibility;
        responseFromOptimizer[iteration].values[2] = profitNextYear;
    }
    let data = {
        "app_id": "d07c70c9-5d5d-4923-9350-647e14405c79",
        "strategy_name": "Moving_average",
        "optimizing_algorithm": "XGBoost",
        "parameters": [
            {
                "parameter_name": "percentToPass",
                "type": "int",
                "default_value": 0,
                "values_from": 0,
                "values_step": 1,
                "values_to": 50
            },
            {
                "parameter_name": "targetCredebility",
                "type": "float",
                "default_value": 0.95,
                "values_from": 0.79,
                "values_step": 0.01,
                "values_to": 0.99
            }
        ],
        "processed_parameters_sets":
        {
            "columns": ["percentToPass", "targetCredebility", "NetProfit"],
            "data":
            {
            },
            "operational_info":
            {
                "bs": [
                    {
                        "percentToPass": { "from": 0, "to": 50 },
                        "targetCredebility": { "from": 0.79, "to": 0.99 },
                        "point_index": 1
                    }
                ]
            }
        }
    }
    for (let iter = 0; iter <= iteration; iter++) {
        data.processed_parameters_sets.data[iter] = responseFromOptimizer[iter]
    }
    fetch("http://ftdev.ddns.net:96/api/next-parameters-sets", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(res => { return res.json(); }).then((response) => { responseFromOptimizer[nextIteration] = response.next_parameters_sets.data[nextIteration]; });
}


function ppnd(p) {
    var a0 = 2.50662823884;
    var a1 = -18.61500062529;
    var a2 = 41.39119773534;
    var a3 = -25.44106049637;
    var b1 = -8.47351093090;
    var b2 = 23.08336743743;
    var b3 = -21.06224101826;
    var b4 = 3.13082909833;
    var c0 = -2.78718931138;
    var c1 = -2.29796479134;
    var c2 = 4.85014127135;
    var c3 = 2.32121276858;
    var d1 = 3.54388924762;
    var d2 = 1.63706781897;
    var r;
    var split = 0.42;
    var value;

    if (Math.abs(p - 0.5) <= split) {
        r = (p - 0.5) * (p - 0.5);

        value = (p - 0.5) * (((
            a3 * r
            + a2) * r
            + a1) * r
            + a0) / ((((
                b4 * r
                + b3) * r
                + b2) * r
                + b1) * r
                + 1.0);
    }
    else if (0.0 < p && p < 1.0) {
        if (0.5 < p) {
            r = Math.sqrt(- Math.log(1.0 - p));
        } else {
            r = Math.sqrt(- Math.log(p));
        }

        value = (((
            c3 * r
            + c2) * r
            + c1) * r
            + c0) / ((
                d2 * r
                + d1) * r
                + 1.0);

        if (p < 0.5) {
            value = - value;
        }
    }
    else {
        value = NaN;
    }

    return value;
}
