var dates = []
var items1 = []
var items2 = []
var totalImpact = 1.00

$(function () {
    var alpha = 0.05;
    var beta = 0.80;
    var min_effect = 0.1;
    var conversion_rate = 0.5;
    var impact = 0.05;
    
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
        if (jQuery.isNumeric(sampleSize)) {
            $('#result_count').text(sampleSize);
        } else {
            $('#result_count').text('-');
        }
    }

    $('#minimal-detectable-effect').val(min_effect * 100);
    $('#baseline-conversion').val(conversion_rate * 100);
    $('#impact').val(impact * 100);
    calculate();

    $('#baseline-conversion, #minimal-detectable-effect, #impact').keyup(function () {
        min_effect = $('#minimal-detectable-effect').val() / 100;
        conversion_rate = $('#baseline-conversion').val() / 100;
        impact = $('#impact').val() / 100;
        calculate();
    });

    function simulate() {
        $.ajax({
            url: $("#calculation-url").val() + "?users=" + $("#result_count").text() + "&impact=" + $("#impact").val() + "&testAmount=" + $("#test-amount").val(),
            type: "GET",
            success: function (result) {
                var tableBody = document.createElement("tbody");

                for (i of (result)) {
                    let pValue = 0
                    if (i.isATest == true) {
                        pValue = getPValue(i, result[1], 6);
                    }
                    else {
                        pValue = null
                    }
                    var tableRow = tableBody.insertRow();

                    var conversionAmount = tableRow.insertCell();
                    conversionAmount.appendChild(document.createTextNode(((i.totalProfit) / 10).toString()));

                    var impact = tableRow.insertCell();
                    impact.appendChild(document.createTextNode(i.impact.toString()));

                    var outcome = tableRow.insertCell();
                    if (i.testState == 1) {
                        totalImpact = totalImpact * (i.impact * 0.01 + 1)
                        outcome.appendChild(document.createTextNode("Passed"));
                    }
                    else {
                        outcome.appendChild(document.createTextNode("Failed"));
                    }
                    var credibility = tableRow.insertCell();
                    credibility.appendChild(document.createTextNode((roundPercentage((1 - pValue) * 100).toString() + "%")));

                    var significance = tableRow.insertCell();
                    significance.appendChild(document.createTextNode(roundPercentage(pValue * 100).toString() + "%"));
                    
                }
                $("#total-impact").text(roundPercentage(totalImpact, 2).toString())
                $("#num-statistics-table").append(tableBody);
            }
        });
    }
    
    $("a.btn-find").click(function () {
          simulate();
    })
});



function getPValue(test, initial) {
    usersA = $("#result_count").text();
    usersB = $("#result_count").text();
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