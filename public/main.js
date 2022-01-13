
const process = document.getElementById('process')
const partitions = document.querySelectorAll('.parts');
const finished = document.getElementById('finish');
const cont = document.getElementById('contador');
const icon = document.getElementById('icons-cont');
let time = 0

icon.addEventListener('click',()=>{
  time++
  cont.innerHTML = time;
})


for (let index = 0; index < partitions.length; index++) {
  
  Sortable.create(partitions[index],{
    animation: 150,
    group: 'nested',
    fallbackOnBody: true,
    swapThreshold: 0.65,
  });
}

Sortable.create(process,{
  animation: 150,
  group: 'nested',
});

Sortable.create(finished,{
  animation: 150,
  group:'nested'
})