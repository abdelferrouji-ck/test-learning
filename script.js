document.querySelectorAll('.scale-option').forEach(option => {
    option.addEventListener('click', function() {
        const radio = this.querySelector('input[type="radio"]');
        radio.checked = true;

        const groupName = radio.name;
        document.querySelectorAll(`input[name="${groupName}"]`).forEach(r => {
            r.parentElement.classList.remove('selected');
        });

        this.classList.add('selected');
    });
});

document.getElementById('professionalAssessmentForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const answered = document.querySelectorAll('input[type="radio"]:checked').length;
    if (answered !== 21) {
        document.getElementById('errorMessage').style.display = 'block';
        return;
    }

    let total = 0;
    document.querySelectorAll('input[type="radio"]:checked').forEach(i => {
        total += parseInt(i.value);
    });

    document.getElementById('totalScore').textContent = total;
    document.getElementById('professionalResults').style.display = 'block';
});
