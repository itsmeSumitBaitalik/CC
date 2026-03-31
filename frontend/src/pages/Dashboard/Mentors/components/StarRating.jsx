export default function StarRating({ rating, max = 5 }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: max }).map((_, i) => (
        <span
          key={i}
          className={`${i < Math.floor(rating) ? 'star-filled' : 'star-empty'} material-symbols-outlined text-sm`}
          style={{ fontVariationSettings: `'FILL' ${i < Math.floor(rating) ? 1 : 0}` }}
        >
          star
        </span>
      ))}
    </div>
  );
}
