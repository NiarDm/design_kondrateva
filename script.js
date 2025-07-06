document.addEventListener('DOMContentLoaded', function() {
    const addContactBtn = document.querySelector('.add-contact-btn');
    
    addContactBtn.addEventListener('click', function() {
        // Формируем содержимое vCard
        const vCardContent = `BEGIN:VCARD
VERSION:3.0
CHARSET=UTF-8
FN;CHARSET=UTF-8:Кондратьев Никита
N;CHARSET=UTF-8:Кондратьев;Никита;;;
TEL;TYPE=CELL:+79992059681
EMAIL:nik070297@mail.ru
URL:https://niardm.github.io/design_kondrateva/
X-SOCIALPROFILE;TYPE=telegram:https://t.me/design_kondrateva
X-SOCIALPROFILE;TYPE=whatsapp:https://wa.me/79992059681
X-SOCIALPROFILE;TYPE=vk:https://m.vk.com/design_kondrateva?from=groups
PHOTO;VALUE=URL;TYPE=PNG:contact_photo.png
NOTE;CHARSET=UTF-8:Дизайн Кондратьева
END:VCARD`;

        // Создаем Blob с явным указанием кодировки UTF-8
        const blob = new Blob([vCardContent], {
            type: 'text/vcard;charset=utf-8', 
            endings: 'native'
        });

        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'contact.vcf';
        link.style.display = 'none';
        
        document.body.appendChild(link);
        link.click();
        
        setTimeout(() => {
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        }, 100);

        const originalText = addContactBtn.innerHTML;
        addContactBtn.innerHTML = '<i class="fas fa-check"></i> Контакт сохранён!';
        setTimeout(() => {
            addContactBtn.innerHTML = originalText;
        }, 2000);
    });
});
