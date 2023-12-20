
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


