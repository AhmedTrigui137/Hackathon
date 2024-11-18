import ConflictMetrics from './dashboard/ConflictMetrics';
import ConflictList from './dashboard/ConflictList';
import CommunicationHealth from './dashboard/CommunicationHealth';
import { useConflictStore } from '../store/conflictStore'
import jsPDF from 'jspdf';

export default function Dashboard() {
  const conflicts = useConflictStore((state) => state.conflicts);
  const activeConflicts = useConflictStore((state) => state.getActiveConflicts());

  const metrics = {
    totalConflicts: conflicts.length,
    activeConflicts: activeConflicts.length,
    averageSeverity: activeConflicts.reduce((acc, curr) => acc + curr.severity, 0) / activeConflicts.length,
    resolutionRate: ((conflicts.length - activeConflicts.length) / conflicts.length) * 100,
  };

  const handleGenerateReport = () => {
    const doc = new jsPDF();
    let yOffset = 10; 
    // Title Section
    doc.setFontSize(18);
    doc.setTextColor(40, 44, 52); // Dark gray
    doc.text(' Conflict Management Report', 105, yOffset, { align: 'center' });
    yOffset += 10;
    
     // Subheading
    doc.setFontSize(12);
    doc.setTextColor(100);
    doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 105, yOffset, { align: 'center' });
    yOffset += 20;

    // Metrics Section
    doc.setFontSize(14);
    doc.setTextColor(40, 44, 52);
    doc.text('Metrics Overview', 10, yOffset);
    yOffset += 10;

    doc.setFontSize(12);
    doc.setTextColor(60, 60, 60);
    doc.text(`Total Conflicts: ${metrics.totalConflicts}`, 10, yOffset);
    yOffset += 8;
    doc.text(`Active Conflicts: ${metrics.activeConflicts}`, 10, yOffset);
    yOffset += 8;
    doc.text(`Average Severity: ${metrics.averageSeverity.toFixed(1)}`, 10, yOffset);
    yOffset += 8;
    doc.text(`Resolution Rate: ${metrics.resolutionRate.toFixed(1)}%`, 10, yOffset);
    yOffset += 15;

    // Separator Line
    doc.setDrawColor(200, 200, 200);
    doc.line(10, yOffset, 200, yOffset);
    yOffset += 10;

    // Active Conflicts Section
    doc.setFontSize(14);
    doc.setTextColor(40, 44, 52);
    doc.text(' Active Conflicts', 10, yOffset);
    yOffset += 10;

    conflicts.forEach((conflict, index) => {
      doc.setFontSize(12);
      doc.setTextColor(60, 60, 60);
      doc.setFont('helvetica', 'bold');
      doc.text(`Conflict ${index + 1}:`, 10, yOffset);
      yOffset += 8;
      
      doc.setFont('helvetica', 'normal');
      doc.text(`Department: ${conflict.department}`, 10, yOffset);
      yOffset += 6;
      doc.text(`Description: ${conflict.description}`, 10, yOffset);
      yOffset += 6;
      doc.text(`Status: ${conflict.status}`, 10, yOffset);
      yOffset += 6;
      doc.text(`Severity: ${conflict.severity}`, 10, yOffset);
      yOffset += 10;
      doc.setDrawColor(220, 220, 220);
      doc.line(15, yOffset, 200, yOffset);
      yOffset += 10;
    });
    doc.save('dashboard-report.pdf');
  };

  return (
    <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Conflict Management Dashboard</h1>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700" onClick={handleGenerateReport}>
            Generate Report
          </button>
        </div>
        
        <div id="dashboard-container" className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-6 mb-6">
            <ConflictMetrics />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ConflictList />
            <CommunicationHealth />
          </div>
        </div>
      </div>
    </main>
  );
}