countdownManager = {
    // Config

    targetTime: new Date('January 1 0:00:00 2022'),
    displayElement: {
        day: null,
        hour: null,
        min: null,
        sec: null
    },

    init: function () {

        this.displayElement.day = $('#days');
        this.displayElement.hour = $('#hours');
        this.displayElement.min = $('#mins');
        this.displayElement.sec = $('#secs');

        this.tick();
        window.setInterval("countdownManager.tick();", 1000);
    },

    tick: function () {

        var timeNow = new Date();


        if (timeNow > this.targetTime) {
            timeNow = this.targetTime;
        }

        var diff = this.dateDiff(timeNow, this.targetTime);

        this.displayElement.day.text(diff.day);
        this.displayElement.hour.text(diff.hour);
        this.displayElement.min.text(diff.min);
        this.displayElement.sec.text(diff.sec);
    },


    dateDiff: function (date1, date2) {
        var diff = {}
        var tmp = date2 - date1;

        tmp = Math.floor(tmp / 1000);
        diff.sec = tmp % 60;
        tmp = Math.floor((tmp - diff.sec) / 60);
        diff.min = tmp % 60;
        tmp = Math.floor((tmp - diff.min) / 60);
        diff.hour = tmp % 24;
        tmp = Math.floor((tmp - diff.hour) / 24);
        diff.day = tmp;

        return diff;
    }
};

$(function ($) {
    countdownManager.init();
}());
