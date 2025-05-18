import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  
  // Your existing Dashboard code...
  
  return (
    <div>
      {/* Your existing Dashboard UI */}
      
      <button
        onClick={() => navigate('/admin/annotator-selection')}
        className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg shadow-sm transition-colors duration-200"
      >
        Select Annotators
      </button>
    </div>
  );
}
export default Dashboard;