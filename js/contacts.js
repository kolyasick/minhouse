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
  

  /// MOBILE CONTACTS ICONS


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

  /// MOBILE CONTACTS

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