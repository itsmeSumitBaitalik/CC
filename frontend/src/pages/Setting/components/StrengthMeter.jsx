export default function StrengthMeter({ value }) {
  const safeValue = value || "";
  let score = 0;
  if (safeValue.length >= 8) score++;
  if (/[A-Z]/.test(safeValue)) score++;
  if (/[0-9]/.test(safeValue)) score++;
  if (/[^A-Za-z0-9]/.test(safeValue)) score++;
  const colors = ['#E05C3A', '#E05C3A', '#F5A623', '#4CAF50'];
  const labels = ['Very Weak', 'Weak', 'Good', 'Strong'];

  return (
    <div className="mt-2">
      <div className="flex gap-1.5">
        {[0, 1, 2, 3].map(i => (
          <div key={i} className="strength-bar" style={{ background: i < score ? colors[Math.max(0, score - 1)] : '#ddd' }}></div>
        ))}
      </div>
      <p className="text-xs font-black uppercase mt-1" style={{ color: score > 0 ? colors[Math.max(0, score - 1)] : '#999' }}>
        {safeValue.length === 0 ? 'Enter a password' : labels[Math.max(0, score - 1)]}
      </p>
    </div>
  );
}
