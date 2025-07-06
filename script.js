document.addEventListener('DOMContentLoaded', function() {
    const addContactBtn = document.querySelector('.add-contact-btn');
    
    addContactBtn.addEventListener('click', function() {
        // Формируем содержимое vCard с правильными переносами строк и указанием кодировки UTF-8
        const vCardContent = `BEGIN:VCARD
VERSION:3.0
FN;CHARSET=UTF-8:Кондратьев Никита
N;CHARSET=UTF-8:Кондратьев;Никита;;;
TEL;TYPE=CELL:+79992059681
EMAIL:nik070297@mail.ru
URL:https://niardm.github.io/design_kondrateva/
X-SOCIALPROFILE;TYPE=telegram:@design_kondrateva
X-SOCIALPROFILE;TYPE=whatsapp:+79992059681
X-SOCIALPROFILE;TYPE=vk:https://m.vk.com/design_kondrateva?from=groups
PHOTO;VALUE=URL;TYPE=PNG:contact_photo.png
NOTE;CHARSET=UTF-8:Дизайн Кондратьева
END:VCARD`;

        // Создаем Blob с явным указанием кодировки UTF-8
        const blob = new Blob([vCardContent], {
            type: 'text/vcard;charset=utf-8', // Явно указываем UTF-8
            endings: 'native'
        });

        // Создаем ссылку для скачивания
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'contact.vcf';
        link.style.display = 'none';
        
        document.body.appendChild(link);
        link.click();
        
        // Очистка
        setTimeout(() => {
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        }, 100);

        // Визуальный фидбек
        const originalText = addContactBtn.innerHTML;
        addContactBtn.innerHTML = '<i class="fas fa-check"></i> Контакт сохранён!';
        setTimeout(() => {
            addContactBtn.innerHTML = originalText;
        }, 2000);
    });
});
