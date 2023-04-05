const items = document.querySelectorAll('.item');

items.forEach(item => {
  item.addEventListener('mouseover', () => {
    item.querySelector('.item-description-div').style.display = 'flex';
    
  });
  
  item.addEventListener('mouseout', () => {
    item.querySelector('.item-description-div').style.display = 'none';
    
  });


});