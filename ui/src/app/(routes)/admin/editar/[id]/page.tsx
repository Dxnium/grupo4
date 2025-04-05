import Editar from "@/app/components/Editar";

interface User {
  id: number;
  nombre: string;
  email: string;
  telefono: string;
  direccion: string;
  createdAt: string;
}

const getUser = async (id: string): Promise<User> => {
  try {
    const res: Response = await fetch("http://localhost:5000/usuarios/" + id);
    const data: User = await res.json();
    return data;
  } catch (error: unknown) {
    console.error("Error fetching user:", error);
    return {} as User;
  }
};

export default async function Page({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const user = await getUser(id);

  return <Editar user={user}/>;
}
