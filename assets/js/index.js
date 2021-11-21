const btnCopy = document.querySelectorAll('.btn__copy');

btnCopy.forEach(btn => {
  btn.addEventListener('click', () => {
    let copied = btn.nextElementSibling;
    let copyText = btn.previousElementSibling.innerHTML;
   
    let inputElem = document.createElement('input');
    inputElem.type = 'text';

    inputElem.value = copyText;

    document.body.appendChild(inputElem);
    inputElem.select();
    document.execCommand('copy');
    inputElem.style.display = 'none'

    copied.style.visibility = 'visible';

    setTimeout(() => {
      copied.style.visibility = 'hidden';
    }, 1000);
  })
});



$('.nav-list__link').click(function() {
    $(this).siblings().removeClass('active_link');
    $(this).toggleClass('active_link');
  });

  $('.faq-list').click(function() {
    $(this).siblings().removeClass('showFaqInfo');
    $(this).toggleClass('showFaqInfo');
  });


  $(function() {
    $('.target').hide();
    $('.bitcoin-list').show();

    $('.cryptocurrency-btn').click(function() {
        $('.target').hide();
        $('.cryptocurrency-btn').removeClass('active-btn');
        $(this).addClass('active-btn');
        $('#div' + $(this).attr('target')).show();
    })
});