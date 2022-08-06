



  export const clipToLength = (item: string, length: number) => {
    if (!item) {
      return '';
    }
    if(item.length > length) {
      const trimedItem = item.substring(0, (length - 2));
      return trimedItem + '..';
    } else {
      return item;
    }
  }

  export const segrigateString = (writeUp: string) => {
    if(!writeUp || typeof(writeUp) !== 'string') {
      return {
        brief: '',
        explanation: ''
      }
    }
    let firstDotIndex = writeUp.indexOf('.');
    if (((firstDotIndex/writeUp.length) > 0.5) || firstDotIndex > 80) {
      firstDotIndex = 0
    }
    return {
      brief: writeUp.substring(0, firstDotIndex),
      explanation: writeUp.substring(firstDotIndex),
    }
  }