function searchButtons() {
            var input = document.getElementById('searchInput').value.toLowerCase(); // Valor do input de pesquisa
            var buttons = document.querySelectorAll('.Jogos'); // Seleciona todos os botões com a classe 'jogos'

            // Loop através de todos os botões
            buttons.forEach(function(button) {
                var buttonText = button.textContent.toLowerCase(); // Texto do botão em letras minúsculas

                // Verifica se o texto do botão contém a pesquisa
                if (buttonText.includes(input)) {
                    button.style.display = "block"; // Exibe o botão se a pesquisa corresponder
                } else {
                    button.style.display = "none"; // Oculta o botão se a pesquisa não corresponder
                }
            });
        }

        function searchOnEnter(event) {
            if (event.key === 'Enter') {
                searchButtons(); // Chama a função de pesquisa se a tecla "Enter" for pressionada
            }
        }