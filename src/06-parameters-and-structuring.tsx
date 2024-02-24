interface UpdateUserProps {
  body: {
    name: string;
    email: string;
    password: string;
  };
  params: {
    id: number;
  };
}

function updateUserRoute({ body, params }: UpdateUserProps) {
  updateUserController({
    body: { name: body.name, email: body.email, password: body.password },
    params: { id: params.id },
  });
}

function updateUserController({ body, params }: UpdateUserProps) {
  userRepository.update({
    body: { name: body.name, email: body.email, password: body.password },
    params: { id: params.id },
  });
}

const userRepository = {
  update: ({
    body: { name, email, password },
    params: { id },
  }: UpdateUserProps) => {
    console.log(name, email, password, id);
  },
};
