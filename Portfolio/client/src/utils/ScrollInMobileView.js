const scrollToWithOffset = (id, offset) => {
    const element = document.getElementById(id);
    if (element) {
      console.log('Element found:', element);
  
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
  
      element.scrollIntoView({
        top: offsetPosition,
        behavior: 'smooth',
        //block: 'start',  // Adjust as needed ('start', 'center', 'end')
      });
      console.log('Scrolled to offset:', offset);
    } else {
      console.log('Element not found:', id);
    }
  };
  
  export default scrollToWithOffset;
  