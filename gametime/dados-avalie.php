<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rating System</title>
</head>
<body>
  <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
    <label for="nome">Seu nome:</label>
    <input type="text" id="nome" name="nome" required><br>
    <label for="avaliacao">Avaliação (de 1 a 5 estrelas):</label>
    <input type="number" id="avaliacao" name="avaliacao" min="1" max="5" required><br>
    <button type="submit">Enviar Avaliação</button>
  </form>

  <?php
  // Verifica se os dados foram enviados
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Conexão com o banco de dados
    $servername = "localhost";
    $username = "seu_usuario";
    $password = "sua_senha";
    $dbname = "avaliacoes";

    $conn = new mysqli($servername, $username, $password, $dbname);

    // Verifica a conexão
    if ($conn->connect_error) {
      die("Falha na conexão: " . $conn->connect_error);
    }

    $nome = $_POST['nome'];
    $avaliacao = $_POST['avaliacao'];

    // Prepara a instrução SQL para inserir os dados na tabela
    $sql = "INSERT INTO avaliacoes_estrelas (nome, avaliacao) VALUES ('$nome', $avaliacao)";

    if ($conn->query($sql) === TRUE) {
      echo "Avaliação enviada com sucesso!";
    } else {
      echo "Erro ao enviar a avaliação: " . $conn->error;
    }

    $conn->close();
  }
  ?>
</body>
</html>
