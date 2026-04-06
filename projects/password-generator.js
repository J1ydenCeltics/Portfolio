const generateBtn = document.getElementById('generate-btn');
const passwordDisplay = document.getElementById('password');

function generatePassword(length = 12) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        result += chars[randomIndex];
    }
    return result;
}

generateBtn.addEventListener('click', () => {
    const newPassword = generatePassword();
    passwordDisplay.textContent = newPassword;
});
