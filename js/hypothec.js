/// HYPOTHEC_ITEMS

const obsHypothec = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const hypothecItems = entry.target.querySelector('.section__hypothec-items');
      if (entry.isIntersecting) {
        hypothecItems.classList.add('active');
        return;
      }
    });
  });
  obsHypothec.observe(document.querySelector('.section__hypothec'));

  /// HYPOTHEC_CALC

  const obsHypothecCalc = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const hypothecCalc = entry.target.querySelector('.section__hypothec-calc');
      if (entry.isIntersecting) {
        hypothecCalc.classList.add('active');
        return;
      }
    });
  });
  obsHypothecCalc.observe(document.querySelector('.section__hypothec'));

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


  const value = document.querySelector("#value");
  const input = document.querySelector("#customRange1");
  value.textContent = input.value;
  input.addEventListener("input", (event) => {
    value.textContent = event.target.value;
  });

  const value2 = document.querySelector("#value2");
  const input2 = document.querySelector("#customRange2");
  value2.textContent = input2.value;
  input2.addEventListener("input", (event) => {
    value2.textContent = event.target.value;
  });

  const value3 = document.querySelector("#value3");
  const input3 = document.querySelector("#customRange3");
  value3.textContent = input3.value;
  input3.addEventListener("input", (event) => {
    value3.textContent = event.target.value;
  });

  const value4 = document.querySelector("#value4");
  const input4 = document.querySelector("#customRange4");
  value4.textContent = input4.value;
  input4.addEventListener("input", (event) => {
    value4.textContent = event.target.value;
  });