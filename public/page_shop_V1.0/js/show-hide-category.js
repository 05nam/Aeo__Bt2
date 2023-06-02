function toggleMenu() {
    const myDiv = document.getElementById('filter');
    const checkClass = myDiv.classList.contains('filter__show');
    if (checkClass) {
        console.log('show')
        myDiv.classList.add('filter__hide');
        myDiv.classList.remove('filter__show');
    } else {
        console.log('not show')
        myDiv.classList.add('filter__show');
        myDiv.classList.remove('filter__hide');
    }
}
