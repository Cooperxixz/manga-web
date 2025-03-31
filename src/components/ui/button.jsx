export function Button({ children, className = '', ...props }) {
  return (
    <button
      className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl font-semibold ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
