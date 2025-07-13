$(document).ready(function(){

  
  const defaultProducts = [
    { name: "Smartphone", category: "Electronics", image: "https://via.placeholder.com/150", details: "Latest model with high speed." },
    { name: "Jeans", category: "Clothing", image: "https://via.placeholder.com/150", details: "Comfortable and stylish." },
    { name: "Vacuum Cleaner", category: "Home", image: "https://via.placeholder.com/150", details: "Powerful suction for deep cleaning." },
  ];

  function renderProduct(product) {
    const card = $(`
      <div class="col-md-4 mb-4 product-card" data-category="${product.category}">
        <div class="card p-2">
          <img src="${product.image}" class="card-img-top" alt="${product.name}">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text"><strong>Category:</strong> ${product.category}</p>
            <button class="btn btn-info btn-sm view-details-btn">View Details</button>
            <button class="btn btn-danger btn-sm delete-btn">Delete</button>
            <div class="product-details mt-2">${product.details}</div>
          </div>
        </div>
      </div>
    `).hide();

    $("#productSection").append(card);
    card.slideDown();
    card.find(".card").draggable();
  }

  defaultProducts.forEach(renderProduct);


  $("#productForm").submit(function(e){
    e.preventDefault();
    const newProduct = {
      name: $("#productName").val(),
      category: $("#productCategory").val(),
      image: $("#productImage").val(),
      details: $("#productDetails").val()
    };
    renderProduct(newProduct);
    $("#addProductModal").modal('hide');
    this.reset();
  });

 
  $(".filter-btn").click(function(){
    const category = $(this).data('category');
    $(".product-card").each(function(){
      if(category === "All" || $(this).data('category') === category){
        $(this).fadeIn();
      } else {
        $(this).fadeOut();
      }
    });
  });


  function searchProducts() {
    const search = $("#searchBar").val().toLowerCase();
    $(".product-card").each(function () {
      const name = $(this).find(".card-title").text().toLowerCase();
      $(this).toggle(name.includes(search));
    });
  }

  $("#searchBar").on("keyup", searchProducts);
  $("#searchButton").click(searchProducts);

  $(document).on("click", ".delete-btn", function(){
    $(this).closest(".product-card")
      .animate({opacity: 0, height: 0}, 500, function(){
        $(this).remove();
      });
  });

  $(document).on("click", ".view-details-btn", function(){
    $(this).siblings(".product-details").slideToggle();
  });

  
$("#toggleProducts").click(function () {
  $("#productSection").slideToggle();

  const icon = $(this).find("i");
  const textSpan = $(this).find(".toggle-text");

  if ($("#productSection").is(":visible")) {
    icon.removeClass("fa-eye").addClass("fa-eye-slash");
    textSpan.text("Hide Products");
  } else {
    icon.removeClass("fa-eye-slash").addClass("fa-eye");
    textSpan.text("Show Products");
  }
});

});
