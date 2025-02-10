export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/50 backdrop-blur-sm">
      <div className="size-32 animate-spin rounded-full border-y-2 border-gray-900 dark:border-gray-100"></div>
    </div>
  );
}
