// Example Graphs created by: Kevin Xu https://github.com/imkevinxu

$(document).ready(function() {

    var f = [];
    function factorial (n) {
        if (n == 0 || n == 1)
            return 1;
        if (f[n] > 0)
            return f[n];
        return f[n] = factorial(n-1) * n;
    }

    function f1 (x) {
        return 5;
    }
    var xmin = 1.0,
        xmax = 100.0,
        data = d3.range(xmin, xmax, 1).map(function (d) {
            return {x: d, y: f1(d)};
        }),
        parameters = {  
            title: "O(1) - Constant Time",
            xlabel: "Birthday Party Guests",
            ylabel: "Cake Making Time",
            xlim: [-2, 100],
            ylim: [-5, 100],
        },
        plot = xkcdplot();
    plot("#examples", parameters);
    plot.plot(data, {stroke: "steelblue"});
    plot.draw();


    function f2 (x) {
        if (x == 0) return 10; else return Math.log2(x) + 10;
    }

    var xmin = 1.0,
        xmax = 100.0,
        data = d3.range(xmin, xmax, 1).map(function (d) {
            return {x: d, y: f2(d)};
        }),
        parameters = {  
            title: "O(log n) - Logarithmic Time",
            xlabel: "Birthday Party Guests",
            ylabel: "Cake Making Time",
            xlim: [-2, 100],
            ylim: [-5, 100],
        },
        plot = xkcdplot();
    plot("#examples", parameters);
    plot.plot(data, {stroke: "tomato"});
    plot.draw();


    function f3 (x) {
        return x + 10;
    }
    var xmin = 1.0,
        xmax = 100.0,
        data = d3.range(xmin, xmax, 1).map(function (d) {
            return {x: d, y: f3(d)};
        }),
        parameters = {  
            title: "O(n) - Linear Time",
            xlabel: "Birthday Party Guests",
            ylabel: "Cake Making Time",
            xlim: [-2, 100],
            ylim: [-5, 100],
        },
        plot = xkcdplot();
    plot("#examples", parameters);
    plot.plot(data, {stroke: "mediumaquamarine"});
    plot.draw();


    function f4 (x) {
        return x * x + 10;
    }

    var xmin = 1.0,
        xmax = 11.0,
        data = d3.range(xmin, xmax, 1).map(function (d) {
            return {x: d, y: f4(d)};
        }),
        parameters = {  
            title: "O(n^2) - Quadratic Time",
            xlabel: "Birthday Party Guests",
            ylabel: "Cake Making Time",
            xlim: [-2, 100],
            ylim: [-5, 100],
        },
        plot = xkcdplot();
    plot("#examples", parameters);
    plot.plot(data, {stroke: "pink"});
    plot.draw();



    function f5 (x) {
        if (x > 5) return 110; else return factorial(x) + 10;
    }

    var xmin = 1.0,
        xmax = 7.0,
        data = d3.range(xmin, xmax, 1).map(function (d) {
            return {x: d, y: f5(d)};
        }),
        parameters = {  
            title: "O(n!) - Factorial Time",
            xlabel: "Birthday Party Guests",
            ylabel: "Cake Making Time",
            xlim: [-2, 100],
            ylim: [-5, 100],
        },
        plot = xkcdplot();
    plot("#examples", parameters);
    plot.plot(data, {stroke: "slateblue"});
    plot.draw();

    function f6 (x) {
        return -Math.pow(x, 2);
    }

    var xmin = 1.0,
        xmax = 100.0,
        data = d3.range(xmin, xmax, 1).map(function (d) {
            return {x: d, y: f1(d)};
        }),
        data2 = d3.range(xmin, xmax, 1).map(function (d) {
            return {x: d, y: f2(d)};
        }),
        data3 = d3.range(xmin, xmax, 1).map(function (d) {
            return {x: d, y: f3(d)};
        }),
        data4 = d3.range(xmin, xmax, 1).map(function (d) {
            return {x: d, y: f4(d)};
        }),
        data5 = d3.range(xmin, xmax, 1).map(function (d) {
            return {x: d, y: f5(d)};
        }),
        parameters = {  
            title: "Big O Relative Times",
            xlabel: "Birthday Party Guests",
            ylabel: "Cake Making Time",
            xlim: [-2, 100],
            ylim: [-5, 100],
        },
        plot = xkcdplot();
    plot("#examples", parameters);
    plot.plot(data, {stroke: "steelblue"}, { text: "O(1)", x: 95, y: 7 });
    plot.plot(data2, {stroke: "tomato"}, { text: "O(log n)", x: 87, y: 20 });
    plot.plot(data3, {stroke: "mediumaquamarine"}, { text: "O(n)", x: 93, y: 98 });
    plot.plot(data4, {stroke: "pink"}, { text: "O(n^2)", x: 11, y: 103 });
    plot.plot(data5, {stroke: "slateblue"}, { text: "O(n!)", x: -3, y: 103 });
    plot.draw();


});
