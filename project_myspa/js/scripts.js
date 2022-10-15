
let arr_ids_nav = [
    {
      id : "a_nav_employees",
      value : "employee"
    },
    {
      id : "a_nav_customers",
      value : "customer"
    },
    {
      id : "a_nav_halls",
      value : "hall"
    },
    {
      id : "a_nav_products",
      value : "product"
    },
    {
      id : "a_nav_branch_offices",
      value : "branch_office"
    },
    {
      id : "a_nav_treatments",
      value : "treatment"
    },
    {
      id : "a_nav_schedules",
      value : "schedule"
    },
    {
      id : "a_nav_services",
      value : "service"
    },
    {
      id : "a_nav_reservations",
      value : "reservation"
    }
];

function change_a_nav(i) {
  let previous_active = $(".active_management");
  for (let j = 0; j < previous_active.length; j++) {
    previous_active.eq(j).removeClass("active_management");
  }
  $("#" + arr_ids_nav[i].id).addClass("active_management");
  load_general_module(i);
}

function load_general_module(i){
    let general_module = "";
    switch (arr_ids_nav[i].value) {
        case "employee":
            general_module = "employee.html";
          break;
        case "customer":
            general_module = "customer.html";
          break;
        case "hall":
            general_module = "hall.html";
          break;
        case "product":
            general_module = "product.html";
          break;
        case "branch_office":
            general_module = "branch_office.html";
          break;
        case "treatment":
            general_module = "treatment.html";
          break;
        case "schedule":
            general_module = "schedule.html";
          break;
        case "service":
            general_module = "service.html";
          break;
        case "reservation":
            general_module = "reservation.html";
          break;
        default:
          break;
      }
    $.ajax(
        {
            "type" : "GET",
            "url" : "./modules/" + general_module,
            "async" : true
        }
    ).done(
        function(data)
        {
            $("#div_main_management").html(data);
        }
    );
}


let a_nav = [];
a_nav = $(".nav_management a");


for (let i = 0; i < a_nav.length; i++) {
  a_nav[i].addEventListener(
    "click",
    function () {
      change_a_nav(i);
    },
    false
  );
}


function inicializate() {
    load_general_module(0);
  // cargarUsuarioGestion(); actualizarListadoSalas();
}