var config = require('./config'),
    moment = require('moment');

function getFormattedDate(date, date_format) {
    date_format = date_format || config.date_format;

    return moment(date).format(date_format);
}

function humanizeDuration(duration) {
   var days,
       months = moment_obj.months(),
       years = moment_obj.years(),
       month_str = months > 1 ? 'months' : 'month',
       year_str = years > 1 ? 'years' : 'year';

    if ( months && years ) {
        return years + ' ' + year_str + ' ' + months + ' ' + month_str;
    }

    if ( months ) {
        return months + ' ' + month_str;
    }

    if ( years ) {
        return years + ' ' + year_str;
    }

    days = moment_obj.days();

    return ( days > 1 ? days + ' days' : days + ' day' );
}

function getDuration(start_date, end_date, humanize) {
    var duration;

    start_date = moment(start_date);
    end_date = moment(end_date);
    duration = moment.duration(end_date.getTime() - start_date.getTime());

    return (humanize ? humanizeDuration(duration) : duration);
}

module.exports = {
  getFormattedDate: getFormattedDate,
  getDuration: getDuration
};