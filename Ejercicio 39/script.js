function getUltimoDiaMes(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}

alert(getUltimoDiaMes(2012, 0)); // 31
alert(getUltimoDiaMes(2012, 1)); // 29
alert(getUltimoDiaMes(2013, 1)); // 28