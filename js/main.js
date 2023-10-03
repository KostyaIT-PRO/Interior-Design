// Акордеон сайта 

// const accordeon = document.querySelector('.accordeon');
// const accordeonTitles = accordeon.querySelectorAll('.accordeon__title');

//   accordeonTitles.forEach.call(accordeonTitles, function(accordeonTitle){
//   accordeonTitle.addEventListener('click', function() {

//     const currentText = accordeonTitle.parentElement.querySelector('.accordeon__panel');

//     accordeonTitle.classList.toggle('accordeon__title--active');
//     currentText.classList.toggle('accordeon__panel--visible');

//     if (currentText.classList.contains('accordeon__panel--visible')) {
//       currentText.style.maxHeight = currentText.scrollHeight + 'px';
//     } else {
//       currentText.style.maxHeight = null;
//     }

//   });
// });


class ItcAccordion {
  constructor(target, config) {
    this._el = typeof target === 'string' ? document.querySelector(target) : target;
    const defaultConfig = {
      alwaysOpen: true,
      duration: 350
    };
    this._config = Object.assign(defaultConfig, config);
    this.addEventListener();
  }
  addEventListener() {
    this._el.addEventListener('click', (e) => {
      const elHeader = e.target.closest('.accordion__header');
      if (!elHeader) {
        return;
      }
      if (!this._config.alwaysOpen) {
        const elOpenItem = this._el.querySelector('.accordion__item_show');
        if (elOpenItem) {
          elOpenItem !== elHeader.parentElement ? this.toggle(elOpenItem) : null;
        }
      }
      this.toggle(elHeader.parentElement);
    });
  }
  show(el) {
    const elBody = el.querySelector('.accordion__body');
    if (elBody.classList.contains('collapsing') || el.classList.contains('accordion__item_show')) {
      return;
    }
    elBody.style['display'] = 'block';
    const height = elBody.offsetHeight;
    elBody.style['height'] = 0;
    elBody.style['overflow'] = 'hidden';
    elBody.style['transition'] = `height ${this._config.duration}ms ease`;
    elBody.classList.add('collapsing');
    el.classList.add('accordion__item_slidedown');
    elBody.offsetHeight;
    elBody.style['height'] = `${height}px`;
    window.setTimeout(() => {
      elBody.classList.remove('collapsing');
      el.classList.remove('accordion__item_slidedown');
      elBody.classList.add('collapse');
      el.classList.add('accordion__item_show');
      elBody.style['display'] = '';
      elBody.style['height'] = '';
      elBody.style['transition'] = '';
      elBody.style['overflow'] = '';
    }, this._config.duration);
  }
  hide(el) {
    const elBody = el.querySelector('.accordion__body');
    if (elBody.classList.contains('collapsing') || !el.classList.contains('accordion__item_show')) {
      return;
    }
    elBody.style['height'] = `${elBody.offsetHeight}px`;
    elBody.offsetHeight;
    elBody.style['display'] = 'block';
    elBody.style['height'] = 0;
    elBody.style['overflow'] = 'hidden';
    elBody.style['transition'] = `height ${this._config.duration}ms ease`;
    elBody.classList.remove('collapse');
    el.classList.remove('accordion__item_show');
    elBody.classList.add('collapsing');
    window.setTimeout(() => {
      elBody.classList.remove('collapsing');
      elBody.classList.add('collapse');
      elBody.style['display'] = '';
      elBody.style['height'] = '';
      elBody.style['transition'] = '';
      elBody.style['overflow'] = '';
    }, this._config.duration);
  }
  toggle(el) {
    el.classList.contains('accordion__item_show') ? this.hide(el) : this.show(el);
  }
}

new ItcAccordion(document.querySelector('.accordion'), {
  alwaysOpen: true
});


//Модальное окно с формой

const modalController = ({modal, btnOpen, btnClose, time = 300}) => {
const buttonElems = document.querySelectorAll(btnOpen);
const modalElem = document.querySelector(modal);
        
        modalElem.style.cssText = `
          display: flex;
          visibility: hidden;
          opacity: 0;
          transition: opacity ${time}ms ease-in-out;
        `;
        
        const closeModal = event => {
        const target = event.target;
        
        if (
          target === modalElem ||
          (btnClose && target.closest(btnClose)) ||
          event.code === 'Escape'
        ) {
        
            modalElem.style.opacity = 0;
        
            setTimeout(() => {
              modalElem.style.visibility = 'hidden';
            }, time);
        
            window.removeEventListener('keydown', closeModal);
          }
        }
        
        const openModal = () => {
          modalElem.style.visibility = 'visible';
          modalElem.style.opacity = 1;
          window.addEventListener('keydown', closeModal)
        };
        
        buttonElems.forEach(btn => {
          btn.addEventListener('click', openModal);
        });
        
        modalElem.addEventListener('click', closeModal);
      };
      
        modalController({
          modal: '.modal',
          btnOpen: '.js-order',
          btnClose: '.modal__close', 
});

//Модальное окно с фото

const modalControllers = ({modals, btnOpen, btnClose, time = 300}) => {
  const buttonElems = document.querySelectorAll(btnOpen);
  const modalElem = document.querySelector(modals);
          
          modalElem.style.cssText = `
            display: flex;
            visibility: hidden;
            opacity: 0;
            transition: opacity ${time}ms ease-in-out;
          `;
          
          const closeModal = event => {
          const target = event.target;
          
          if (
            target === modalElem ||
            (btnClose && target.closest(btnClose)) ||
            event.code === 'Escape'
          ) {
          
              modalElem.style.opacity = 0;
          
              setTimeout(() => {
                modalElem.style.visibility = 'hidden';
              }, time);
          
              window.removeEventListener('keydown', closeModal);
            }
          }
          
          const openModal = () => {
            modalElem.style.visibility = 'visible';
            modalElem.style.opacity = 1;
            window.addEventListener('keydown', closeModal)
          };
          
          buttonElems.forEach(btn => {
            btn.addEventListener('click', openModal);
          });
          
          modalElem.addEventListener('click', closeModal);
        };
        
          modalController({
            modal: '.modals',
            btnOpen: '.js-orders',
            btnClose: '.modals__close', 
  });

  //Модал свайпер портфолио

const swiper = new Swiper(".mySwiper", {
  loop: true,
  cssMode: true,
  spaceBetween: 20,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
});
const swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});





// маска формы 
const phone = document.querySelectorAll('#phone');
const imPhone = new Inputmask('+7(999)999-99-99');
imPhone.mask(phone);


