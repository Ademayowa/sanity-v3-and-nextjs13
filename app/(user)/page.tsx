import { previewData } from 'next/headers';

export default function HomePage() {
  if (previewData()) {
    return <div>Preview Mode</div>;
  }

  return (
    <div>
      <h2>Not in preview mode</h2>
    </div>
  );
}
