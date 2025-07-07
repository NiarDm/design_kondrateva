document.addEventListener('DOMContentLoaded', function() {
    const addContactBtn = document.querySelector('.add-contact-btn');

    addContactBtn.addEventListener('click', function() {
        // Содержимое vCard обновлено для лучшей совместимости
        const vCardContent = `BEGIN:VCARD
VERSION:3.0
FN;CHARSET=UTF-8:Кондратьев Никита
N;CHARSET=UTF-8:Кондратьев;Никита;;;
TEL;TYPE=CELL:+79992059681
EMAIL;TYPE=INTERNET:nik070297@mail.ru
URL:https://niardm.github.io/design_kondrateva/
NOTE;CHARSET=UTF-8:Telegram: https://t.me/design_kondrateva\\nWhatsApp: https://wa.me/79992059681\\nДизайн Кондратьева
END:VCARD`;

        const blob = new Blob([vCardContent], {
            type: 'text/vcard;charset=utf-8'
        });

        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Kondratiev_Nikita.vcf';
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
