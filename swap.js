function swapStyles() {
    var pagestyle = document.getElementsByTagName('link')[0];
    if (pagestyle.getAttribute('href') == 'mystyle.css') {
        pagestyle.setAttribute('href', 'mystyle2.css');
    } else {
        pagestyle.setAttribute('href', 'mystyle.css');
    }
}