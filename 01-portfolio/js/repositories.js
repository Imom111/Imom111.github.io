$(document).on('click','#tbody-repositories tr .btn-collapse', function(){
  let actives = $("#tbody-repositories tr.show");
  for (let i = 0; i < actives.length; i++) {
    actives.eq(i).removeClass('show');
  }
})