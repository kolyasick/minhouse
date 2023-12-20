/// 1st item

const obsFirst = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const itemFirst = entry.target.querySelector('#itemFirst');
      if (entry.isIntersecting) {
        itemFirst.classList.add('active');
        return;
      }
    });
  });
  obsFirst.observe(document.querySelector('.section__how-we-work-items'));
  
  /// 2nd item
  
  const obsSecond = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const itemSecond = entry.target.querySelector('#itemSecond');
      if (entry.isIntersecting) {
        itemSecond.classList.add('active');
        return;
      }
    });
  });
  obsSecond.observe(document.querySelector('.section__how-we-work-items'));
  
  /// 3d item
  
  const obsThird = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const itemThird = entry.target.querySelector('#itemThird');
      if (entry.isIntersecting) {
        itemThird.classList.add('active');
        return;
      }
    });
  });
  obsThird.observe(document.querySelector('.section__how-we-work-items'));

  /// ADVANTAGES
  /// ADV-3

  const obsAdvThird = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const itemAdvThird = entry.target.querySelector('#adv-3');
      if (entry.isIntersecting) {
        itemAdvThird.classList.add('active');
        return;
      }
    });
  });
  obsAdvThird.observe(document.querySelector('.section__advantages'));

  

/// ADV-1


const obsAdvFirst = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const itemAdvFirst = entry.target.querySelector('#adv-1');
    if (entry.isIntersecting) {
      itemAdvFirst.classList.add('active');
      return;
    }
  });
});
obsAdvFirst.observe(document.querySelector('.section__advantages'));

/// ADV-2

const obsAdvSecond = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const itemAdvSecond = entry.target.querySelector('#adv-2');
    if (entry.isIntersecting) {
      itemAdvSecond.classList.add('active');
      return;
    }
  });
});
obsAdvSecond.observe(document.querySelector('.section__advantages'));

 /// FAQ
  /// IMG

  const obsHypothecFAQ = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const hypothecFAQ = entry.target.querySelector('.section__faq-img');
      if (entry.isIntersecting) {
        hypothecFAQ.classList.add('active');
        return;
      }
    });
  });
  obsHypothecFAQ.observe(document.querySelector('.section__faq'));

  /// ACCORDION

  const obsAccordion = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const hypothecAccordion = entry.target.querySelector('.section__faq-items');
      if (entry.isIntersecting) {
        hypothecAccordion.classList.add('active');
        return;
      }
    });
  });
  obsAccordion.observe(document.querySelector('.section__faq'));

  /// MOBILE

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