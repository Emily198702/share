function formatDate(dateStr) {
    let date = new Date(dateStr)
    return date.getFullYear()+'-'
            +(date.getMonth()+1)+'-'
            +date.getDate() + '  '
            +date.getHours()+':'
            +date.getMinutes()+':'
            +date.getSeconds()
};

module.exports = {formatDate}