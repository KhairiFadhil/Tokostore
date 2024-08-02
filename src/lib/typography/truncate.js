export function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  }
  
  export function isTwoLines(text, elementRef, maxLength) {
    if (!elementRef.current) return text;
  
    const element = elementRef.current;
    element.innerHTML = text;
    element.style.whiteSpace = 'normal'; // allow multiple lines
    element.style.width = '100%'; // set width to 100% to allow wrapping
  
    const lineHeight = parseInt(window.getComputedStyle(element).lineHeight);
    const lines = Math.ceil(element.offsetHeight / lineHeight);
  
    if (lines === 2) {
      return truncateText(text, maxLength);
    }
  
    return text;
  }