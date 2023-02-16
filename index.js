function openWhatsApp(imageId) {
    var phoneNumber = '9848963748'; // Replace with your phone number
    var imageSrc = document.getElementById(imageId).src;
    var whatsappMessage = 'Check out this image: ';
    var whatsappUrl = 'https://api.whatsapp.com/send?phone=' + phoneNumber + '&text=' + encodeURIComponent(whatsappMessage) + encodeURIComponent('\n') + encodeURIComponent(imageSrc);
    window.open(whatsappUrl, '_blank');
}
