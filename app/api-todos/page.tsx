import ApiTodoList from "./components/ApiTodoList";
import { getTasks } from "@/lib/tasks";

export default async function ApiTodosPage() {
  // Mengambil 10 data todo pertama dari API (Server-side fetching)
  const { tasks } = await getTasks({ limit: 10 });

  return (
    <main className="container mx-auto p-8 max-w-2xl">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">API Todos</h1>
        <p className="text-gray-500 mt-2">Menampilkan data Todo yang diambil langsung dari API DummyJSON.</p>
      </div>
      
      {/* Memanggil komponen ApiTodoList dan menyetorkan data dari API ke props initialTasks */}
      <ApiTodoList initialTasks={tasks} />
    </main>
  );
}
