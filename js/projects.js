
  const obsPortfolio = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const portfolio = entry.target.querySelector('.mySwiper');
      if (entry.isIntersecting) {
        portfolio.classList.add('active');
        return;
      }
    });
  });
  obsPortfolio.observe(document.querySelector('.section__portfolio'));
  
/// SECTION__PROJECTS
/// 1 ITEM

const obsProjectsItemFirst = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const houseFirst = entry.target.querySelector('#house-1');
      if (entry.isIntersecting) {
        houseFirst.classList.add('active');
        return;
      }
    });
  });
  obsProjectsItemFirst.observe(document.querySelector('.section__projects-items'));

  /// 2 ITEM

const obsProjectsItemSecond = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const house2 = entry.target.querySelector('#house-2');
      if (entry.isIntersecting) {
        house2.classList.add('active');
        return;
      }
    });
  });
  obsProjectsItemSecond.observe(document.querySelector('.section__projects-items'));
  
  /// 3 ITEM

  const obsProjectsItemThird = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const house3 = entry.target.querySelector('#house-3');
      if (entry.isIntersecting) {
        house3.classList.add('active');
        return;
      }
    });
  });
  obsProjectsItemThird.observe(document.querySelector('.section__projects-items'));
  