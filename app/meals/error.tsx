'use client';

export default function Error({ error }: { error: Error }) {
  return (
    <main className="error">
      <h1>An error occurred!</h1>
      <p>Error: {error.message}</p>
      <p>Failed to fetch meal data. Please try again later.</p>
    </main>
  );
}
