import React from 'react'

const Comapny = () => {
    const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axios.get('/api/company/dashboard');
        setTasks(res.data.tasks);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTasks();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Company Dashboard</h1>

      <section>
        <h2 className="text-xl mb-4">📋 Posted Tasks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tasks.map(task => (
            <div key={task._id} className="bg-gray-800 p-4 rounded">
              <h3 className="text-lg font-semibold">{task.title}</h3>
              <p>{task.description}</p>
              <p className="text-sm text-gray-400">Applicants: {task.applicants.length}</p>
              <button className="mt-2 bg-blue-600 px-3 py-1 rounded">View Applicants</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Comapny
