const alphabetData = {
    japanese: ['あ', 'い', 'う', 'え', 'お', 'ア', 'イ', 'ウ', 'エ', 'オ'],
    german: ['A', 'B', 'C', 'Ä', 'Ö', 'Ü'],
    english: ['A', 'B', 'C', 'D', 'E', 'F']
};

function showAlphabet(language) {
    const alphabetSection = document.getElementById('alphabet-section');
    alphabetSection.innerHTML = alphabetData[language].join(' ');
}
