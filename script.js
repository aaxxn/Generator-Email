document.addEventListener('DOMContentLoaded', () => {
    const emailOutput = document.getElementById('generatedEmail');
    const lengthSlider = document.getElementById('lengthSlider');
    const lengthValue = document.getElementById('lengthValue');
    const useLowercase = document.getElementById('useLowercase');
    const useUppercase = document.getElementById('useUppercase');
    const useNumbers = document.getElementById('useNumbers');
    const useSpecialChars = document.getElementById('useSpecialChars');
    const generateButton = document.getElementById('generateButton');
  
    lengthSlider.addEventListener('input', () => {
      lengthValue.textContent = lengthSlider.value;
    });
  
    generateButton.addEventListener('click', generateEmail);
  
    function generateEmail() {
      const length = parseInt(lengthSlider.value);
      const lowercase = 'abcdefghijklmnopqrstuvwxyz';
      const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const numbers = '0123456789';
      const specialChars = '!@#$%^&*()_+';
      const domains = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'zoho.com', 'aol.com', 'mail.com', 'yandex.com', 'protonmail.com' ];
  
      let chars = '';
      if (useLowercase.checked) chars += lowercase;
      if (useUppercase.checked) chars += uppercase;
      if (useNumbers.checked) chars += numbers;
      if (useSpecialChars.checked) chars += specialChars;
  
      if (chars === '') {
        alert('Pilih satu karakter dulu blog, baru gas!');
        return;
      }
  
      let result = '';
      for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
      }
  
      const domain = domains[Math.floor(Math.random() * domains.length)];
      emailOutput.value = `${result}@${domain}`;
    }
  });