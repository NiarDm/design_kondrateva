document.addEventListener('DOMContentLoaded', function() {
    const addContactBtn = document.querySelector('.add-contact-btn');
    
    addContactBtn.addEventListener('click', function() {
        // Создаем VCF файл (vCard)
        const contactData = [
            'BEGIN:VCARD',
            'VERSION:3.0',
            'FN:Кондратьев Никита',
            'TEL;TYPE=CELL:+79992059681',
            'EMAIL:nik070297@mail.ru',
            'URL:https://niardm.github.io/design_kondrateva/',
            'X-SOCIALPROFILE;TYPE=telegram:@design_kondrateva',
            'X-SOCIALPROFILE;TYPE=whatsapp:+79992059681',
            'X-SOCIALPROFILE;TYPE=vk:https://m.vk.com/design_kondrateva?from=groups',
            'PHOTO;VALUE=URL;TYPE=PNG:contact_photo.png',
            'NOTE:Дизайн Кондратьева',
            'END:VCARD'
        ].join('\n');
        
        // Создаем blob и ссылку для скачивания
        const blob = new Blob([contactData], { type: 'text/vcard' });
        const url = URL.createObjectURL(blob);
        
        // Создаем временную ссылку
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Кондратьев_Никита.vcf';
        link.style.display = 'none';
        
        // Добавляем на страницу и эмулируем клик
        document.body.appendChild(link);
        link.click();
        
        // Убираем ссылку после скачивания
        setTimeout(() => {
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        }, 100);
        
        // Меняем текст кнопки на короткое время
        const originalText = addContactBtn.innerHTML;
        addContactBtn.innerHTML = '<i class="fas fa-check"></i> Сохранение контакта...';
        
        setTimeout(() => {
            addContactBtn.innerHTML = originalText;
        }, 2000);
    });
});
