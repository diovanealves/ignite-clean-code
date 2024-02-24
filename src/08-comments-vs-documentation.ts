// Essa função tem o objetivo de registrar um novo usuário no banco.
async function register(data) {
  const { email, name, avatar } = data;

  if (!avatar) return { error: "avatar is required" };
  if (!name) return { error: "name is required" };

  const userEmailInUse = getUserByEmail(email);

  if (userEmailInUse) {
    return { error: "email already used" };
  }

  // Essa função realiza a conversão das imagens para JPG a fim de evitar erros de incompatibilidade.
  // Mais informações na issue https://github.com/rocketseat-education/example-repository/issues/1
  const imageConvertedToJPG = convertImageToJPG(avatar);

  // Cria o usuário no banco de dados
  const userCreated = await createUser({
    email,
    name,
    avatar: imageConvertedToJPG,
  });

  return { userCreated };
}
