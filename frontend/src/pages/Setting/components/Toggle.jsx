import { useState } from "react";

export default function Toggle({ defaultOn = false, onChange }) {
  const [on, setOn] = useState(defaultOn);
  return (
    <div
      onClick={() => { setOn(!on); onChange && onChange(!on); }}
      className={`toggle-track ${on ? 'on' : ''}`}
    >
      <div className="toggle-thumb"></div>
    </div>
  );
}
