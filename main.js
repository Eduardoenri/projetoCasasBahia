       var slideIndex = 1;
      showDivs(slideIndex);
      
      function plusDivs(n) {
        showDivs(slideIndex += n);
      }
      
      function showDivs(n) {
        var i;
        var x = document.getElementsByClassName("mySlides");
        if (n > x.length) {slideIndex = 1}
        if (n < 1) {slideIndex = x.length}
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";  
        }
        x[slideIndex-1].style.display = "block";  
      }

      function clickCounter(produto) {
        console.log('produto', produto);
        var carrinhoProdutos = localStorage.getItem('produtos');
        if (!carrinhoProdutos) {
          carrinhoProdutos = []; // inicializa o storage de produtos
        } else {
          carrinhoProdutos = JSON.parse(carrinhoProdutos)
        }

        carrinhoProdutos.push(produto);

        if(typeof(Storage) !== "undefined") {
          if (localStorage.clickcount) {
            localStorage.setItem('clickcount', Number(localStorage.clickcount)+1);
            localStorage.setItem('produtos', JSON.stringify(carrinhoProdutos))
            localStorage.getItem("itens");
            document.querySelectorAll('#carrinho');
          } else {
            localStorage.setItem('clickcount', 1);
            localStorage.setItem('produtos', JSON.stringify(carrinhoProdutos))
          }
          document.getElementById("result").innerHTML = localStorage.clickcount;
        } else {
          
        }
      }

      function loadCarrinho() {
        document.getElementById('itens').innerHTML = localStorage.produtos;
        document.getElementsByClassName('lk3').innerHTML = localStorage.produtos;
        //document.getElementsByClassName('produtso').innerHTML = loadCarrinho;
      }
      



      function addProductToCartStorage(produto){
        var cartData = localStorage.getItem("cart");
        if (cartData) cartData = JSON.parse(cartData);

        cartData.push(produto);

        localStorage.setItem('cart', JSON.stringify(cartData));
      }

      function loadProductsInCartStorage() {
        var cartData = localStorage.getItem("cart");
        if (cartData) cartData = JSON.parse(cartData);
        return cartData;
      }

      console.log(loadProductsInCartStorage);

      function AddCarrinho(produto, qtd, valor, posicao)
	{
		localStorage.setItem("produto" + posicao, produto);
		localStorage.setItem("qtd" + posicao, qtd);
		valor = valor * qtd;
		localStorage.setItem("valor" + posicao, valor);
	}

