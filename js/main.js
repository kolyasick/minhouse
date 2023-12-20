

document.addEventListener("DOMContentLoaded", function(){
    
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('.section__about');
      if (entry.isIntersecting) {
        square.classList.add('active');
      return;
      }
    });
  });
  observer.observe(document.querySelector('.section__aboutus'));
  
  ///SECTION_HOW_WE_WORK
  
  /// TITLE
  
  const obsHowwwTitle = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const HowwwTitle = entry.target.querySelector('.section__how-we-work-title');
      if (entry.isIntersecting) {
        HowwwTitle.classList.add('active');
      return;
      }
    });
  });
  obsHowwwTitle.observe(document.querySelector('.section__how-we-work'));
  
  /// 1st item
  
  const obsFirst = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const itemFirst = entry.target.querySelector('#item-1');
      if (entry.isIntersecting) {
        itemFirst.classList.add('active');
      return;
      }
    });
  });
  obsFirst.observe(document.querySelector('.section__how-we-work'));
  
  /// 2nd item
  
  const obsSecond = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const itemSecond = entry.target.querySelector('#item-2');
      if (entry.isIntersecting) {
        itemSecond.classList.add('active');
      return;
      }
    });
  });
  obsSecond.observe(document.querySelector('.section__how-we-work'));
  
  /// 3d item
  
  const obsThird = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const itemThird = entry.target.querySelector('#item-3');
      if (entry.isIntersecting) {
        itemThird.classList.add('active');
      return;
      }
    });
  });
  obsThird.observe(document.querySelector('.section__how-we-work'));
  
  /// SECTION__REVIEWS
  
  /// TITLE
  
  const obsReviewsTitle = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const ReviewsTitle = entry.target.querySelector('.section__reviews-title');
      if (entry.isIntersecting) {
        ReviewsTitle.classList.add('active');
      return;
      }
    });
  });
  obsReviewsTitle.observe(document.querySelector('.section__reviews'))
  
  const obsReviews = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const reviews = entry.target.querySelector('.mySwiper');
      if (entry.isIntersecting) {
        reviews.classList.add('active');
      return;
      }
    });
  });
  obsReviews.observe(document.querySelector('.section__reviews'));
  
  /// SECTION__CONTACTS
  
  // TITLE
  
  const obsContactsTitle = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const ContactsTitle = entry.target.querySelector('.section__contacts-title');
      if (entry.isIntersecting) {
        ContactsTitle.classList.add('active');
      return;
      }
    });
  });
  obsContactsTitle.observe(document.querySelector('.section__contacts'));
  
  // ICONS
  
  const obsContactsIcons = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const icons = entry.target.querySelector('.section__contacts-icons');
      if (entry.isIntersecting) {
        icons.classList.add('active');
      return;
      }
    });
  });
  obsContactsIcons.observe(document.querySelector('.section__contacts'));
  
  // BLOCKS
  
  const obsContacts = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const blocks = entry.target.querySelector('.section__contacts-blocks');
      if (entry.isIntersecting) {
        blocks.classList.add('active');
      return;
      }
    });
  });
  obsContacts.observe(document.querySelector('.section__contacts'));
  
  
  const obsFirstMobile = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const itemFirstMobile = entry.target.querySelector('#itemFirst');
      if (entry.isIntersecting) {
        itemFirstMobile.classList.add('active');
        return;
      }
    });
  });
  obsFirstMobile.observe(document.querySelector('.section__how-we-work-mobile-items'));
  
  /// 2nd item
  
  const obsSecondMobile = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const itemSecondMobile = entry.target.querySelector('#itemSecond');
      if (entry.isIntersecting) {
        itemSecondMobile.classList.add('active');
        return;
      }
    });
  });
  obsSecondMobile.observe(document.querySelector('.section__how-we-work-mobile-items'));
  
  /// 3d item
  
  const obsThirdMobile = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const itemThirdMobile = entry.target.querySelector('#itemThird');
      if (entry.isIntersecting) {
        itemThirdMobile.classList.add('active');
        return;
      }
    });
  });
  obsThirdMobile.observe(document.querySelector('.section__how-we-work-mobile-items'));
  
  /// CONTACTS-MOBILE
  
  const obsContactsMobile = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const itemContactsMobile = entry.target.querySelector('.section__contacts-mobile__block');
      if (entry.isIntersecting) {
        itemContactsMobile.classList.add('active');
        return;
      }
    });
  });
  obsContactsMobile.observe(document.querySelector('.section__contacts-mobile'));
  
  /// ICONS MOBILE CONTACTS
  
  const obsContactsMobileIcons = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const iconsMobile = entry.target.querySelector('.contacts_icons');
      if (entry.isIntersecting) {
        iconsMobile.classList.add('active');
      return;
      }
    });
  });
  obsContactsMobileIcons.observe(document.querySelector('.section__contacts-mobile'));


});
 
///

var element = document.getElementById('phone');
var maskOptions = {
    mask: '+7(000)000-00-00',
    lazy: false
} 
var mask = new IMask(element, maskOptions);

var element2 = document.getElementById('email');
var maskOptions2 = {    
    mask:function (value) {
                if(/^[a-z0-9_\.-]+$/.test(value))
                    return true;
                if(/^[a-z0-9_\.-]+@$/.test(value))
                    return true;
                if(/^[a-z0-9_\.-]+@[a-z0-9-]+$/.test(value))
                    return true;
                if(/^[a-z0-9_\.-]+@[a-z0-9-]+\.$/.test(value))
                    return true;
                if(/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}$/.test(value))
                    return true;
                if(/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}\.$/.test(value))
                    return true;
                if(/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}\.[a-z]{1,4}$/.test(value))
                    return true;
                return false;
                    },
    lazy: false
} 
var mask2 = new IMask(element2, maskOptions2);

var element3 = document.getElementById('card');
var maskOptions3 = {
    mask: '0000 0000 0000 0000',
    lazy: false
} 
var mask3 = new IMask(element3, maskOptions3);